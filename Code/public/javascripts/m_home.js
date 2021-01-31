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
            <h2>Nome: ${marina.M_name}</h2>
            <h3>Número de Telemóvel: ${marina.M_telefone}</h3>
            <h3>Capacidade total: ${marina.M_capacidade}</h3>
            <h3>Lugares Pequenos: ${marina.M_lugarPeq}</h3>
            <h3>Lugares Médios: ${marina.M_lugarMed}</h3>
            <h3>Lugares Grandes: ${marina.M_lugarGra}</h3>
            <h3>Morada: ${marina.CP_l1} ${marina.CP_l2} </h3>
            <h3>Código Postal: ${marina.CP_4}-${marina.CP_3}</h3>
        </div>`;
}
    document.getElementById("marina").innerHTML = html;
}

function LogOut(){
    sessionStorage.clear()
    window.location = "index.html"
}
  
