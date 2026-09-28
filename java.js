"use strict";

const input = document.getElementById("unos");
const dugme = document.getElementById("posalji");
const paragraf = document.getElementById("poruka");

dugme.addEventListener("click", () => {
  const tekst = input.value.trim();

  if (tekst.length === 0) {
    paragraf.textContent = "Unesite tekst.";
    return;
  }

  // Bezbedno prikazivanje: unos se tretira kao običan tekst.
  paragraf.textContent = "Zdravo " + tekst;

  input.value = "";
  input.focus();
});

// Slanje pritiskom na Enter
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    dugme.click();
  }
});
