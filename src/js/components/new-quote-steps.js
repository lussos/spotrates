
export default function newQuoteSteps() {

  var steps = $('.steps-header .step-tab'),
      stepCont = $('.steps-content .step'),
      nextBtn = $('#nextBtn'),
      prevBtn = $('#prevBtn'),
      cancelBtn = $('#cancel'),
      continueBtn = $('#continue');
  nextBtn.on('click', function(){
    prevBtn.show();
    cancelBtn.hide();
    if (steps.hasClass('active')) {
      $('.step-tab.active').removeClass('active')
      .next(steps).addClass('active');
      
    }
    if (stepCont.hasClass('active')) {
      $('.step.active').removeClass('active').addClass('out')
      .next(stepCont).addClass('active');
    }
    
  })
  prevBtn.on('click', function(){
    prevBtn.show();
    cancelBtn.hide();
    if (steps.hasClass('active')) {
      $('.step-tab.active').removeClass('active')
      .prev(steps).addClass('active'); 
    }
    if (stepCont.hasClass('active')) {
      $('.step.active').removeClass('active')
      .prev(stepCont).removeClass('out').addClass('active');
    }
 
  })
  
}

