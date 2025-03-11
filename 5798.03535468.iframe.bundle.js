/*! For license information please see 5798.03535468.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[5798],{"./packages/components/src/context/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Yr:()=>CONNECT_STATIC_NAMESPACE,yG:()=>COMPONENT_NAMESPACE,yy:()=>CONNECTED_NAMESPACE});const COMPONENT_NAMESPACE="data-wp-component",CONNECTED_NAMESPACE="data-wp-c16t",CONNECT_STATIC_NAMESPACE="__contextSystemKey__"},"./packages/components/src/context/context-system-provider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c7:()=>ContextSystemProvider,rm:()=>useComponentsContext});var deepmerge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/deepmerge/dist/cjs.js"),deepmerge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_0__),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/fast-deep-equal/es6/index.js"),fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1__),is_plain_object__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/is-plain-object/dist/is-plain-object.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/utils/hooks/use-update-effect.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ComponentsContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createContext)({}),useComponentsContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(ComponentsContext);const BaseContextSystemProvider=({children,value})=>{const contextValue=function useContextSystemBridge({value}){const parentContext=useComponentsContext(),valueRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)(value);return(0,_utils__WEBPACK_IMPORTED_MODULE_4__.A)((()=>{fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_1___default()(valueRef.current,value)&&valueRef.current}),[value]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>deepmerge__WEBPACK_IMPORTED_MODULE_0___default()(null!=parentContext?parentContext:{},null!=value?value:{},{isMergeableObject:is_plain_object__WEBPACK_IMPORTED_MODULE_5__.Q})),[parentContext,value])}({value});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ComponentsContext.Provider,{value:contextValue,children})},ContextSystemProvider=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.memo)(BaseContextSystemProvider);BaseContextSystemProvider.__docgenInfo={description:"A Provider component that can modify props for connected components within\nthe Context system.\n\n@example\n```jsx\n<ContextSystemProvider value={{ Button: { size: 'small' }}}>\n  <Button>...</Button>\n</ContextSystemProvider>\n```\n\n@template {Record<string, any>} T\n@param {Object}                    options\n@param {import('react').ReactNode} options.children Children to render.\n@param {T}                         options.value    Props to render into connected components.\n@return {JSX.Element} A Provider wrapped component.",methods:[],displayName:"BaseContextSystemProvider"}},"./packages/components/src/context/use-context-system.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useContextSystem});var context_system_provider=__webpack_require__("./packages/components/src/context/context-system-provider.js"),constants=__webpack_require__("./packages/components/src/context/constants.js");var get_styled_class_name_from_key=__webpack_require__("./packages/components/src/context/get-styled-class-name-from-key.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useContextSystem(props,namespace){const contextSystemProps=(0,context_system_provider.rm)(),contextProps=contextSystemProps?.[namespace]||{},finalComponentProps={[constants.yy]:!0,...(componentName=namespace,{[constants.yG]:componentName})};var componentName;const{_overrides:overrideProps,...otherContextProps}=contextProps,initialMergedProps=Object.entries(otherContextProps).length?Object.assign({},otherContextProps,props):props,classes=(0,use_cx.l)()((0,get_styled_class_name_from_key.o)(namespace),props.className),rendered="function"==typeof initialMergedProps.renderChildren?initialMergedProps.renderChildren(initialMergedProps):initialMergedProps.children;for(const key in initialMergedProps)finalComponentProps[key]=initialMergedProps[key];for(const key in overrideProps)finalComponentProps[key]=overrideProps[key];return void 0!==rendered&&(finalComponentProps.children=rendered),finalComponentProps.className=classes,finalComponentProps}},"./packages/components/src/utils/hooks/use-update-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=function useUpdateEffect(effect,deps){const mountedRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(mountedRef.current)return effect();mountedRef.current=!0}),deps),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>{mountedRef.current=!1}),[])}},"./packages/compose/build-module/hooks/use-instance-id/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const instanceMap=new WeakMap;const __WEBPACK_DEFAULT_EXPORT__=function useInstanceId(object,prefix,preferredId){return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(preferredId)return preferredId;const id=function createId(object){const instances=instanceMap.get(object)||0;return instanceMap.set(object,instances+1),instances}(object);return prefix?`${prefix}-${id}`:id}),[object,preferredId,prefix])}},"./packages/deprecated/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>deprecated});var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/hooks/build-module/index.js");const logged=Object.create(null);function deprecated(feature,options={}){const{since,version,alternative,plugin,link,hint}=options,message=`${feature} is deprecated${since?` since version ${since}`:""}${version?` and will be removed${plugin?` from ${plugin}`:""} in version ${version}`:""}.${alternative?` Please use ${alternative} instead.`:""}${link?` See: ${link}`:""}${hint?` Note: ${hint}`:""}`;message in logged||((0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.Eo)("deprecated",feature,options,message),console.warn(message),logged[message]=!0)}},"./packages/components/src/context/context-connect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{KZ:()=>contextConnect,SZ:()=>hasConnectNamespace,zS:()=>contextConnectWithoutRef});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/context/constants.js"),_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/context/get-styled-class-name-from-key.ts");function contextConnect(Component,namespace){return _contextConnect(Component,namespace,{forwardsRef:!0})}function contextConnectWithoutRef(Component,namespace){return _contextConnect(Component,namespace)}function _contextConnect(Component,namespace,options){const WrappedComponent=options?.forwardsRef?(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Component):Component;let mergedNamespace=WrappedComponent[_constants__WEBPACK_IMPORTED_MODULE_1__.Yr]||[namespace];return Array.isArray(namespace)&&(mergedNamespace=[...mergedNamespace,...namespace]),"string"==typeof namespace&&(mergedNamespace=[...mergedNamespace,namespace]),Object.assign(WrappedComponent,{[_constants__WEBPACK_IMPORTED_MODULE_1__.Yr]:[...new Set(mergedNamespace)],displayName:namespace,selector:`.${(0,_get_styled_class_name_from_key__WEBPACK_IMPORTED_MODULE_2__.o)(namespace)}`})}function getConnectNamespace(Component){if(!Component)return[];let namespaces=[];return Component[_constants__WEBPACK_IMPORTED_MODULE_1__.Yr]&&(namespaces=Component[_constants__WEBPACK_IMPORTED_MODULE_1__.Yr]),Component.type&&Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.Yr]&&(namespaces=Component.type[_constants__WEBPACK_IMPORTED_MODULE_1__.Yr]),namespaces}function hasConnectNamespace(Component,match){return!!Component&&("string"==typeof match?getConnectNamespace(Component).includes(match):!!Array.isArray(match)&&match.some((result=>getConnectNamespace(Component).includes(result))))}},"./packages/components/src/context/get-styled-class-name-from-key.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>getStyledClassNameFromKey});var change_case__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/param-case/dist.es2015/index.js");const getStyledClassNameFromKey=(0,__webpack_require__("./node_modules/memize/dist/index.js").A)((function getStyledClassName(namespace){return`components-${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.c)(namespace)}`}))},"./packages/components/src/text-control/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),_base_control__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/base-control/index.tsx"),_utils_deprecated_36px_size__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/utils/deprecated-36px-size.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextControl=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.forwardRef)((function UnforwardedTextControl(props,ref){const{__nextHasNoMarginBottom,__next40pxDefaultSize=!1,label,hideLabelFromVision,value,help,id:idProp,className,onChange,type="text",...additionalProps}=props,id=(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.A)(TextControl,"inspector-text-control",idProp);return(0,_utils_deprecated_36px_size__WEBPACK_IMPORTED_MODULE_2__.M)({componentName:"TextControl",size:void 0,__next40pxDefaultSize}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_base_control__WEBPACK_IMPORTED_MODULE_3__.Ay,{__nextHasNoMarginBottom,__associatedWPComponentName:"TextControl",label,hideLabelFromVision,id,help,className,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.A)("components-text-control__input",{"is-next-40px-default-size":__next40pxDefaultSize}),type,id,value,onChange:event=>onChange(event.target.value),"aria-describedby":help?id+"__help":void 0,ref,...additionalProps})})})),__WEBPACK_DEFAULT_EXPORT__=TextControl;try{TextControl.displayName="TextControl",TextControl.__docgenInfo={description:"TextControl components let users enter and edit text.\n\n```jsx\nimport { TextControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyTextControl = () => {\n  const [ className, setClassName ] = useState( '' );\n\n  return (\n    <TextControl\n      __nextHasNoMarginBottom\n      __next40pxDefaultSize\n      label=\"Additional CSS Class\"\n      value={ className }\n      onChange={ ( value ) => setClassName( value ) }\n    />\n  );\n};\n```",displayName:"TextControl",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"A function that receives the value of the input.",name:"onChange",required:!0,type:{name:"(value: string) => void"}},value:{defaultValue:null,description:"The current value of the input.",name:"value",required:!0,type:{name:"string | number"}},type:{defaultValue:{value:"'text'"},description:'Type of the input element to render. Defaults to "text".',name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"search"'},{value:'"time"'},{value:'"text"'},{value:'"date"'},{value:'"datetime-local"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'},{value:'"url"'}]}},__next40pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next40pxDefaultSize",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/text-control/index.tsx#TextControl"]={docgenInfo:TextControl.__docgenInfo,name:"TextControl",path:"packages/components/src/text-control/index.tsx#TextControl"})}catch(__react_docgen_typescript_loader_error){}try{textcontrol.displayName="textcontrol",textcontrol.__docgenInfo={description:"TextControl components let users enter and edit text.\n\n```jsx\nimport { TextControl } from '@wordpress/components';\nimport { useState } from '@wordpress/element';\n\nconst MyTextControl = () => {\n  const [ className, setClassName ] = useState( '' );\n\n  return (\n    <TextControl\n      __nextHasNoMarginBottom\n      __next40pxDefaultSize\n      label=\"Additional CSS Class\"\n      value={ className }\n      onChange={ ( value ) => setClassName( value ) }\n    />\n  );\n};\n```",displayName:"textcontrol",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional description for the control.\n\nOnly use for meaningful description or instructions for the control. An element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"A function that receives the value of the input.",name:"onChange",required:!0,type:{name:"(value: string) => void"}},value:{defaultValue:null,description:"The current value of the input.",name:"value",required:!0,type:{name:"string | number"}},type:{defaultValue:{value:"'text'"},description:'Type of the input element to render. Defaults to "text".',name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"search"'},{value:'"time"'},{value:'"text"'},{value:'"date"'},{value:'"datetime-local"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'},{value:'"url"'}]}},__next40pxDefaultSize:{defaultValue:{value:"false"},description:"Start opting into the larger default height that will become the default size in a future version.",name:"__next40pxDefaultSize",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/text-control/index.tsx#textcontrol"]={docgenInfo:textcontrol.__docgenInfo,name:"textcontrol",path:"packages/components/src/text-control/index.tsx#textcontrol"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/utils/deprecated-36px-size.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>maybeWarnDeprecated36pxSize});var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/deprecated/build-module/index.js");function maybeWarnDeprecated36pxSize({componentName,__next40pxDefaultSize,size,__shouldNotWarnDeprecated36pxSize}){__shouldNotWarnDeprecated36pxSize||__next40pxDefaultSize||void 0!==size&&"default"!==size||(0,_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__.A)(`36px default size for wp.components.${componentName}`,{since:"6.8",version:"7.1",hint:"Set the `__next40pxDefaultSize` prop to true to start opting into the new default size, which will become the default in a future version."})}},"./packages/components/src/view/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PolymorphicDiv=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.A)("div",{target:"e19lxcc00"})("");const View=Object.assign((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function UnforwardedView({as,...restProps},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PolymorphicDiv,{as,ref,...restProps})})),{selector:".components-view"}),__WEBPACK_DEFAULT_EXPORT__=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}try{component.displayName="component",component.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"component",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#component"]={docgenInfo:component.__docgenInfo,name:"component",path:"packages/components/src/view/component.tsx#component"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/visually-hidden/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>visually_hidden_component});var use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts");const visuallyHidden={border:0,clip:"rect(1px, 1px, 1px, 1px)",WebkitClipPath:"inset( 50% )",clipPath:"inset( 50% )",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",wordWrap:"normal"};var component=__webpack_require__("./packages/components/src/view/component.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const VisuallyHidden=(0,context_connect.KZ)((function UnconnectedVisuallyHidden(props,forwardedRef){const{style:styleProp,...contextProps}=(0,use_context_system.A)(props,"VisuallyHidden");return(0,jsx_runtime.jsx)(component.A,{ref:forwardedRef,...contextProps,style:{...visuallyHidden,...styleProp||{}}})}),"VisuallyHidden"),visually_hidden_component=VisuallyHidden;try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"`VisuallyHidden` is a component used to render text intended to be visually\nhidden, but will show for alternate devices, for example a screen reader.\n\n```jsx\nimport { VisuallyHidden } from `@wordpress/components`;\n\nfunction Example() {\n  return (\n    <VisuallyHidden>\n      <label>Code is Poetry</label>\n    </VisuallyHidden>\n  );\n}\n```",displayName:"VisuallyHidden",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/visually-hidden/component.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"packages/components/src/visually-hidden/component.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/is-plain-object/dist/is-plain-object.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isObject(o){return"[object Object]"===Object.prototype.toString.call(o)}function isPlainObject(o){var ctor,prot;return!1!==isObject(o)&&(void 0===(ctor=o.constructor)||!1!==isObject(prot=ctor.prototype)&&!1!==prot.hasOwnProperty("isPrototypeOf"))}__webpack_require__.d(__webpack_exports__,{Q:()=>isPlainObject})}}]);