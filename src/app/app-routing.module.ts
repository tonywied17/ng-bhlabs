import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component'; 
import { AboutComponent } from './_components/about/about.component';
import { ContactComponent } from './_components/contact/contact.component';
import { PhalanxComponent } from './_components/phalanx/phalanx.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'phalanx', component: PhalanxComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
