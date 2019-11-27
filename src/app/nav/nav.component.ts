import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // assigning appTitle for use in nav template
  appTitle = 'URL Validator';

  constructor() { }

  // lifecycle hook for angular
  ngOnInit() {
  }

}
