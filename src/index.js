import 'jquery';
import './scss/main.scss';
import 'trumbowyg';

import includeHTML from "./js/components/templates";
import sidePanel from './js/components/side-panel';
import select from './js/components/select';
import newQuoteSteps from './js/components/new-quote-steps';
import addRow from './js/components/add-row';
import datePicker from './js/components/datepicker';

window.onload = function() {
  includeHTML();
  sidePanel();
  
  setTimeout(() => {
    select();
    newQuoteSteps();
    addRow();
    datePicker();
    $('.text-editor').trumbowyg();
  }, 500);
  
}
