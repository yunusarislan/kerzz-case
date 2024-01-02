import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DistanceService } from 'src/app/services/distance.service';




@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  placesData: any[] = [];
  workingHours: any[] = [];
  errors: string | undefined;
  loading = false;
  skip = 0;
  limit = 10;
  distance: number | undefined;
  storeLatitude: any;
  storeLongitude: any;
  parameter = {
    skip: 0,
    limit: 10,
    latitude: 0,
    longitude: 0
  }

  constructor(
    private apiService: ApiService,
    private distanceService: DistanceService,
  ) { }

  

 async ngOnInit() {
  this.getCurrentLocation()  
  }

  async getCurrentLocation() {
    window.navigator.geolocation.getCurrentPosition((position)=>{
      this.parameter.latitude  = position.coords.latitude
      this.parameter.longitude  = position.coords.longitude
      this.loadMorePlace()
    })

  }

  loadMorePlace(event?: any) {
    this.loading = true;
    this.parameter.limit = this.limit;
    this.parameter.skip = this.skip;
    setTimeout(() => {
      // get data
      this.apiService.getNearbyPlace(this.parameter).subscribe(
        {
          next: (data: any) => {
            data.response.forEach((element: any) => {
              element["distance"] = this.getDistance(element) // calculating distance between current position and store position
            });
            this.placesData = [...this.placesData, ...data.response]; // push data in array
            this.skip += this.limit;
            this.loading = false;
            // infinite-scroll completed
            if (event) {
              event.target.complete();
            }
          },
          error: (error: any) => {
            this.errors = error;
            this.loading = false;
            if (event) {
              event.target.complete();
            }
          },
        });
    }, 1500);
  }

  getImageUrl(image: any): string {
    return image.base64;
  }

  getWorkingHoursStatus(workingHour: any): string {
    return workingHour.closed ? 'İşletme Kapalı' : 'İşletme Açık';
  }

  getDistance(data: any) {
    this.distance = this.distanceService.calculateDistance(
      this.parameter.latitude,
      this.parameter.longitude,
      data.storeInfo.geoLocation.latitude,
      data.storeInfo.geoLocation.longitude
    );
    this.distance = Math.floor(this.distance) // rounded process
    return this.distance
  }
}



