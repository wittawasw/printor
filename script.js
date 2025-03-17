const templateSelect = document.getElementById('template');
const formFields = document.getElementById('formFields');

function renderFields() {
  const selected = templateSelect.value;
  formFields.innerHTML = '';

  if (selected === 'a4landscape') {
    formFields.innerHTML = `
      <label for="inputText">Input Text:</label>
      <textarea id="inputText" rows="4"></textarea>
    `;
  } else if (selected === 'letterTemplate') {
    formFields.innerHTML = `
      <label for="letterName">Recipient Name:</label>
      <input type="text" id="letterName" />
      <label for="inputText">Message:</label>
      <textarea id="inputText" rows="4"></textarea>
    `;
  }
}

templateSelect.addEventListener('change', renderFields);
renderFields();

document.getElementById('templateForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const template = templateSelect.value;
  const inputText = document.getElementById('inputText').value;
  const params = new URLSearchParams();
  params.set('template', template);
  params.set('inputText', inputText);

  if (template === 'letterTemplate') {
    const letterName = document.getElementById('letterName').value;
    params.set('letterName', letterName);
  }

  window.location.href = `output.html?${params.toString()}`;
});
