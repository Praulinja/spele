
let lielakaisSkaitlis = 100
let mazakaisSkaitlis = 0
let minejums = 0 

function jaunsMinejums(){
    let randomNo0Lidz1 = Math.random();
    let starpiba = lielakaisSkaitlis - mazakaisSkaitlis;
    let randomPareizaIntervala = randomNo0Lidz1*starpiba
    minejums = Math.round(randomPareizaIntervala)+mazakaisSkaitlis
    return "jauna"
}

function uzrakstitMinejumu(teksts){
    document.getElementById("guess").innerHTML=teksts
}

function lielaks(){
    mazakaisSkaitlis = minejums;
    jaunsMinejums();
    uzrakstitMinejumu(minejums);
}

function mazaks(){
    lielakaisSkaitlis = minejums
    jaunsMinejums();
    uzrakstitMinejumu(minejums);
}

function uzvara(){
    uzrakstitMinejumu("Paldies par Spēli")
}
function jaunaSpele(){
    mazakaisSkaitlis = 0;
    lielakaisSkaitlis = 100;
    jaunsMinejums();
    uzrakstitMinejumu(minejums);
}