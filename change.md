# 0.5.4

- Updated create_project to reflect new changes
- run following to create zen dash project 

  ```create_zen ~/Desktop/test```
# 0.5.3
- Simplified websocket 
- Added RenderPage exception tab number is missing

# 0.5.2
- Working websocket 
## Breaking change
- added new method of render page

# 0.5.1
- added websocket_calls and pydantic_class in Zen Page to support websocket

# 0.5.0
## Beta release Websocket
- working websocket for Box
- Added websocket management

# 0.4.22
- Added pythonic way creating html code
```python
from zen_dash import tag as t

NEWMETHOD = t.CENTER(childern=[
                         t.H1(childern=[
                                 'Welcome to ',
                                 t.U(
                                     style={'color': 'red'},
                                     childern=t.A(childern='Zen Dash', other_attributes={'href': 'https://github.com/Zen-Reportz/zen_dash'}))
                             ]
                         )
                     ])
```
will generate when you compile
```html
<center >
    <h1>Welcome to 
        <u style=" color:red;"  >
            <a href="https://github.com/Zen-Reportz/zen_dash" >Zen Dash</a>
        </u>
    </h1>
</center>
```

# 0.4.19
- Fixed double scrolls

# 0.4.18
- Fixed bug on Second sidebar
- allow no tabs

# 0.4.17
-  Button component submit can return result that can be useful for future communication.
-  Access submit button result using `{name}_result`

# 0.4.16
- added reactivity to input as well (Thank you  @dorjeys3)

# 0.4.14
- added license

# 0.4.13
- fixed deployment

# 0.4.12
- fixed bug on form reactivity issue (Thank you  @everettbergeson)
- Optional download button for Table, by default it is True

# 0.4.11
- table download button return comma seperated file rather than semi-colon seperated file
- input widgets will not call api if it is already loaded. 
- input widgets will lost data between page change

# 0.4.10
- added loading Snack Bar

# 0.4.9
- allow user to set retry count
- allow user to show or hide right sidebar using cookie
- fixed bug with form reactivity and submission

# 0.4.8
- Reactive support for form and button, following trigger name can be used. where name is name defined in form or button
    - `{name}_trigger`
    - `{name}_success`
    - `{name}_failed`
- Fixed misspellings
- Only call page's APIs not all pages's APIs.
- Table download csv option
- Raise error if first tab in Sidebar is SidebarGroup
- Fixed bug with Server filter

# 0.4.7
- Fixed side bar reactivity 

# 0.4.6
- Showing progress bar when submit

# 0.4.5
- integrated json form (https://jsonforms.io/) 
- create_project will create new project, venv, qa.sh, prod.sh and requirements.txt file
- due to async nature, if you use SidebarGroup, it is possible you will get page_0 or page_0_0 on default page. 

# 0.4.4
- fixed complied code

# 0.4.3
- Now subtab is allowed in sidebar

# 0.4.2
- added device_information in api call 

# 0.4.1
- width issue highchart
- fixed issue with reload

# 0.4.0
- fixed dialog box flex issue
- update Table such that you can pass items per page and items per page options 
- made more response between page change change. 
- if call fails, it attemps 5 time every 2000 milliseocnds

# 0.3.18
- fixed bug with global filters

# 0.3.17
- added button with action url call
- added central class to center checkbox, radio, slider, button toggle, toggle, simple filter, simple server filter, group filter, input, download, upload, button
- added validation for better experience regarding type and respective class

# 0.3.16
- fixed bug with refresh
- fixed bug with custom_html where it didnt refresh when click

# 0.3.15
- better working example of data table
- highchart stock and Highchart Map added
- mat icon fix
- async and deffer functionality added for loadExternalScript

# 0.3.14
- fixed complied issue

# 0.3.13
- ### Breakiing change updated CustomScript (remove style tag functionality and folded in link tag)
- fix bug with title rendiner in UI
- Data Table render using Custom HTML and CustomStript Functionality

# 0.3.12
- Fully Custom HTML (CSS, JS)

# 0.3.11
- Server side filter bug fix
- Custom HTML (CSS, JS) can be pass to render.

# 0.3.10
- Fixed issued complied 

# 0.3.9
- Breaking change: ToolTip response
- added dialog box to render page 

# 0.3.8
- allowd 5 min auto refresh

# 0.3.7
- added iframe
- allow refresh when fail 
- allow copy error when fail

# 0.3.6
- added tooltip
- added progressive bar during waiting for upload and download 
- fixed name issues with download 
- sending python library version to UI for print too

# 0.3.5
- Breaking change DownloadData, removed file name and added label
- Ability provide file name with FileResponse rather than InstanceType.DOWNLOAD
- Using LoadingComponent for sucess or failer of upload and download 
- adding ability to add reactivity with sucessful upload and download 

# 0.3.4
- fixed compilation issue

# 0.3.3
- fixed reactivity issue

# 0.3.2
- Fix bug regarding cache lookup

# 0.3.1
- Remove first_page_fragment from page

# 0.3.0
- allow service search to have seleced value
- stop calling backend moving between page wihtout chaning global filter
- BREAKING CHANGE:
    - SidebarTab object dont have fragmen key any more 
    - Tab will name incremenal order starting 0, example page_0, page_1...
    - backend will return data seperately between global filter and page filter for better isolation
    

# 0.2.12
- moved document id as seperate options

# 0.2.11
- added input selected value
- added toggle selected value
- added slider selected value
- added simple filter selected value
- added grouped filter selected value
- added ability to create document id when you refresh data

# 0.2.10
- fix bug with reacitve id
- added hidden functionality with reacitivity

# 0.2.9
- adjustable size of sizebar

# 0.2.8
- added support for events in highchart

# 0.2.7
- fixed index.html issue

# 0.2.6
- allowing functions to be passed in highchart
- allowing date object to be passed in highchart

# 0.2.5
- reduce optimization bailouts from 3 mb to 1kb

# 0.2.4
- fixed title service
- ability to upload custom js and style
- unified get url 
- unified get inputs


# 0.2.3
- remove fix path requirements.

# 0.2.2
- fixed url issue in frontend
- using entry point in list option.

# 0.2.1
- added divider in sidebar

# 0.2.0
- fix issue with button, group filter, simple server filter, slider

# 0.1.20
- fixed issue with server side filter
- update http method 

# 0.1.19
- added server side filtering for single select and multi select for simple filteres
- fix issue with refresh button 

# 0.1.18
- simplified http call
- unsubscribe if we make new call and old call is not yet responded

# 0.1.17
- Rrefresh button at bottom 

# 0.1.16
- fix issue with auto refresh

# 0.1.15
- Removed Flex from Instance. Now only it will supported from ReturnData

# 0.1.14
- High Chart included

# 0.1.13
- send file to server
- render image 

# 0.1.12
- updated angular to 14
- added search select rather than just select
- added sending file functionality

# 0.1.11
- updated reactivity to be full_reactive and on specific ids 
- flex as its own date

# 0.1.8
- No Card in side card for multi_list, multi_tabs, multi_expand

# 0.1.7
- Integrated static folder with package

# 0.1.6
- fix angular material icon issue

# 0.1.5
Slider can support Multi List , tab, expand

# 0.1.4
added
- multi list
- multi tabs
- multi expand 

# 0.1.3
- added reactivity

# 0.1.2
- toggle

# 0.1.1
Reorganizated UI to reuse component 
- radio 
- checkbox

# 0.1.0
- date time filter 
- single , muliti filter
- grouped single and multi filter
- boxed data
- table
- echart
