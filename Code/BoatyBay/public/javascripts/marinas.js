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


function createCards() {
    let main = document.getElementById('marinasL');
    for (let idx in marinas) {  
        main.innerHTML += makeCard(idx);
    }
}


function showGrades(idxmarinas) {
    sessionStorage.setItem('marinaName', marinas[idxmarinas].name);
    window.location = 'reserva.html';
}



function makeCard(idxmarinas) {
    return `<div class="grade-card" onclick="showGrades(${idxmarinas})">
        <h2>
            ${marinas[idxmarinas].name}
        </h2>
        <p>
            Capacity: ${marinas[idxmarinas].capacity}
        </p>
        
    </div>`;
}

window.onload = () => {
    createCards();

}