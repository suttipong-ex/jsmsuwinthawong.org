import { Component, OnInit } from '@angular/core';
// import {User} from "../share/user";
// import {AuthenService} from "../share/security/authen.service";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  dropDown:boolean=false;
  dropDownClass:string='nav-item dropdown';
  ngOnInit() {
    // this.authen.user.subscribe(user => this.user = user);
  }

  dropDownAction(){
    this.dropDown = !this.dropDown;
    if(this.dropDown){
      this.dropDownClass = 'nav-item dropdown open';
    }
    else{
      this.dropDownClass = 'nav-item dropdown';
    }
  }

}
