import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class HospitalServiceService implements OnInit {
  hospital = new Subject();
  hospitals = [
    { hospitalname: 'KIMS', contactnumber: '9632587410' },
    { hospitalname: 'CSI Mission Hospital', contactnumber: '9685321470' }
];
  departments = [
    { departmentname: 'nephrology', head: 'Dr. A P Kulashekhar',
  contactnumber: '9876543210', hospitalname: 'KIMS' },
  { departmentname: 'neurology', head: 'Dr.B Raj Kumar',
  contactnumber: '9876543210', hospitalname: 'KIMS' },
  { departmentname: 'cardiology', head: 'Dr. L Sri Devi',
  contactnumber: '9876543210', hospitalname: 'KIMS' },
  { departmentname: 'ENT', head: 'Dr. K Ram Prasad',
  contactnumber: '9876543210', hospitalname: 'CSI Mission Hospital' },
  { departmentname: 'opthalmology', head: 'Dr. J Sirisha',
  contactnumber: '9876543210', hospitalname: 'CSI Mission Hospital' }
];
listOfHospital = [];
ngOnInit() {
}
  constructor(private router: Router) { }
  getListOfAllHospital() {
    return this.hospitals;
  }
  displaySingleService(name: string) {
    this.listOfHospital = this.departments.filter(
      (depart) => {
        return depart.hospitalname === name;
      }
      );
      console.log(this.listOfHospital);
     this.router.navigate(['/department']);
  }
  getShoretdListHospital() {
    return this.listOfHospital;
  }

}
