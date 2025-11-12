document.addEventListener("DOMContentLoaded", function() {
  const entryInput = document.getElementById("entryinput");
  const entryButton = document.getElementById("entrybutton");
  const textOutput = document.getElementById("textoutput");

  entryButton.addEventListener("click", function() {
    const inputValue = entryInput.value;
    alert("Shaad Katrawala: " + inputValue);
    textOutput.textContent = inputValue;
    entryInput.value = "";
  });
});
