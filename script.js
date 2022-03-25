var form = document.getElementById("form");
var output = document.getElementById("output")

form.addEventListener("submit",print);

function print(e){
    e.preventDefault();

    diamet(form.indre.value, form.ytre.value, form.lengde.value)
    
    sekker = Math.ceil(volum/12.5)
    pris = sekker*89
    
    if(volum > 0){
        output.innerHTML = ""+
        "Du vil trenge " + sekker + " sekk(er) betong <br>" +
        "som gir en totalpris på " + pris + " kr <br>" ;
    } else {
        output.innerHTML = "venligst sørg for at indre diameter er mindre enn ytre";
    }
}

function diamet(indre,ytre,lengde){ 
    volum = ((Math.PI*lengde/10/400) * (ytre * ytre - indre * indre)).toFixed(3);
}