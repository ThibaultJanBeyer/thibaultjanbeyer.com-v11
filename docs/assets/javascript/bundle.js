"use strict";fetch("//api.github.com/repos/thibaultjanbeyer/dragndrop").then(function(t){return t.json()}).then(function(t){document.querySelector("#dragndrop-gh-stars").firstChild.innerHTML=t.stargazers_count}).catch(function(t){return console.log(t)}),fetch("//api.github.com/repos/thibaultjanbeyer/dragselect").then(function(t){return t.json()}).then(function(t){document.querySelector("#dragselect-gh-stars").firstChild.innerHTML=t.stargazers_count}).catch(function(t){return console.log(t)});
