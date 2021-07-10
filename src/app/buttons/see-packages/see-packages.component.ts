import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-see-packages',
  templateUrl: './see-packages.component.html',
  styleUrls: ['./see-packages.component.scss'],
})
export class SeePackagesComponent implements OnInit {
  text = 'SEE OUR PACKAGES';

  constructor() {}

  ngOnInit(): void {}

  scrollToPackages(): void {
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
  }
}
