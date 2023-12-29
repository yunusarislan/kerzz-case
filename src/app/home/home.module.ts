import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { ContentComponent } from '../components/contents/content.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage,HeaderComponent,SearchBarComponent,ContentComponent]
})
export class HomePageModule {}
