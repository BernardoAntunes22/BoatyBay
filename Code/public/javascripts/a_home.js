async function createCards() {
let main = document.getElementById('marinaL');
let marinas = await $.ajax({
    url: "/API/marinas",
    method: "get",
    dataType: "json"
});
for (let idx in marinas) {  
    main.innerHTML += makeCard(marinas[idx]);
}
}


function reserva(id) {
sessionStorage.setItem('marinaId', id);
window.location = 'reserva.html';
}



function makeCard(marina) {
return `<table>
        <tr>
            <td>${marina.M_name}</td>
            <td>${marina.M_telefone}</td>
            <td>${marina.M_email}</td>
            <td>${marina.M_capacidade}</td>
            <td>${marina.M_lugarPeq}</td>
            <td>${marina.M_lugarMed}</td>
            <td>${marina.M_lugarGra}</td>
            <td>${marina.M_lat}</td>
            <td>${marina.M_long}</td>
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