// console.log("hi");

const nettoZuBruttoRadio = document.querySelector("#netto-zu-brutto-radio");
const bruttoZuNettoRadio = document.querySelector("#brutto-zu-netto-radio");
const steuersatz19Radio = document.querySelector("#steuersatz-19-radio");
const steuersatz7Radio = document.querySelector("#steuersatz-7-radio");
const betragLabel = document.querySelector("#betrag-label");
const betragInput = document.querySelector("#betrag-input");
const errorOutput = document.querySelector("#error-output");
const steuerOutput = document.querySelector("#steuer-output");
const endpreisHeadline = document.querySelector("#endpreis-headline");
const endpreisOutput = document.querySelector("#endpreis-output");

const headlineWechselNzB = () => {
  betragLabel.innerHTML = `Nettobetrag (Preis ohne Mehrwertsteuer) in Euro <span>*</span>`;
  endpreisHeadline.innerHTML = `Bruttobetrag`;
  steuerOutput.innerHTML = ``;
  endpreisOutput.innerHTML = ``;
  betragInput.value = ``;
};

const headlineWechselBzN = () => {
  betragLabel.innerHTML = `Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro`;
  endpreisHeadline.innerHTML = `Nettobetrag`;
  steuerOutput.innerHTML = ``;
  endpreisOutput.innerHTML = ``;
  betragInput.value = ``;
};

const ausrechnen = (event) => {
  event.preventDefault();
  const eingegebenerBetrag = Number(betragInput.value);

  if (betragInput.value.includes(`-`)) {
    errorOutput.innerHTML = `Bitte hier positiven Wert eingeben`;
    errorOutput.style.color = `red`;
  } else if (betragInput.value !== ``) {
    //   Wir können auch nettoZuBruttoRadio.checked == true schreiben
    if (nettoZuBruttoRadio.checked && steuersatz19Radio.checked) {
      const steuerBetrag = eingegebenerBetrag * 0.19;
      const ergebnisBetrag = eingegebenerBetrag + steuerBetrag;
      steuerOutput.innerHTML = steuerBetrag.toFixed(2);
      // Wir können das auch mit der Math.round Methode machen
      // steuerOutput.innerHTML = Math.round(steuerBetrag * 100) / 100;
      endpreisOutput.innerHTML = ergebnisBetrag.toFixed(2);
    } else if (nettoZuBruttoRadio.checked && steuersatz7Radio.checked) {
      const steuerBetrag = eingegebenerBetrag * 0.07;
      const ergebnisBetrag = eingegebenerBetrag + steuerBetrag;
      steuerOutput.innerHTML = steuerBetrag.toFixed(2);
      endpreisOutput.innerHTML = ergebnisBetrag.toFixed(2);
    } else if (bruttoZuNettoRadio.checked && steuersatz19Radio.checked) {
      const steuerBetrag = eingegebenerBetrag - eingegebenerBetrag / 1.19;
      const ergebnisBetrag = eingegebenerBetrag - steuerBetrag;
      steuerOutput.innerHTML = steuerBetrag.toFixed(2);
      endpreisOutput.innerHTML = ergebnisBetrag.toFixed(2);
    } else if (bruttoZuNettoRadio.checked && steuersatz7Radio.checked) {
      const steuerBetrag = eingegebenerBetrag - eingegebenerBetrag / 1.07;
      const ergebnisBetrag = eingegebenerBetrag - steuerBetrag;
      steuerOutput.innerHTML = steuerBetrag.toFixed(2);
      endpreisOutput.innerHTML = ergebnisBetrag.toFixed(2);
    }
  } else {
    errorOutput.innerHTML = "Bitte hier Wert eingeben";
    errorOutput.style.color = "red";
  }
};

