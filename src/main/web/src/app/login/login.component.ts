/**
 * Created by exodus on 4/21/17.
 */
import {Component, OnInit} from "@angular/core";
@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls:['./login.component.ts']
})
export class LoginComponent implements OnInit{
    ngOnInit(): void {
        console.log('<< please login >>');
    }

}