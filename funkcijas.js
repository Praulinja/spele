let datoraSkaitlis = 10;

function nolasitIevadito(){
    //atrod input lauka saturu
    let ievadits = document.getElementById ("guess").value
    console.log(ievadits);
    return  ievadits;
}

function salidzinaSkaitlus(cilvekaSkaitlis){
    if (isNaN(cilvekaSkaitlis))
    return "Noteikumus izlasi"
if(cilvekaSkaitlis>datoraSkaitlis){
    return "datora skaitlis ir mazāks"
};
if(cilvekaSkaitlis<datoraSkaitlis){
    return "datora skaitlis ir lielāks"
};
return "atbilde ir pareiza"
}

function izvaditAtbildi(atbilde){
document.getElementById("atbilde").innerHTML=atbilde;
}

function veiktParbaudi(){
    console.log("Pārbaudīts!!!", datoraSkaitlis);
    let minejums = nolasitIevadito();
    let rezultats = salidzinaSkaitlus(minejums);
    izvaditAtbildi(rezultats);
}

function nomainitSkaitli(){
    datoraSkaitlis = Math.round(Math.random() * 100)
    console.log(datoraSkaitlis);
    izvaditAtbildi("Jauna spēle")
}
    