// Grundumsatz bei Männern (Kalorien je Tag)
// 664,7 + (13,7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6,8 * Alter in Jahren) = Grundumsatz
// Grundumsatz bei Frauen (Kalorien je Tag)
// 655,1 + (9,6 * Körpergewicht in kg) + (1,8 * Körpergröße in cm) – (4,7 * Alter in Jahren) = Grundumsatz

// ! Das Ergebnis wird in Kilokalorien ausgegeben.



// 1. Körpergröße auslesen / in let Variable speichern
// 2. Alter auslesen / in let Variable speichern
// 3. Gewicht auslesen / in let Variable speichern
// 4. Radio-buttons auslesen / in let Variable speichern
// 5. selector-optionen auslesen / in let Variable speichern
// 6. Rechenformel einbauen?


const Berechnen = (event)=>{
    event.preventDefault();
    // ====== Eingabe zu Größe Alter Gewicht ========
    let körperGroeße = Number(document.querySelector("#height-input").value);
    let alter = Number(document.querySelector("#age-input").value);
    let gewicht = Number(document.querySelector("#weight-input").value);

    // ====== Radiobuttons für Weiblich und Männlich ======
    let weiblich = document.querySelector("#radio-weiblich").value;
    let männlich = document.querySelector("#radio-männlich").value;

    // ===== Auswahl Arbeits / Freizeitaktivität ====
    let selectId = document.querySelector("#select-activity").value;

    // =========== Berechnung ===========================================

    // Berechnung Frauen Grundumsatz
    const kcalFrauenGrundumsatz =
    655.1 + 9.6 * gewicht + 1.8 * körperGroeße - 4.7 * alter;
    const kjFrauenGrundumsatz = kcalFrauenGrundumsatz * 4.184;

    // Berechnung Männer Grundumsatz
    const kcalMännerGrundumsatz =
    664.7 + 13.7 * gewicht + 5 * körperGroeße - 6.8 * alter;
    const kjMännerGrundumsatz = kcalMännerGrundumsatz * 4.184;

    // Berechnung Frauen Gesamtumsatz
    const kcalFrauenGesamtumsatz =
    Number(document.querySelector("#select-activity").value) * kcalFrauenGrundumsatz;
    const kjFrauenGesamtumsatz =
    Number(document.querySelector("#select-activity").value) * kjFrauenGrundumsatz;

    // Berechnung Männer Gesamtumsatz
    const kcalMännerGesamtumsatz =
    Number(document.querySelector("#select-activity").value) * kcalMännerGrundumsatz;
    const kjMännerGesamtumsatz =
    Number(document.querySelector("#select-activity").value) * kjMännerGrundumsatz;

    // Output Berechnung Grundumsatz
    let grundwertWeiblich = document.querySelector("#grundUmsatzWeiblich");
    
    
    let grundwertMännlich = document.querySelector("#grundUmsatzMännlich");

    // Output Berechnung Gesamtumsatz
    let gesamtwertWeiblich = document.querySelector("#gesamtUmsatzWeiblich");
    
    
    let gesamtwertMännlich = document.querySelector("#gesamtUmsatzMännlich");
    
    

    // ============== if else Bereich ===============================

    if (userInputRadioFemale) {
        outputKcalGrundumsatz.innerHTML = kcalFrauenGrundumsatz.toFixed(3);
        outputKjGrundumsatz.innerHTML = kjFrauenGrundumsatz.toFixed(3);
        outputKcalGesamtumsatz.innerHTML = kcalFrauenGesamtumsatz.toFixed(3);
        outputKjGesamtumsatz.innerHTML = kjFrauenGesamtumsatz.toFixed(3);
      } else if (userInputRadioMale) {
        outputKcalGrundumsatz.innerHTML = kcalMännerGrundumsatz.toFixed(3);
        outputKjGrundumsatz.innerHTML = kjMännerGrundumsatz.toFixed(3);
        outputKcalGesamtumsatz.innerHTML = kcalMännerGesamtumsatz.toFixed(3);
        outputKjGesamtumsatz.innerHTML = kjMännerGesamtumsatz.toFixed(3);
      }
    }
    
}
    
    
    
    
    

    

