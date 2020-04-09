import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuleApi } from '../api/module.api';
import { AcadYear, ModuleCode, Module, ModuleCondensed, ModuleData } from '../../../interfaces/common/module';

@Injectable()
export class ModuleSerive extends ModuleData {

  constructor(private api: ModuleApi) {
    super();
  }

  getModuleInfo(acadYear: AcadYear, moduleCode: ModuleCode): Observable<Module> {
    return this.api.getModuleInfo(acadYear, moduleCode);
  };

  getAllModule(acadYear: AcadYear): Observable<Module[]> {
    return this.api.getAllModule(acadYear);
  }

  getAllModuleCondensed(acadYear: AcadYear): Observable<ModuleCondensed[]> {
    return this.api.getAllModuleCondensed(acadYear);
  }
}
