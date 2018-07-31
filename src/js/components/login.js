export default function loadLogin() {
  let btn, body;
  btn = $('.header .logout');
  body = $('body');

  btn.on('click', function() {
    $(body).empty();
    $(body).load('./components/login.html');
  });
}