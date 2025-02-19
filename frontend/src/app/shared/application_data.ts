import { Optional } from "@angular/core"

export class MEData {
  key!: string
  value!: any
  page!: string
  url!: string
}

export class CustomScript{
  url: string | undefined
  text: string | undefined
  type!: string
  rel!: string | undefined
  async!: boolean
  defer!: boolean

}

export class CustomScripts {
  scripts!: CustomScript[]
}


export class FlexData{
  fxFlex!: string
  fxFlex_md!: string
  fxFlex_sm!: string
  fxFlex_xs!: string
}

export class SidebarTab {
  label!: string;
  icon!: string;
}

export class Filter {
  url!: string;

}

export class SidebarGroup{
  name!:string
  subtabs!: SidebarTab[]
}

export class SidebarData{
  tabs!: SidebarTab[] | SidebarGroup[]
  filters!: Filter[]
  size!: string
  library_version!: string
}



export class Instance{
  url!: string

}

export class Row{
  data!: Instance[]
  layoutGap!: string
}

export class Page{
  rows!: Row[]
}


export class BoxData{
  icon!: string
  name!: string
  value!: string
}

export class DateData{
  name!: string
  first_date!: string
  second_date!: string | null
}

export class TableData{
  columns!: TableColumn[]
  data!: Map<string, any>[]
  name!: string
  items_per_page_options!: number[]
  items_per_page!: number
  allow_download!: boolean
}

export interface TableColumn{
   columnDef:string;
   header:string
}


export class CheckboxInstance{
  name!: string;
  selected!: boolean;
}

export class CheckboxData{
  data!: CheckboxInstance[]
  style!: string;
  name!: string;

}


export class  RadioData{
  data!: string[];
  style!: string;
  name!: string;
  selected!: string;

}

export class  ChartData{
  name!: string;
  data!: any
}

export class ButtonToggleInstance {
  name!: string
  selected!: boolean
}
export class ButtonToggleData{
  data!: ButtonToggleInstance[]
  name!: string
  multi!: boolean

}

export class ToggleData{
  name!: string
  checked!: boolean
}

export class SliderData{
  name!: string
  max!: number
  min!: number
  step!: number
  thumbLabel!: boolean
  invert!: boolean
  vertical!: boolean
  value: number| undefined
}



export class GroupedFilterDataInstance{
  group_name!: string
  group_data!: string[]

}

export class GroupFilterData{
  multi!: boolean
  name!: string
  url: string | undefined
  data!: GroupedFilterDataInstance[]
  selected!: string[]
}

export class SimpleFilterData{
  multi!: boolean
  name!: string
  data!: string[]
  selected!: string[]
}


export class SimpleServerFilterData{
  multi!: boolean
  name!: string
  data!: string[]
  url!: string
  selected!: string[]

}

export class MultiURLInfo{
  name: string | undefined
  with_card!: boolean
  url!: string
}
export class MultiData {
  urls!: MultiURLInfo[]
}

export class HiddenData {
  id!: string
  condition!: string
}

export class ReactiveData {
  full_reactive!: boolean
  reactive_ids!: string[]
  hidden!: boolean
}

export class InputData {
  label: string | undefined
  name!: string
  value: string | undefined
}

export class DownloadData{
  label!: string
  url!: string
  name!: string
}

export class DataImage{
    url!: string
    height!: string
    width!: string
}

export class UploadData{
    url!: string
    multi!: boolean
    name!: string
}

export class HighChartData {
  type!: string
  config!:  any
}

export class IframeData {
  url!: string
  width!: string
  height!: string
}

export class CustomHTML {
  html!: string
  name!: string
  full_custom!: boolean
  script!: string | undefined
}

export class ButtonData {
  url!: string
  name!: string
}

export class SubmitFormData{
  name!: string
  url!: string
}

export class FormCustomData {
  name!: string
  submit_info!: SubmitFormData
  form_schema!: any
  ui_schema!: any
  data!: any
}

export class ResponseData{
  type!: string
  reactive!: ReactiveData
  title: string | undefined
  chart_data:  ChartData |   undefined
  simple_filter_data: SimpleFilterData | undefined
  simple_server_filter_data: SimpleServerFilterData | undefined
  group_filter_data:  GroupFilterData | undefined
  box_data: BoxData | undefined
  date_data: DateData | undefined
  checkbox_data: CheckboxData | undefined
  radio_data: RadioData | undefined
  slider_data: SliderData | undefined
  button_toggle_data: ButtonToggleData | undefined
  table_data: TableData | undefined
  toggle_data: ToggleData | undefined
  multi_data: MultiData | undefined
  input_data: InputData | undefined
  download_data: DownloadData | undefined
  upload_data: UploadData | undefined
  image_data: DataImage | undefined
  highchart_data: HighChartData | undefined
  iframe_data: IframeData | undefined
  custom_html_data: CustomHTML | undefined
  button_data: ButtonData | undefined
  footer: string | undefined
  flex: FlexData | undefined
  tooltip_data: ToolTipData | undefined
  dialog_data: DialogData | undefined
  form_data: FormCustomData | undefined
  websocket_url: string | undefined
}


export class UpdateReturnData{
  type!: string
  simple_fitler_data: string[] | undefined
  box_data: BoxData | undefined
  button_result: string | undefined
}

export class ToolTipData {
  label!: string
}

export class DialogData {
  url!: string
  width!: string
  height!: string
}

export class FailedCall {
  message!: string
}

export class CallingCall {

}

export class ResponseReturn {
  t: ResponseData | undefined
  message: string | undefined
  calling: boolean | undefined
  lookup!: string
}

export class CallInfo{
  forced!:boolean
  url!:string
  look_up!: string
  page!: string
  isSidebar!: boolean
}
