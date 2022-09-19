const valData = require("./data.json");
// Shorten data from './data.json' to a better variable name.
const valKretsar = valData.valkretsar;

function listOfDistricts() {
  // .map skapar en ny array för varje item.
  const distrikt = valKretsar.map((distrikt) => {
    return `${distrikt.namn}`;
  });

  console.log(`Alla valkretsar 2022: ${distrikt.join(", ")}`);
}

listOfDistricts();

/**
 * Argument: districtName
 * Task: From each district, create a function that brings amout of votes for each party.
 * (valkretsar.namn) => (partiforkortning): (antalRoster) + (andelRoster) =
 * "Södermanlands län" => "M: 34 407 (19,2%)"...
 */

function districtResults(districtName) {
  valKretsar.forEach((distrikt) => {
    if (districtName.toLowerCase() === distrikt.namn.toLowerCase()) {
      const partirost = distrikt.rosterPaverkaMandat.partiroster;
      console.log(districtName);
      partirost.forEach((party) => {
        console.log(
          `${party.partiforkortning}: ${party.antalRoster} (${party.andelRoster})`
        );
      });
    }
  });
  return;
}

districtResults("Stockholms kommun");

function partyResults(party) {
  valKretsar.forEach((rosterResultat) => {
    const roster = rosterResultat.rosterPaverkaMandat.partiroster;

    roster.forEach((rostPerParti) => {
      if (party === rostPerParti.partiforkortning) {
        console.log(
          `${rosterResultat.namn}: ${rosterResultat.antalRoster} (${rosterResultat.andelRoster})`
        );
      }
    });
  });
  return;
}

/**
 *  function districtResults(districtName) {
 * const foundDistrict = valData.valkretsar.find
 * (vk) =>}
 */

districtResults("S");
