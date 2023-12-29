import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HeaderComponent } from '../components/header/header.component';
import { ContentComponent } from '../components/contents/content.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'header',
    loadChildren: () => import('../components/header/header.component').then( m => m.HeaderComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
