import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home-privte',
  templateUrl: './home.private.component.html',
  styleUrls: ['./home.private.component.css']
})
export class HomePrivateComponent implements OnInit {

  constructor( public modalService: NgbModal) { }

  ngOnInit() {
  }
  openDownLoad(){
  }
}
