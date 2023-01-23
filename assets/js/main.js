console.log("läuft?");

/* 
Frage

    <=50  = Good + Little or no risk
    >50   = Moderate + Acceptable quality
    >100 && <=150     = Unhealthy for sensitive groups + generable public not likely affected
    
    Range Slider
                Value vom Slider Abfragen 

                function checkAirQuality()

    Background Color wechsel 
*/


// Variablen
let luftqualität = document.querySelector("#luftqualität");

let labelLuftqualität = document.querySelector("#labelLuftqualität");

let outputLevelConcern = document.querySelector("#outputLevelConcern");
let outputLevelEffect = document.querySelector("#outputLevelEffect");

let outputBody = document.querySelector("body");


// Eventlistener
luftqualität.addEventListener("input", checkAirQuality);


// Funktion
function checkAirQuality() {
console.log("function und EventListener aufgerufen");

// Anzeige des Range Wertes         
labelLuftqualität.innerHTML = ("Luftqualität: " +  luftqualität.value);

let vergleich = luftqualität.value;
let ergebnisConcern = "???"; 
let ergebnisEffect = "???"; 
let ergebnisBackgroundColorClass = "???"; 

// if Vergleich
if(vergleich >=0 && vergleich <= 50){ 
    ergebnisConcern =  "Good";
    ergebnisEffect = "Little or no risk";
    ergebnisBackgroundColorClass = "green";
}
else if (vergleich >50 && vergleich <= 100){
    ergebnisConcern = "Moderate";
    ergebnisEffect = "Acceptable quality";
    ergebnisBackgroundColorClass = "yellow";
}
else if (vergleich >100 && vergleich <= 150){
    ergebnisConcern = "Unhealthy for sensitive groups";
    ergebnisEffect = "Generable public not likely affected";
    ergebnisBackgroundColorClass = "red";
}
else {
    ergebnisConcern = "Fehler !!!";
    ergebnisEffect = "Fehler!!!";
    ergebnisBackgroundColorClass = "#443c3c"
}




// output Text concern
outputLevelConcern.innerHTML = ("Level of healt: " + ergebnisConcern);

// Output Text effect
outputLevelEffect.innerHTML = ("Level of health effect: " + ergebnisEffect);

// Output BackgroundColor  über js_classen
outputBody.style.backgroundColor = ergebnisBackgroundColorClass;


// geht nicht was anstatt .add ???
// outputBody.classList.replace(ergebnisBackgroundColorClass);


}