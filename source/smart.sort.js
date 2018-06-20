
/* Smart HTML Elements v1.1.0 (2018-June) 
Copyright (c) 2011-2018 jQWidgets. 
License: https://htmlelements.com/license/ */

function sortByMultipleColumns(a,c,b,d){if(!a||!(a instanceof Array)||0===a.length||!c||c instanceof Array&&0===c.length)return;"string"==typeof c&&(c=[c]);const e=[],f=[];b===void 0&&(b=[]);for(let g=0;g<c.length;g++)e[g]=void 0===b[g]||"asc"===b[g]||"ascending"===b[g]?1:-1,f[g]=getCompareFunction(a[0][c[g]]);return d?void d(a,c,b,f):void a.sort(function(d,a){for(let b=0;b<c.length;b++){const g=f[b](d[c[b]],a[c[b]]);if(0===g){if(c[b+1])continue;else if(d._index!==void 0)return(d._index-a._index)*e[b];return 0}return g*e[b]}})}function getCompareFunction(b){let a;switch(typeof b){case"string":a=new Intl.Collator().compare;break;case"number":a=function(c,a){return c-a};break;case"boolean":a=function(c,a){return c===a?0:!1===c?-1:1};break;case"object":if(b instanceof Date)a=function(c,a){return c.getTime()-a.getTime()};else if(b instanceof Smart.Utilities.DateTime||b instanceof BigNumberNG)a=function(c,a){return c.compare(a)};else if(b instanceof Smart.Utilities.Complex||window.NIComplex&&b instanceof window.NIComplex){const c=new Smart.Utilities.ComplexNumericProcessor;a=function(d,a){return c.compareComplexNumbers(d,a)}}}return a}