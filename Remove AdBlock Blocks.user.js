// ==UserScript==
// @name         Remove Typical Adblock Block.
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Remove all the adblock blocks that pop up and locks the scroll.
// @author       DroneDD
// @match         *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==
'use strict';
var divs = document.querySelectorAll("div");
var x;
divs.forEach(function(d) {
    var s = window.getComputedStyle(d, null);
    if (s.top == "0px" && s.left == "0px" && s.bottom == "0px" && s.right == "0px" && s.position == "fixed") x = d;
});

if (x){
	document.querySelector("[style*=overflow]").style.setProperty("overflow", "scroll");
	var parent = x.parentElement;
	if (!(parent === document.body)) x.parentNode.remove();
	else x.remove();
}
