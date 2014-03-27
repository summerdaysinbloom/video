/**
 * cbpFixedScrollLayout.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpFixedScrollLayout = (function() {

	// cache and initialize some values
	var config = {
		// the cbp-fbscroller's sections
		$sections : $( '#cbp-fbscroller > section' ),
		// the navigation links
		$navlinks : $( '#cbp-fbscroller > nav:first > a' ),
		// index of current link / section
		currentLink : 0,
		// the body element
		$body : $( 'html, body' ),
		// the body animation speed
		animspeed : 650,
		// the body animation easing (jquery easing)
		animeasing : 'easeInOutExpo'
	};

	function init() {

		// click on a navigation link: the body is scrolled to the position of the respective section
		config.$navlinks.on( 'click', function() {
			scrollAnim( config.$sections.eq( $( this ).index() ).offset().top );
			return false;
		} );

		// 2 waypoints defined:
		// First one when we scroll down: the current navigation link gets updated. A "new section" is reached when it occupies more than 70% of the viewport
		// Second one when we scroll up: the current navigation link gets updated. A "new section" is reached when it occupies more than 70% of the viewport
		config.$sections.waypoint( function( direction ) {
			if( direction === 'down' ) { changeNav( $( this ) ); }
		}, { offset: '30%' } ).waypoint( function( direction ) {
			if( direction === 'up' ) { changeNav( $( this ) ); }
		}, { offset: '-30%' } );

		// on window resize: the body is scrolled to the position of the current section
		$( window ).on( 'debouncedresize', function() {
			scrollAnim( config.$sections.eq( config.currentLink ).offset().top );
		} );
		
	}

	// update the current navigation link
	function changeNav( $section ) {
		config.$navlinks.eq( config.currentLink ).removeClass( 'cbp-fbcurrent' );
		config.currentLink = $section.index( 'section' );
		config.$navlinks.eq( config.currentLink ).addClass( 'cbp-fbcurrent' );
	}

	// function to scroll / animate the body
	function scrollAnim( top ) {
		config.$body.stop().animate( { scrollTop : top }, config.animspeed, config.animeasing );
	}

	return { init : init };

})();
/**
 * cbpFixedScrollLayout.min.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpFixedScrollLayout=(function(){var a={$sections:$("#cbp-fbscroller > section"),$navlinks:$("#cbp-fbscroller > nav:first > a"),currentLink:0,$body:$("html, body"),animspeed:650,animeasing:"easeInOutExpo"};function d(){a.$navlinks.on("click",function(){c(a.$sections.eq($(this).index()).offset().top);return false});a.$sections.waypoint(function(e){if(e==="down"){b($(this))}},{offset:"30%"}).waypoint(function(e){if(e==="up"){b($(this))}},{offset:"-30%"});$(window).on("debouncedresize",function(){c(a.$sections.eq(a.currentLink).offset().top)})}function b(e){a.$navlinks.eq(a.currentLink).removeClass("cbp-fbcurrent");a.currentLink=e.index("section");a.$navlinks.eq(a.currentLink).addClass("cbp-fbcurrent")}function c(e){a.$body.stop().animate({scrollTop:e},a.animspeed,a.animeasing)}return{init:d}})();
$(window).load(function() {
    var height = $(window).height(),
        bgHeight = height * 4,
        newHeight;

    $('#layer').css('height', bgHeight+135+'px');

    if( height < 640 ) {
        $('#fbsection6').removeClass();
        newHeight = bgHeight+(height*1)+135;

        $('#layer').css('height', newHeight );
        $('footer').css('top','0');
    
    } else if( height > 641 && height < 760 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('threeandfour');
        newHeight = bgHeight+(height*0.75)+135;

        $('#layer').css('height', newHeight);

    } else if (height > 761 && height < 910 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('half');
        newHeight = bgHeight+(height*0.5)+135;

        $('#layer').css('height', newHeight);

    } else if ( height > 911 && height < 960 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('twoandfive');
        newHeight = bgHeight+(height*0.4)+135;

        $('#layer').css('height', newHeight);

    } else if ( height > 961 && height < 999 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('oneandfour');
        newHeight = bgHeight+(height*0.25)+135;

        $('#layer').css('height', newHeight);

    } else if ( height > 1001 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('oneandten');
        newHeight = bgHeight+(height*0.1)+135;

        $('#layer').css('height', newHeight);
    }
});

$(window).resize(function() {
    var height = $(window).height(),
        bgHeight = height * 4,
        newHeight;

    $('#layer').css('height', bgHeight+135+'px');

    // min break point is 560px
    if( height < 640 ) {
        $('#fbsection6').removeClass();
        newHeight = bgHeight+(height*1)+135;

        $('#layer').css('height', resetHeight );
        $('footer').css('top','0');
    
    } else if( height > 641 && height < 760 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('threeandfour');
        newHeight = bgHeight+(height*0.75)+135;

        $('#layer').css('height', newHeight);

    } else if (height > 761 && height < 910 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('half');
        newHeight = bgHeight+(height*0.5)+135;

        $('#layer').css('height', newHeight);

    } else if ( height > 911 && height < 960 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('twoandfive');
        newHeight = bgHeight+(height*0.4)+135;

        $('#layer').css('height', newHeight);

    } else if ( height > 961 && height < 999 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('oneandfour');
        newHeight = bgHeight+(height*0.25)+135;
        console.log('961-999[R] : ',newHeight);
        
        $('#layer').css('height', newHeight);

    } else if ( height > 1001 ) {
        $('#fbsection6').removeClass();
        $('#fbsection6').addClass('oneandten');
        newHeight = bgHeight+(height*0.1)+135;

        $('#layer').css('height', newHeight);
    }
});
/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
(function($) {

var $event = $.event,
	$special,
	resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 150
};

})(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/*! SublimeVideo loader | (c) 2013 Jilion SA | http://sublimevideo.net
*/(function(){ (function(){var e,n,t,r,o,u,a,i,c,l,d,s,f,m,v,E,h,p,y,g,N,S,b,O,L,T,w,B,C,j,R,V,k,q,I,M,x,A,K,P;return p=document,t="DOMContentLoaded",j="onreadystatechange",P=window,n=0,r=1,e=2,k=[],u=n,g=!1,w="sublime",V="sublime_",C=[],T=!1,document.createElement("video"),document.createElement("source"),c={host:"//cdn.sublimevideo.net",version:"2.6.5",token:"961fjrjb",components:{}},c.components.sa="2.6.5",c.components["961fjrjb"]="2.6.5",f=function(e,n,t){return e===t.token?""+t.host+"/s2/"+e+"."+"js":""+t.host+"/c/"+e+"/"+n+"/"+e+"."+"js"+"?t="+t.token},m=function(e){var n,t,r,o;r=[],t=e.components;for(n in t)o=t[n],r.push(f(n,o,e));return r},q=function(){return l()||d("sublime")},i=function(){var e,n,t,r;for(T=!0,r=[],n=0,t=C.length;t>n;n++)e=C[n],r.push(e());return r},v=function(){var e;return e={},window.sublimevideo=e,e.ready=function(e){return T?e():C.push(e)},e.load=function(){return c.loadForced=!0,O()}},l=function(){return p.getElementsByTagName("video").length>0},d=function(e){var n,t,r,o,u;if(e){if(p.querySelector)return null!=p.querySelector("."+e);if(p.getElementsByClassName)return o=p.getElementsByClassName(e),o&&o.length>0;for(n=RegExp("\\b"+e+"\\b"),r=p.getElementsByTagName("*"),u=0;r.length>u;){if(t=r[u].className,n.test(t))return!0;u++}return!1}return!1},b=function(e){return"function"==typeof e},B=function(e){var n;for(n=0;e.length>n;)e[n](),n++;return e.length=0},L=function(e){var n,t,r,o;for(o=[],t=0,r=e.length;r>t;t++)n=e[t],o.push(a(n));return o},a=function(e){var n,t;return n=p.getElementsByTagName("head")[0]||p.body,t=p.createElement("script"),t.type="text/javascript",t.src=e,t.async=!0,n.appendChild(t)},I=function(e){var n,t;t=0;for(n in e)e.hasOwnProperty(n)&&(t+=1);return t},K={},E=function(n){var t,r,o;if(K[n]=1,I(K)===I(c.components)+1){for(r=0,o=x.length;o>r;r++)t=x[r],P[V].define.apply(this,t);return sublime_.require(["application"],function(n){var t;return t=new n,t.load(c,function(){return u=e,B(k),i()})})}},M=function(){var e;return e?(e=!1,p.addEventListener?(p.removeEventListener(t,y,!1),P.removeEventListener("load",y,!1)):(p.detachEvent(j,y),P.detachEvent("onload",y))):void 0},y=function(e){return!g&&(e||(e=P.event),(p.addEventListener||"complete"===p.readyState||e&&"load"===e.type)&&(M(),g=!0,q()||S))?O():void 0},s=function(){var e,n;if(n=!0,p.addEventListener)return p.addEventListener(t,y,!1),P.addEventListener("load",y,!1);if(p.attachEvent){p.attachEvent(j,y),P.attachEvent("onload",y),e=!1;try{e=!(null!=P.frameElement)}catch(r){}if(p.docElement&&p.docElement.doScroll&&e)return h()}},h=function(){if(!g){try{p.docElement.doScroll("left")}catch(e){return setTimeout(h,1),void 0}return y()}},P.console||(N=function(){},P.console={log:N,warn:N,error:N,debug:N}),S=!1,x=[],O=function(){return u===n?(u=r,L(m(c))):void 0},o=P[w],o&&o.ready&&o.load?console.error("SublimeVideo loader has been installed more than once."):(o=P[w]={},o.ready=function(n){return u===e?n():b(n)&&k.push(n),void 0},o.load=function(){return g?O():S=!0,void 0},R=P[V]={},R.define=function(){return x.push(Array.prototype.slice.apply(arguments))},R.component=E,v(),"complete"===document.readyState?y():(s(),A=P.jQuery,A&&b(A.ready)?A(p).ready(y):void 0))})();;sublime_.component('loader');})();
// Generated by CoffeeScript 1.4.0
/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);