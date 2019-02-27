const job1_HTML = document.querySelector('.job-1');
const job2_CSS = document.querySelector('.job-2');
const job3_JS = document.querySelector('.job-3');
const job4_SASS = document.querySelector('.job-4');
const job5_JQuery = document.querySelector('.job-5');

const spot = document.querySelector('.spot');
const spotStyle = getComputedStyle(spot);

const userNameInput = document.querySelector('.inputName');
const userInputBox = document.getElementById('userName');
const jqueryH1 = document.querySelector('#jqueryH1');

job1_HTML.addEventListener('click', htmlClick);
job2_CSS.addEventListener('click', cssClick);
job3_JS.addEventListener('click', jsClick);
job4_SASS.addEventListener('click', sassClick);
job5_JQuery.addEventListener('click', jqueryClick);

userInputBox.addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    jqueryH1.innerHTML = userInputBox.value;
    jqueryH1.style.visibility = 'visible';
    userNameInput.style.visibility = 'hidden';
  }
});

function htmlClick() {}
function cssClick() {}

function jsClick(e) {
  spot.style.left = `${e.clientX - 10}px`;
  spot.style.top = `${e.clientY - 10}px`;
  spot.style.visibility = 'visible';
}

function sassClick() {
  let newBackground = '#fff';
  job4_SASS.style.color = `set-text-color(${newBackground})`;
}
function jqueryClick() {
  jqueryH1.style.visibility = 'hidden';
  userNameInput.style.visibility = 'visible';
}
