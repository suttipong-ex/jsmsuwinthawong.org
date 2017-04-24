/**
 * Created by pramoth on 10/25/2016 AD.
 */
import {Injectable, Inject} from "@angular/core";
import {
  Http,
  Request,
  RequestOptionsArgs,
  Response,
  RequestOptions,
  ConnectionBackend,
  Headers,
  XHRBackend
} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {HttpStatusBus} from "./HttpStatusBus";

@Injectable()
export class InterceptHttp extends Http {
  constructor(@Inject(ConnectionBackend) backend: ConnectionBackend,
              @Inject(RequestOptions) defaultOptions: RequestOptions,
              @Inject(HttpStatusBus) private httpStatusBus: HttpStatusBus) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    this.httpStatusBus.start.next(url);
    return this.intercept(super.request(url, options));
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.httpStatusBus.start.next(url);
    return this.intercept(super.get(url, options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.httpStatusBus.start.next(url);
    return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.httpStatusBus.start.next(url);
    return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.httpStatusBus.start.next(url);
    return this.intercept(super.delete(url, options));
  }

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this.httpStatusBus.start.next(url);
    return this.intercept(super.patch(url, body, options));
  }

  head(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this.httpStatusBus.start.next(url);
    return this.intercept(super.head(url, options));
  }

  getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    return options;
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    return new Observable<Response>((responseObserver: Observer<Response>) => {
      observable.subscribe((value)=> {
        this.httpStatusBus.completed.next(value);
        responseObserver.next(value);
      }, (error)=> {
        this.httpStatusBus.error.next(error);
        try{
          responseObserver.error(error);
        }catch(e){
          console.log(e);
        }
      }, ()=> {
        responseObserver.complete();
      });
    });
  }
}

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, bus: HttpStatusBus): Http {
  return new InterceptHttp(xhrBackend, requestOptions, bus);
}
export const INTERCEPT_HTTP_PROVIDERS = [
  HttpStatusBus,
  {
    provide: InterceptHttp,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions, HttpStatusBus]
  }
]
