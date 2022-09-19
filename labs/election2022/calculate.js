// Importera data
const valData = require("./data.json");
// samlar data i en och samma varabel så det blir enklare.
const partiMandat = valData.partiMandat;

// Fick hjälp av både Katerina & Magnus.
function calculateMandates(parties) {
  // Antal Mandater
  const calcMand = [];
  // Förkortning av parti
  const partiMand = [];

  // forEach exekverar varje arrays element.
  parties.forEach((parti) => {
    // Räknar ihop antal mandater för partiet jag räknar ut.
    partiMandat.forEach((antalMandater) => {
      // Sätter in forEach funktionen till de tomma arrayerna ovanför.
      if (parti === antalMandater.partiforkortning) {
        // .push returns the new length of the array.
        partiMand.push(parti);
        calcMand.push(antalMandater.antalMandat);
      }
    });
  });
  // Börjar på 0 då en array alltid börjar med '0'.
  let sum = 0;
  for (let i = 0; i < calcMand.length; i++) {
    sum += calcMand[i];
  }
  //    returnerar partiet och summan av hur många mandat partiet har.
  return console.log(`${partiMand.join(", ")}: ${sum} av 349 totalt`);
}

/* Skriv in i funktionen vilket parti du vill få resultat att se mandat från.
    Om du skriver in fler partier så får du flera mandat. */
calculateMandates(["S", "V", "KD"]);

/**
 * Lösningar av Oscar Nilsson.
 *
 * function calculateMandates(parties) {
 * const result = valData.partiMandat.filter(p => parties.includes(p.partiforkortning));
 * }
 *
 * let mandateCount = 0;
 * result.forEach(p => mandateCount += p.antalMandat)
 * return `${parties.join(", ")}: ${mandateCount} av 349 totalt`;
 * console.log(calculateMandates(["C", "L", "KD"]));
 */
