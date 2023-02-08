var contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', displayObject);

function displayObject(e) {
  // event.preventDefault();
  var formControlValues = {};
  formControlValues[document.forms[0].elements.name.name] = document.forms[0].elements.name.value;
  formControlValues[document.forms[0].elements.email.name] = document.forms[0].elements.email.value;
  formControlValues[document.forms[0].elements.message.name] = document.forms[0].elements.message.value;
  console.log(formControlValues);
  return formControlValues;
}
// console.log(displayObject())
