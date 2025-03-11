"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[3261],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./storybook/stories/docs/introduction.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),icons_dist=__webpack_require__("./node_modules/@storybook/icons/dist/index.mjs");const IconWrapper=({icon,...props})=>{const IconComponent=icon;return(0,jsx_runtime.jsx)(IconComponent,{"aria-hidden":!0,...props})},InlineIcon=(0,__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js").A)(IconWrapper,{target:"e1sqd5x60"})({name:"p9t351",styles:"display:inline-block!important;width:14px"});function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Docs/Introduction",name:"page"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"introduction",children:"Introduction"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"welcome",children:"Welcome!"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The WordPress Gutenberg project uses Storybook to view and work with the UI components developed in WordPress packages, especially ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/WordPress/gutenberg/tree/trunk/packages/components",rel:"nofollow",children:"@wordpress/components"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"On this interactive site you can browse individual components, their controls, options, and settings in isolation. You can also modify controls and arguments and see the changes right away."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The components displayed on this site can be used in your code to build the editor's UI for your custom blocks or other pages.\nImport them from the components root directory like in below example:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Button } from '@wordpress/components';\n\nexport default function MyButton() {\n\treturn <Button>Click Me!</Button>;\n}\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"how-this-site-works",children:"How this site works"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The site shows the individual components in the sidebar and the Canvas on the right. Select the component you’d like to explore, and you’ll see the display on the ",(0,jsx_runtime.jsx)(_components.strong,{children:"Canvas"})," tab. If the component also has controls/arguments, you can modify them on the ",(0,jsx_runtime.jsx)(_components.strong,{children:"Controls"})," tab on the lower half of the screen."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To view the documentation for each component use the ",(0,jsx_runtime.jsx)(_components.strong,{children:"Docs"})," menu item in the top toolbar."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To view the source code for the component and its stories on GitHub, click the ",(0,jsx_runtime.jsx)(InlineIcon,{icon:icons_dist.SYR})," View Source Repository button in the top right corner."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"To use it in your local development environment run the following command in the top level Gutenberg directory:"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm run storybook:dev\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"resources-to-learn-more",children:"Resources to learn more:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://storybook.js.org/",rel:"nofollow",children:"Storybook.js.org"})," - Storybook is a frontend workshop for building UI components and pages in isolation."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/WordPress/gutenberg/issues?q=is%3Aopen+is%3Aissue+label%3A%22%5BPackage%5D+Components%22",rel:"nofollow",children:"[Package] Components"})," - Open Issue Gutenberg Repo"]}),"\n"]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);