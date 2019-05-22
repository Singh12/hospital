import { Component, OnInit } from '@angular/core';
import { HospitalServiceService } from '../hospital-service.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  hospitals = [];
  constructor(private hospitalList: HospitalServiceService) { }

  ngOnInit() {
    this.hospitals = this.hospitalList.getListOfAllHospital();
    console.log(this.hospitals);
  }
  showView(name: string) {
    this.hospitalList.displaySingleService(name);
  }
  shortArray() {
    function compareDepartment(a, b) {
      console.log(a, b);
      const hospitalnameFirst = a.hospitalname.toUpperCase();
      const hospitalnameSecond = b.hospitalname.toUpperCase();
      let comparison = 0;
      if (hospitalnameFirst > hospitalnameSecond) {
        comparison = 1;
      } else if (hospitalnameFirst < hospitalnameSecond) {
        comparison = -1;
      }
      return comparison;
    }
    console.log(this.hospitals);
    this.hospitals = this.hospitals.sort(compareDepartment);
  }
}
