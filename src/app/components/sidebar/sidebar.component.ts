import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  public searchString : string;
  constructor(
    private _route : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  goSearch(){
    this._router.navigate(['/search', this.searchString]);
  }

}
