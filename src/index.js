import 'jquery';
import './scss/main.scss';
import 'trumbowyg';


import includeHTML from "./js/components/templates";
import sidePanel from './js/components/side-panel';
import select from './js/components/select';
import newQuoteSteps from './js/components/new-quote-steps';
import addRow from './js/components/add-row';
import datePicker from './js/components/datepicker';
import advSearch from './js/components/advanced-search';


$(document).ready(function() {

  app.init();

});

var app = (function() {

  var that = {};

  that.init = function () {

    includeHTML();
    sidePanel();
    advSearch();
    setTimeout(() => {
      select();
      newQuoteSteps();
      addRow();
      $.trumbowyg.svgPath = './fonts/icons.svg';
      $('.text-editor').trumbowyg(); 

      datePicker(); //Trow and error, but works. it should be last while trowing error.
    }, 1000);
 
  }

  return that;

})();
