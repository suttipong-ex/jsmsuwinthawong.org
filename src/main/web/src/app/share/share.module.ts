import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShareComponent} from "./share.component";
import {FileUploadModule} from "ng2-file-upload";
import {HttpStatusBus} from "./http/HttpStatusBus";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,

  ],
  declarations: [
    ShareComponent,
    SidebarComponent

  ],
  entryComponents: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  providers : [
    HttpStatusBus,
    SidebarComponent,
    NgbActiveModal
  ]
})
export class ShareModule {
}
