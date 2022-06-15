let salvoHorarios = document.querySelector(".SalvoHorarios");
let inputsHorarios = document.querySelector(".inputHorario");
let inputNome = document.querySelector(".inputNome");
let inputArea = document.querySelector(".inputArea");
let inputEndereco = document.querySelector(".inputEndereco");

let arrayHorDisp = [];
function maisHorarios(){

    
    let horariosSalvos = document.createElement("p");
    
    let inputValue = inputsHorarios.value;
    
    horariosSalvos.innerHTML += inputValue;
    
    salvoHorarios.appendChild(horariosSalvos);
    
    arrayHorDisp.push(inputValue);
}


let salvarHorarios = () => {

    alert("O horário para realização da entrevista foi divulgado com sucesso");
    console.log(arrayHorDisp);
    horarios = {
        nomeVaga: inputNome.value,
        areaVaga: inputArea.value,
        endereco: inputEndereco.value,
        horarios: arrayHorDisp
    }
    
    let db_horarios = localStorage.getItem("db_horarios");
    if(db_horarios) {
        let db2 = JSON.parse(db_horarios);
        db2.push(horarios);
        localStorage.setItem("db_horarios", JSON.stringify(db2));
    } else {
        localStorage.setItem("db_horarios", JSON.stringify([horarios]));
    }


}
