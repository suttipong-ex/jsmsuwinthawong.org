import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShareComponent} from "./share.component";
import {FileUploadModule} from "ng2-file-upload";
import {HttpStatusBus} from "./http/HttpStatusBus";

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,

  ],
  declarations: [
    ShareComponent,

  ],
  entryComponents: [

  ],
  exports: [

  ],
  providers : [
    HttpStatusBus
  ]
})
export class ShareModule {
}
