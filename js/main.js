function showPanel(name, el) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('panel-' + name).classList.add('active');
  el.classList.add('active');
}
function toggleCard(header) { header.parentElement.classList.toggle('open'); }
function toggleMeal(header) { header.parentElement.classList.toggle('open'); }