window.onload = async function () {
    try{
        let conta = JSON.parse(sessionStorage.getItem("conta"));
        let reserva = await $.ajax({
        url: "/api/reservas/getByMarina/" + conta.M_id,
        method: "get"
        });
        makeCard(reserva);
    }catch(err){
        console.log(err.message)
    }

   
}
  
function makeCard(marinas) {
    let html = "";
    for(let index in marinas) {
        let marina = marinas[index];
        html += `<div class="reservaI">
            <h2>Nome: ${marina.C_Name}</h2>
            <h3>Tipo de lugar: ${marina.R_reservaLugar}</h3>
            <h3>Data Inicial: ${getDate(marina.R_dateInicial)}</h3>
            <h3>Data Inicial: ${getDate(marina.R_dateFinal)}</h3>
            <p>ID da Reserva: ${marina.R_id}</p>
        </div>`;
}
    document.getElementById("reservas").innerHTML = html;
}
  
function LogOut(){
    sessionStorage.clear()
    window.location = "index.html"
}

function getDate(data) {
    return data.substring(data.indexOf('T'), -1);
}