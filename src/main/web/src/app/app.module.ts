import {BrowserModule} from "@angular/platform-browser";
import {NgModule, LOCALE_ID} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HomePublicComponent} from "./public/home_pub/home.public.component";
import {INTERCEPT_HTTP_PROVIDERS} from "./share/http/intercept_http";
import {TopbarComponent} from "./topbar/topbar.component";
import {SidebarComponent} from "./share/sidebar/sidebar.component";
import {HttpModule} from "@angular/http";
import {ShareModule} from "./share/share.module";


const appRoutes: Routes = [
  {path: '', component: HomePublicComponent}
];

@NgModule({
  providers: [
    {provide: LOCALE_ID, useValue: 'th-TH'},
    INTERCEPT_HTTP_PROVIDERS
  ],
  declarations: [
    AppComponent,
    HomePublicComponent,
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ShareModule,
    RouterModule.forRoot(appRoutes, {useHash: true,preloadingStrategy: PreloadAllModules}),
    NgbModule.forRoot()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
