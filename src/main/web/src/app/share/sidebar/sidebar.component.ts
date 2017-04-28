import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import "rxjs/add/operator/filter";
import {Http} from "@angular/http";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
// import {AuthenService} from "../share/security/authen.service";
// import {SidebarReload} from "./sidebar-reload";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal){}

  @Input()
  public adminMenu:boolean;

  ngOnInit() {
    console.log('console .xx.',this.adminMenu);
  }
}
