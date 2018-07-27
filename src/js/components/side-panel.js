
export default function sidePanel() {
  
  const btn = document.getElementById('new-quote');
  const panel = document.querySelector('.side-panel');
  const body = document.getElementsByTagName("BODY")[0];

  btn.addEventListener('click', loadNewQuotePanel);
    
  function loadNewQuotePanel() { 
    panel.className = "side-panel active";
    body.classList.add('side-panel-active');   

    const close = document.querySelector('.close-panel');
    const cancel = document.getElementById('cancel');
    close.addEventListener('click', function() {
      panel.classList.remove("active");
      body.classList.remove('side-panel-active'); 
    });
    cancel.addEventListener('click', function() {
      panel.classList.remove("active");
      body.classList.remove('side-panel-active'); 
    });
    
  }
}


