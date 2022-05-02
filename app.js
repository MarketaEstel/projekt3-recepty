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

// zobrazeni seznamu receptů v levém pruhu

function vypisReceptMenu(recept){
  let receptItem = document.createElement("div")
  receptItem.className = "recept"
  receptItem.addEventListener("click", zobrazDetailReceptu)
  
  let receptFoto = document.createElement("div")
  receptFoto.className = "recept-obrazek"

  let receptInfo = document.createElement("div")
  receptInfo.className = "recept-info"

  receptItem.appendChild(receptFoto)
  receptItem.appendChild(receptInfo)

  let imgRecept = document.createElement("img")
  imgRecept.src = recept.img
  imgRecept.alt = "obrázek"
  receptFoto.appendChild(imgRecept)

  let receptNazev = document.createElement("h3")
  receptNazev.textContent = recept.nadpis
  receptInfo.appendChild(receptNazev)

  let receptyElement = document.querySelector("#recepty")
  receptyElement.appendChild(receptItem)
}



zobrazSeznamReceptu()



function zobrazSeznamReceptu(){
    recepty.forEach((item) => {
    vypisReceptMenu(item)
    console.log(item.nadpis)
  })
}

// Zobrazení detailu receptu v pravé části

function zobrazDetailReceptu(){
  // vyhledávám hodnotu hodnoty
  let hodnota = this.innerText
  console.log(hodnota)
  
  let index = recepty.findIndex(recept => recept.nadpis === hodnota)
  console.log(index)

  let receptDetail = document.querySelector(".recept-detail")
  
  let receptFotoDetail = document.querySelector("#recept-foto")
  receptFotoDetail.src = recepty[index].img
  receptFotoDetail.alt = "foto recept"

  let receptNazevDetail = document.getElementById("recept-nazev")
  receptNazevDetail.textContent = recepty[index].nadpis

  let receptPopis = document.getElementById("recept-popis")
  receptPopis.textContent = recepty[index].popis

  let hodnoceniReceptu = document.querySelector(".fa-star")
  hodnoceniReceptu.textContent = recepty[index].hodnoceni

  let kategorieReceptu = document.getElementById("recept-kategorie")
  kategorieReceptu.textContent = recepty[index].kategorie
}



// Hledání receptu

let inputHledejRecept = document.getElementById("hledat")

let searchButton = document.getElementById("hledatButton")
searchButton.addEventListener("click", hledejRecept)

inputHledejRecept.onkeydown = function(el){
  if (el.key ===  "Enter") {
    hledejRecept()
  }
}

function hledejRecept(){
  console.log("test") 

  let hodnota = inputHledejRecept.value.toLowerCase()
  console.log(hodnota)
  
  let nalezene = recepty.filter(recept => recept.nadpis.toLowerCase().includes(hodnota))
  console.log(nalezene)
// vrací mi to pole s nalezenými recepty nalezene = []
  vymazRecepty()
  
  nalezene.forEach((item) => {
    vypisReceptMenu(item)
    console.log("test")
  }) 

}


// function zobrazSeznamReceptu(){
//   recepty.forEach((item) => {
//   vypisReceptMenu(item)
//   console.log(item.nadpis)
// })
// }


function vymazRecepty(){
  let receptyElement = document.querySelector("#recepty")
  receptyElement.innerHTML = ""
}

// console.log(hledejRecept)

// inputHledejRecept.addEventListener("input", function(e){
//   console.log(e.target.value)   
//   // receptyFilter(e.target.value) 
// })



// vypsání receptů podle kategorie

let vypisPodleKategorie = document.getElementById("kategorie")

vypisPodleKategorie.addEventListener ("change", function() {
    console.log(vypisPodleKategorie)
    
    let index = this.vybranyIndex

    let kategorieVypsane = vypisPodleKategorie.options[index].text.toLowerCase()
    console.log(kategorieVypsane)

    let vypsane = recepty.filter(recept => recept.stitek.toLowerCase().includes())
    console.log (vypsane)

    vymazRecepty()
  
    vypsane.forEach((item) => {
    vypisReceptMenu(item)
    console.log("test")
  }) 
})

// vypisování podle stitek: dezert, HlavniJidlo, snidane



// seřazení receptů podle hodnocení

function seradPodleHodnoceni(){
let seradPodleHodnoceni = document.getElementById("razeni")
// seřazení receptů podle hodnoceni, metoda sort
seradPodleHodnoceni.addEventListener("click")

let vypsane = recepty.filter(recept => recept.stitek.toLowerCase().includes())
    
vymazRecepty()
  
vypsane.forEach((item) => {
  vypisReceptMenu(item)
  console.log("test")
}) 

let index = this.options

// recepty.sort(porovnej)
// function porovnej (cislo1, cislo2) {
//   if (cislo1.hodnoceni > cislo2.hodnoceni) {
//     return 1
//   } else {
//     return -1
//   }

seradPodleHodnoceni.sort()
console.log(seradPodleHodnoceni)
}

