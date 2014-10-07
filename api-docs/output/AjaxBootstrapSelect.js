Ext.data.JsonP.AjaxBootstrapSelect({"tagname":"class","name":"AjaxBootstrapSelect","autodetected":{},"files":[{"filename":"AjaxBootstrapSelect.js","href":"AjaxBootstrapSelect.html#AjaxBootstrapSelect"}],"params":[{"tagname":"params","type":"jQuery|HTMLElement","name":"element","doc":"<p>The select element this plugin is to affect.</p>\n","html_type":"jQuery|HTMLElement"},{"tagname":"params","type":"Object","name":"options","default":"{}","optional":true,"doc":"<p>The options used to affect the desired functionality of this plugin.</p>\n","html_type":"Object"}],"return":{"type":"AjaxBootstrapSelect|null","name":"return","doc":"<p>A new instance of this class or null if unable to instantiate.</p>\n","properties":null,"html_type":"<a href=\"#!/api/AjaxBootstrapSelect\" rel=\"AjaxBootstrapSelect\" class=\"docClass\">AjaxBootstrapSelect</a>|null"},"members":[{"name":"$element","tagname":"property","owner":"AjaxBootstrapSelect","id":"property-S-element","meta":{}},{"name":"LOG_DEBUG","tagname":"property","owner":"AjaxBootstrapSelect","id":"property-LOG_DEBUG","meta":{}},{"name":"LOG_ERROR","tagname":"property","owner":"AjaxBootstrapSelect","id":"property-LOG_ERROR","meta":{}},{"name":"LOG_INFO","tagname":"property","owner":"AjaxBootstrapSelect","id":"property-LOG_INFO","meta":{}},{"name":"LOG_WARNING","tagname":"property","owner":"AjaxBootstrapSelect","id":"property-LOG_WARNING","meta":{}},{"name":"list","tagname":"property","owner":"AjaxBootstrapSelect","id":"property-list","meta":{}},{"name":"options","tagname":"property","owner":"AjaxBootstrapSelect","id":"property-options","meta":{}},{"name":"previousQuery","tagname":"property","owner":"AjaxBootstrapSelect","id":"property-previousQuery","meta":{}},{"name":"query","tagname":"property","owner":"AjaxBootstrapSelect","id":"property-query","meta":{}},{"name":"selectpicker","tagname":"property","owner":"AjaxBootstrapSelect","id":"property-selectpicker","meta":{}},{"name":"init","tagname":"method","owner":"AjaxBootstrapSelect","id":"method-init","meta":{}},{"name":"log","tagname":"method","owner":"AjaxBootstrapSelect","id":"method-log","meta":{}},{"name":"replaceValue","tagname":"method","owner":"AjaxBootstrapSelect","id":"method-replaceValue","meta":{}},{"name":"t","tagname":"method","owner":"AjaxBootstrapSelect","id":"method-t","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-AjaxBootstrapSelect","short_doc":" ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect' target='_blank'>AjaxBootstrapSelect.js</a></div></pre><div class='doc-contents'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : jQuery|HTMLElement<div class='sub-desc'><p>The select element this plugin is to affect.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>The options used to affect the desired functionality of this plugin.</p>\n<p>Defaults to: <code>{}</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/AjaxBootstrapSelect\" rel=\"AjaxBootstrapSelect\" class=\"docClass\">AjaxBootstrapSelect</a>|null</span><div class='sub-desc'><p>A new instance of this class or null if unable to instantiate.</p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-S-element' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='AjaxBootstrapSelect'>AjaxBootstrapSelect</span><br/><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect-property-S-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/AjaxBootstrapSelect-property-S-element' class='name expandable'>$element</a> : jQuery<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The select element this plugin is being attached to.</p>\n</div><div class='long'><p>The select element this plugin is being attached to.</p>\n</div></div></div><div id='property-LOG_DEBUG' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='AjaxBootstrapSelect'>AjaxBootstrapSelect</span><br/><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect-property-LOG_DEBUG' target='_blank' class='view-source'>view source</a></div><a href='#!/api/AjaxBootstrapSelect-property-LOG_DEBUG' class='name expandable'>LOG_DEBUG</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Used for logging debug messages.</p>\n</div><div class='long'><p>Used for logging debug messages.</p>\n</div></div></div><div id='property-LOG_ERROR' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='AjaxBootstrapSelect'>AjaxBootstrapSelect</span><br/><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect-property-LOG_ERROR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/AjaxBootstrapSelect-property-LOG_ERROR' class='name expandable'>LOG_ERROR</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Used for logging error messages.</p>\n</div><div class='long'><p>Used for logging error messages.</p>\n</div></div></div><div id='property-LOG_INFO' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='AjaxBootstrapSelect'>AjaxBootstrapSelect</span><br/><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect-property-LOG_INFO' target='_blank' class='view-source'>view source</a></div><a href='#!/api/AjaxBootstrapSelect-property-LOG_INFO' class='name expandable'>LOG_INFO</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Used for logging informational messages.</p>\n</div><div class='long'><p>Used for logging informational messages.</p>\n</div></div></div><div id='property-LOG_WARNING' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='AjaxBootstrapSelect'>AjaxBootstrapSelect</span><br/><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect-property-LOG_WARNING' target='_blank' class='view-source'>view source</a></div><a href='#!/api/AjaxBootstrapSelect-property-LOG_WARNING' class='name expandable'>LOG_WARNING</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Used for logging warning messages.</p>\n</div><div class='long'><p>Used for logging warning messages.</p>\n</div></div></div><div id='property-list' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='AjaxBootstrapSelect'>AjaxBootstrapSelect</span><br/><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect-property-list' target='_blank' class='view-source'>view source</a></div><a href='#!/api/AjaxBootstrapSelect-property-list' class='name expandable'>list</a> : <a href=\"#!/api/AjaxBootstrapSelectList\" rel=\"AjaxBootstrapSelectList\" class=\"docClass\">AjaxBootstrapSelectList</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>The select list.</p>\n</div><div class='long'><p>The select list.</p>\n</div></div></div><div id='property-options' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='AjaxBootstrapSelect'>AjaxBootstrapSelect</span><br/><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect-property-options' target='_blank' class='view-source'>view source</a></div><a href='#!/api/AjaxBootstrapSelect-property-options' class='name expandable'>options</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The merged default and passed options.</p>\n</div><div class='long'><p>The merged default and passed options.</p>\n</div></div></div><div id='property-previousQuery' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='AjaxBootstrapSelect'>AjaxBootstrapSelect</span><br/><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect-property-previousQuery' target='_blank' class='view-source'>view source</a></div><a href='#!/api/AjaxBootstrapSelect-property-previousQuery' class='name expandable'>previousQuery</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The previous query that was requested. ...</div><div class='long'><p>The previous query that was requested.</p>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div><div id='property-query' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='AjaxBootstrapSelect'>AjaxBootstrapSelect</span><br/><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect-property-query' target='_blank' class='view-source'>view source</a></div><a href='#!/api/AjaxBootstrapSelect-property-query' class='name expandable'>query</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The current query being requested. ...</div><div class='long'><p>The current query being requested.</p>\n<p>Defaults to: <code>&#39;&#39;</code></p></div></div></div><div id='property-selectpicker' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='AjaxBootstrapSelect'>AjaxBootstrapSelect</span><br/><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect-property-selectpicker' target='_blank' class='view-source'>view source</a></div><a href='#!/api/AjaxBootstrapSelect-property-selectpicker' class='name expandable'>selectpicker</a> : Selectpicker<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Reference to the selectpicker instance.</p>\n</div><div class='long'><p>Reference to the selectpicker instance.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-init' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='AjaxBootstrapSelect'>AjaxBootstrapSelect</span><br/><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/AjaxBootstrapSelect-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Initializes this plugin on a selectpicker instance. ...</div><div class='long'><p>Initializes this plugin on a selectpicker instance.</p>\n</div></div></div><div id='method-log' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='AjaxBootstrapSelect'>AjaxBootstrapSelect</span><br/><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect-method-log' target='_blank' class='view-source'>view source</a></div><a href='#!/api/AjaxBootstrapSelect-method-log' class='name expandable'>log</a>( <span class='pre'>type, message</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Wrapper function for logging messages to window.console. ...</div><div class='long'><p>Wrapper function for logging messages to window.console.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Number<div class='sub-desc'><p>The type of message to log. Must be one of:</p>\n\n<ul>\n<li><a href=\"#!/api/AjaxBootstrapSelect-property-LOG_ERROR\" rel=\"AjaxBootstrapSelect-property-LOG_ERROR\" class=\"docClass\">AjaxBootstrapSelect.LOG_ERROR</a></li>\n<li><a href=\"#!/api/AjaxBootstrapSelect-property-LOG_WARNING\" rel=\"AjaxBootstrapSelect-property-LOG_WARNING\" class=\"docClass\">AjaxBootstrapSelect.LOG_WARNING</a></li>\n<li><a href=\"#!/api/AjaxBootstrapSelect-property-LOG_INFO\" rel=\"AjaxBootstrapSelect-property-LOG_INFO\" class=\"docClass\">AjaxBootstrapSelect.LOG_INFO</a></li>\n<li><a href=\"#!/api/AjaxBootstrapSelect-property-LOG_DEBUG\" rel=\"AjaxBootstrapSelect-property-LOG_DEBUG\" class=\"docClass\">AjaxBootstrapSelect.LOG_DEBUG</a></li>\n</ul>\n\n</div></li><li><span class='pre'>message</span> : String|Object|*...<div class='sub-desc'><p>The message(s) to log. Multiple arguments can be passed.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-replaceValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='AjaxBootstrapSelect'>AjaxBootstrapSelect</span><br/><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect-method-replaceValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/AjaxBootstrapSelect-method-replaceValue' class='name expandable'>replaceValue</a>( <span class='pre'>obj, needle, value, [options]</span> ) : void<span class=\"signature\"></span></div><div class='description'><div class='short'>Replaces an old value in an object or array with a new value. ...</div><div class='long'><p>Replaces an old value in an object or array with a new value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object|Array<div class='sub-desc'><p>The object (or array) to iterate over.</p>\n</div></li><li><span class='pre'>needle</span> : *<div class='sub-desc'><p>The value to search for.</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>The value to replace with.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Additional options for restricting replacement:\n    - recursive: {boolean} Whether or not to iterate over the entire\n      object or array, defaults to true.\n    - depth: {int} The number of level this method is to search\n      down into child elements, defaults to false (no limit).\n    - limit: {int} The number of times a replacement should happen,\n      defaults to false (no limit).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-t' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='AjaxBootstrapSelect'>AjaxBootstrapSelect</span><br/><a href='source/AjaxBootstrapSelect.html#AjaxBootstrapSelect-method-t' target='_blank' class='view-source'>view source</a></div><a href='#!/api/AjaxBootstrapSelect-method-t' class='name expandable'>t</a>( <span class='pre'>key, [langCode]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Generates a translated locale string for a given locale key. ...</div><div class='long'><p>Generates a translated <a href=\"#!/api/$.fn.ajaxSelectPicker.locale\" rel=\"$.fn.ajaxSelectPicker.locale\" class=\"docClass\">locale string</a> for a given locale key.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The translation key to use.</p>\n</div></li><li><span class='pre'>langCode</span> : String (optional)<div class='sub-desc'><p>Overrides the currently set <a href=\"#!/api/$.fn.ajaxSelectPicker.defaults-cfg-langCode\" rel=\"$.fn.ajaxSelectPicker.defaults-cfg-langCode\" class=\"docClass\">langCode</a> option.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The translated string.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});