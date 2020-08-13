import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as Feather from 'feather-icons';

@Component({
  selector: 'sty-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit, AfterViewInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    Feather.replace();
  }
}
