async function createCards() {
    let main = document.getElementById('marinasL');
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
    return `<div class="grade-card" onclick="reserva(${marina.M_id})">
        <h2>
            ${marina.M_name}
        </h2>
        <br>
        <p>
            Capacity: ${marina.M_capacidade}
        </p>
        
    </div>`;
}

window.onload = () => {
    createCards();
    
}

function LogOut(){
    sessionStorage.clear()
    window.location = "index.html"
}