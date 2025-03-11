"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[7244],{"./packages/block-editor/src/components/block-mover/stories/index.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,HideDragHandle:()=>HideDragHandle,Horizontal:()=>Horizontal,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),build_module=__webpack_require__("./packages/blocks/build-module/index.js"),block_library_build_module=__webpack_require__("./packages/block-library/build-module/index.js"),use_dispatch=__webpack_require__("./packages/data/build-module/components/use-dispatch/use-dispatch.js"),toolbar=__webpack_require__("./packages/components/build-module/toolbar/toolbar/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),drag_handle=__webpack_require__("./packages/icons/build-module/library/drag-handle.js"),toolbar_group=__webpack_require__("./packages/components/build-module/toolbar/toolbar-group/index.js"),build_module_button=__webpack_require__("./packages/components/build-module/button/index.js"),toolbar_item=__webpack_require__("./packages/components/build-module/toolbar/toolbar-item/index.js"),use_select=__webpack_require__("./packages/data/build-module/components/use-select/index.js"),i18n_build_module=__webpack_require__("./packages/i18n/build-module/index.js"),draggable=__webpack_require__("./packages/components/build-module/draggable/index.js"),throttle=__webpack_require__("./packages/compose/build-module/utils/throttle/index.js"),draggable_chip=__webpack_require__("./packages/block-editor/src/components/block-draggable/draggable-chip.js"),get_scroll_container=__webpack_require__("./packages/dom/build-module/dom/get-scroll-container.js");var store=__webpack_require__("./packages/block-editor/src/store/index.js"),use_block_refs=__webpack_require__("./packages/block-editor/src/components/block-list/use-block-props/use-block-refs.js"),use_block_drop_zone=__webpack_require__("./packages/block-editor/src/components/use-block-drop-zone/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BlockDraggable=({appendToOwnerDocument,children,clientIds,cloneClassname,elementId,onDragStart,onDragEnd,fadeWhenDisabled=!1,dragComponent})=>{const{srcRootClientId,isDraggable,icon,visibleInserter,getBlockType}=(0,use_select.A)((select=>{const{canMoveBlocks,getBlockRootClientId,getBlockName,getBlockAttributes,isBlockInsertionPointVisible}=select(store.M),{getBlockType:_getBlockType,getActiveBlockVariation}=select(build_module.M_),rootClientId=getBlockRootClientId(clientIds[0]),blockName=getBlockName(clientIds[0]),variation=getActiveBlockVariation(blockName,getBlockAttributes(clientIds[0]));return{srcRootClientId:rootClientId,isDraggable:canMoveBlocks(clientIds),icon:variation?.icon||_getBlockType(blockName)?.icon,visibleInserter:isBlockInsertionPointVisible(),getBlockType:_getBlockType}}),[clientIds]),isDraggingRef=(0,react.useRef)(!1),[startScrolling,scrollOnDragOver,stopScrolling]=function useScrollWhenDragging(){const dragStartYRef=(0,react.useRef)(null),velocityYRef=(0,react.useRef)(null),scrollParentYRef=(0,react.useRef)(null),scrollEditorIntervalRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>()=>{scrollEditorIntervalRef.current&&(clearInterval(scrollEditorIntervalRef.current),scrollEditorIntervalRef.current=null)}),[]),[(0,react.useCallback)((event=>{dragStartYRef.current=event.clientY,scrollParentYRef.current=(0,get_scroll_container.A)(event.target),scrollEditorIntervalRef.current=setInterval((()=>{if(scrollParentYRef.current&&velocityYRef.current){const newTop=scrollParentYRef.current.scrollTop+velocityYRef.current;scrollParentYRef.current.scroll({top:newTop})}}),25)}),[]),(0,react.useCallback)((event=>{if(!scrollParentYRef.current)return;const scrollParentHeight=scrollParentYRef.current.offsetHeight,offsetDragStartPosition=dragStartYRef.current-scrollParentYRef.current.offsetTop,offsetDragPosition=event.clientY-scrollParentYRef.current.offsetTop;if(event.clientY>offsetDragStartPosition){const moveableDistance=Math.max(scrollParentHeight-offsetDragStartPosition-50,0),dragDistance=Math.max(offsetDragPosition-offsetDragStartPosition-50,0),distancePercentage=0===moveableDistance||0===dragDistance?0:dragDistance/moveableDistance;velocityYRef.current=25*distancePercentage}else if(event.clientY<offsetDragStartPosition){const moveableDistance=Math.max(offsetDragStartPosition-50,0),dragDistance=Math.max(offsetDragStartPosition-offsetDragPosition-50,0),distancePercentage=0===moveableDistance||0===dragDistance?0:dragDistance/moveableDistance;velocityYRef.current=-25*distancePercentage}else velocityYRef.current=0}),[]),()=>{dragStartYRef.current=null,scrollParentYRef.current=null,scrollEditorIntervalRef.current&&(clearInterval(scrollEditorIntervalRef.current),scrollEditorIntervalRef.current=null)}]}(),{getAllowedBlocks,getBlockNamesByClientId,getBlockRootClientId}=(0,use_select.A)(store.M),{startDraggingBlocks,stopDraggingBlocks}=(0,use_dispatch.A)(store.M);(0,react.useEffect)((()=>()=>{isDraggingRef.current&&stopDraggingBlocks()}),[]);const blockEl=(0,use_block_refs.dN)(clientIds[0]),editorRoot=blockEl?.closest("body");if((0,react.useEffect)((()=>{if(!editorRoot||!fadeWhenDisabled)return;const throttledOnDragOver=(0,throttle.n)((event=>{if(!event.target.closest("[data-block]"))return;const draggedBlockNames=getBlockNamesByClientId(clientIds),targetClientId=event.target.closest("[data-block]").getAttribute("data-block"),allowedBlocks=getAllowedBlocks(targetClientId),targetBlockName=getBlockNamesByClientId([targetClientId])[0];let dropTargetValid;if(0===allowedBlocks?.length){const targetRootClientId=getBlockRootClientId(targetClientId),targetRootBlockName=getBlockNamesByClientId([targetRootClientId])[0],rootAllowedBlocks=getAllowedBlocks(targetRootClientId);dropTargetValid=(0,use_block_drop_zone.tq)(getBlockType,rootAllowedBlocks,draggedBlockNames,targetRootBlockName)}else dropTargetValid=(0,use_block_drop_zone.tq)(getBlockType,allowedBlocks,draggedBlockNames,targetBlockName);dropTargetValid||visibleInserter?window?.document?.body?.classList?.remove("block-draggable-invalid-drag-token"):window?.document?.body?.classList?.add("block-draggable-invalid-drag-token")}),200);return editorRoot.addEventListener("dragover",throttledOnDragOver),()=>{editorRoot.removeEventListener("dragover",throttledOnDragOver)}}),[clientIds,editorRoot,fadeWhenDisabled,getAllowedBlocks,getBlockNamesByClientId,getBlockRootClientId,getBlockType,visibleInserter]),!isDraggable)return children({draggable:!1});const transferData={type:"block",srcClientIds:clientIds,srcRootClientId};return(0,jsx_runtime.jsx)(draggable.A,{appendToOwnerDocument,cloneClassname,__experimentalTransferDataType:"wp-blocks",transferData,onDragStart:event=>{window.requestAnimationFrame((()=>{startDraggingBlocks(clientIds),isDraggingRef.current=!0,startScrolling(event),onDragStart&&onDragStart()}))},onDragOver:scrollOnDragOver,onDragEnd:()=>{stopDraggingBlocks(),isDraggingRef.current=!1,stopScrolling(),onDragEnd&&onDragEnd()},__experimentalDragComponent:void 0!==dragComponent?dragComponent:(0,jsx_runtime.jsx)(draggable_chip.A,{count:clientIds.length,icon,fadeWhenDisabled:!0}),elementId,children:({onDraggableStart,onDraggableEnd})=>children({draggable:!0,onDragStart:onDraggableStart,onDragEnd:onDraggableEnd})})},block_draggable=BlockDraggable;BlockDraggable.__docgenInfo={description:"",methods:[],displayName:"BlockDraggable",props:{fadeWhenDisabled:{defaultValue:{value:"false",computed:!1},required:!1}}};var component=__webpack_require__("./packages/components/build-module/visually-hidden/component.js"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),chevron_right=__webpack_require__("./packages/icons/build-module/library/chevron-right.js"),chevron_left=__webpack_require__("./packages/icons/build-module/library/chevron-left.js"),chevron_up=__webpack_require__("./packages/icons/build-module/library/chevron-up.js"),chevron_down=__webpack_require__("./packages/icons/build-module/library/chevron-down.js");const getMovementDirection=(moveDirection,orientation)=>"up"===moveDirection?"horizontal"===orientation?(0,i18n_build_module.V8)()?"right":"left":"up":"down"===moveDirection?"horizontal"===orientation?(0,i18n_build_module.V8)()?"left":"right":"down":null;function getBlockMoverDescription(selectedCount,type,firstIndex,isFirst,isLast,dir,orientation){const position=firstIndex+1;if(selectedCount>1)return function getMultiBlockMoverDescription(selectedCount,firstIndex,isFirst,isLast,dir,orientation){const position=firstIndex+1;if(isFirst&&isLast)return(0,i18n_build_module.__)("All blocks are selected, and cannot be moved");if(dir>0&&!isLast){const movementDirection=getMovementDirection("down",orientation);if("down"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Move %1$d blocks from position %2$d down by one place"),selectedCount,position);if("left"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Move %1$d blocks from position %2$d left by one place"),selectedCount,position);if("right"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Move %1$d blocks from position %2$d right by one place"),selectedCount,position)}if(dir>0&&isLast){const movementDirection=getMovementDirection("down",orientation);if("down"===movementDirection)return(0,i18n_build_module.__)("Blocks cannot be moved down as they are already at the bottom");if("left"===movementDirection)return(0,i18n_build_module.__)("Blocks cannot be moved left as they are already are at the leftmost position");if("right"===movementDirection)return(0,i18n_build_module.__)("Blocks cannot be moved right as they are already are at the rightmost position")}if(dir<0&&!isFirst){const movementDirection=getMovementDirection("up",orientation);if("up"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Move %1$d blocks from position %2$d up by one place"),selectedCount,position);if("left"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Move %1$d blocks from position %2$d left by one place"),selectedCount,position);if("right"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Move %1$d blocks from position %2$d right by one place"),selectedCount,position)}if(dir<0&&isFirst){const movementDirection=getMovementDirection("up",orientation);if("up"===movementDirection)return(0,i18n_build_module.__)("Blocks cannot be moved up as they are already at the top");if("left"===movementDirection)return(0,i18n_build_module.__)("Blocks cannot be moved left as they are already are at the leftmost position");if("right"===movementDirection)return(0,i18n_build_module.__)("Blocks cannot be moved right as they are already are at the rightmost position")}}(selectedCount,firstIndex,isFirst,isLast,dir,orientation);if(isFirst&&isLast)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Block %s is the only block, and cannot be moved"),type);if(dir>0&&!isLast){const movementDirection=getMovementDirection("down",orientation);if("down"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Move %1$s block from position %2$d down to position %3$d"),type,position,position+1);if("left"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Move %1$s block from position %2$d left to position %3$d"),type,position,position+1);if("right"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Move %1$s block from position %2$d right to position %3$d"),type,position,position+1)}if(dir>0&&isLast){const movementDirection=getMovementDirection("down",orientation);if("down"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Block %1$s is at the end of the content and can’t be moved down"),type);if("left"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Block %1$s is at the end of the content and can’t be moved left"),type);if("right"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Block %1$s is at the end of the content and can’t be moved right"),type)}if(dir<0&&!isFirst){const movementDirection=getMovementDirection("up",orientation);if("up"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Move %1$s block from position %2$d up to position %3$d"),type,position,position-1);if("left"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Move %1$s block from position %2$d left to position %3$d"),type,position,position-1);if("right"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Move %1$s block from position %2$d right to position %3$d"),type,position,position-1)}if(dir<0&&isFirst){const movementDirection=getMovementDirection("up",orientation);if("up"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Block %1$s is at the beginning of the content and can’t be moved up"),type);if("left"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Block %1$s is at the beginning of the content and can’t be moved left"),type);if("right"===movementDirection)return(0,i18n_build_module.nv)((0,i18n_build_module.__)("Block %1$s is at the beginning of the content and can’t be moved right"),type)}}const getArrowIcon=(direction,orientation)=>"up"===direction?"horizontal"===orientation?(0,i18n_build_module.V8)()?chevron_right.A:chevron_left.A:chevron_up.A:"down"===direction?"horizontal"===orientation?(0,i18n_build_module.V8)()?chevron_left.A:chevron_right.A:chevron_down.A:null,getMovementDirectionLabel=(moveDirection,orientation)=>"up"===moveDirection?"horizontal"===orientation?(0,i18n_build_module.V8)()?(0,i18n_build_module.__)("Move right"):(0,i18n_build_module.__)("Move left"):(0,i18n_build_module.__)("Move up"):"down"===moveDirection?"horizontal"===orientation?(0,i18n_build_module.V8)()?(0,i18n_build_module.__)("Move left"):(0,i18n_build_module.__)("Move right"):(0,i18n_build_module.__)("Move down"):null,BlockMoverButton=(0,react.forwardRef)((({clientIds,direction,orientation:moverOrientation,...props},ref)=>{const instanceId=(0,use_instance_id.A)(BlockMoverButton),normalizedClientIds=Array.isArray(clientIds)?clientIds:[clientIds],blocksCount=normalizedClientIds.length,{disabled}=props,{blockType,isDisabled,rootClientId,isFirst,isLast,firstIndex,orientation="vertical"}=(0,use_select.A)((select=>{const{getBlockIndex,getBlockRootClientId,getBlockOrder,getBlock,getBlockListSettings}=select(store.M),firstClientId=normalizedClientIds[0],blockRootClientId=getBlockRootClientId(firstClientId),firstBlockIndex=getBlockIndex(firstClientId),lastBlockIndex=getBlockIndex(normalizedClientIds[normalizedClientIds.length-1]),blockOrder=getBlockOrder(blockRootClientId),block=getBlock(firstClientId),isFirstBlock=0===firstBlockIndex,isLastBlock=lastBlockIndex===blockOrder.length-1,{orientation:blockListOrientation}=getBlockListSettings(blockRootClientId)||{};return{blockType:block?(0,build_module.E7)(block.name):null,isDisabled:disabled||("up"===direction?isFirstBlock:isLastBlock),rootClientId:blockRootClientId,firstIndex:firstBlockIndex,isFirst:isFirstBlock,isLast:isLastBlock,orientation:moverOrientation||blockListOrientation}}),[clientIds,direction]),{moveBlocksDown,moveBlocksUp}=(0,use_dispatch.A)(store.M),moverFunction="up"===direction?moveBlocksUp:moveBlocksDown,descriptionId=`block-editor-block-mover-button__description-${instanceId}`;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(build_module_button.Ay,{__next40pxDefaultSize:!0,ref,className:(0,clsx.A)("block-editor-block-mover-button",`is-${direction}-button`),icon:getArrowIcon(direction,orientation),label:getMovementDirectionLabel(direction,orientation),"aria-describedby":descriptionId,...props,onClick:isDisabled?null:event=>{moverFunction(clientIds,rootClientId),props.onClick&&props.onClick(event)},disabled:isDisabled,accessibleWhenDisabled:!0}),(0,jsx_runtime.jsx)(component.A,{id:descriptionId,children:getBlockMoverDescription(blocksCount,blockType&&blockType.title,firstIndex,isFirst,isLast,"up"===direction?-1:1,orientation)})]})})),BlockMoverUpButton=(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)(BlockMoverButton,{direction:"up",ref,...props}))),BlockMoverDownButton=(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)(BlockMoverButton,{direction:"down",ref,...props})));function BlockMover({clientIds,hideDragHandle,isBlockMoverUpButtonDisabled,isBlockMoverDownButtonDisabled}){const{canMove,rootClientId,isFirst,isLast,orientation,isManualGrid}=(0,use_select.A)((select=>{var _getBlockAttributes;const{getBlockIndex,getBlockListSettings,canMoveBlocks,getBlockOrder,getBlockRootClientId,getBlockAttributes}=select(store.M),normalizedClientIds=Array.isArray(clientIds)?clientIds:[clientIds],firstClientId=normalizedClientIds[0],_rootClientId=getBlockRootClientId(firstClientId),firstIndex=getBlockIndex(firstClientId),lastIndex=getBlockIndex(normalizedClientIds[normalizedClientIds.length-1]),blockOrder=getBlockOrder(_rootClientId),{layout={}}=null!==(_getBlockAttributes=getBlockAttributes(_rootClientId))&&void 0!==_getBlockAttributes?_getBlockAttributes:{};return{canMove:canMoveBlocks(clientIds),rootClientId:_rootClientId,isFirst:0===firstIndex,isLast:lastIndex===blockOrder.length-1,orientation:getBlockListSettings(_rootClientId)?.orientation,isManualGrid:"grid"===layout.type&&layout.isManualPlacement&&window.__experimentalEnableGridInteractivity}}),[clientIds]);return!canMove||isFirst&&isLast&&!rootClientId||hideDragHandle&&isManualGrid?null:(0,jsx_runtime.jsxs)(toolbar_group.A,{className:(0,clsx.A)("block-editor-block-mover",{"is-horizontal":"horizontal"===orientation}),children:[!hideDragHandle&&(0,jsx_runtime.jsx)(block_draggable,{clientIds,fadeWhenDisabled:!0,children:draggableProps=>(0,jsx_runtime.jsx)(build_module_button.Ay,{__next40pxDefaultSize:!0,icon:drag_handle.A,className:"block-editor-block-mover__drag-handle",label:(0,i18n_build_module.__)("Drag"),tabIndex:"-1",...draggableProps})}),!isManualGrid&&(0,jsx_runtime.jsxs)("div",{className:"block-editor-block-mover__move-button-container",children:[(0,jsx_runtime.jsx)(toolbar_item.A,{children:itemProps=>(0,jsx_runtime.jsx)(BlockMoverUpButton,{disabled:isBlockMoverUpButtonDisabled,clientIds,...itemProps})}),(0,jsx_runtime.jsx)(toolbar_item.A,{children:itemProps=>(0,jsx_runtime.jsx)(BlockMoverDownButton,{disabled:isBlockMoverDownButtonDisabled,clientIds,...itemProps})})]})]})}BlockMoverUpButton.__docgenInfo={description:"",methods:[],displayName:"BlockMoverUpButton"},BlockMoverDownButton.__docgenInfo={description:"",methods:[],displayName:"BlockMoverDownButton"};const block_mover=BlockMover;BlockMover.__docgenInfo={description:"",methods:[],displayName:"BlockMover"};var provider=__webpack_require__("./packages/block-editor/src/components/provider/index.js");(0,block_library_build_module.JK)();const blocks=[(0,build_module.Wv)("core/group",{layout:{type:"flex"}},[(0,build_module.Wv)("core/paragraph"),(0,build_module.Wv)("core/paragraph"),(0,build_module.Wv)("core/paragraph")]),(0,build_module.Wv)("core/buttons",{},[(0,build_module.Wv)("core/button"),(0,build_module.Wv)("core/button"),(0,build_module.Wv)("core/button")])],index_story={title:"BlockEditor/BlockMover",component:block_mover,parameters:{sourceLink:"packages/block-editor/src/components/block-mover",badges:[],docs:{canvas:{sourceState:"shown"},description:{component:"BlockMover component allows moving blocks inside the editor using up and down buttons."}}},decorators:[Story=>(0,jsx_runtime.jsx)(provider.Cg,{value:blocks,children:(0,jsx_runtime.jsx)(toolbar.A,{label:"Block Mover",children:(0,jsx_runtime.jsx)(Story,{})})})],argTypes:{clientIds:{control:{type:"none"},description:"The client IDs of the blocks to move."},hideDragHandle:{control:{type:"boolean"},description:"If this property is true, the drag handle is hidden."}}},Default={args:{clientIds:[blocks[0].innerBlocks[1].clientId]}},Horizontal={decorators:[Story=>{const{updateBlockListSettings}=(0,use_dispatch.A)(store.M);return(0,react.useEffect)((()=>{updateBlockListSettings(blocks[1].clientId,{orientation:"horizontal"})}),[]),(0,jsx_runtime.jsx)(Story,{})}],args:{clientIds:[blocks[1].innerBlocks[1].clientId]},parameters:{docs:{canvas:{sourceState:"hidden"}}}},HideDragHandle={args:{...Default.args,hideDragHandle:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    clientIds: [blocks[0].innerBlocks[1].clientId]\n  }\n}",...Default.parameters?.docs?.source}}},Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => {\n    const {\n      updateBlockListSettings\n    } = useDispatch(blockEditorStore);\n    useEffect(() => {\n      /**\n       * This shouldn't be needed but unfortunately\n       * the layout orientation is not declarative, we need\n       * to render the blocks to update the block settings in the state.\n       */\n      updateBlockListSettings(blocks[1].clientId, {\n        orientation: 'horizontal'\n      });\n    }, []);\n    return <Story />;\n  }],\n  args: {\n    clientIds: [blocks[1].innerBlocks[1].clientId]\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: 'hidden'\n      }\n    }\n  }\n}",...Horizontal.parameters?.docs?.source},description:{story:"This story shows the block mover with horizontal orientation.\nIt is necessary to render the blocks to update the block settings in the state.",...Horizontal.parameters?.docs?.description}}},HideDragHandle.parameters={...HideDragHandle.parameters,docs:{...HideDragHandle.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    hideDragHandle: true\n  }\n}",...HideDragHandle.parameters?.docs?.source},description:{story:"You can hide the drag handle by `hideDragHandle` attribute.",...HideDragHandle.parameters?.docs?.description}}}}}]);