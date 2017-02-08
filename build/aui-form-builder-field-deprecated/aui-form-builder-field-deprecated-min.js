YUI.add("aui-form-builder-field-deprecated",function(e,t){var n=e.Lang,r=n.isArray,i=n.isObject,s=e.Array,o=e.Escape,u=e.getClassName,a=u("clearfix"),f=u("component"),l=u("form","builder","drop","zone"),c=u("form","builder","field"),h=u("form","builder","field","node"),p=u("form","builder","field","selected"),d=u("form","builder","unique"),v=u("glyphicon"),m=u("glyphicon","asterisk"),g=u("glyphicon","plus"),y=u("glyphicon","question","sign"),b=u("glyphicon","trash"),w=u("glyphicon","wrench"),E=u("widget"),S='<div class="'+[E,f,c].join(" ")+'"></div>',x='<div class="'+l+'"></div>',T='<span class="'+[v,m].join(" ")+'"></span>',N='<span class="'+[v,y].join(" ")+'"></span>',C='<label for="{id}">{label}</label>',k=["id","name"],L=e.Component.create({NAME:"form-builder-field",ATTRS:{acceptChildren:{value:!0},builder:{value:null},controlsToolbar:{validator:i,valueFn:function(){var t=this;return{children:t._getToolbarItems(t.get("required"),t.get("unique")),visible:e.UA.touchEnabled&&e.UA.mobile}}},dataType:{value:"string"},disabled:{value:!1},selected:{value:!1},hiddenAttributes:{validator:r,value:[]},id:{setter:"_setId"},label:{value:""},localizationMap:{value:{}},name:{valueFn:function(){var t=this,n=t.get("type");return e.FormBuilderField.buildFieldName(n)}},parent:{value:null},predefinedValue:{value:""},readOnly:{setter:e.DataType.Boolean.parse,value:!1},readOnlyAttributes:{validator:r,value:[]},required:{setter:e.DataType.Boolean.parse,value:!1},showLabel:{setter:e.DataType.Boolean.parse,value:!0},strings:{value:{button:"Button",buttonType:"Button Type",deleteFieldsMessage:"Are you sure you want to delete the selected field(s)?",duplicateMessage:"Duplicate",editMessage:"Edit",label:"Label",large:"Large",medium:"Medium",multiple:"Multiple",name:"Name",no:"No",options:"Options",predefinedValue:"Predefined Value",readOnly:"Read Only",required:"Required",reset:"Reset",showLabel:"Show Label",small:"Small",submit:"Submit",tip:"Tip",type:"Type",width:"Width",yes:"Yes"}},tabIndex:{value:0},template:{value:""},tip:{value:""},type:{value:""},unique:{setter:e.DataType.Boolean.parse,value:!1},zIndex:{value:100},dropZoneNode:{valueFn:function(){return e.Node.create(x)}},labelNode:{valueFn:function(){var t=this;return e.Node.create(n.sub(C,{id:o.html(t.get("id")),label:o.html(t.get("label"))}))}},requiredFlagNode:{valueFn:function(){return e.Node.create(T)}},templateNode:{valueFn:"getNode"},tipFlagNode:{valueFn:function(){return e.Node.create(N)}}},UI_ATTRS:["acceptChildren","disabled","fields","label","name","predefinedValue","required","selected","showLabel","tip","unique"],AUGMENTS:[e.PropertyBuilderFieldSupport],buildFieldId:function(e){return"fields_field_"+e},buildFieldName:function(t){return t+ ++e.Env._uidx},HTML_PARSER:{dropZoneNode:"."+l,labelNode:"label",requiredFlagNode:"."+v+" ."+m,tipFlagNode:"."+v+" ."+y},prototype:{BOUNDING_TEMPLATE:S,initializer:function(){var t=this;t.controlsToolbar=new e.Toolbar(t.get("controlsToolbar"))},renderUI:function(){var e=this,t=e.get("boundingBox"),n=e.get("contentBox"),r=e.get("labelNode"),i=e.get("requiredFlagNode"),s=e.get("templateNode"),o=e.get("tipFlagNode");n.addClass(a),n.append(r),n.append(i),n.append(o),n.append(s),e.controlsToolbar.render(t)},destructor:function(){var e=this,t=e.get("builder"),n=t._getFieldId(e);e.get("fields").each(function(e){e.destroy()}),t.editingField===e&&(delete t.editingField,t.closeEditProperties()),e.controlsToolbar&&e.controlsToolbar.destroy(),e.get("boundingBox").dd.destroy(),e.tooltip.destroy(),e.get("parent").removeField(e),t.uniqueFieldsMap.remove(n)},createField:function(e){var t=this,n=t.get("builder");return e=n.createField(e),e.set("parent",t),e},getHTML:function(){return""},getNode:function(){var t=this;return e.Node.create(t.getHTML())},getAttributesForCloning:function(){var e={hiddenAttributes:this.get("hiddenAttributes"),readOnlyAttributes:this.get("readOnlyAttributes"),localizationMap:this.get("localizationMap")};return s.each(this.getProperties(),function(t){var n=t.attributeName;s.indexOf(k,n)===-1&&(e[n]=t.value)}),e},getProperties:function(e){var t=this,r=t.getPropertyModel(),i=t.get("hiddenAttributes"),o=t.get("readOnlyAttributes"),u=[];return s.each(r,function(r){var a=r.attributeName;if(e&&s.indexOf(i,a)>-1)return;var f=t.get(a),l=n.type(f);l==="boolean"&&(f=String(f)),r.value=f,s.indexOf(o,a)>-1&&(r.readOnly=!0),u.push(r)}),u},getPropertyModel:function(){var t=this,n=t.getStrings();return[{attributeName:"type",editor:!1,name:n.type},{attributeName:"label",editor:new e.TextCellEditor,name:n.label},{attributeName:"showLabel",editor:new e.RadioCellEditor({options:{"true":n.yes,"false":n.no}}),formatter:e.bind(t._booleanFormatter,t),name:n.showLabel},{attributeName:"readOnly",editor:new e.RadioCellEditor({options:{"true":n.yes,"false":n.no}}),formatter:e.bind(t._booleanFormatter,t),name:n.readOnly},{attributeName:"required",editor:new e.RadioCellEditor({options:{"true":n.yes,"false":n.no}}),formatter:e.bind(t._booleanFormatter,t),name:n.required},{attributeName:"name",editor:new e.TextCellEditor({validator:{rules:{value:{required:!0}}}}),name:n.name},{attributeName:"predefinedValue",editor:new e.TextCellEditor,name:n.predefinedValue},{attributeName:"tip",editor:new e.TextAreaCellEditor,name:n.tip}]},_booleanFormatter:function(t){var n=this,r=n.getStrings();return e.DataType.Boolean.parse(t.data.value)?r.yes:r.no},_getFieldNode:function(){var e=this.get("templateNode"),t=e.one("."+h);return t||(t=e),t},_getToolbarItems:function(){var t=this,n=t.get("builder"),r=[{icon:[v,w].join(" "),on:{click:e.bind(t._handleEditEvent,t)}}];return t.get("unique")||r.push({icon:[v,g].join(" "),on:{click:e.bind(t._handleDuplicateEvent,t)}}),(n&&n.get("allowRemoveRequiredFields")||!t.get("required"))&&r.push({icon:[v,b].join(" "),on:{click:e.bind(t._handleDeleteEvent,t)}}),[r]},_handleDuplicateEvent:function(e){var t=this;t.get("unique")||t.get("builder").duplicateField(t),e.stopPropagation()},_handleEditEvent:function(e){
var t=this;t.get("builder").editField(t),e.stopPropagation()},_handleDeleteEvent:function(e){var t=this,n=t.getStrings();window.confirm(n.deleteFieldsMessage)&&t.destroy(),e.stopPropagation()},_setId:function(t){return e.FormBuilderField.buildFieldId(t)},_uiSetAcceptChildren:function(e){var t=this,n=t.get("boundingBox"),r=t.get("dropZoneNode"),i=n.one("."+l);e&&!i?n.append(r):!e&&i?i.remove():e&&i&&t.set("dropZoneNode",i)},_uiSetSelected:function(e){var t=this;t.get("boundingBox").toggleClass(p,e)},_uiSetDisabled:function(e){var t=this._getFieldNode();e?t.setAttribute("disabled",e):t.removeAttribute("disabled")},_uiSetFields:function(e){var t=this,n=t.get("builder");n.plotFields(e,t.get("dropZoneNode"))},_uiSetLabel:function(e){var t=this,n=t.get("labelNode");n.setContent(o.html(e))},_uiSetName:function(e){var t=this._getFieldNode();t.set("name",e)},_uiSetPredefinedValue:function(e){var t=this._getFieldNode();t.val(e)},_uiSetRequired:function(e){var t=this,n=t.controlsToolbar,r=t.get("requiredFlagNode");r.toggle(e),n.set("children",t._getToolbarItems())},_uiSetShowLabel:function(e){var t=this,n=t.get("labelNode");n.toggle(e)},_uiSetTip:function(t){var n=this.get("tipFlagNode");n.toggle(t.length!==0);if(this.tooltip){this.tooltip.set("bodyContent",t);return}this.tooltip=(new e.Tooltip({bodyContent:t,trigger:n,position:"right",visible:!1})).render()},_uiSetUnique:function(e){var t=this,n=t.get("boundingBox"),r=t.controlsToolbar;n.toggleClass(d,e),r.set("children",t._getToolbarItems())}}});e.FormBuilderField=L,e.namespace("FormBuilderField.types").field=L},"3.0.3-deprecated.46",{requires:["panel","aui-datatype","aui-datatable-edit","aui-property-builder-field-support"],skinnable:!0});
