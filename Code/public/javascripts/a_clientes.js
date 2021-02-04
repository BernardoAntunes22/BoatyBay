async function createCards() {
    let main = document.getElementById('clientesL');
    let clientes = await $.ajax({
        url: "/API/clientes",
        method: "get",
        dataType: "json"
    });
    for (let idx in clientes) {  
        main.innerHTML += makeCard(clientes[idx]);
    }
}


function reserva(id) {
    sessionStorage.setItem('clienteId', id);
    window.location = 'reserva.html';
}



function makeCard(cliente) {
    return `<table>
            <tr onclick = "edit(${cliente.C_id})">
                <td>${cliente.C_Name}</td>
                <td>${cliente.C_data_nasc}</td>
                <td>${cliente.C_NIF}</td>
                <td>${cliente.C_Email}</td>
                <td>${cliente.C_telemovel}</td>
            </tr>

        
            </table>`;
}

function edit(id){
    sessionStorage.setItem('ClienteId', id);
    window.location = "a_clientesEdit.html"
}

window.onload = () => {
    createCards();
    
}

function LogOut(){
    sessionStorage.clear()
    window.location = "index.html"
}