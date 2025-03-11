"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[532],{"./packages/components/src/slot-fill/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithContext:()=>WithContext,WithFillProps:()=>WithFillProps,WithSlotChildren:()=>WithSlotChildren,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/slot-fill/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.DX,title:"Components/Utilities/SlotFill",id:"components-slotfill",subcomponents:{Fill:___WEBPACK_IMPORTED_MODULE_1__.SQ,SlotFillProvider:___WEBPACK_IMPORTED_MODULE_1__.Kq},argTypes:{name:{control:!1},as:{control:{type:"text"}},fillProps:{control:!1}},parameters:{sourceLink:"packages/components/src/slot-fill",badges:[],controls:{expanded:!0},docs:{source:{state:"open"}}}},Default=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Kq,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"Profile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Name: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.DX,{...props,name:"name"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Age: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.DX,{...props,name:"age"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.SQ,{name:"name",children:"Grace"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.SQ,{name:"age",children:"33"})]});Default.args={bubblesVirtually:!0,as:"span"};const WithFillProps=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Kq,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"Profile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Name:"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.DX,{...props,name:"name",fillProps:{name:"Grace"}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Age: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.DX,{...props,name:"age",fillProps:{age:33}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.SQ,{name:"name",children:fillProps=>fillProps.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.SQ,{name:"age",children:fillProps=>fillProps.age})]});WithFillProps.args={...Default.args};const WithSlotChildren=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Kq,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"Profile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Name:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.DX,{...props,name:"name",children:fills=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"red"},children:fills})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Age:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.DX,{...props,name:"age",children:fills=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{style:{color:"red"},children:fills})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.SQ,{name:"name",children:"Alice"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.SQ,{name:"age",children:"18"})]});WithSlotChildren.args={...Default.args};const WithContext=props=>{const Context=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createContext)(""),ContextFill=({name})=>{const value=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useContext)(Context);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.SQ,{name,children:value})};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.Kq,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{children:"Profile"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Name: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.DX,{...props,name:"name"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["Age: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.DX,{...props,name:"age"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider,{value:"Grace",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContextFill,{name:"name"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider,{value:33,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContextFill,{name:"age"})})]})};WithContext.args={...Default.args},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'props => {\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name: <Slot {...props} name="name" />\n            </p>\n            <p>\n                Age: <Slot {...props} name="age" />\n            </p>\n            <Fill name="name">Grace</Fill>\n            <Fill name="age">33</Fill>\n        </SlotFillProvider>;\n}',...Default.parameters?.docs?.source}}},WithFillProps.parameters={...WithFillProps.parameters,docs:{...WithFillProps.parameters?.docs,source:{originalSource:'props => {\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name:{\' \'}\n                <Slot {...props} name="name" fillProps={{\n        name: \'Grace\'\n      }} />\n            </p>\n            <p>\n                Age: <Slot {...props} name="age" fillProps={{\n        age: 33\n      }} />\n            </p>\n\n            <Fill name="name">{fillProps => fillProps.name}</Fill>\n            <Fill name="age">{fillProps => fillProps.age}</Fill>\n        </SlotFillProvider>;\n}',...WithFillProps.parameters?.docs?.source}}},WithSlotChildren.parameters={...WithSlotChildren.parameters,docs:{...WithSlotChildren.parameters?.docs,source:{originalSource:'props => {\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name:\n                {/* @ts-expect-error Not supported children for `<Slot />` when `bubblesVirtually` is true. */}\n                <Slot {...props} name="name">\n                    {fills => {\n          return <span style={{\n            color: \'red\'\n          }}>{fills}</span>;\n        }}\n                </Slot>\n            </p>\n            <p>\n                Age:\n                {/* @ts-expect-error Not support children for `<Slot />` when `bubblesVirtually` is true. */}\n                <Slot {...props} name="age">\n                    {fills => {\n          return <span style={{\n            color: \'red\'\n          }}>{fills}</span>;\n        }}\n                </Slot>\n            </p>\n            <Fill name="name">Alice</Fill>\n            <Fill name="age">18</Fill>\n        </SlotFillProvider>;\n}',...WithSlotChildren.parameters?.docs?.source}}},WithContext.parameters={...WithContext.parameters,docs:{...WithContext.parameters?.docs,source:{originalSource:'props => {\n  const Context = createContext<string | number>(\'\');\n  const ContextFill = ({\n    name\n  }: {\n    name: string;\n  }) => {\n    const value = useContext(Context);\n    return <Fill name={name}>{value}</Fill>;\n  };\n  return <SlotFillProvider>\n            <h2>Profile</h2>\n            <p>\n                Name: <Slot {...props} name="name" />\n            </p>\n            <p>\n                Age: <Slot {...props} name="age" />\n            </p>\n            <Context.Provider value="Grace">\n                <ContextFill name="name" />\n            </Context.Provider>\n            <Context.Provider value={33}>\n                <ContextFill name="age" />\n            </Context.Provider>\n        </SlotFillProvider>;\n}',...WithContext.parameters?.docs?.source}}}},"./packages/compose/build-module/hooks/use-merge-refs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useMergeRefs});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function assignRef(ref,value){"function"==typeof ref?ref(value):ref&&ref.hasOwnProperty("current")&&(ref.current=value)}function useMergeRefs(refs){const element=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(),isAttachedRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),didElementChangeRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),previousRefsRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),currentRefsRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(refs);return currentRefsRef.current=refs,(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{!1===didElementChangeRef.current&&!0===isAttachedRef.current&&refs.forEach(((ref,index)=>{const previousRef=previousRefsRef.current[index];ref!==previousRef&&(assignRef(previousRef,null),assignRef(ref,element.current))})),previousRefsRef.current=refs}),refs),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{didElementChangeRef.current=!1})),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value=>{assignRef(element,value),didElementChangeRef.current=!0,isAttachedRef.current=null!==value;const refsToAssign=value?currentRefsRef.current:previousRefsRef.current;for(const ref of refsToAssign)assignRef(ref,value)}),[])}},"./packages/compose/build-module/hooks/use-observable-value/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useObservableValue});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useObservableValue(map,name){const[subscribe,getValue]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>[listener=>map.subscribe(name,listener),()=>map.get(name)]),[map,name]);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(subscribe,getValue,getValue)}},"./packages/compose/build-module/utils/observable-map/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function observableMap(){const map=new Map,listeners=new Map;function callListeners(name){const list=listeners.get(name);if(list)for(const listener of list)listener()}return{get:name=>map.get(name),set(name,value){map.set(name,value),callListeners(name)},delete(name){map.delete(name),callListeners(name)},subscribe(name,listener){let list=listeners.get(name);return list||(list=new Set,listeners.set(name,list)),list.add(listener),()=>{list.delete(listener),0===list.size&&listeners.delete(name)}}}}__webpack_require__.d(__webpack_exports__,{u:()=>observableMap})},"./packages/element/build-module/utils.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>isEmptyElement});const isEmptyElement=element=>"number"!=typeof element&&("string"==typeof element?.valueOf()||Array.isArray(element)?!element.length:!element)},"./packages/is-shallow-equal/build-module/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>isShallowEqual});var objects=__webpack_require__("./packages/is-shallow-equal/build-module/objects.js");function isShallowEqual(a,b){if(a&&b){if(a.constructor===Object&&b.constructor===Object)return(0,objects.A)(a,b);if(Array.isArray(a)&&Array.isArray(b))return function isShallowEqualArrays(a,b){if(a===b)return!0;if(a.length!==b.length)return!1;for(let i=0,len=a.length;i<len;i++)if(a[i]!==b[i])return!1;return!0}(a,b)}return a===b}},"./packages/is-shallow-equal/build-module/objects.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isShallowEqualObjects(a,b){if(a===b)return!0;const aKeys=Object.keys(a),bKeys=Object.keys(b);if(aKeys.length!==bKeys.length)return!1;let i=0;for(;i<aKeys.length;){const key=aKeys[i],aValue=a[key];if(void 0===aValue&&!b.hasOwnProperty(key)||aValue!==b[key])return!1;i++}return!0}__webpack_require__.d(__webpack_exports__,{A:()=>isShallowEqualObjects})},"./packages/components/src/slot-fill/bubbles-virtually/slot-fill-context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/compose/build-module/utils/observable-map/index.js");const initialContextValue={slots:(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.u)(),fills:(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.u)(),registerSlot:()=>{},updateSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},isDefault:!0},__WEBPACK_DEFAULT_EXPORT__=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialContextValue)},"./packages/components/src/slot-fill/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{SQ:()=>slot_fill_Fill,Kq:()=>Provider,DX:()=>slot_fill_Slot,QJ:()=>createSlotFill});var react=__webpack_require__("./node_modules/react/index.js"),observable_map=__webpack_require__("./packages/compose/build-module/utils/observable-map/index.js");const initialValue={slots:(0,observable_map.u)(),fills:(0,observable_map.u)(),registerSlot:()=>{},unregisterSlot:()=>{},registerFill:()=>{},unregisterFill:()=>{},updateFill:()=>{}},context=(0,react.createContext)(initialValue);function Fill({name,children}){const registry=(0,react.useContext)(context),instanceRef=(0,react.useRef)({}),childrenRef=(0,react.useRef)(children);return(0,react.useLayoutEffect)((()=>{childrenRef.current=children}),[children]),(0,react.useLayoutEffect)((()=>{const instance=instanceRef.current;return registry.registerFill(name,instance,childrenRef.current),()=>registry.unregisterFill(name,instance)}),[registry,name]),(0,react.useLayoutEffect)((()=>{registry.updateFill(name,instanceRef.current,childrenRef.current)})),null}var use_observable_value=__webpack_require__("./packages/compose/build-module/hooks/use-observable-value/index.js"),utils=__webpack_require__("./packages/element/build-module/utils.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function isFunction(maybeFunc){return"function"==typeof maybeFunc}function Slot(props){var _useObservableValue;const registry=(0,react.useContext)(context),instanceRef=(0,react.useRef)({}),{name,children,fillProps={}}=props;(0,react.useLayoutEffect)((()=>{const instance=instanceRef.current;return registry.registerSlot(name,instance),()=>registry.unregisterSlot(name,instance)}),[registry,name]);let fills=null!==(_useObservableValue=(0,use_observable_value.A)(registry.fills,name))&&void 0!==_useObservableValue?_useObservableValue:[];(0,use_observable_value.A)(registry.slots,name)!==instanceRef.current&&(fills=[]);const renderedFills=fills.map((fill=>function addKeysToChildren(children){return react.Children.map(children,((child,childIndex)=>{if(!child||"string"==typeof child)return child;let childKey=childIndex;return"object"==typeof child&&"key"in child&&child?.key&&(childKey=child.key),(0,react.cloneElement)(child,{key:childKey})}))}(isFunction(fill.children)?fill.children(fillProps):fill.children))).filter((element=>!(0,utils.s)(element)));return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:isFunction(children)?children(renderedFills):renderedFills})}const slot=Slot;try{Slot.displayName="Slot",Slot.__docgenInfo={description:"",displayName:"Slot",props:{style:{defaultValue:null,description:"Additional styles for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"A function that returns nodes to be rendered.\nSupported only when `bubblesVirtually` is `false`.",name:"children",required:!1,type:{name:"(fills: ReactNode) => ReactNode"}},className:{defaultValue:null,description:"Additional className for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Slot name.",name:"name",required:!0,type:{name:"SlotKey"}},fillProps:{defaultValue:{value:"{}"},description:"props to pass from `Slot` to `Fill`.",name:"fillProps",required:!1,type:{name:"FillProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/slot.tsx#Slot"]={docgenInfo:Slot.__docgenInfo,name:"Slot",path:"packages/components/src/slot-fill/slot.tsx#Slot"})}catch(__react_docgen_typescript_loader_error){}var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),slot_fill_context=__webpack_require__("./packages/components/src/slot-fill/bubbles-virtually/slot-fill-context.ts"),style_provider=__webpack_require__("./packages/components/src/style-provider/index.tsx");function fill_Fill({name,children}){var _slot$fillProps;const registry=(0,react.useContext)(slot_fill_context.A),slot=(0,use_observable_value.A)(registry.slots,name),instanceRef=(0,react.useRef)({});if((0,react.useEffect)((()=>{const instance=instanceRef.current;return registry.registerFill(name,instance),()=>registry.unregisterFill(name,instance)}),[registry,name]),!slot||!slot.ref.current)return null;const wrappedChildren=(0,jsx_runtime.jsx)(style_provider.A,{document:slot.ref.current.ownerDocument,children:"function"==typeof children?children(null!==(_slot$fillProps=slot.fillProps)&&void 0!==_slot$fillProps?_slot$fillProps:{}):children});return(0,react_dom.createPortal)(wrappedChildren,slot.ref.current)}try{fill.displayName="fill",fill.__docgenInfo={description:"",displayName:"fill",props:{name:{defaultValue:null,description:"The name of the slot to fill into.",name:"name",required:!0,type:{name:"SlotKey"}},children:{defaultValue:null,description:"Children elements or render function.",name:"children",required:!1,type:{name:"FillChildren"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/bubbles-virtually/fill.tsx#fill"]={docgenInfo:fill.__docgenInfo,name:"fill",path:"packages/components/src/slot-fill/bubbles-virtually/fill.tsx#fill"})}catch(__react_docgen_typescript_loader_error){}var use_merge_refs=__webpack_require__("./packages/compose/build-module/hooks/use-merge-refs/index.js"),component=__webpack_require__("./packages/components/src/view/component.tsx");function slot_Slot(props,forwardedRef){const{name,fillProps={},as,children,...restProps}=props,registry=(0,react.useContext)(slot_fill_context.A),ref=(0,react.useRef)(null),fillPropsRef=(0,react.useRef)(fillProps);return(0,react.useLayoutEffect)((()=>{fillPropsRef.current=fillProps}),[fillProps]),(0,react.useLayoutEffect)((()=>(registry.registerSlot(name,ref,fillPropsRef.current),()=>registry.unregisterSlot(name,ref))),[registry,name]),(0,react.useLayoutEffect)((()=>{registry.updateSlot(name,ref,fillPropsRef.current)})),(0,jsx_runtime.jsx)(component.A,{as,ref:(0,use_merge_refs.A)([forwardedRef,ref]),...restProps})}const bubbles_virtually_slot=(0,react.forwardRef)(slot_Slot);try{slot_Slot.displayName="Slot",slot_Slot.__docgenInfo={description:"",displayName:"Slot",props:{style:{defaultValue:null,description:"Additional styles for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",name:"style",required:!1,type:{name:"CSSProperties"}},children:{defaultValue:null,description:"A function that returns nodes to be rendered.\nSupported only when `bubblesVirtually` is `false`.",name:"children",required:!1,type:{name:"(fills: ReactNode) => ReactNode"}},className:{defaultValue:null,description:"Additional className for the `Slot` component.\nSupported only when `bubblesVirtually` is `true`.",name:"className",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Slot name.",name:"name",required:!0,type:{name:"SlotKey"}},fillProps:{defaultValue:{value:"{}"},description:"props to pass from `Slot` to `Fill`.",name:"fillProps",required:!1,type:{name:"FillProps"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"select"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/bubbles-virtually/slot.tsx#Slot"]={docgenInfo:slot_Slot.__docgenInfo,name:"Slot",path:"packages/components/src/slot-fill/bubbles-virtually/slot.tsx#Slot"})}catch(__react_docgen_typescript_loader_error){}var build_module=__webpack_require__("./packages/is-shallow-equal/build-module/index.js");function createSlotRegistry(){const slots=(0,observable_map.u)(),fills=(0,observable_map.u)();return{slots,fills,registerSlot:(name,ref,fillProps)=>{slots.set(name,{ref,fillProps})},updateSlot:(name,ref,fillProps)=>{const slot=slots.get(name);slot&&slot.ref===ref&&((0,build_module.Ay)(slot.fillProps,fillProps)||slots.set(name,{ref,fillProps}))},unregisterSlot:(name,ref)=>{const slot=slots.get(name);slot&&slot.ref===ref&&slots.delete(name)},registerFill:(name,ref)=>{fills.set(name,[...fills.get(name)||[],ref])},unregisterFill:(name,ref)=>{const fillsForName=fills.get(name);fillsForName&&fills.set(name,fillsForName.filter((fillRef=>fillRef!==ref)))}}}function slot_fill_provider_SlotFillProvider({children}){const[registry]=(0,react.useState)(createSlotRegistry);return(0,jsx_runtime.jsx)(slot_fill_context.A.Provider,{value:registry,children})}try{slotfillprovider.displayName="slotfillprovider",slotfillprovider.__docgenInfo={description:"",displayName:"slotfillprovider",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},passthrough:{defaultValue:null,description:"Whether to pass slots to the parent provider if existent.",name:"passthrough",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/bubbles-virtually/slot-fill-provider.tsx#slotfillprovider"]={docgenInfo:slotfillprovider.__docgenInfo,name:"slotfillprovider",path:"packages/components/src/slot-fill/bubbles-virtually/slot-fill-provider.tsx#slotfillprovider"})}catch(__react_docgen_typescript_loader_error){}function provider_createSlotRegistry(){const slots=(0,observable_map.u)(),fills=(0,observable_map.u)();return{slots,fills,registerSlot:function registerSlot(name,instance){slots.set(name,instance)},unregisterSlot:function unregisterSlot(name,instance){slots.get(name)===instance&&slots.delete(name)},registerFill:function registerFill(name,instance,children){fills.set(name,[...fills.get(name)||[],{instance,children}])},unregisterFill:function unregisterFill(name,instance){const fillsForName=fills.get(name);fillsForName&&fills.set(name,fillsForName.filter((fill=>fill.instance!==instance)))},updateFill:function updateFill(name,instance,children){const fillsForName=fills.get(name);if(!fillsForName)return;const fillForInstance=fillsForName.find((f=>f.instance===instance));fillForInstance&&fillForInstance.children!==children&&fills.set(name,fillsForName.map((f=>f.instance===instance?{instance,children}:f)))}}}function provider_SlotFillProvider({children}){const[contextValue]=(0,react.useState)(provider_createSlotRegistry);return(0,jsx_runtime.jsx)(context.Provider,{value:contextValue,children})}const provider=provider_SlotFillProvider;try{provider_SlotFillProvider.displayName="SlotFillProvider",provider_SlotFillProvider.__docgenInfo={description:"",displayName:"SlotFillProvider",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},passthrough:{defaultValue:null,description:"Whether to pass slots to the parent provider if existent.",name:"passthrough",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/provider.tsx#SlotFillProvider"]={docgenInfo:provider_SlotFillProvider.__docgenInfo,name:"SlotFillProvider",path:"packages/components/src/slot-fill/provider.tsx#SlotFillProvider"})}catch(__react_docgen_typescript_loader_error){}function slot_fill_Fill(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Fill,{...props}),(0,jsx_runtime.jsx)(fill_Fill,{...props})]})}const slot_fill_Slot=(0,react.forwardRef)((function UnforwardedSlot(props,ref){const{bubblesVirtually,...restProps}=props;return bubblesVirtually?(0,jsx_runtime.jsx)(bubbles_virtually_slot,{...restProps,ref}):(0,jsx_runtime.jsx)(slot,{...restProps})}));function Provider({children,passthrough=!1}){return!(0,react.useContext)(slot_fill_context.A).isDefault&&passthrough?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children}):(0,jsx_runtime.jsx)(provider,{children:(0,jsx_runtime.jsx)(slot_fill_provider_SlotFillProvider,{children})})}function createSlotFill(key){const baseName="symbol"==typeof key?key.description:key,FillComponent=props=>(0,jsx_runtime.jsx)(slot_fill_Fill,{name:key,...props});FillComponent.displayName=`${baseName}Fill`;const SlotComponent=props=>(0,jsx_runtime.jsx)(slot_fill_Slot,{name:key,...props});return SlotComponent.displayName=`${baseName}Slot`,SlotComponent.__unstableName=key,{name:key,Fill:FillComponent,Slot:SlotComponent}}Provider.displayName="SlotFillProvider";try{slot_fill_Fill.displayName="SlotFillProvider",slot_fill_Fill.__docgenInfo={description:"",displayName:"SlotFillProvider",props:{name:{defaultValue:null,description:"The name of the slot to fill into.",name:"name",required:!0,type:{name:"SlotKey"}},children:{defaultValue:null,description:"Children elements or render function.",name:"children",required:!1,type:{name:"FillChildren"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/slot-fill/index.tsx#SlotFillProvider"]={docgenInfo:SlotFillProvider.__docgenInfo,name:"SlotFillProvider",path:"packages/components/src/slot-fill/index.tsx#SlotFillProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/style-provider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,N:()=>StyleProvider});var _emotion_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-699e6908.browser.esm.js"),_emotion_cache__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),uuid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/node_modules/uuid/dist/esm-browser/v4.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const uuidCache=new Set,containerCacheMap=new WeakMap,memoizedCreateCacheWithContainer=container=>{if(containerCacheMap.has(container))return containerCacheMap.get(container);let key=uuid__WEBPACK_IMPORTED_MODULE_2__.A().replace(/[0-9]/g,"");for(;uuidCache.has(key);)key=uuid__WEBPACK_IMPORTED_MODULE_2__.A().replace(/[0-9]/g,"");uuidCache.add(key);const cache=(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__.A)({container,key});return containerCacheMap.set(container,cache),cache};function StyleProvider(props){const{children,document}=props;if(!document)return null;const cache=memoizedCreateCacheWithContainer(document.head);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.C,{value:cache,children})}const __WEBPACK_DEFAULT_EXPORT__=StyleProvider;try{StyleProvider.displayName="StyleProvider",StyleProvider.__docgenInfo={description:"",displayName:"StyleProvider",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},document:{defaultValue:null,description:"Current document.",name:"document",required:!0,type:{name:"Document"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/style-provider/index.tsx#StyleProvider"]={docgenInfo:StyleProvider.__docgenInfo,name:"StyleProvider",path:"packages/components/src/style-provider/index.tsx#StyleProvider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/view/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PolymorphicDiv=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.A)("div",{target:"e19lxcc00"})("");const View=Object.assign((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function UnforwardedView({as,...restProps},ref){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PolymorphicDiv,{as,ref,...restProps})})),{selector:".components-view"}),__WEBPACK_DEFAULT_EXPORT__=View;try{View.displayName="View",View.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"View",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#View"]={docgenInfo:View.__docgenInfo,name:"View",path:"packages/components/src/view/component.tsx#View"})}catch(__react_docgen_typescript_loader_error){}try{component.displayName="component",component.__docgenInfo={description:"`View` is a core component that renders everything in the library.\nIt is the principle component in the entire library.\n\n```jsx\nimport { View } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<View>\n\t\t\t Code is Poetry\n\t\t</View>\n\t);\n}\n```",displayName:"component",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/view/component.tsx#component"]={docgenInfo:component.__docgenInfo,name:"component",path:"packages/components/src/view/component.tsx#component"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var getRandomValues;__webpack_require__.d(__webpack_exports__,{A:()=>esm_browser_v4});var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));const esm_browser_stringify=function stringify(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!esm_browser_validate(uuid))throw TypeError("Stringified UUID is invalid");return uuid};const esm_browser_v4=function v4(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}}}]);