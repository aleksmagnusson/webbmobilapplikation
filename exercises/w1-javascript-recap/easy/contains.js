const tallista = [1, 2, 3];

function innehåll(lista, värde) {
  if (lista.includes(värde)) return `${värde} finns i tallistan.`;
  else {
    return `${värde} finns inte i tallistan.`;
  }
}
console.log(innehåll(tallista, 3));
