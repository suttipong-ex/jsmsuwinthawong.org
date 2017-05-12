import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalOptions, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {SidebarComponent} from "../share/sidebar/sidebar.component";
import {User} from "firebase/app";
// import {User} from "../share/user";
// import {AuthenService} from "../share/security/authen.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
private User : string = null;
constructor(private modalService : NgbModal){}
  clickOpen : boolean = false;
  dropDown:boolean=false;
  dropDownClass:string='nav-item dropdown';

  ngOnInit() {
    // this.authen.user.subscribe(user => this.user = user);
  }

  dropDownAction():void{
    this.dropDown = !this.dropDown;
    if(this.dropDown){
      this.dropDownClass = 'nav-item dropdown open';
    }
    else{
      this.dropDownClass = 'nav-item dropdown';
    }
  }
  showAdminMenu():void{
    this.clickOpen = !this.clickOpen;
    let option: NgbModalOptions = {size: 'sm'};
    const ngbModal :NgbModalRef = this.modalService.open(SidebarComponent,option)
    if(this.clickOpen){
      ngbModal.componentInstance.adminMenu = true;
    }else{
      ngbModal.componentInstance.adminMenu = false;
    }

  }
}
