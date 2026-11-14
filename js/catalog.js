// Catalog filtering
function initCatalog(){
const filters = document.querySelectorAll('.catalog-filter');
const cards = document.querySelectorAll('.prod-card');
filters.forEach(btn => {
btn.addEventListener('click', () => {
filters.forEach(b => b.classList.remove('active'));
btn.classList.add('active');
const cat = btn.dataset.cat;
cards.forEach(card => {
if(cat === 'all' || card.dataset.cat === cat){
card.classList.remove('hidden');
card.classList.add('fade-in');
setTimeout(() => card.classList.remove('fade-in'), 400);
} else {
card.classList.add('hidden');
}
});
});
});
}
document.addEventListener('DOMContentLoaded', initCatalog);

// Weight calculator
const weightPerMeter = {6:0.222, 8:0.395, 10:0.617, 12:0.888, 14:1.21, 16:1.58, 18:2.00, 20:2.47, 25:3.85, 32:6.31, 40:9.87};

function calcWeight(){
const diam = parseInt(document.getElementById('calcDiam').value);
const length = parseFloat(document.getElementById('calcLength').value) || 0;
const count = parseInt(document.getElementById('calcCount').value) || 1;
const weight = weightPerMeter[diam] * length * count;
let result;
if(weight >= 1000){
result = (weight / 1000).toFixed(2) + ' т';
} else {
result = weight.toFixed(1) + ' кг';
}
const el = document.getElementById('calcResult');
if(el){
el.textContent = result;
el.style.animation = 'none';
el.offsetHeight;
el.style.animation = 'fadeUp 0.3s ease';
}
}
document.addEventListener('DOMContentLoaded', () => {
if(document.getElementById('calcDiam')) calcWeight();
});