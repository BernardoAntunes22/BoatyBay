async function createCards() {
  let main = document.getElementById("contaL");
  let user = JSON.parse(sessionStorage.getItem("conta"));
  let cliente = await $.ajax({
    url: "/api/clientes/getByName/" + user.C_Name,
    method: "get",
  });
  main.innerHTML += makeCard(cliente);
}

function makeCard(cliente) {
  return `<div class="grade-card">
            <h2>
                Nome: ${cliente.C_Name}
            </h2>
            <h2>Data de Nascimento: ${cliente.C_data_nasc}</h2>
            <h2>NIF: ${cliente.C_NIF}</h2>
        </div>`;
}

window.onload = () => {
  createCards();
};
