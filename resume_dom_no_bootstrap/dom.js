function toggleDark() {
  var element = document.body;
  var newhead = document.getElementsByClassName('header')[0];
  var socialEl = document.getElementsByClassName('social')[0];
  var buttonToggle = document.getElementsByClassName('lightButton')[0];
  socialEl.classList.toggle('social-dark-mode');
  newhead.classList.toggle('header-dark-mode');
  element.classList.toggle('dark-mode');
  buttonToggle.classList.toggle('lightButton-dark');
}
function inputItems() {
  let text = document.getElementById('experience-input').value;
  let el = document.createElement('li');
  el.innerHTML = text;
  let name;
  if (document.getElementById('work1').selected) {
    name = 'workOne';
  } else if (document.getElementById('work2').selected) {
    name = 'workTwo';
  } else if (document.getElementById('work3').selected) {
    name = 'workThree';
  }
  if (text) {
    document.getElementById(name).appendChild(el);
    document.getElementById('experience-input').value = '';
  }
}
// Can remove skills by clicking on them
function removeItem(id) {
  document.getElementById(id).style.display = 'none';
}
// Change number via the input box
function changeNumber() {
  let numberValue = document.getElementById('number-input').value;
  let name;
  if (document.getElementById('Number').selected) {
    name = 'number';
    document.getElementsByClassName('button-number')[0].innerHTML =
      'Click to update number';
  } else if (document.getElementById('Email').selected) {
    name = 'email';
    document.getElementsByClassName('button-number')[0].innerHTML =
      'Click to update email';
  } else if (document.getElementById('Location').selected) {
    name = 'location';
    document.getElementsByClassName('button-number')[0].innerHTML =
      'Click to update location';
  }
  document.getElementById(name).innerHTML = numberValue;
  document.getElementById('number-input').value = '';
}

function addSkills() {
  let newSkill = document.getElementById('skill-input').value;
  let el = document.createElement('li');
  el.innerHTML = newSkill;
  el.setAttribute('class', 'skill-list');
  el.setAttribute('id', newSkill);
  // el.addEventListener('click', removeItem(id));
  document.getElementById('allSkills').appendChild(el);
  document.getElementById('skill-input').value = '';
}
