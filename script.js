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
  } else if (selected === 'letterCover') {
    formFields.innerHTML = `
      <h3>Sender</h3>
      <input type="text" id="s1" placeholder="Sender row 1" />
      <input type="text" id="s2" placeholder="Sender row 2" />
      <input type="text" id="s3" placeholder="Sender row 3" />
      <input type="text" id="s4" placeholder="Sender row 4" />

      <h3>Receiver</h3>
      <input type="text" id="r1" placeholder="Receiver row 1" />
      <input type="text" id="r2" placeholder="Receiver row 2" />
      <input type="text" id="r3" placeholder="Receiver row 3" />
      <input type="text" id="r4" placeholder="Receiver row 4" />
    `;
  }
}

templateSelect.addEventListener('change', renderFields);
renderFields();

document.getElementById('templateForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const template = templateSelect.value;
  const params = new URLSearchParams();
  params.set('template', template);

  if (template === 'a4landscape') {
    params.set('inputText', document.getElementById('inputText').value);
  } else if (template === 'letterTemplate') {
    params.set('inputText', document.getElementById('inputText').value);
    params.set('letterName', document.getElementById('letterName').value);
  } else if (template === 'letterCover') {
    params.set('s1', document.getElementById('s1').value);
    params.set('s2', document.getElementById('s2').value);
    params.set('s3', document.getElementById('s3').value);
    params.set('s4', document.getElementById('s4').value);
    params.set('r1', document.getElementById('r1').value);
    params.set('r2', document.getElementById('r2').value);
    params.set('r3', document.getElementById('r3').value);
    params.set('r4', document.getElementById('r4').value);
  }

  window.location.href = `output.html?${params.toString()}`;
});
