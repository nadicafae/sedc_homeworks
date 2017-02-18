let arrSostojki = ["Брашно", "Сол", "Млеко", "Јајца", "Шеќер", "Масло", "Пиперки", "Домати", "Кашкавал", "Сирење"];
let vneseniRecepti=[];

let infojs = localStorage.getItem('recepti');
console.log(JSON.parse(infojs));

if (JSON.parse(infojs) !== null)
    vneseniRecepti = JSON.parse(infojs);

$(()=> {
    let $inputIme = $("#imeRec");
    let $inputPoteklo = $("#potekloRec");
    let $inputKol = $("#kolicina");
    let $ddlSostojki = $("#sostojki");
    let $btnSostojka = $("#dodajSostojka");
    let $btnRecept = $("#dodajRecept");
    let $liSostojki = $("#lista-sostojki");
    let $inputNacin = $("#podgotovka")


    arrSostojki.forEach((s) => {
        $ddlSostojki.append(`<option value="">${s}</option>`);
    })

    $btnSostojka.on('click', ()=>{
        let $pickedSost = $ddlSostojki.find("option:selected")
        let pickedSostText = $pickedSost.text();
        let kolicina = $inputKol.val();
        $liSostojki.append(`<li>${pickedSostText} со количина ${kolicina}</li>`);
        $pickedSost.remove();

    })

    $btnRecept.on('click', ()=>{
        let sostojki = [];
        $liSostojki.find("li").each((i, sostojka) =>{
            sostojki.push($(sostojka).text());
        })
        let novRecept = new Recept($inputIme.val(), $inputPoteklo.val(), sostojki, $inputNacin.val());
        vneseniRecepti.push(novRecept);

        let js = JSON.stringify(vneseniRecepti);
        localStorage.setItem('recepti', js);
        $inputIme.val("");
        $inputPoteklo.val("");
        $liSostojki.html("");
        $ddlSostojki.html("");
        arrSostojki.forEach((s) => {
            $ddlSostojki.append(`<option value="">${s}</option>`);
        })

    //polni so undefined :((
        let list = $("#receptiBody");
        list.html("");
        let name = $inputIme.val();
        let origin = $inputPoteklo.val();
        let ingr = sostojki;
        let howTo = $inputNacin.val();
        vneseniRecepti.forEach(a =>{
        list.append(`<tr>
                    <td>${a.name}</td>
                    <td>${a.origin}</td>
                    <td>${a.ingr}</td>
                    <td>${a.howTo}</td>
                </tr>`)
        })

    })

    
})



// let dodajRecept = ()=>{
//     let ime = $("#imeNaReceptot").val();
//     let poteklo = $("#potekloNaReceptot").val();
//     let vreme = $("#vremeNaPodgotovka").val();
//     let nacin = $("#podgotovka")
// }