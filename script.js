document.getElementById('templateForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const inputText = document.getElementById('inputText').value;
  const params = new URLSearchParams();
  params.set('inputText', inputText);
  window.location.href = `output.html?${params.toString()}`;
});
