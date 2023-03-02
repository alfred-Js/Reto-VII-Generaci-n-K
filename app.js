let name = document.querySelector('#nombre');


function removeVocalsAndSpaces(name) {
  name = name.trim().replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/g, '');
  return name;
}

function handleInputName() {
}
