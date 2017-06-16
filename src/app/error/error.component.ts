import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private _router: Router) { }

  cancel(){
    this._router.navigate(['']);
  }

  ngOnInit() {
  }

}
