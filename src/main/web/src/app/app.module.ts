import {BrowserModule} from "@angular/platform-browser";
import {NgModule, LOCALE_ID} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HomePublicComponent} from "./public/home_pub/home.public.component";
import {ShareModule} from "./share/share.module";


const appRoutes: Routes = [
  {path: '', component: HomePublicComponent}
];

@NgModule({
  providers: [
    {provide: LOCALE_ID, useValue: 'th-TH'},
  ],
  declarations: [
    AppComponent,
    HomePublicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true,preloadingStrategy: PreloadAllModules}),
    NgbModule.forRoot(),
    ShareModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
