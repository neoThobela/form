/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-toolbar',
  templateUrl: './toolbar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class toolbarComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_xT6v5n0J6G3kpy2h(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xT6v5n0J6G3kpy2h(bh) {
    try {
      bh = this.sd_xcdrHcByqgWHv4Ra(bh);
      //appendnew_next_sd_xT6v5n0J6G3kpy2h
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xT6v5n0J6G3kpy2h');
    }
  }

  //appendnew_flow_toolbarComponent_start

  sd_xcdrHcByqgWHv4Ra(bh) {
    try {
      this.page.toolItems = [];
      bh = this.sd_uqauoJGDzzUHeNjJ(bh);
      //appendnew_next_sd_xcdrHcByqgWHv4Ra
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xcdrHcByqgWHv4Ra');
    }
  }

  sd_uqauoJGDzzUHeNjJ(bh) {
    try {
      const page = this.page;
      page.toolItems = ['About Us', 'Services', 'Contact Us'];
      //appendnew_next_sd_uqauoJGDzzUHeNjJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uqauoJGDzzUHeNjJ');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_toolbarComponent_Catch
}
