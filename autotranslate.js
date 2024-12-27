// ==UserScript==
// @name         Auto-Translate Online-fix.me
// @namespace    autotranslate
// @version      0.1br
// @description  Traduz automaticamente a página online-fix.me para pt-br
// @author       aarcanj0
// @match        https://online-fix.me/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=online-fix.me
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const lang = 'pt';
    try
    {
        window.onload = function() {
        var selectElement = document.querySelector('select.goog-te-combo');
        if (selectElement) {
            var ptOption = selectElement.querySelector('option[value="'+lang+'"]');
            if (ptOption) {
                ptOption.selected = true;
                var event = new Event('change');
                selectElement.dispatchEvent(event);
                console.log('Auto-Translate Tampermonkey: Executado com êxito em: '+ lang);
            }
        }
    };
    }
    catch(Error)
    {
        console.log('Auto-Translate Tampermonkey: Não foi possível executar o script');
        console.log(Error);
        alert('JavaScript Erro: '+ Error);
    }
})();