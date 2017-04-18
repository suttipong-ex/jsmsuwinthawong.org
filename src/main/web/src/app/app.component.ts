import {Component, OnDestroy, OnInit} from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
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
