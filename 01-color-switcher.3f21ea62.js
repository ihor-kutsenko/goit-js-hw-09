!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),n=null;function d(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.addEventListener("click",(function(){n=setInterval(d,1e3),e.disabled=!0,a.disabled=!1})),a.addEventListener("click",(function(){clearInterval(n),e.disabled=!1,a.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.3f21ea62.js.map