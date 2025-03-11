"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[5086],{"./packages/block-editor/src/components/resolution-tool/stories/index.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),panel=__webpack_require__("./packages/components/build-module/panel/index.js"),component=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel/component.js"),tools_panel_item_component=__webpack_require__("./packages/components/build-module/tools-panel/tools-panel-item/component.js"),select_control=__webpack_require__("./packages/components/build-module/select-control/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_SIZE_OPTIONS=[{label:(0,build_module._x)("Thumbnail","Image size option for resolution control"),value:"thumbnail"},{label:(0,build_module._x)("Medium","Image size option for resolution control"),value:"medium"},{label:(0,build_module._x)("Large","Image size option for resolution control"),value:"large"},{label:(0,build_module._x)("Full Size","Image size option for resolution control"),value:"full"}];function ResolutionTool({panelId,value,onChange,options=DEFAULT_SIZE_OPTIONS,defaultValue=DEFAULT_SIZE_OPTIONS[0].value,isShownByDefault=!0,resetAllFilter}){const displayValue=null!=value?value:defaultValue;return(0,jsx_runtime.jsx)(tools_panel_item_component.A,{hasValue:()=>displayValue!==defaultValue,label:(0,build_module.__)("Resolution"),onDeselect:()=>onChange(defaultValue),isShownByDefault,panelId,resetAllFilter,children:(0,jsx_runtime.jsx)(select_control.A,{__nextHasNoMarginBottom:!0,label:(0,build_module.__)("Resolution"),value:displayValue,options,onChange,help:(0,build_module.__)("Select the size of the source image."),size:"__unstable-large"})})}ResolutionTool.__docgenInfo={description:"",methods:[],displayName:"ResolutionTool",props:{options:{defaultValue:{value:"[\n\t{\n\t\tlabel: _x( 'Thumbnail', 'Image size option for resolution control' ),\n\t\tvalue: 'thumbnail',\n\t},\n\t{\n\t\tlabel: _x( 'Medium', 'Image size option for resolution control' ),\n\t\tvalue: 'medium',\n\t},\n\t{\n\t\tlabel: _x( 'Large', 'Image size option for resolution control' ),\n\t\tvalue: 'large',\n\t},\n\t{\n\t\tlabel: _x( 'Full Size', 'Image size option for resolution control' ),\n\t\tvalue: 'full',\n\t},\n]",computed:!1},required:!1},defaultValue:{defaultValue:{value:"DEFAULT_SIZE_OPTIONS[ 0 ].value",computed:!0},required:!1},isShownByDefault:{defaultValue:{value:"true",computed:!1},required:!1}}};const index_story={title:"BlockEditor/ResolutionControl",component:ResolutionTool,tags:["status-private"],parameters:{sourceLink:"packages/block-editor/src/components/resolution-tool",badges:["private"],docs:{canvas:{sourceState:"shown"},description:{component:"A control for selecting image resolution with preset size options."}}},argTypes:{value:{control:{type:null},description:"Currently selected resolution value.",table:{type:{summary:"string"}}},onChange:{action:"onChange",control:{type:null},description:"Handles change in resolution selection.",table:{type:{summary:"function"}}},options:{control:"object",description:"Array of resolution options to display.",table:{type:{summary:"array"}}},defaultValue:{control:"radio",options:["thumbnail","medium","large","full"],description:"Default resolution value.",table:{type:{summary:"string"}}},isShownByDefault:{control:"boolean",description:"Whether the control is shown by default in the panel.",table:{type:{summary:"boolean"}}},panelId:{control:{type:null},description:"ID of the parent tools panel.",table:{type:{summary:"string"}}}}},Default=({label,panelId,onChange:onChangeProp,...props})=>{const[attributes,setAttributes]=(0,react.useReducer)(((prevState,nextState)=>({...prevState,...nextState})),{}),{resolution}=attributes;return(0,jsx_runtime.jsx)(panel.A,{children:(0,jsx_runtime.jsx)(component.A,{label,panelId,resetAll:(resetFilters=[])=>{let newAttributes={};resetFilters.forEach((resetFilter=>{newAttributes={...newAttributes,...resetFilter(newAttributes)}})),setAttributes(newAttributes),onChangeProp(void 0)},children:(0,jsx_runtime.jsx)(ResolutionTool,{panelId,onChange:newValue=>{setAttributes({resolution:newValue}),onChangeProp(newValue)},value:resolution,resetAllFilter:()=>({resolution:void 0}),...props})})})};Default.args={label:"Settings",defaultValue:"full",panelId:"panel-id"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  label,\n  panelId,\n  onChange: onChangeProp,\n  ...props\n}) => {\n  const [attributes, setAttributes] = useReducer((prevState, nextState) => ({\n    ...prevState,\n    ...nextState\n  }), {});\n  const {\n    resolution\n  } = attributes;\n  const resetAll = (resetFilters = []) => {\n    let newAttributes = {};\n    resetFilters.forEach(resetFilter => {\n      newAttributes = {\n        ...newAttributes,\n        ...resetFilter(newAttributes)\n      };\n    });\n    setAttributes(newAttributes);\n    onChangeProp(undefined);\n  };\n  return <Panel>\n            <ToolsPanel label={label} panelId={panelId} resetAll={resetAll}>\n                <ResolutionTool panelId={panelId} onChange={newValue => {\n        setAttributes({\n          resolution: newValue\n        });\n        onChangeProp(newValue);\n      }} value={resolution} resetAllFilter={() => ({\n        resolution: undefined\n      })} {...props} />\n            </ToolsPanel>\n        </Panel>;\n}",...Default.parameters?.docs?.source}}}},"./packages/a11y/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function addContainer(ariaLive="polite"){const container=document.createElement("div");container.id=`a11y-speak-${ariaLive}`,container.className="a11y-speak-region",container.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),container.setAttribute("aria-live",ariaLive),container.setAttribute("aria-relevant","additions text"),container.setAttribute("aria-atomic","true");const{body}=document;return body&&body.appendChild(container),container}__webpack_require__.d(__webpack_exports__,{L:()=>speak});var build_module=__webpack_require__("./packages/i18n/build-module/index.js");let previousMessage="";function speak(message,ariaLive){!function clear(){const regions=document.getElementsByClassName("a11y-speak-region"),introText=document.getElementById("a11y-speak-intro-text");for(let i=0;i<regions.length;i++)regions[i].textContent="";introText&&introText.setAttribute("hidden","hidden")}(),message=function filterMessage(message){return message=message.replace(/<[^<>]+>/g," "),previousMessage===message&&(message+=" "),previousMessage=message,message}(message);const introText=document.getElementById("a11y-speak-intro-text"),containerAssertive=document.getElementById("a11y-speak-assertive"),containerPolite=document.getElementById("a11y-speak-polite");containerAssertive&&"assertive"===ariaLive?containerAssertive.textContent=message:containerPolite&&(containerPolite.textContent=message),introText&&introText.removeAttribute("hidden")}!function domReady(callback){"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",callback):callback())}((function setup(){const introText=document.getElementById("a11y-speak-intro-text"),containerAssertive=document.getElementById("a11y-speak-assertive"),containerPolite=document.getElementById("a11y-speak-polite");null===introText&&function addIntroText(){const introText=document.createElement("p");introText.id="a11y-speak-intro-text",introText.className="a11y-speak-intro-text",introText.textContent=(0,build_module.__)("Notifications"),introText.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),introText.setAttribute("hidden","hidden");const{body}=document;return body&&body.appendChild(introText),introText}(),null===containerAssertive&&addContainer("assertive"),null===containerPolite&&addContainer("polite")}))},"./packages/components/build-module/h-stack/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/context/context-connect.js"),_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/view/component.js"),_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/build-module/h-stack/hook.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_context__WEBPACK_IMPORTED_MODULE_3__.KZ)((function UnconnectedHStack(props,forwardedRef){const hStackProps=(0,_hook__WEBPACK_IMPORTED_MODULE_1__.A)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_2__.A,{...hStackProps,ref:forwardedRef})}),"HStack")},"./packages/components/build-module/h-stack/hook.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useHStack});var use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),component=__webpack_require__("./packages/components/build-module/flex/flex-item/component.js"),hook=__webpack_require__("./packages/components/build-module/flex/flex/hook.js"),values=__webpack_require__("./packages/components/build-module/utils/values.js");const H_ALIGNMENTS={bottom:{align:"flex-end",justify:"center"},bottomLeft:{align:"flex-end",justify:"flex-start"},bottomRight:{align:"flex-end",justify:"flex-end"},center:{align:"center",justify:"center"},edge:{align:"center",justify:"space-between"},left:{align:"center",justify:"flex-start"},right:{align:"center",justify:"flex-end"},stretch:{align:"stretch"},top:{align:"flex-start",justify:"center"},topLeft:{align:"flex-start",justify:"flex-start"},topRight:{align:"flex-start",justify:"flex-end"}},V_ALIGNMENTS={bottom:{justify:"flex-end",align:"center"},bottomLeft:{justify:"flex-end",align:"flex-start"},bottomRight:{justify:"flex-end",align:"flex-end"},center:{justify:"center",align:"center"},edge:{justify:"space-between",align:"center"},left:{justify:"center",align:"flex-start"},right:{justify:"center",align:"flex-end"},stretch:{align:"stretch"},top:{justify:"flex-start",align:"center"},topLeft:{justify:"flex-start",align:"flex-start"},topRight:{justify:"flex-start",align:"flex-end"}};var get_valid_children=__webpack_require__("./packages/components/build-module/utils/get-valid-children.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function useHStack(props){const{alignment="edge",children,direction,spacing=2,...otherProps}=(0,use_context_system.A)(props,"HStack"),align=function getAlignmentProps(alignment,direction="row"){if(!(0,values.J5)(alignment))return{};const props="column"===direction?V_ALIGNMENTS:H_ALIGNMENTS;return alignment in props?props[alignment]:{align:alignment}}(alignment,direction),propsForFlex={children:(0,get_valid_children.a)(children).map(((child,index)=>{if((0,context_connect.SZ)(child,["Spacer"])){const childElement=child,_key=childElement.key||`hstack-${index}`;return(0,jsx_runtime.jsx)(component.A,{isBlock:!0,...childElement.props},_key)}return child})),direction,justify:"center",...align,...otherProps,gap:spacing},{isColumn,...flexProps}=(0,hook.v)(propsForFlex);return flexProps}},"./packages/components/build-module/input-control/input-base.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>input_base});var use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),react=__webpack_require__("./node_modules/react/index.js"),input_control_styles=__webpack_require__("./packages/components/build-module/input-control/styles/input-control-styles.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const backdrop=(0,react.memo)((function Backdrop({disabled=!1,isBorderless=!1}){return(0,jsx_runtime.jsx)(input_control_styles.Hr,{"aria-hidden":"true",className:"components-input-control__backdrop",disabled,isBorderless})}));var component=__webpack_require__("./packages/components/build-module/visually-hidden/component.js");function Label({children,hideLabelFromVision,htmlFor,...props}){return children?hideLabelFromVision?(0,jsx_runtime.jsx)(component.A,{as:"label",htmlFor,children}):(0,jsx_runtime.jsx)(input_control_styles.cR,{children:(0,jsx_runtime.jsx)(input_control_styles.JU,{htmlFor,...props,children})}):null}var use_context_system=__webpack_require__("./packages/components/build-module/context/use-context-system.js"),context_system_provider=__webpack_require__("./packages/components/build-module/context/context-system-provider.js"),context_connect=__webpack_require__("./packages/components/build-module/context/context-connect.js"),use_deprecated_props=__webpack_require__("./packages/components/build-module/utils/use-deprecated-props.js");function getUIFlexProps(labelPosition){const props={};switch(labelPosition){case"top":props.direction="column",props.expanded=!1,props.gap=0;break;case"bottom":props.direction="column-reverse",props.expanded=!1,props.gap=0;break;case"edge":props.justify="space-between"}return props}function InputBase(props,ref){const{__next40pxDefaultSize,__unstableInputWidth,children,className,disabled=!1,hideLabelFromVision=!1,labelPosition,id:idProp,isBorderless=!1,label,prefix,size="default",suffix,...restProps}=(0,use_deprecated_props.R)((0,use_context_system.A)(props,"InputBase")),id=function useUniqueId(idProp){const instanceId=(0,use_instance_id.A)(InputBase);return idProp||`input-base-control-${instanceId}`}(idProp),hideLabel=hideLabelFromVision||!label,prefixSuffixContextValue=(0,react.useMemo)((()=>({InputControlPrefixWrapper:{__next40pxDefaultSize,size},InputControlSuffixWrapper:{__next40pxDefaultSize,size}})),[__next40pxDefaultSize,size]);return(0,jsx_runtime.jsxs)(input_control_styles.bL,{...restProps,...getUIFlexProps(labelPosition),className,gap:2,ref,children:[(0,jsx_runtime.jsx)(Label,{className:"components-input-control__label",hideLabelFromVision,labelPosition,htmlFor:id,children:label}),(0,jsx_runtime.jsxs)(input_control_styles.mc,{__unstableInputWidth,className:"components-input-control__container",disabled,hideLabel,labelPosition,children:[(0,jsx_runtime.jsxs)(context_system_provider.c7,{value:prefixSuffixContextValue,children:[prefix&&(0,jsx_runtime.jsx)(input_control_styles.b3,{className:"components-input-control__prefix",children:prefix}),children,suffix&&(0,jsx_runtime.jsx)(input_control_styles.sZ,{className:"components-input-control__suffix",children:suffix})]}),(0,jsx_runtime.jsx)(backdrop,{disabled,isBorderless})]})]})}const input_base=(0,context_connect.KZ)(InputBase,"InputBase")},"./packages/components/build-module/panel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>panel});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const panel_header=function PanelHeader({label,children}){return(0,jsx_runtime.jsxs)("div",{className:"components-panel__header",children:[label&&(0,jsx_runtime.jsx)("h2",{children:label}),children]})};const panel=(0,react.forwardRef)((function UnforwardedPanel({header,className,children},ref){const classNames=(0,clsx.A)(className,"components-panel");return(0,jsx_runtime.jsxs)("div",{className:classNames,ref,children:[header&&(0,jsx_runtime.jsx)(panel_header,{label:header}),children]})}))},"./packages/components/build-module/select-control/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,Y:()=>SelectControl});var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/index.js"),_base_control__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/build-module/base-control/index.js"),_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/build-module/select-control/styles/select-control-styles.js"),_chevron_down__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/build-module/select-control/chevron-down.js"),_utils_use_deprecated_props__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/build-module/utils/use-deprecated-props.js"),_utils_deprecated_36px_size__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/utils/deprecated-36px-size.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function SelectOptions({options}){return options.map((({id,label,value,...optionProps},index)=>{const key=id||`${label}-${value}-${index}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value,...optionProps,children:label},key)}))}const SelectControl=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_8__.forwardRef)((function UnforwardedSelectControl(props,ref){const{className,disabled=!1,help,hideLabelFromVision,id:idProp,label,multiple=!1,onChange,options=[],size="default",value:valueProp,labelPosition="top",children,prefix,suffix,variant="default",__next40pxDefaultSize=!1,__nextHasNoMarginBottom=!1,__shouldNotWarnDeprecated36pxSize,...restProps}=(0,_utils_use_deprecated_props__WEBPACK_IMPORTED_MODULE_2__.R)(props),id=function useUniqueId(idProp){const instanceId=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.A)(SelectControl);return idProp||`inspector-select-control-${instanceId}`}(idProp),helpId=help?`${id}__help`:void 0;if(!options?.length&&!children)return null;const classes=(0,clsx__WEBPACK_IMPORTED_MODULE_3__.A)("components-select-control",className);return(0,_utils_deprecated_36px_size__WEBPACK_IMPORTED_MODULE_4__.M)({componentName:"SelectControl",__next40pxDefaultSize,size,__shouldNotWarnDeprecated36pxSize}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_base_control__WEBPACK_IMPORTED_MODULE_5__.Ay,{help,id,__nextHasNoMarginBottom,__associatedWPComponentName:"SelectControl",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_6__.Xg,{className:classes,disabled,hideLabelFromVision,id,isBorderless:"minimal"===variant,label,size,suffix:suffix||!multiple&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chevron_down__WEBPACK_IMPORTED_MODULE_7__.A,{}),prefix,labelPosition,__unstableInputWidth:"minimal"===variant?"auto":void 0,variant,__next40pxDefaultSize,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_6__.l6,{...restProps,__next40pxDefaultSize,"aria-describedby":helpId,className:"components-select-control__input",disabled,id,multiple,onChange:event=>{if(props.multiple){const newValues=Array.from(event.target.options).filter((({selected})=>selected)).map((({value})=>value));props.onChange?.(newValues,{event})}else props.onChange?.(event.target.value,{event})},ref,selectSize:size,value:valueProp,variant,children:children||(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectOptions,{options})})})})})),__WEBPACK_DEFAULT_EXPORT__=SelectControl},"./packages/components/build-module/utils/get-valid-children.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>getValidChildren});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function getValidChildren(children){return"string"==typeof children?[children]:_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./packages/components/build-module/utils/use-deprecated-props.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function useDeprecated36pxDefaultSizeProp(props){const{__next36pxDefaultSize,__next40pxDefaultSize,...otherProps}=props;return{...otherProps,__next40pxDefaultSize:null!=__next40pxDefaultSize?__next40pxDefaultSize:__next36pxDefaultSize}}__webpack_require__.d(__webpack_exports__,{R:()=>useDeprecated36pxDefaultSizeProp})},"./packages/compose/build-module/hooks/use-previous/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>usePrevious});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function usePrevious(value){const ref=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{ref.current=value}),[value]),ref.current}},"./packages/icons/build-module/library/check.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.wA,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})})},"./packages/icons/build-module/library/plus.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.wA,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"})})}}]);