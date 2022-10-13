// Fördefinierad For-loop.
// String.prototype.repeat();
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

const hashtag = "#";

function triangel() {
  for (var i = 0; i < 7; i++) {
    const resultat = hashtag.repeat(i + 1);
    console.log(resultat);
  }
}

triangel();

/**
 *console.log:
#
##
###
####
#####
######
#######
 */
