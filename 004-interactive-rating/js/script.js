const element = document.getElementById("submit");
element.addEventListener("click", submit);

function submit() {
  var selectedRate = document.querySelector('input[name="rate"]:checked');

  if (!selectedRate) {
    alert("Please select the rating!");
  } else {
    document.getElementById("rating").textContent = selectedRate.value;
    showThankyou();
  }
}

function showThankyou() {
  var select = document.getElementById("select");
  var result = document.getElementById("result");

  select.style.display = "none";
  result.style.display = "grid";
}
