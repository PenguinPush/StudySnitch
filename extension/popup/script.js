let bool
if (bool = null){
  bool = false
} 

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('click', function () {
    showStuff();
    change();
  });
});

function showStuff() {
  console.log('showstuff');
  bool = !bool;
  var x = document.getElementById("three");
  var button1 = document.getElementById("streak");
  var button2 = document.getElementById("hours");
  if (x.style.display === 'none' || x.style.display === '') {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }
}

function change() {
  console.log('change');
  var img = document.getElementById("img");
  if (bool) {
    img.src = "images/on-state.jpg";
  } else {
    img.src = "images/better-off-state.PNG";
  }
}