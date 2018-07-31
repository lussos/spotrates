import 'jquery';
import './scss/main.scss';
import 'trumbowyg';
import 'datetimepick';


import includeHTML from "./js/components/templates";
import sidePanel from './js/components/side-panel';
import select from './js/components/select';
import newQuoteSteps from './js/components/new-quote-steps';
import addRow from './js/components/add-row';
import advSearch from './js/components/advanced-search';
import loadLogin from './js/components/login';

$(document).ready(function() {

  app.init();

});

var app = (function() {

  var that = {};

  that.init = function () {

    includeHTML();
    sidePanel();
   
    setTimeout(() => {
      select();
      newQuoteSteps();
      addRow();
      advSearch();
      
      $.trumbowyg.svgPath = './fonts/icons.svg';
      $('.text-editor').trumbowyg();

      $('.datepicker').datetimepicker({
        timepicker: false,
        format: 'm/d/Y'
      });
      loadLogin(); 
    }, 1500);
    setTimeout(() => {
      let loader;
      loader = $('.loader')
      loader.fadeOut(400);
    }, 2000);
  }

  return that;

})();
