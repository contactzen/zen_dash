import {
  ButtonToggleData,
  CheckboxData,
  DateData,
  GroupFilterData,
  InputData,
  RadioData,
  ResponseReturn,
  SimpleFilterData,
  SimpleServerFilterData,
  SliderData,
  ToggleData,
} from './../shared/application_data';
import { Injectable, EventEmitter } from '@angular/core';
import { MEData, ResponseData, SidebarData } from '../shared/application_data';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  side_data!: SidebarData;
  defaul_page: string = 'page_0'
  data_state!: number


  all_input = new Map<string, ResponseData>();
  input_emitter = new EventEmitter<ResponseReturn>();

  data:any = {
    "global":{
      "device_information": ["device_information", {
        "browser": navigator.userAgent,
        "screen_info": {"height": screen.availHeight, "width": screen.availWidth}
      }]
    }
  };

  data_setter = new EventEmitter<MEData>();
  refresh = new EventEmitter<string>();


  reset_path(activatedRoute: any){
    let page = this.get_page();

    let queryParams: Params = {};
    queryParams = { page: page[0] };

    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);

    if (params.get('document_id') !== null) {
      if (params.get('page') !== null) {
        this.router.navigate([], {
          relativeTo: activatedRoute,
          queryParams: { page: params.get('page') },
        });
      } else {
        this.router.navigate([], {
          relativeTo: activatedRoute,
          queryParams: {},
        });
      }
    }
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    (window as { [key: string]: any })['data_service'] = this;
    (window as { [key: string]: any })['data_service_get_page'] = this.get_page;
    (window as { [key: string]: any })['data_service_get_all'] = this.get_all;


    this.data_setter.subscribe((t) => {
      console.log(t)
      this.reset_path(activatedRoute)


      if (this.data[t.page] === undefined) {
        this.data[t.page] = {};
      }


      this.data[t.page][t.url] = [t.key, t.value];

    });
  }

  get_page() {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    let page = 'page_0';
    if (params.get('page') !== null) {
      page = params.get('page') as string;
    } else {
      page = this.defaul_page;
    }

    return page;
  }

  get_data(page: string, key: string) {
    if (this.data[page] !== undefined) {
      return this.data[page][key];
    }
    return undefined;
  }

  get_all() {
    let page : string
    try {
      page = this.get_page();
    } catch {
      page = (window as { [key: string]: any })['data_service_get_page']()
    }


    let convMap: any = {};

    let page_data: any
    try {
       page_data = this.data[page] ?? {};

    } catch {
      page_data =  (window as { [key: string]: any })['data_service']['data'][page] ?? {};
    }

    Object.entries(page_data).forEach(([key, value]) => {
      let d: any = value;
      convMap[d[0]] = d[1];
    });

    let global: any
    try {
      global = this.data["global"] ?? {};
    } catch {
      global =  (window as { [key: string]: any })['data_service']['data']["global"] ?? {};
    }


    Object.entries(global).forEach(([key, value]) => {
      if (key === 'page') {
        convMap[key] = value;
      } else {
        let d: any = value;
        convMap[d[0]] = d[1];
      }
    });

    return convMap;
  }

  get_input_data(url: string) {
    return this.all_input.get(url);
  }

  set_data(page: string, key: string, value: any) {
    if (this.data[page] === undefined) {
      this.data[page] = {};
    }
    this.data[page][key] = value;
  }

  input_lookup(page: string, url: string) {
    return url + '$ZenLookup$' + page;
  }

  trueTypeOf(obj: any) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }

  dataLookup(isSidebar: boolean) {
    if (isSidebar) {
      return 'global';
    } else {
      return this.get_page();
    }
  }




  save_instance(input_data: ResponseData, value: any, url: string) {
    switch (input_data.type) {
      case 'date':
        let date_data = input_data.date_data as DateData;
        if (date_data.second_date as string) {
          date_data.first_date = value[0];
          date_data.second_date = value[1];
        } else {
          date_data.first_date = value;
        }
        input_data.date_data = date_data;
        this.all_input.set(url, input_data);

        break;
      case 'radio':
        let radio_data = input_data.radio_data as RadioData;
        radio_data.selected = value;
        input_data.radio_data = radio_data;
        this.all_input.set(url, input_data);
        break;
      case 'checkbox':
        let checkbox_data = input_data.checkbox_data as CheckboxData;
        checkbox_data.data = value;
        input_data.checkbox_data = checkbox_data;
        this.all_input.set(url, input_data);
        break;
      case 'slider':
        let slider_data = input_data.slider_data as SliderData;
        slider_data.value = value;
        input_data.slider_data = slider_data;
        this.all_input.set(url, input_data);
        break;
      case 'button_toggle':
        let button_toggle = input_data.button_toggle_data as ButtonToggleData;
        if (button_toggle.multi) {
          for (let d of button_toggle.data) {
            if (value.indexOf(d.name) === -1) {
              d.selected = false;
            } else {
              d.selected = true;
            }
          }
        } else {
          for (let d of button_toggle.data) {
            if (d.name === value) {
              d.selected = true;
            } else {
              d.selected = false;
            }
          }
        }
        input_data.button_toggle_data = button_toggle;
        this.all_input.set(url, input_data);

        break;
      case 'toggle':
        let toggle_data = input_data.toggle_data as ToggleData;
        toggle_data.checked = value;
        input_data.toggle_data = toggle_data;
        this.all_input.set(url, input_data);

        break;
      // case 'multi_list':
      //   this.multi_url = input_data.multi_data?.urls as MultiURLInfo[];
      //   break;
      // case 'multi_tabs':
      //   this.multi_url = input_data.multi_data?.urls as MultiURLInfo[];
      //   break;
      // case 'multi_expand':
      //   this.multi_url = input_data.multi_data?.urls as MultiURLInfo[];
      //   break;
      case 'simple_filter':
        let simple_filter_data =
          input_data.simple_filter_data as SimpleFilterData;
        if (simple_filter_data.multi) {
          simple_filter_data.selected = value;
        } else {
          simple_filter_data.selected = [value];
        }
        input_data.simple_filter_data = simple_filter_data;
        this.all_input.set(url, input_data);

        break;
      case 'simple_server_filter':
        let simple_server_filter =
          input_data.simple_server_filter_data as SimpleServerFilterData;
        if (simple_server_filter.multi) {
          simple_server_filter.selected = value;
        } else {
          simple_server_filter.selected = [value];
        }
        input_data.simple_server_filter_data = simple_server_filter;
        this.all_input.set(url, input_data);
        break;
      case 'group_filter':
        let group_filer = input_data.group_filter_data as GroupFilterData;
        if (group_filer.multi) {
          group_filer.selected = value;
        } else {
          group_filer.selected = [value];
        }
        input_data.group_filter_data = group_filer;
        this.all_input.set(url, input_data);
        break;
      case 'input':
        let input = input_data.input_data as InputData;
        input.value = value;
        input_data.input_data = input;
        this.all_input.set(url, input_data);

        break;
      // case 'download':
      //   break;
      // case 'upload':
      //   break;
      // case 'image':
      //   break;
      // case 'highchart':
      //   break;
      default:
        console.error(input_data.type);
    }
  }

  save_default() {
    let page = this.get_page();
    for (const [url, value] of Object.entries(this.data['global'])) {
      // console.log(url + value)
      try {
        if (url !== 'page') {
          let d: any = value;
          let dd = this.all_input.get(url) as ResponseData;
          this.save_instance(dd, d[1], url);
        }
      } catch {}

    }
    try {
      for (const [url, value] of Object.entries(this.data[page])) {
        let d: any = value;
        let dd = this.all_input.get(url) as ResponseData;
        this.save_instance(dd, d[1], url);
      }
    } catch {}
  }

  isFullCustom(url: string){
    if (this.all_input.get(url)?.custom_html_data?.full_custom == undefined){
      return false
    } else {
      return this.all_input.get(url)?.custom_html_data?.full_custom
    }
  }

   makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

}
