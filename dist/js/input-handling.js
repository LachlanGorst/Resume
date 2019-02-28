// * CSS Button Section //
$('.job-2').click(() => {
  if (!$('.css').hasClass('glow')) {
    $('.css').addClass('glow');
    $('.job-2').addClass('hidden');
    $('.blurBack').removeClass('hidden');
  } else {
    $('.css').removeClass('glow');
    $('.job-2').removeClass('hidden');
    $('.blurBack').addClass('hidden');
  }
});
//Hover Version
$('.job-2').mouseover(() => {
  $('.css').addClass('glow');
  $('.job-2').addClass('hidden');
  $('.blurBack').removeClass('hidden');
});
$('.job-2').mouseleave(() => {
  $('.css').removeClass('glow');
  $('.job-2').removeClass('hidden');
  $('.blurBack').addClass('hidden');
});
// * CSS Button Section End

// * JS Button Section //
const job3_JS = document.querySelector('.job-3');
job3_JS.addEventListener('click', jsClick);
function jsClick(e) {
  $('.spot').css('left', `${e.clientX - 10}px`);
  $('.spot').css('top', `${e.clientY - 10}px`);
  $('.spot').addClass('spotClicked');
  setTimeout(removeSpot, 500);
}
function removeSpot() {
  $('.spot').removeClass('spotClicked');
}
// * JS Button Section End//

// * SASS Button Section //
//Click Version For Mobile
$('.job-4').click(() => {
  if (!$('.job-4').hasClass('blue')) {
    $('.job-4').addClass('blue');
  } else {
    $('.job-4').removeClass('blue');
  }
});
//Hover Version
$('.job-4').mouseover(() => {
  $('.job-4').addClass('blue');
});
$('.job-4').mouseleave(() => {
  $('.job-4').removeClass('blue');
});
// * SASS Button Section End//

// * JQuery Button Section //
/*
const userNameInput = document.querySelector('.inputName'); //div
const userInputBox = document.getElementById('userName'); //input
const jqueryH1 = document.querySelector('#jqueryH1'); //h1
const job5_JQuery = document.querySelector('.job-5'); //div box

job5_JQuery.addEventListener('click', jqueryClick);
function jqueryClick() {
  jqueryH1.style.visibility = 'hidden';
  userNameInput.style.visibility = 'visible';
} */
$('.job-5').click(() => {
  $('#jqueryH1').css('visibility', 'hidden');
  $('.inputName').css('visibility', 'visible');
});

$('#userName').keyup(e => {
  if (e.keyCode === 13) {
    $('#jqueryH1').html($('#userName').val());
    $('#jqueryH1').css('visibility', 'visible');
    $('.inputName').css('visibility', 'hidden');
  }
});
// * JQuery Button Section End //
