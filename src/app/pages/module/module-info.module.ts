import { NgModule } from '@angular/core'; 
import { ModuleComponent } from './module.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { TooltipModule } from "ngx-tooltip";

@NgModule({
  imports: [
    NgxGraphModule,
    TooltipModule,
  ],
  declarations: [ModuleComponent],
})
export class ModuleInfoModule { }
