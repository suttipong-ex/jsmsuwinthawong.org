import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
/**
 * Created by exodus on 4/22/17.
 */
@Injectable()
export class HttpStatusBus {
    start: Subject<any> = new Subject<any>();
    completed: Subject<any> = new Subject<any>();
    error: Subject<any> = new Subject<any>();
}