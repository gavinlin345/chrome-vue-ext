/*!
   This file is part of ColorZilla

   Written by Alex Sirota (alex @ iosart.com)

   Copyright (c) iosart labs llc 2011, All Rights Reserved

   Please do not use without permission
*/
var browser=chrome||browser,localStorageData={};function translateUI(){var o=ColorZilla.BrowserUtils.i18nReplace;o("head title","colorzilla_options"),o("div.heading h1","colorzilla_options"),o("#eyedropper-options th","eyedropper"),o("label.cz-show-magnifier","show_magnifier"),o("label.cz-show-magnifier-secondary","temporarily_show_hide_by_holding_shift"),o("label.cz-autostart","auto_start_eyedropper_when_button_clicked"),o("#cz-outline-label","outline_hovered_elements"),o("#cz-cursor-crosshair-label","change_cursor_to_crosshair"),o("#cz-dont-move-doc-down-label","dont_move_document_down_when_sampling"),o("#autocopy-options th","auto_copy"),o("#cz-autocopy-label","auto_copy_picked_to_clipboard"),o("#cz-autocopy-format-label","auto_copy_format"),o("#color-format-options th","color_format"),o("#cz-hex-lowercase-label","show_hex_codes_lowercase"),o("#keyboard-shortcut-options th","keyboard_shortcuts"),o("#cz-keyboard-shortcuts-enabled-label","enable_keyboard_shortcuts"),o("#cz-keyboard-shortcuts-char-label","keyboard_shortcut_label"),o("#save-button","save_button_label")}function get(o){return document.getElementById(o)}function readOption(o,e){return o in localStorageData?localStorageData[o]:e}function loadOptions(){browser.storage.local.get(null,function(o){localStorageData=o,parseOptions()})}function parseOptions(){function o(){var o=get("cz-autocopy").checked;get("cz-autocopy-format").disabled=!o,get("cz-autocopy-show-message").disabled=!o,o?$("#cz-autocopy-format-label").removeClass("disabled"):$("#cz-autocopy-format-label").addClass("disabled")}function e(){var o=get("cz-hex-lowercase").checked;$('#cz-autocopy-format option[value="hex"]').text(o?"#rrggbb":"#RRGGBB"),$('#cz-autocopy-format option[value="hex-no-hash"]').text(o?"rrggbb":"RRGGBB")}get("cz-autostart").checked="true"==readOption("option-autostart-eyedropper-v2","true"),ColorZilla.BrowserUtils.platformSupportsNonForegroundHover()||$(".cz-autostart").hide(),get("cz-show-magnifier").checked="true"==readOption("option-show-magnifier","true"),get("cz-outline").checked="true"==readOption("option-outline-hovered","true"),get("cz-cursor-crosshair").checked="true"==readOption("option-cursor-crosshair","true"),get("cz-dont-move-doc-down").checked="true"==readOption("option-dont-move-doc-down","false"),get("cz-autocopy").checked="true"==readOption("option-autocopy-to-clipboard","true"),get("cz-autocopy-show-message").checked="true"==readOption("option-autocopy-show-message","true"),get("cz-autocopy-format").value=readOption("option-autocopy-color-format","hex"),o(),get("cz-autocopy").onchange=o,get("cz-hex-lowercase").checked="true"==readOption("option-lowercase-hexa","false"),(get("cz-hex-lowercase").onchange=e)(),get("cz-keyboard-shortcuts-enabled").checked="true"==readOption("option-keyboard-shortcuts-enabled","false");for(var t="mac"==ColorZilla.BrowserUtils.getPlatform(),a=(get("cz-keyboard-shortcut-modifier-label").innerHTML=t?"Cmd+Opt+":"Ctrl+Alt+",$("#cz-keyboard-shortcuts-char")),r=65;r<=90;r++){var c=String.fromCharCode(r);$('<option value="'+c+'">'+c+"</option>").appendTo(a)}function s(){var o=get("cz-keyboard-shortcuts-enabled").checked;get("cz-keyboard-shortcuts-char").disabled=!o,o?$("#cz-keyboard-shortcuts-char-label, #cz-keyboard-shortcut-modifier-label").removeClass("disabled"):$("#cz-keyboard-shortcuts-char-label, #cz-keyboard-shortcut-modifier-label").addClass("disabled")}a.val(readOption("option-keyboard-shortcuts-char","Z")),s(),get("cz-keyboard-shortcuts-enabled").onchange=s}function saveOptions(){var o={},e=(o["option-autostart-eyedropper-v2"]=get("cz-autostart").checked?"true":"false",o["option-show-magnifier"]=get("cz-show-magnifier").checked?"true":"false",o["option-outline-hovered"]=get("cz-outline").checked?"true":"false",o["option-cursor-crosshair"]=get("cz-cursor-crosshair").checked?"true":"false",o["option-dont-move-doc-down"]=get("cz-dont-move-doc-down").checked?"true":"false",o["option-autocopy-to-clipboard"]=get("cz-autocopy").checked?"true":"false",o["option-autocopy-show-message"]=get("cz-autocopy-show-message").checked?"true":"false",o["option-autocopy-color-format"]=get("cz-autocopy-format").value,o["option-lowercase-hexa"]=get("cz-hex-lowercase").checked?"true":"false",o["option-keyboard-shortcuts-enabled"]=get("cz-keyboard-shortcuts-enabled").checked?"true":"false",o["option-keyboard-shortcuts-char"]=get("cz-keyboard-shortcuts-char").value,document.getElementById("status"));e.innerHTML=browser.i18n.getMessage("options_saved"),setTimeout(function(){e.innerHTML=""},2e3),browser.storage.local.set(o,function(){browser.runtime.sendMessage({"op":"options-changed"})})}translateUI(),loadOptions(),document.getElementById("save-button").addEventListener("click",function(){saveOptions()},!1);