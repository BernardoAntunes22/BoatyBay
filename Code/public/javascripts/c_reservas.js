async function createCards() {
    let main = document.getElementById('reservaL');
    let user = JSON.parse(sessionStorage.getItem("conta"));
    let reservas = await $.ajax({
        url: "/API/reservas/getByCliente/" + user.C_id,
        method: "get",
        dataType: "json"
    });
    for (let idx in reservas) {  
        main.innerHTML += makeCard(reservas[idx]);
    }
}



function makeCard(reserva) {
    return `<table>
            <tr onclick = "edit(${reserva.R_id})">
                <td>${reserva.M_name}</td>
                <td>${reserva.C_Name}</td>
                <td>${getDate(reserva.R_dateInicial)}</td>
                <td>${getDate(reserva.R_dateFinal)}</td>
                <td>${reserva.R_reservaLugar}</td>
            </tr>
            </table>`;
}

window.onload = () => {
    createCards();   
}

function LogOut(){
    sessionStorage.clear()
    window.location = "index.html"
}


function getDate(data) {
    return data.substring(data.indexOf('T'), -1);
}