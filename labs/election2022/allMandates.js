// Importera data
const valData = require("./data.json");

// Skapa funktionen 'allMandates'
function allMandates() {
  // Använd .map för att skapa en ny Array där jag hämtar data från './data.json'.
  const partiMandater = valData.partiMandat.map((party) => {
    // Returnerar de värden som man ska få fram.
    // Hämtar partiets förkortning och antal mandat.
    return `${party.partiforkortning}: ${party.antalMandat}`;
  });

  // Logga data med console.log och sätt ihop med '.join' för att få dem på samma rad.
  console.log(partiMandater.join(", "));
}

// Callback function
allMandates();
