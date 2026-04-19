
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'start', component: StartComponent },
];


