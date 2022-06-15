let a = document.querySelector(".dataInput");
let b = document.querySelector(".horaInput");
let c = document.querySelector(".InsertData");
let e = document.querySelector(".InsertHora");
let d = document.querySelector(".send");
let f = document.querySelector(".conclude");

let arrHora = [];
let arrData = [];
let arrDH = [];

const insere = () => {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    let horaValue = a.value;
    let dataValue = b.value;

    p1.innerHTML = horaValue;
    p2.innerHTML = dataValue;

    e.appendChild(p1);
    c.appendChild(p2);

    arrHora.push(e);
    arrData.push(c);
}

d.addEventListener('click', insere);

const concluir = () => {
    arrDH.push(arrData, arrHora);
}