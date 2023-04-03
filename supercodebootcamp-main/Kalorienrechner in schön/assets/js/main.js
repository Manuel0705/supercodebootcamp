const button = document.querySelector("#btn");
// checken ob das element der variable zugeordnet ist
// console.log(button)
const groundKcal = document.querySelector("#groundKcal");
const groundKj = document.querySelector("#groundKj");
const totalKcal = document.querySelector("#totalKcal");
const totalKj = document.querySelector("#totalKj");

button.addEventListener("click", () => {
    const userHeight = Number(document.querySelector("#userHeight").value);
    const userAge = Number(document.querySelector("#userAge").value);
    const userWeight = Number(document.querySelector("#userWeight").value);
    const userActivity = Number(document.querySelector("#userActivity").value)
    const genderFemale = document.querySelector("#genderFemale").checked;

    // kontrolle ob man den value bekommt und was man zurückbekommt
    // console.log(userHeight)
    // console.log(userAge)
    // console.log(userWeight)
    // console.log(userActivity)
    // console.log(genderFemale)
    // console.log(genderMale)


    // abfrage geschlecht
    if (genderFemale) {
        let grundUmsatz = 655.1 + (9.6 * userWeight) + (5 * userHeight) - (6.8 * userAge)
        let grundKilojoule = grundUmsatz * 4.184
        let totalUmsatz = grundUmsatz * userActivity
        let totalKilojoule = (grundUmsatz * userActivity) * 4.184

        groundKcal.innerHTML = grundUmsatz.toFixed(2) + " kcal"
        groundKj.innerHTML = grundKilojoule.toFixed(2) + " kJ"
        totalKcal.innerHTML = totalUmsatz.toFixed(2) + " kcal"
        totalKj.innerHTML = totalKilojoule.toFixed(2) + " kJ"
    } else {
        let grundUmsatz = 664.7 + (13.7 * userWeight) + (5 * userHeight) - (6.8 * userAge)
        let grundKilojoule = grundUmsatz * 4.184
        let totalUmsatz = grundUmsatz * userActivity
        let totalKilojoule = (grundUmsatz * userActivity) * 4.184

        groundKcal.innerHTML = grundUmsatz.toFixed(2) + " kcal"
        groundKj.innerHTML = grundKilojoule.toFixed(2) + " kJ"
        totalKcal.innerHTML = totalUmsatz.toFixed(2) + " kcal"
        totalKj.innerHTML = totalKilojoule.toFixed(2) + " kJ"
    }
})

