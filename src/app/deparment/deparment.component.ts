import { Component, OnInit } from '@angular/core';
import { HospitalServiceService } from '../hospital-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deparment',
  templateUrl: './deparment.component.html',
  styleUrls: ['./deparment.component.css']
})
export class DeparmentComponent implements OnInit {
hospitalList = [];
listEmpty: boolean;
  constructor(private hospitalService: HospitalServiceService, private router: Router) { }

  ngOnInit() {
    this.hospitalList = this.hospitalService.getShoretdListHospital();
  }
  shortArray() {
    function compareDepartment(a, b) {
      const departmentnameFirst = a.departmentname.toUpperCase();
      const departmentnameSecond = b.departmentname.toUpperCase();
      let comparison = 0;
      if (departmentnameFirst > departmentnameSecond) {
        comparison = 1;
      } else if (departmentnameFirst < departmentnameSecond) {
        comparison = -1;
      }
      return comparison;
    }

    this.hospitalList = this.hospitalList.sort(compareDepartment);
  }
}
