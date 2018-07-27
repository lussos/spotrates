import 'jquery';
import './scss/main.scss';

import includeHTML from "./js/components/templates";
import sidePanel from './js/components/side-panel';
import select from './js/components/select';
import newQuoteSteps from './js/components/new-quote-steps';

window.onload = function() {
  includeHTML();
  sidePanel();
  
  setTimeout(() => {
    select();
    newQuoteSteps();
  }, 500);
  
}