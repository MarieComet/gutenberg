"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[9582],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./storybook/stories/tokens/radius.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_gutenberg_gutenberg_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_components_tsx__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./storybook/stories/tokens/components.tsx");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,_home_runner_work_gutenberg_gutenberg_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"Tokens/Radius",name:"page"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"radius",children:"Radius"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"This document outlines the various tokens relating to radius in the WordPress design system."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"values",children:"Values"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Tokens can be used in different ways, but regardless of which method is used, each one is meant to be used as the value of the CSS ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"border-radius"})," property, and references the following values:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_tsx__WEBPACK_IMPORTED_MODULE_2__.j,{tokenCategory:"radius",tokens:[{name:"Extra small",valueShow:"1px",valueCode:"1px"},{name:"Small",valueShow:"2px",valueCode:"2px"},{name:"Medium",valueShow:"4px",valueCode:"4px"},{name:"Large",valueShow:"8px",valueCode:"8px"},{name:"Full",valueShow:"9999px",valueCode:"9999px"},{name:"Round",valueShow:"100%",valueCode:"100%"}],applyTokenStyle:valueCode=>({borderRadius:valueCode,border:"1px solid #1e1e1e"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"css-tokens",children:"CSS tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Radius tokens are defined as SASS variables:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"$radius-x-small"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"$radius-small"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"$radius-medium"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"$radius-large"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"$radius-full"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"$radius-round"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"They can be used like so:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:".radius-extra-small {\n\tborder-radius: $radius-x-small;\n}\n.radius-small {\n\tborder-radius: $radius-small;\n}\n.radius-medium {\n\tborder-radius: $radius-medium;\n}\n.radius-large {\n\tborder-radius: $radius-large;\n}\n.radius-full {\n\tborder-radius: $radius-full;\n}\n.radius-round {\n\tborder-radius: $radius-round;\n}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"js-tokens",children:"JS tokens"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["When working in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@wordpress/components"})," package, the radius tokens can also be consumed as JavaScript variables via the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CONFIG"})," object found in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"packages/components/src/utils/index.js"})," file:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CONFIG.radiusXSmall"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CONFIG.radiusSmall"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CONFIG.radiusMedium"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CONFIG.radiusLarge"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CONFIG.radiusFull"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"CONFIG.radiusRound"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-js",children:"// Note: the `CONFIG` object is only available within the `@wordpress/components` package.\nimport { CONFIG } from '../utils';\n\n// Later in the code:\nborder-radius: ${ CONFIG.radiusXSmall };\n"})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_gutenberg_gutenberg_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./storybook/stories/tokens/components.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>TokensTable});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TokensTable=({tokenCategory,tokens,applyTokenStyle})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table",{style:{width:"100%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th",{children:"Token"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th",{children:"Value"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th",{children:"Example"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tbody",{children:tokens.map((({name,valueShow,valueCode})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{style:{whiteSpace:"nowrap"},children:name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code",{style:{lineHeight:1,margin:"0 2px",padding:"3px 5px",borderRadius:"3px",fontSize:"13px",border:"1px solid #ECF4F9",color:"rgba(46, 52, 56, 0.9)",backgroundColor:"#F7FAFC"},children:valueShow})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{style:{padding:"24px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{"aria-label":`A shape showing an example of the '${name}' ${tokenCategory} token`,style:{width:"100px",height:"100px",background:"white",...applyTokenStyle(valueCode)}})})]},name)))})]});try{TokensTable.displayName="TokensTable",TokensTable.__docgenInfo={description:"",displayName:"TokensTable",props:{tokenCategory:{defaultValue:null,description:"",name:"tokenCategory",required:!0,type:{name:"any"}},tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"any"}},applyTokenStyle:{defaultValue:null,description:"",name:"applyTokenStyle",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["storybook/stories/tokens/components.tsx#TokensTable"]={docgenInfo:TokensTable.__docgenInfo,name:"TokensTable",path:"storybook/stories/tokens/components.tsx#TokensTable"})}catch(__react_docgen_typescript_loader_error){}}}]);