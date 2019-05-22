import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import { AppComponent } from './app.component';
import { HospitalComponent } from './hospital/hospital.component';
import { DeparmentComponent } from './deparment/deparment.component';
import { HospitalServiceService } from './hospital-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    DeparmentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'hospital', pathMatch: 'full'},
      { path: 'hospital', component: HospitalComponent },
      { path: 'department', component: DeparmentComponent }
    ])
  ],
  providers: [HospitalServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
