document.getElementById("sumForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  var numForms = parseInt(document.getElementById("numForms").value);
  if (isNaN(numForms) || numForms < 1) {
    return; // Verifica si el número ingresado es válido
  }

  var formsContainer = document.getElementById("formsContainer");
  formsContainer.innerHTML = ""; // Limpia los formularios existentes

  for (var i = 0; i < numForms; i++) {
    var formGroup = document.createElement("div");
    formGroup.className = "formGroup";

    var label = document.createElement("label");
    label.textContent = "Número " + (i + 1) + ":";
    formGroup.appendChild(label);

    var input = document.createElement("input");
    input.type = "number";
    input.required = true;
    formGroup.appendChild(input);

    formsContainer.appendChild(formGroup);
  }

  var sumButton = document.getElementById("sumButton");
  sumButton.disabled = false; // Habilita el botón de sumar
});

document.getElementById("sumButton").addEventListener("click", function() {
  var inputs = document.querySelectorAll("#formsContainer input");
  var sum = 0;

  for (var i = 0; i < inputs.length; i++) {
    var value = parseInt(inputs[i].value);
    if (!isNaN(value)) {
      sum += value;
    }
  }

  document.getElementById("result").innerHTML = "La suma es: " + sum;
});
