// Triangel övning.

/** Skriv en funktion `triangel` som med hjälp av en loop 
 * och sju iterationer skriver ut följande triangel i konsollen:
**Exempel**
```
#
##
###
####
#####
######
#######
``` */

const string = "#";

function triangel() {
  for (let i = 0; i < 7; i++) {
    const result = string.repeat(i + 1);
    console.log(result);
  }
}

triangel();

// Fick hjälp med funktionen med Marcus, Oscar och
