import {Component, OnDestroy, OnInit} from '@angular/core';
import * as moment from "moment";
import {HttpStatusBus} from "./share/http/HttpStatusBus";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  httpRequestCompleted: boolean = false;

  ngOnDestroy(): void {
  }

  constructor(private httpStatus: HttpStatusBus){
    httpStatus.start.subscribe(v => {
      this.httpRequestCompleted = false;
      // console.log(`start request http -> ${v}`)
    });
    httpStatus.completed.subscribe(v => {
      this.httpRequestCompleted = true;
      // console.log(`completed http request ${v}`)
    });
    httpStatus.error.subscribe(v => {
      this.httpRequestCompleted = true;
      // console.log('------------->' + JSON.stringify(v.json()));
      // console.log(`error ${v}`)
    });
  }
  ngOnInit(): void {
    Date.prototype.toISOString = function () {
      return moment(this).format('YYYY-MM-DDTHH:mm:ss');
    };
    Date.prototype.toString = function () {
      return moment(this).format('YYYY-MM-DDTHH:mm:ss');
    };
  }
}
