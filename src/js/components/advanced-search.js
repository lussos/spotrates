export default function advSearch() {
  let btn, panel, table;
  btn = $('.base .base-header .search-more');
  panel = $('.base .advanced-search');
  table = $('.base .base-content');

  btn.on('click', function(){
    $(this).toggleClass('active');
    $(panel).toggleClass('active');
    $(table).toggleClass('sp-active');
  });
}