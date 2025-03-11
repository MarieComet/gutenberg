"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[3242],{"./packages/icons/build-module/library/check.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.t4,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.wA,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})})},"./packages/components/src/custom-select-control-v2/custom-select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,P:()=>CustomSelectContext});var _ariakit_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/YV4JVR4I.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ariakit/react-core/esm/select/select-label.js"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/i18n/build-module/index.js"),___WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/visually-hidden/component.tsx"),_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/custom-select-control-v2/styles.ts"),_input_control_input_base__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/components/src/input-control/input-base.tsx"),_select_control_chevron_down__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/components/src/select-control/chevron-down.tsx"),_base_control__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/components/src/base-control/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const CustomSelectContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createContext)(void 0);function defaultRenderSelectedValue(value){return(Array.isArray(value)?0===value.length:null==value)?(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select an item"):Array.isArray(value)?1===value.length?value[0]:(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.nv)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("%s items selected"),value.length):value}const CustomSelectButton=({renderSelectedValue,size="default",store,...restProps})=>{const{value:currentValue}=_ariakit_react__WEBPACK_IMPORTED_MODULE_3__.O$(store),computedRenderSelectedValue=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>null!=renderSelectedValue?renderSelectedValue:defaultRenderSelectedValue),[renderSelectedValue]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_4__.l6,{...restProps,size,hasCustomRenderProp:!!renderSelectedValue,store,children:computedRenderSelectedValue(currentValue)})};function _CustomSelect(props){const{children,hideLabelFromVision=!1,label,size,store,className,isLegacy=!1,...restProps}=props,onSelectPopoverKeyDown=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e=>{isLegacy&&e.stopPropagation()}),[isLegacy]),contextValue=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)((()=>({store,size})),[store,size]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ariakit_react__WEBPACK_IMPORTED_MODULE_5__.T,{store,render:hideLabelFromVision?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.A,{}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_base_control__WEBPACK_IMPORTED_MODULE_7__.Ay.VisualLabel,{as:"div"}),children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_input_control_input_base__WEBPACK_IMPORTED_MODULE_8__.A,{__next40pxDefaultSize:!0,size,suffix:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_select_control_chevron_down__WEBPACK_IMPORTED_MODULE_9__.A,{}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CustomSelectButton,{...restProps,size,store,showOnKeyDown:!isLegacy}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_4__.kA,{gutter:12,store,sameWidth:!0,slide:!1,onKeyDown:onSelectPopoverKeyDown,flip:!isLegacy,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CustomSelectContext.Provider,{value:contextValue,children})})]})]})}const __WEBPACK_DEFAULT_EXPORT__=_CustomSelect;try{_CustomSelect.displayName="_CustomSelect",_CustomSelect.__docgenInfo={description:"",displayName:"_CustomSelect",props:{isLegacy:{defaultValue:null,description:"True if the consumer is emulating the legacy component behavior and look",name:"isLegacy",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"An optional default value for the control when used in uncontrolled mode.\nIf left `undefined`, the first non-disabled item will be used.",name:"defaultValue",required:!1,type:{name:"string | string[]"}},onChange:{defaultValue:null,description:"A function that receives the new value of the input.",name:"onChange",required:!1,type:{name:"(newValue: string | string[]) => void"}},renderSelectedValue:{defaultValue:null,description:"Can be used to render select UI with custom styled values.",name:"renderSelectedValue",required:!1,type:{name:"(selectedValue: string | string[]) => ReactNode"}},value:{defaultValue:null,description:"The value of the control when used in uncontrolled mode.",name:"value",required:!1,type:{name:"string | string[]"}},className:{defaultValue:null,description:"Additional className added to the root wrapper element.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The child elements. This should be composed of `CustomSelectItem` components.",name:"children",required:!0,type:{name:"ReactNode"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"Used to visually hide the label. It will always be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Accessible label for the control.",name:"label",required:!0,type:{name:"string"}},store:{defaultValue:null,description:"The store object returned by Ariakit's `useSelectStore` hook.",name:"store",required:!0,type:{name:"SelectStore<SelectStoreValue>"}},size:{defaultValue:{value:"default"},description:"The size of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'},{value:'"compact"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-select-control-v2/custom-select.tsx#_CustomSelect"]={docgenInfo:_CustomSelect.__docgenInfo,name:"_CustomSelect",path:"packages/components/src/custom-select-control-v2/custom-select.tsx#_CustomSelect"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/custom-select-control-v2/item.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/icons/build-module/icon/index.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/icons/build-module/library/check.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/custom-select-control-v2/styles.ts"),_custom_select__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/custom-select-control-v2/custom-select.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function CustomSelectItem({children,...props}){var _customSelectContext$;const customSelectContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(_custom_select__WEBPACK_IMPORTED_MODULE_2__.P);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles__WEBPACK_IMPORTED_MODULE_3__.eb,{store:customSelectContext?.store,size:null!==(_customSelectContext$=customSelectContext?.size)&&void 0!==_customSelectContext$?_customSelectContext$:"default",...props,children:[null!=children?children:props.value,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_3__.lc,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__.A,{icon:_wordpress_icons__WEBPACK_IMPORTED_MODULE_5__.A})})]})}CustomSelectItem.displayName="CustomSelectControlV2.Item";const __WEBPACK_DEFAULT_EXPORT__=CustomSelectItem;try{CustomSelectItem.displayName="CustomSelectControlV2.Item",CustomSelectItem.__docgenInfo={description:"",displayName:"CustomSelectControlV2.Item",props:{value:{defaultValue:null,description:"The value of the select item. This will be used as the children if\nchildren are left `undefined`.",name:"value",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"The children to display for each select item. The `value` will be\nused if left `undefined`.",name:"children",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"If true, the item will be disabled.\n\nYou will need to add your own styles (e.g. reduced opacity) to visually show that they are disabled.",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/custom-select-control-v2/item.tsx#CustomSelectControlV2.Item"]={docgenInfo:CustomSelectControlV2.Item.__docgenInfo,name:"CustomSelectControlV2.Item",path:"packages/components/src/custom-select-control-v2/item.tsx#CustomSelectControlV2.Item"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/custom-select-control-v2/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gr:()=>WithHintItemWrapper,K7:()=>WithHintItemHint,eb:()=>SelectItem,kA:()=>SelectPopover,l6:()=>Select,lc:()=>SelectedItemCheck,o$:()=>SelectedExperimentalHintItem,oE:()=>SelectedExperimentalHintWrapper});var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ariakit/react-core/esm/select/select.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ariakit/react-core/esm/select/select-popover.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/YF2ICFG4.js"),_ariakit_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@ariakit/react-core/esm/select/select-item-check.js"),_emotion_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/utils/config-values.js"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/components/src/utils/colors-values.js"),_utils_space__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/components/src/utils/space.ts"),_select_control_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/select-control/styles/select-control-styles.ts"),_input_control_styles_input_control_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/input-control/styles/input-control-styles.tsx");const ANIMATION_PARAMS_SLIDE_AMOUNT="2px",ANIMATION_PARAMS_DURATION="400ms",ANIMATION_PARAMS_EASING="cubic-bezier( 0.16, 1, 0.3, 1 )",INLINE_PADDING={compact:_utils__WEBPACK_IMPORTED_MODULE_1__.A.controlPaddingXSmall,small:_utils__WEBPACK_IMPORTED_MODULE_1__.A.controlPaddingXSmall,default:_utils__WEBPACK_IMPORTED_MODULE_1__.A.controlPaddingX},Select=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.A)(_ariakit_react__WEBPACK_IMPORTED_MODULE_3__.l,{shouldForwardProp:prop=>"hasCustomRenderProp"!==prop,target:"e1p3eej77"})((({size,hasCustomRenderProp})=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)("display:block;background-color:",_utils__WEBPACK_IMPORTED_MODULE_5__.l.theme.background,";border:none;color:",_utils__WEBPACK_IMPORTED_MODULE_5__.l.theme.foreground,";cursor:pointer;font-family:inherit;text-align:start;user-select:none;width:100%;&[data-focus-visible]{outline:none;}",((size,heightProperty)=>{const sizes={compact:{[heightProperty]:32,paddingInlineStart:INLINE_PADDING.compact,paddingInlineEnd:INLINE_PADDING.compact+_select_control_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_2__.qO},default:{[heightProperty]:40,paddingInlineStart:INLINE_PADDING.default,paddingInlineEnd:INLINE_PADDING.default+_select_control_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_2__.qO},small:{[heightProperty]:24,paddingInlineStart:INLINE_PADDING.small,paddingInlineEnd:INLINE_PADDING.small+_select_control_styles_select_control_styles__WEBPACK_IMPORTED_MODULE_2__.qO}};return sizes[size]||sizes.default})(size,hasCustomRenderProp?"minHeight":"height")," ",!hasCustomRenderProp&&truncateStyles," ",(0,_input_control_styles_input_control_styles__WEBPACK_IMPORTED_MODULE_6__.TA)({inputSize:size}),";","")),""),slideDownAndFade=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.i7)({"0%":{opacity:0,transform:`translateY(-${ANIMATION_PARAMS_SLIDE_AMOUNT})`},"100%":{opacity:1,transform:"translateY(0)"}}),SelectPopover=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.A)(_ariakit_react__WEBPACK_IMPORTED_MODULE_7__.k,{target:"e1p3eej76"})("display:flex;flex-direction:column;background-color:",_utils__WEBPACK_IMPORTED_MODULE_5__.l.theme.background,";border-radius:",_utils__WEBPACK_IMPORTED_MODULE_1__.A.radiusSmall,";border:1px solid ",_utils__WEBPACK_IMPORTED_MODULE_5__.l.theme.foreground,";box-shadow:",_utils__WEBPACK_IMPORTED_MODULE_1__.A.elevationMedium,";z-index:1000000;max-height:min( var( --popover-available-height, 400px ), 400px );overflow:auto;overscroll-behavior:contain;min-width:min-content;&[data-open]{@media not ( prefers-reduced-motion ){animation-duration:",ANIMATION_PARAMS_DURATION,";animation-timing-function:",ANIMATION_PARAMS_EASING,";animation-name:",slideDownAndFade,";will-change:transform,opacity;}}&[data-focus-visible]{outline:none;}"),SelectItem=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.A)(_ariakit_react__WEBPACK_IMPORTED_MODULE_8__.e,{target:"e1p3eej75"})((({size})=>(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.AH)("cursor:default;display:flex;align-items:center;justify-content:space-between;font-size:",_utils__WEBPACK_IMPORTED_MODULE_1__.A.fontSize,";line-height:28px;padding-block:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_9__.x)(2),";scroll-margin:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_9__.x)(1),";user-select:none;&[aria-disabled='true']{cursor:not-allowed;}&[data-active-item]{background-color:",_utils__WEBPACK_IMPORTED_MODULE_5__.l.theme.gray[300],";}",(size=>{const sizes={compact:{paddingInlineStart:INLINE_PADDING.compact,paddingInlineEnd:INLINE_PADDING.compact-6},default:{paddingInlineStart:INLINE_PADDING.default,paddingInlineEnd:INLINE_PADDING.default-6},small:{paddingInlineStart:INLINE_PADDING.small,paddingInlineEnd:INLINE_PADDING.small-6}};return sizes[size]||sizes.default})(size),";","")),""),truncateStyles={name:"1h52dri",styles:"overflow:hidden;text-overflow:ellipsis;white-space:nowrap"},SelectedExperimentalHintWrapper=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.A)("div",{target:"e1p3eej74"})(truncateStyles,";"),SelectedExperimentalHintItem=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.A)("span",{target:"e1p3eej73"})("color:",_utils__WEBPACK_IMPORTED_MODULE_5__.l.theme.gray[600],";margin-inline-start:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_9__.x)(2),";"),WithHintItemWrapper=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.A)("div",{target:"e1p3eej72"})("display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;flex:1;column-gap:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_9__.x)(4),";"),WithHintItemHint=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.A)("span",{target:"e1p3eej71"})("color:",_utils__WEBPACK_IMPORTED_MODULE_5__.l.theme.gray[600],";text-align:initial;line-height:",_utils__WEBPACK_IMPORTED_MODULE_1__.A.fontLineHeightBase,";padding-inline-end:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_9__.x)(1),";margin-block:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_9__.x)(1),";"),SelectedItemCheck=(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__.A)(_ariakit_react__WEBPACK_IMPORTED_MODULE_10__.u,{target:"e1p3eej70"})("display:flex;align-items:center;margin-inline-start:",(0,_utils_space__WEBPACK_IMPORTED_MODULE_9__.x)(2),";align-self:start;margin-block-start:2px;font-size:0;",WithHintItemWrapper,"~&,&:not(:empty){font-size:24px;}")}}]);