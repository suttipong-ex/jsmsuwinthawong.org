import {BrowserModule} from "@angular/platform-browser";
import {NgModule, LOCALE_ID} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HomeComponent} from "./private/home/home.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  providers: [
    {provide: LOCALE_ID, useValue: 'th-TH'},
  ],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true,preloadingStrategy: PreloadAllModules}),
    NgbModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
