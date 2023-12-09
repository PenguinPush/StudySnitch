let bool = false;

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
function handleCheckboxState() {
  const checkbox = document.getElementById('myCheckbox');

  chrome.storage.sync.get({ isChecked: false }, function (data) {
    checkbox.checked = data.isChecked;
    if (checkbox.checked) {
      showStuff();
      change();
    }
  });


  checkbox.addEventListener('change', function () {
    const isChecked = checkbox.checked;

    chrome.storage.sync.set({ isChecked });

    if (isChecked) {
      showStuff();
      change();
    }
  });
}


document.addEventListener('DOMContentLoaded', handleCheckboxState);