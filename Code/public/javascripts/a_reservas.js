async function createCards() {
    let main = document.getElementById('reservaL');
    let reservas = await $.ajax({
        url: "/API/reservas/getEvery",
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
                <td>${reserva.R_dateInicial}</td>
                <td>${reserva.R_dateFinal}</td>
                <td>${reserva.R_reservaLugar}</td>
                <td>${reserva.C_telemovel}</td>
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

function edit(id){
    sessionStorage.setItem('reservaId', id);
    window.location = "a_reservasEdit.html"
}