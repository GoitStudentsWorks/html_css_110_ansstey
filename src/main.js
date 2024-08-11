var modal = document.getElementById('myModal');
var openBtn = document.getElementById('openModal');
var closeBtn = document.getElementById('closeModal');

console.log(modal);
console.log(openBtn);
console.log(closeBtn);

openBtn.onclick = function (event) {
  modal.style.display = 'flex';
};

closeBtn.onclick = function (event) {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
