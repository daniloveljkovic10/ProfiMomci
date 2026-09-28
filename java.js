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

  // Prikazuje unos isključivo kao običan tekst.
  // HTML, JavaScript i event handleri se NE izvršavaju.
  paragraf.textContent = tekst;

  input.value = "";
  input.focus();
});

// Omogućava slanje pritiskom na Enter.
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    dugme.click();
  }
});
