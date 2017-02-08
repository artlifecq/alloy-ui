if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-datepicker-popover/aui-datepicker-popover.js']) {
   __coverage__['build/aui-datepicker-popover/aui-datepicker-popover.js'] = {"path":"build/aui-datepicker-popover/aui-datepicker-popover.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":53}}},"2":{"name":"DatePickerPopover","line":23,"loc":{"start":{"line":23,"column":0},"end":{"line":23,"column":29}}},"3":{"name":"(anonymous_3)","line":82,"loc":{"start":{"line":82,"column":13},"end":{"line":82,"column":28}}},"4":{"name":"(anonymous_4)","line":96,"loc":{"start":{"line":96,"column":16},"end":{"line":96,"column":27}}},"5":{"name":"(anonymous_5)","line":116,"loc":{"start":{"line":116,"column":10},"end":{"line":116,"column":21}}},"6":{"name":"(anonymous_6)","line":127,"loc":{"start":{"line":127,"column":10},"end":{"line":127,"column":21}}},"7":{"name":"(anonymous_7)","line":140,"loc":{"start":{"line":140,"column":27},"end":{"line":140,"column":38}}},"8":{"name":"(anonymous_8)","line":154,"loc":{"start":{"line":154,"column":28},"end":{"line":154,"column":44}}},"9":{"name":"(anonymous_9)","line":172,"loc":{"start":{"line":172,"column":17},"end":{"line":172,"column":31}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":198,"column":81}},"2":{"start":{"line":10,"column":0},"end":{"line":12,"column":36}},"3":{"start":{"line":23,"column":0},"end":{"line":23,"column":31}},"4":{"start":{"line":33,"column":0},"end":{"line":71,"column":2}},"5":{"start":{"line":73,"column":0},"end":{"line":193,"column":9}},"6":{"start":{"line":83,"column":8},"end":{"line":84,"column":44}},"7":{"start":{"line":86,"column":8},"end":{"line":86,"column":40}},"8":{"start":{"line":97,"column":8},"end":{"line":98,"column":39}},"9":{"start":{"line":100,"column":8},"end":{"line":106,"column":9}},"10":{"start":{"line":101,"column":12},"end":{"line":101,"column":61}},"11":{"start":{"line":102,"column":12},"end":{"line":103,"column":75}},"12":{"start":{"line":105,"column":12},"end":{"line":105,"column":39}},"13":{"start":{"line":108,"column":8},"end":{"line":108,"column":23}},"14":{"start":{"line":117,"column":8},"end":{"line":117,"column":28}},"15":{"start":{"line":119,"column":8},"end":{"line":119,"column":37}},"16":{"start":{"line":128,"column":8},"end":{"line":128,"column":28}},"17":{"start":{"line":130,"column":8},"end":{"line":130,"column":37}},"18":{"start":{"line":141,"column":8},"end":{"line":142,"column":54}},"19":{"start":{"line":144,"column":8},"end":{"line":144,"column":64}},"20":{"start":{"line":155,"column":8},"end":{"line":157,"column":54}},"21":{"start":{"line":159,"column":8},"end":{"line":162,"column":9}},"22":{"start":{"line":161,"column":12},"end":{"line":161,"column":28}},"23":{"start":{"line":173,"column":8},"end":{"line":173,"column":28}},"24":{"start":{"line":175,"column":8},"end":{"line":191,"column":16}},"25":{"start":{"line":195,"column":0},"end":{"line":195,"column":40}}},"branchMap":{"1":{"line":100,"type":"if","locations":[{"start":{"line":100,"column":8},"end":{"line":100,"column":8}},{"start":{"line":100,"column":8},"end":{"line":100,"column":8}}]},"2":{"line":159,"type":"if","locations":[{"start":{"line":159,"column":8},"end":{"line":159,"column":8}},{"start":{"line":159,"column":8},"end":{"line":159,"column":8}}]},"3":{"line":159,"type":"binary-expr","locations":[{"start":{"line":159,"column":12},"end":{"line":159,"column":23}},{"start":{"line":159,"column":28},"end":{"line":159,"column":61}},{"start":{"line":159,"column":65},"end":{"line":159,"column":94}}]}},"code":["(function () { YUI.add('aui-datepicker-popover', function (A, NAME) {","","/**"," * The DatePicker Component"," *"," * @module aui-datepicker"," * @submodule aui-datepicker-popover"," */","","var Lang = A.Lang,","","    _DOCUMENT = A.one(A.config.doc);","","/**"," * A base class for `DatePickerPopover`."," *"," * @class A.DatePickerPopover"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","","function DatePickerPopover() {}","","/**"," * Static property used to define the default attribute configuration for the"," * `DatePickerPopover`."," *"," * @property ATTRS"," * @type {Object}"," * @static"," */","DatePickerPopover.ATTRS = {","","    /**","     * Sets the initial visibility.","     *","     * @attribute autoHide","     * @default true","     * @type {Boolean}","     */","    autoHide: {","        validator: Lang.isBoolean,","        value: true","    },","","    /**","     * Stores the configuration of the `Popover` instance.","     *","     * @attribute popover","     * @default {}","     * @writeOnce","     */","    popover: {","        setter: '_setPopover',","        value: {},","        writeOnce: true","    },","","    /**","     * Defines the CSS classname of the `Popover`.","     *","     * @attribute popoverCssClass","     * @default A.getClassName('datepicker-popover')","     * @type {String}","     */","    popoverCssClass: {","        validator: Lang.isString,","        value: A.getClassName('datepicker-popover')","    }","};","","A.mix(DatePickerPopover.prototype, {","    popover: null,","","    /**","     * Sets the `Popover` alignment.","     *","     * @method alignTo","     * @param node","     */","    alignTo: function(node) {","        var instance = this,","            popover = instance.getPopover();","","        popover.set('align.node', node);","    },","","    /**","     * Returns an existent `Popover` instance or creates a new one if it","     * doesn't exists.","     *","     * @method getPopover","     * @return {Popover}","     */","    getPopover: function() {","        var instance = this,","            popover = instance.popover;","","        if (!popover) {","            popover = new A.Popover(instance.get('popover'));","            popover.get('boundingBox').on(","                'clickoutside', instance._onPopoverClickOutside, instance);","","            instance.popover = popover;","        }","","        return popover;","    },","","    /**","     * Hides the `Popover`.","     *","     * @method hide","     */","    hide: function() {","        var instance = this;","","        instance.getPopover().hide();","    },","","    /**","     * Shows the `Popover`.","     *","     * @method show","     */","    show: function() {","        var instance = this;","","        instance.getPopover().show();","    },","","    /**","     * Checks if the active input is focused.","     *","     * @method _isActiveInputFocused","     * @protected","     * @return {Boolean}","     */","    _isActiveInputFocused: function() {","        var instance = this,","            activeInput = instance.get('activeInput');","","        return (activeInput === _DOCUMENT.get('activeElement'));","    },","","    /**","     * Fires when there's a click outside of the `Popover`.","     *","     * @method _onPopoverClickOutside","     * @param event","     * @protected","     */","    _onPopoverClickOutside: function(event) {","        var instance = this,","            target = event.target,","            activeInput = instance.get('activeInput');","","        if (activeInput && (!instance._isActiveInputFocused() && !activeInput.contains(target))) {","","            instance.hide();","        }","    },","","    /**","     * Sets the `popover` value by merging its object with another properties.","     *","     * @method _setPopover","     * @param val","     * @protected","     */","    _setPopover: function(val) {","        var instance = this;","","        return A.merge({","            bodyContent: '',","            cssClass: instance.get('popoverCssClass'),","            constrain: true,","            hideOn: [","                {","                    node: _DOCUMENT,","                    eventName: 'key',","                    keyCode: 'esc'","                }","            ],","            position: 'bottom',","            render: true,","            triggerShowEvent: 'click',","            triggerToggleEvent: null,","            visible: false","        }, val);","    }","}, true);","","A.DatePickerPopover = DatePickerPopover;","","","}, '3.0.3-deprecated.46', {\"requires\": [\"aui-classnamemanager\", \"aui-popover\"]});","","}());"]};
}
var __cov_wT3VWaBADzm5ohDHYWNkCg = __coverage__['build/aui-datepicker-popover/aui-datepicker-popover.js'];
__cov_wT3VWaBADzm5ohDHYWNkCg.s['1']++;YUI.add('aui-datepicker-popover',function(A,NAME){__cov_wT3VWaBADzm5ohDHYWNkCg.f['1']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['2']++;var Lang=A.Lang,_DOCUMENT=A.one(A.config.doc);__cov_wT3VWaBADzm5ohDHYWNkCg.s['3']++;function DatePickerPopover(){__cov_wT3VWaBADzm5ohDHYWNkCg.f['2']++;}__cov_wT3VWaBADzm5ohDHYWNkCg.s['4']++;DatePickerPopover.ATTRS={autoHide:{validator:Lang.isBoolean,value:true},popover:{setter:'_setPopover',value:{},writeOnce:true},popoverCssClass:{validator:Lang.isString,value:A.getClassName('datepicker-popover')}};__cov_wT3VWaBADzm5ohDHYWNkCg.s['5']++;A.mix(DatePickerPopover.prototype,{popover:null,alignTo:function(node){__cov_wT3VWaBADzm5ohDHYWNkCg.f['3']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['6']++;var instance=this,popover=instance.getPopover();__cov_wT3VWaBADzm5ohDHYWNkCg.s['7']++;popover.set('align.node',node);},getPopover:function(){__cov_wT3VWaBADzm5ohDHYWNkCg.f['4']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['8']++;var instance=this,popover=instance.popover;__cov_wT3VWaBADzm5ohDHYWNkCg.s['9']++;if(!popover){__cov_wT3VWaBADzm5ohDHYWNkCg.b['1'][0]++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['10']++;popover=new A.Popover(instance.get('popover'));__cov_wT3VWaBADzm5ohDHYWNkCg.s['11']++;popover.get('boundingBox').on('clickoutside',instance._onPopoverClickOutside,instance);__cov_wT3VWaBADzm5ohDHYWNkCg.s['12']++;instance.popover=popover;}else{__cov_wT3VWaBADzm5ohDHYWNkCg.b['1'][1]++;}__cov_wT3VWaBADzm5ohDHYWNkCg.s['13']++;return popover;},hide:function(){__cov_wT3VWaBADzm5ohDHYWNkCg.f['5']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['14']++;var instance=this;__cov_wT3VWaBADzm5ohDHYWNkCg.s['15']++;instance.getPopover().hide();},show:function(){__cov_wT3VWaBADzm5ohDHYWNkCg.f['6']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['16']++;var instance=this;__cov_wT3VWaBADzm5ohDHYWNkCg.s['17']++;instance.getPopover().show();},_isActiveInputFocused:function(){__cov_wT3VWaBADzm5ohDHYWNkCg.f['7']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['18']++;var instance=this,activeInput=instance.get('activeInput');__cov_wT3VWaBADzm5ohDHYWNkCg.s['19']++;return activeInput===_DOCUMENT.get('activeElement');},_onPopoverClickOutside:function(event){__cov_wT3VWaBADzm5ohDHYWNkCg.f['8']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['20']++;var instance=this,target=event.target,activeInput=instance.get('activeInput');__cov_wT3VWaBADzm5ohDHYWNkCg.s['21']++;if((__cov_wT3VWaBADzm5ohDHYWNkCg.b['3'][0]++,activeInput)&&((__cov_wT3VWaBADzm5ohDHYWNkCg.b['3'][1]++,!instance._isActiveInputFocused())&&(__cov_wT3VWaBADzm5ohDHYWNkCg.b['3'][2]++,!activeInput.contains(target)))){__cov_wT3VWaBADzm5ohDHYWNkCg.b['2'][0]++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['22']++;instance.hide();}else{__cov_wT3VWaBADzm5ohDHYWNkCg.b['2'][1]++;}},_setPopover:function(val){__cov_wT3VWaBADzm5ohDHYWNkCg.f['9']++;__cov_wT3VWaBADzm5ohDHYWNkCg.s['23']++;var instance=this;__cov_wT3VWaBADzm5ohDHYWNkCg.s['24']++;return A.merge({bodyContent:'',cssClass:instance.get('popoverCssClass'),constrain:true,hideOn:[{node:_DOCUMENT,eventName:'key',keyCode:'esc'}],position:'bottom',render:true,triggerShowEvent:'click',triggerToggleEvent:null,visible:false},val);}},true);__cov_wT3VWaBADzm5ohDHYWNkCg.s['25']++;A.DatePickerPopover=DatePickerPopover;},'3.0.3-deprecated.46',{'requires':['aui-classnamemanager','aui-popover']});
