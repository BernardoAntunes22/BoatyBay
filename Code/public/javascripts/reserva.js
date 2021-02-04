let cliente;
let marina;
window.onload = function(){
    cliente = JSON.parse(sessionStorage.getItem("conta"));
    marina = JSON.parse(sessionStorage.getItem("marina"));
    populateBoats(cliente);
    $('#reservDate').datepicker({ dateFormat: 'yy/mm/dd' });
    $('#endDate').datepicker({ dateFormat: 'yy/mm/dd' });

}

async function populateBoats(cliente){
    let result = await $.ajax({
        url: "/API/barcos/getByCliente/"+ cliente.C_id,
        method: "get",
    });
    console.log(result);
    for(let item of result){
        let html = `<option value = "${item.B_id}">${item.B_nome}</option>`;
        document.getElementById("boat").innerHTML += html;
    }

}

async function submit() {
    let dataI = $('#reservDate').val();
    let dataF = $('#endDate').val();
    let barco = $('#boat').val();

    if(dataI != '' && dataF != '' && barco != ''){
        

        let body = {
            R_dateInicial: dataI,
            R_dateFinal: dataF,
            C_id: cliente.C_id,
            M_id: marina.M_id,
            B_id: barco,
        };
        let res = await $.ajax({
            type: "POST",
            url: '/api/reservas',
            data: JSON.stringify(body),
            dataType: 'json',
            contentType: "application/json"
        });
        if(res.R_id) {
            alert('Reserva feita!');
        }
        else {
            alert('Algo correu mal.\n Tente mais tarde.');
        }
    }
    else {
        alert('Por favor preencha os campos todos caralho.');
    }
}

function LogOut(){
    sessionStorage.clear()
    window.location = "index.html"
}