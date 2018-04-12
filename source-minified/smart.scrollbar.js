
/* Smart HTML Elements v1.0.0 (2018-April) 
Copyright (c) 2011-2018 jQWidgets. 
License: http://htmlelements.com/pricing/ */

 "use strict";Smart("smart-scroll-bar",function(t){function e(){return babelHelpers.classCallCheck(this,e),babelHelpers.possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return babelHelpers.inherits(e,t),babelHelpers.createClass(e,[{key:"template",value:function(){return'<div id="container" class="smart-container">\n                    <smart-repeat-button tabindex="-1" focusable="false" disabled="[[disabled]]" id="nearButton" class ="smart-scroll-button">\n                        <div id="nearArrow" class="smart-arrow"></div>\n                    </smart-repeat-button>\n                    <div  id="track" class="smart-track">\n                        <div id="thumb" class="smart-thumb"></div>\n                    </div>\n                    <smart-repeat-button tabindex="-1" disabled="[[disabled]]" id="farButton" class ="smart-scroll-button">\n                        <div id="farArrow" class="smart-arrow"></div>\n                    </smart-repeat-button>\n            </div>'}},{key:"_calculateThumbSize",value:function(t){var e=this,a=e.max-e.min,r=0;return a>=1?(r=t/(a+t)*t,e.$.thumb.className.indexOf("smart-hidden")>=0&&e.$thumb.removeClass("smart-hidden")):a<1&&e.$thumb.addClass("smart-hidden"),Math.max(10,Math.min(r,t))}},{key:"_dragStartHandler",value:function(t){var e=this;e.disabled||(e.thumbCapture=!0,e.dragStartX=t.clientX,e.dragStartY=t.clientY,e.dragStartValue=e.value,t.originalEvent&&(t.originalEvent.stopPropagation(),t.originalEvent.preventDefault()))}},{key:"_dragHandler",value:function(t){var e=this;if(!0===e.thumbCapture){var a=(e.max-e.min)/(e.scrollBarSize-e.thumbSize),r="horizontal"===e.orientation?(t.clientX-e.dragStartX)*a:(t.clientY-e.dragStartY)*a,n=r;e.rightToLeft&&"horizontal"===e.orientation&&(n=-r),e._updateValue(e.dragStartValue+n),t.originalEvent&&(t.originalEvent.stopPropagation(),t.originalEvent.preventDefault())}}},{key:"_dragEndHandler",value:function(){var t=this;t._trackDownTimer&&(clearInterval(t._trackDownTimer),t._trackDownTimer=null),t.thumbCapture&&(t.thumbCapture=!1)}},{key:"_farButtonClickHandler",value:function(){var t=this;t.disabled||t._updateValue(t.value+t.step)}},{key:"_nearButtonClickHandler",value:function(){var t=this;t.disabled||t._updateValue(t.value-t.step)}},{key:"propertyChangedHandler",value:function(t,a,r){babelHelpers.get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"propertyChangedHandler",this).call(this,t,a,r);var n=this;switch(t){case"min":case"max":case"orientation":n._layout();break;case"value":n._updateValue(a,r)}}},{key:"ready",value:function(){babelHelpers.get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"ready",this).call(this),this._layout()}},{key:"_resizeHandler",value:function(){this._layout()}},{key:"_layout",value:function(){var t=this;t.scrollBarSize="horizontal"===t.orientation?t.$.track.offsetWidth:t.$.track.offsetHeight,t.thumbSize=t._calculateThumbSize(t.scrollBarSize),t.$.thumb.removeAttribute("style"),"horizontal"===t.orientation?t.$.thumb.style.width=t.thumbSize+"px":t.$.thumb.style.height=t.thumbSize+"px",t.$nearArrow.removeClass("smart-arrow-left smart-arrow-up"),t.$farArrow.removeClass("smart-arrow-right smart-arrow-down"),"horizontal"===t.orientation?(t.$nearArrow.addClass("smart-arrow-left"),t.$farArrow.addClass("smart-arrow-right")):(t.$nearArrow.addClass("smart-arrow-up"),t.$farArrow.addClass("smart-arrow-down")),t._updateThumbPosition()}},{key:"_selectStartHandler",value:function(t){this.thumbCapture&&t.preventDefault()}},{key:"_trackDownHandler",value:function(t){var e=this;t.target===e.$.track&&(e._trackDownTimer=setInterval(function(){e._trackClickHandler(t)},50))}},{key:"_trackClickHandler",value:function(t){var e=this;if(!e.disabled&&t.target===e.$.track){var a=e.$.thumb.getBoundingClientRect(),r=t.pageX,n=t.pageY;"horizontal"===e.orientation?r>a.right?e._updateValue(e.value+e.largeStep):r<a.left&&e._updateValue(e.value-e.largeStep):n>a.bottom?e._updateValue(e.value+e.largeStep):n<a.top&&e._updateValue(e.value-e.largeStep)}}},{key:"_updateValue",value:function(t,e){var a=this;1===arguments.length&&(e=t,t=a.value),(void 0===e||isNaN(e))&&(e=a.min),e>a.max&&(e=a.max),e<a.min&&(e=a.min),t!==e&&(a.value=e,a._updateThumbPosition(),a.$.fireEvent("change",{value:a.value,oldValue:t}))}},{key:"_updateThumbPosition",value:function(){var t=this,e=t.$.track.offsetHeight,a=t.$.track.offsetWidth,r="horizontal"===t.orientation?a:e,n=t._calculateThumbSize(r),i="horizontal"===t.orientation?a-n:e-n,l=(r-n)/(t.max-t.min)*(t.value-t.min);t.rightToLeft&&"horizontal"===t.orientation&&(l=(r-n)/(t.max-t.min)*(t.max-t.value-t.min)),l=Math.min(i,Math.max(0,l)),"vertical"===t.orientation?t.$.thumb.style.top=l+"px":t.$.thumb.style.left=l+"px"}}],[{key:"properties",get:function(){return{largeStep:{type:"integer",value:100},min:{type:"integer",value:0},max:{type:"integer",value:1e3},orientation:{type:"string",value:"horizontal",allowedValues:["horizontal","vertical"]},step:{type:"integer",value:10},value:{type:"integer",value:0}}}},{key:"listeners",get:function(){return{"nearButton.click":"_nearButtonClickHandler","farButton.click":"_farButtonClickHandler","track.down":"_trackDownHandler","track.click":"_trackClickHandler","thumb.down":"_dragStartHandler","document.move":"_dragHandler","document.up":"_dragEndHandler","document.selectstart":"_selectStartHandler",resize:"_resizeHandler"}}}]),e}(Smart.BaseElement));
//# sourceMappingURL=smart.scrollbar.js.map
