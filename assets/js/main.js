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


// Eventlistener
luftqualität.addEventListener("input", checkAirQuality);


// Funktion
function checkAirQuality() {
console.log("function und EventListener aufgerufen");

// Anzeige des Range Wertes         
labelLuftqualität.innerHTML = ("Luftqualität: " +  luftqualität.value);




// output Text concern
// Output Text effect

// Output BackgroundColor  über js_classen

}