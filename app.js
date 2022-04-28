/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

function vypisRecepty() {
  
}

for (let i=0; i < recepty.length; i++) {
  const seznamReceptu = document.createElement("div")
  seznamReceptu.classList.add("recept")
  
  let receptFoto = document.createElement("div")
  receptFoto.classList.add("recept-obrazek")

  let imgRecept = document.createElement("img")
  imgRecept.src = recepty[i].img

  receptFoto.appendChild(imgRecept)

  const receptInfo = document.createElement("div")
  receptInfo.classList.add("recept-info")
  
  let nadpisRecept = document.createElement("h3")
  nadpisRecept.textContent = recepty[i].nadpis
  receptInfo.appendChild(nadpisRecept)

  seznamReceptu.appendChild(receptFoto)
  seznamReceptu.appendChild(receptInfo)

  const receptyItem = document.getElementById("recepty")  
  receptyItem.appendChild(seznamReceptu)
}


// const JedenRecept = (props) => {
//   const element = document.createElement('div');
//   element.classList.add('recept');
//   element.innerHTML = `
//     <div class="recept-obrazek">
//       <img src=${props.img} alt="Obrazek">
//     </div>

//     <div class="recept-info">
//       <h3>${props.nadpis}</h3>
//     </div>
//   `;

//   return element
// }

// const VypisRecepty = (props) => {
//   const element = document.createElement('div');
//   element.classList.add('recepty');

//   for (let i = 0; i < recepty.length; i += 1) {
//     element.appendChild(JedenRecept(recepty[i]));
//   }

//   return element;
// };

//const recepty už mám v druhém JS const recepty - je to pole
const inputFilter = document.querySelector(".hledani") //naše pole pro hledání
console.log(inputFilter)

const receptySearch = []

//pridatData()

inputFilter.addEventListener("input", function(e){
  console.log(e.target.value)   
  receptyFilter(e.target.value) 
})

//console.log(e.target.value) toto mi vypisuje v konzoli, co píšu do inputu a potřebuji to poslat do funkce