let hladaneSlovo = document.getElementById("hladane");
let button = document.getElementById("hladaj");
button.disabled = true;

hladaneSlovo.addEventListener('keyup', function(event){
   
    let val = event.target.value; 
    
    if(val===''){
        button.disabled = true;  
    }
    else{
        button.disabled = false;  
    }
    
 }); 

function analyzujText(){
    let text = document.getElementById("textInput").value;
    let dlzkaBez = text.replaceAll(" ","").replaceAll("\n", "");
    let arr = dlzkaBez.split("");
    let i = 0;
    let arrnaj = text.replaceAll("\n"," ").split(" ");
    let najdlhsie = [""];

    for (const one of arr){
        if (one == 1 || one == 2 || one == 3 || one == 4 || one == 5 || one == 6|| one == 7 || one == 8 || one == 9 || one == 0) {
            i++;
        }
    }

    for (const one of arrnaj){
        if (one.length > najdlhsie[0].length) {
            najdlhsie[0] = one;
        }
    }

    for (const one of arrnaj){
        if (one.length == najdlhsie[0].length && one !== najdlhsie[0]) {
            najdlhsie.push(one);
        }
    }
    let per = document.createElement("p");
    per.innerText = "Dĺžka textu: " + text.length + " znakov\n" + "Dĺžka textu bez medzier: " + dlzkaBez.length + " znakov\n" + "Počet číslic: " + i + "\n" + "Najdlhšie slovo/slová: " + najdlhsie + "\n" + "Počet písmen najdlhšieho slova: " + najdlhsie[0].length;
    console.log(per.innerText);

    let analyza = document.getElementById("analyza");

    while (analyza.childNodes.length > 0) {
        analyza.removeChild(analyza.firstChild);
    }

    analyza.append(per);


    console.log("dlzka textu je s medzrami: " + text.length + " znakov\n" +
    "dlzka textu bez medzier je: " + dlzkaBez.length + " znakov\n" + 
    "v texte je " + i + " cislic\n" + "najdlhsie slovo je: " + najdlhsie + " a ma " + najdlhsie[0].length + " pismen");
}

function hladajvTexte(){
    let text = document.getElementById("textInput").value.replaceAll("\n"," ").split(" ");
    let hladaneSlovo = document.getElementById("hladane").value;
    let zapis = document.getElementById("vysledokHladania");
    let para = document.createElement("p");

    para.innerText ="Slovo *" + hladaneSlovo + "* v texte nie je";

    for (const one of text){
        if (hladaneSlovo == one) {
            para.innerText = "Slovo *" + hladaneSlovo + "* je v texte";
        }
    }

    while (zapis.childNodes.length > 0) {
        zapis.removeChild(zapis.firstChild);
    }
    
    zapis.append(para);
}

function zasifrujText(){
    let text = document.getElementById("textInput").value;
    let stext ="";
    stext = text.replaceAll("o","0").replaceAll("O","0").replaceAll("I","1").replaceAll("i","1").replaceAll("E","2").replaceAll("e","2").replaceAll("A","4").replaceAll("a","4").replaceAll("S","5").replaceAll("s","5").replaceAll("B","8").replaceAll("b","8");
    let p = document.createElement("p");
    p.innerText = stext;
    let sifra = document.getElementById("sifra");
    while (sifra.childNodes.length > 0) {
        sifra.removeChild(sifra.firstChild);
    }
    sifra.append(p);
}
