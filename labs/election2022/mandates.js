const valData = require("./data.json");

// Create a function that findes a certain party.
function mandates(party) {
  /* Creates a var to filter out and find the certain party and find the short -
  term for the party. Afterwards console.log each mandate for the party.
  */
  const mandat = valData.partiMandat.find((e) => party === e.partiforkortning);
  // console log mandate to get the partibeteckning.
  console.log(
    ` Parti: ${mandat.partibeteckning}, Antal mandat: ${mandat.antalMandat}`
  );
}
/* Write the party you would like to get 
(write in short term for example: Moderaterna "M") */
mandates("M");
