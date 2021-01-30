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
        html += `<div class="grade-card">
            <h2>
                Nome: ${marina.M_id}
            </h2>
            <h2>Data de Nascimento: ${marina.R_id}</h2>
            <h2>NIF: ${marina.C_id}</h2>
        </div>`;
}
    document.getElementById("reservas").innerHTML = html;
}
  
