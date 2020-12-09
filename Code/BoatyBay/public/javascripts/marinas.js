const marinas= [
    {
        name: 'Marina de Vilaoura',
        capacity: 1000
    },

    {
        name: 'Doca de Santo',
        capacity: 200
    }
];


function createCards() {
    let main = document.getElementById('marinas');
    for (let idx in marinas) {  
        main.innerHTML += makeCard(idx);
    }
}

function makeCard(idxmarinas) {
    return `<section class="marinasL">
        <h2>
            ${marinas[idxmarinas].name}
        </h2>
        <p>
            Number: ${marinas[idxmarinas].capacity}
        </p>
        
    </section>`;
}

window.onload = () => {
    createCards();

}