import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})



export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
const routes: Routes = [
  { path: '', component: ServiceComponent }
];
