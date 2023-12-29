import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private apiUrl = 'https://smarty.kerzz.com:4004/api/mock/getFeed';

    constructor(
        private http: HttpClient,
        private configService: ConfigService
    ) { }

    getNearbyPlace(parameters: any) {
        const apiKey = this.configService.getApiKey(); // get apikey config service
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'apiKey': apiKey
        });
        return this.http.post(this.apiUrl, parameters, { headers: headers })
    }
}