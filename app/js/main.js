require.config({
  paths: {
    'jquery': '../../vendor/jquery/jquery',
    'domReady': '../../vendor/requirejs-domready/domReady',
    'codemirror': '../../vendor/codemirror/lib/codemirror',
    'codemirror_mode_javascript': '../../vendor/codemirror/mode/javascript/javascript',
    'codemirror_addon_placeholder': '../../vendor/codemirror/addon/display/placeholder',
    'codemirror_addon_foldcode': '../..//vendor/codemirror/addon/fold/foldcode',
    'codemirror_addon_foldgutter': '../../vendor/codemirror/addon/fold/foldgutter',
    'codemirror_addon_bracefold': '../../vendor/codemirror/addon/fold/brace-fold'
  },
  shim: {
    'codemirror_mode_javascript': ['codemirror'],
    'codemirror_addon_placeholder': ['codemirror'],
    'codemirror_addon_foldcode': ['codemirror'],
    'codemirror_addon_foldgutter': ['codemirror'],
    'codemirror_addon_bracefold': ['codemirror']
  }
});

require(["jquery",
  "codemirror",
  "codemirror_mode_javascript",
  "codemirror_addon_placeholder",
  "codemirror_addon_foldcode",
  "codemirror_addon_foldgutter",
  "codemirror_addon_bracefold",
  "domReady!"
], function ($, undefined, undefined) {

  var options_for_editor = {
    mode: "javascript",
    //json: true,
    lineWrapping: true,
    lineNumbers: true,
    placeholder: "Paste your JSON here ...",
    showCursorWhenSelecting: true,
  }

  var options_for_result_editor = {
    mode: "javascript",
    json: true,
    lineWrapping: true,
    lineNumbers: true,
    showCursorWhenSelecting: true,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
  }





  var editor = CodeMirror($("#editor")[0], options_for_editor);
  var result_editor = CodeMirror($("#result_editor")[0], options_for_result_editor);


  $(document).on("click", "#parse-json-btn", function() {
    var json_string = editor.getValue();

    var parsed_json = JSON.parse(json_string);

    var indented_json_string = JSON.stringify(parsed_json, undefined, 2); // indentation level = 2

    result_editor.setValue(indented_json_string)

  })


});
