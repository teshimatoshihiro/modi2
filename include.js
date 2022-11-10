function IncludeTemplateHTML(selector, filepath) {
  $function(){
    $.ajaxSetup({ cache: false });
    $(selector).load(filepath);
  }
}