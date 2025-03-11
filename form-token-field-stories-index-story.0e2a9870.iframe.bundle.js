/*! For license information please see form-token-field-stories-index-story.0e2a9870.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[7769],{"./packages/components/src/form-token-field/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Async:()=>Async,Default:()=>Default,DropdownSelector:()=>DropdownSelector,WithCustomRenderItem:()=>WithCustomRenderItem,WithValidatedInput:()=>WithValidatedInput,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/form-token-field/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.A,title:"Components/Selection & Input/Common/FormTokenField",id:"components-formtokenfield",argTypes:{value:{control:!1},__experimentalValidateInput:{control:!1}},parameters:{sourceLink:"packages/components/src/form-token-field",badges:[],controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},continents=["Africa","America","Antarctica","Asia","Europe","Oceania"],DefaultTemplate=({...args})=>{const[selectedContinents,setSelectedContinents]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args,value:selectedContinents,onChange:tokens=>setSelectedContinents(tokens)})},Default=DefaultTemplate.bind({});Default.args={label:"Type a continent",suggestions:continents,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0};const Async=({suggestions,...args})=>{const[selectedContinents,setSelectedContinents]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]),[availableContinents,setAvailableContinents]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args,value:selectedContinents,suggestions:availableContinents,onChange:tokens=>setSelectedContinents(tokens),onInputChange:input=>{const timeout=setTimeout((()=>{const available=(suggestions||[]).filter((continent=>continent.toLowerCase().includes(input.toLowerCase())));setAvailableContinents(available)}),1e3);return()=>clearTimeout(timeout)}})};Async.args={label:"Type a continent",suggestions:continents,__nextHasNoMarginBottom:!0,__next40pxDefaultSize:!0};const DropdownSelector=DefaultTemplate.bind({});DropdownSelector.args={...Default.args,__experimentalExpandOnFocus:!0,__experimentalAutoSelectFirstMatch:!0};const WithCustomRenderItem=DefaultTemplate.bind({});WithCustomRenderItem.args={...Default.args,__experimentalRenderItem:({item})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:`${item} — a nice place to visit`})};const WithValidatedInput=DefaultTemplate.bind({});WithValidatedInput.args={...Default.args,__experimentalValidateInput:input=>continents.includes(input)},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => {\n  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);\n  return <FormTokenField {...args} value={selectedContinents} onChange={tokens => setSelectedContinents(tokens)} />;\n}",...Default.parameters?.docs?.source}}},Async.parameters={...Async.parameters,docs:{...Async.parameters?.docs,source:{originalSource:"({\n  suggestions,\n  ...args\n}) => {\n  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);\n  const [availableContinents, setAvailableContinents] = useState<string[]>([]);\n  const searchContinents = (input: string) => {\n    const timeout = setTimeout(() => {\n      const available = (suggestions || []).filter(continent => continent.toLowerCase().includes(input.toLowerCase()));\n      setAvailableContinents(available);\n    }, 1000);\n    return () => clearTimeout(timeout);\n  };\n  return <FormTokenField {...args} value={selectedContinents} suggestions={availableContinents} onChange={tokens => setSelectedContinents(tokens)} onInputChange={searchContinents} />;\n}",...Async.parameters?.docs?.source}}},DropdownSelector.parameters={...DropdownSelector.parameters,docs:{...DropdownSelector.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => {\n  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);\n  return <FormTokenField {...args} value={selectedContinents} onChange={tokens => setSelectedContinents(tokens)} />;\n}",...DropdownSelector.parameters?.docs?.source}}},WithCustomRenderItem.parameters={...WithCustomRenderItem.parameters,docs:{...WithCustomRenderItem.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => {\n  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);\n  return <FormTokenField {...args} value={selectedContinents} onChange={tokens => setSelectedContinents(tokens)} />;\n}",...WithCustomRenderItem.parameters?.docs?.source},description:{story:"The rendered output of each suggestion can be customized by passing a\nrender function to the `__experimentalRenderItem` prop. (This is still an experimental feature\nand is subject to change.)",...WithCustomRenderItem.parameters?.docs?.description}}},WithValidatedInput.parameters={...WithValidatedInput.parameters,docs:{...WithValidatedInput.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => {\n  const [selectedContinents, setSelectedContinents] = useState<ComponentProps<typeof FormTokenField>['value']>([]);\n  return <FormTokenField {...args} value={selectedContinents} onChange={tokens => setSelectedContinents(tokens)} />;\n}",...WithValidatedInput.parameters?.docs?.source},description:{story:"Only values for which the `__experimentalValidateInput` function returns\n`true` will be tokenized. (This is still an experimental feature and is\nsubject to change.)",...WithValidatedInput.parameters?.docs?.description}}};try{WithCustomRenderItem.displayName="WithCustomRenderItem",WithCustomRenderItem.__docgenInfo={description:"The rendered output of each suggestion can be customized by passing a\nrender function to the `__experimentalRenderItem` prop. (This is still an experimental feature\nand is subject to change.)",displayName:"WithCustomRenderItem",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/form-token-field/stories/index.story.tsx#WithCustomRenderItem"]={docgenInfo:WithCustomRenderItem.__docgenInfo,name:"WithCustomRenderItem",path:"packages/components/src/form-token-field/stories/index.story.tsx#WithCustomRenderItem"})}catch(__react_docgen_typescript_loader_error){}try{WithValidatedInput.displayName="WithValidatedInput",WithValidatedInput.__docgenInfo={description:"Only values for which the `__experimentalValidateInput` function returns\n`true` will be tokenized. (This is still an experimental feature and is\nsubject to change.)",displayName:"WithValidatedInput",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/form-token-field/stories/index.story.tsx#WithValidatedInput"]={docgenInfo:WithValidatedInput.__docgenInfo,name:"WithValidatedInput",path:"packages/components/src/form-token-field/stories/index.story.tsx#WithValidatedInput"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/flex/flex-item/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/context/context-connect.ts"),_view__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/view/component.tsx"),_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/flex/flex-item/hook.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FlexItem=(0,_context__WEBPACK_IMPORTED_MODULE_3__.KZ)((function UnconnectedFlexItem(props,forwardedRef){const flexItemProps=(0,_hook__WEBPACK_IMPORTED_MODULE_1__.K)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_2__.A,{...flexItemProps,ref:forwardedRef})}),"FlexItem"),__WEBPACK_DEFAULT_EXPORT__=FlexItem;try{FlexItem.displayName="FlexItem",FlexItem.__docgenInfo={description:"`FlexItem` is a primitive layout component that aligns content within layout\ncontainers like `Flex`.\n\n```jsx\nimport { Flex, FlexItem } from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <Flex>\n      <FlexItem>...</FlexItem>\n    </Flex>\n  );\n}\n```",displayName:"FlexItem",props:{display:{defaultValue:null,description:"The (CSS) display of the `FlexItem`.",name:"display",required:!1,type:{name:"Display"}},isBlock:{defaultValue:{value:"true"},description:"Determines if `FlexItem` should render as an adaptive full-width block.",name:"isBlock",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!1,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/flex/flex-item/component.tsx#FlexItem"]={docgenInfo:FlexItem.__docgenInfo,name:"FlexItem",path:"packages/components/src/flex/flex-item/component.tsx#FlexItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/flex/flex/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _context__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/context/context-connect.ts"),_hook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/flex/flex/hook.ts"),_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/flex/context.ts"),_view__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/view/component.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Flex=(0,_context__WEBPACK_IMPORTED_MODULE_4__.KZ)((function UnconnectedFlex(props,forwardedRef){const{children,isColumn,...otherProps}=(0,_hook__WEBPACK_IMPORTED_MODULE_1__.v)(props);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context__WEBPACK_IMPORTED_MODULE_2__.R.Provider,{value:{flexItemDisplay:isColumn?"block":void 0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_view__WEBPACK_IMPORTED_MODULE_3__.A,{...otherProps,ref:forwardedRef,children})})}),"Flex"),__WEBPACK_DEFAULT_EXPORT__=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"`Flex` is a primitive layout component that adaptively aligns child content\nhorizontally or vertically. `Flex` powers components like `HStack` and\n`VStack`.\n\n`Flex` is used with any of its two sub-components, `FlexItem` and\n`FlexBlock`.\n\n```jsx\nimport { Flex, FlexBlock, FlexItem } from '@wordpress/components';\n\nfunction Example() {\n  return (\n    <Flex>\n      <FlexItem>\n        <p>Code</p>\n      </FlexItem>\n      <FlexBlock>\n        <p>Poetry</p>\n      </FlexBlock>\n    </Flex>\n  );\n}\n```",displayName:"Flex",props:{align:{defaultValue:{value:"'center'"},description:"Aligns children using CSS Flexbox `align-items`. Vertically aligns\ncontent if the `direction` is `row`, or horizontally aligns content if\nthe `direction` is `column`.",name:"align",required:!1,type:{name:"AlignItems"}},direction:{defaultValue:{value:"'row'"},description:"The direction flow of the children content can be adjusted with\n`direction`. `column` will align children vertically and `row` will align\nchildren horizontally.",name:"direction",required:!1,type:{name:"FlexDirection"}},expanded:{defaultValue:{value:"true"},description:"Expands to the maximum available width (if horizontal) or height (if\nvertical).",name:"expanded",required:!1,type:{name:"boolean"}},gap:{defaultValue:{value:"2"},description:"Spacing in between each child can be adjusted by using `gap`.\n\nCan either be a number (which will act as a multiplier to the library's\ngrid system base of 4px), or a literal CSS value string.",name:"gap",required:!1,type:{name:"SpaceInput"}},justify:{defaultValue:{value:"'space-between'"},description:"Horizontally aligns content if the `direction` is `row`, or vertically\naligns content if the `direction` is `column`.",name:"justify",required:!1,type:{name:"JustifyContent"}},wrap:{defaultValue:{value:"false"},description:"Determines if children should wrap.",name:"wrap",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isReversed:{defaultValue:null,description:"@deprecated",name:"isReversed",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/flex/flex/component.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"packages/components/src/flex/flex/component.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/utils/deprecated-36px-size.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>maybeWarnDeprecated36pxSize});var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/deprecated/build-module/index.js");function maybeWarnDeprecated36pxSize({componentName,__next40pxDefaultSize,size,__shouldNotWarnDeprecated36pxSize}){__shouldNotWarnDeprecated36pxSize||__next40pxDefaultSize||void 0!==size&&"default"!==size||(0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__.A)(`36px default size for wp.components.${componentName}`,{since:"6.8",version:"7.1",hint:"Set the `__next40pxDefaultSize` prop to true to start opting into the new default size, which will become the default in a future version."})}},"./packages/components/src/utils/use-deprecated-props.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function useDeprecated36pxDefaultSizeProp(props){const{__next36pxDefaultSize,__next40pxDefaultSize,...otherProps}=props;return{...otherProps,__next40pxDefaultSize:null!=__next40pxDefaultSize?__next40pxDefaultSize:__next36pxDefaultSize}}__webpack_require__.d(__webpack_exports__,{R:()=>useDeprecated36pxDefaultSizeProp})},"./packages/components/src/utils/with-ignore-ime-events.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function withIgnoreIMEEvents(keydownHandler){return event=>{const{isComposing}="nativeEvent"in event?event.nativeEvent:event;isComposing||229===event.keyCode||keydownHandler(event)}}__webpack_require__.d(__webpack_exports__,{n:()=>withIgnoreIMEEvents})},"./node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/is-plain-object/dist/is-plain-object.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isObject(o){return"[object Object]"===Object.prototype.toString.call(o)}function isPlainObject(o){var ctor,prot;return!1!==isObject(o)&&(void 0===(ctor=o.constructor)||!1!==isObject(prot=ctor.prototype)&&!1!==prot.hasOwnProperty("isPrototypeOf"))}__webpack_require__.d(__webpack_exports__,{Q:()=>isPlainObject})}}]);