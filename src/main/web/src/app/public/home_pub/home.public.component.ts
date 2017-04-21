import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home-public',
  templateUrl: './home.public.component.html',
  styleUrls: ['./home.public.component.css']
})
export class HomePublicComponent implements OnInit {

  constructor( public modalService: NgbModal) { }

  ngOnInit() {
  }
  openDownLoad(){
  }
}
