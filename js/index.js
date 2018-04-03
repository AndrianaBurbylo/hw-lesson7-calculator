document.querySelectorAll('button')
    .forEach( el => el.addEventListener('click', switchSymb));

function switchSymb(e) {
    const clickedButton = e.target.dataset.id;
    document.querySelectorAll('button')
        .forEach( el => {
            if (el.dataset.id === clickedButton) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
}

document.getElementById('zero').addEventListener('click', function(e) {
  document.getElementById('display').value += '0';
});
document.getElementById('one').addEventListener('click', function(e) {
  document.getElementById('display').value += '1';
});
document.getElementById('two').addEventListener('click', function(e) {
  document.getElementById('display').value += '2';
});
document.getElementById('three').addEventListener('click', function(e) {
  document.getElementById('display').value += '3';
});
document.getElementById('four').addEventListener('click', function(e) {
  document.getElementById('display').value += '4';
});
document.getElementById('five').addEventListener('click', function(e) {
  document.getElementById('display').value += '5';
});
document.getElementById('six').addEventListener('click', function(e) {
  document.getElementById('display').value += '6';
});
document.getElementById('seven').addEventListener('click', function(e) {
  document.getElementById('display').value += '7';
});
document.getElementById('eight').addEventListener('click', function(e) {
  document.getElementById('display').value += '8';
});
document.getElementById('nine').addEventListener('click', function(e) {
  document.getElementById('display').value += '9';
});


// document.getElementById('equals').addEventListener('click', calculate);

// function calculate(operation, value){
//     return eval(value + operation + value);
// }
