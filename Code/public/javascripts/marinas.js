
const marinas = [
    {
        name: 'Marina de Vilamoura',
        capacity: 1000
    },
    {
        name: 'Doca de Santo',
        capacity: 200
    }
];


 

async function createCards() {
    let main = document.getElementById('marinasL');
    let marinas = await fetch('http://localhost:3000/API/marinas');
    marinas = await marinas.json(); 
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
        <p>
            Capacity: ${marina.M_email}
        </p>
        
    </div>`;
}

window.onload = () => {
    createCards();
    
}