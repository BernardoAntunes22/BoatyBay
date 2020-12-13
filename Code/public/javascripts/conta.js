async function createCards() {
    let main = document.getElementById('contaL');
    let clientes = await $.ajax({
        url: "/API/clientes",
        method: "get",
        dataType: "json"
    });
    for (let idx in clientes) {  
        main.innerHTML += makeCard(clientes[idx]);
    }
}






function makeCard(cliente) {
    return `<div class="grade-card">
        <h2>
            ${cliente.C_Name}
        </h2>

        
    </div>`;
}

window.onload = () => {
    createCards();
    
}