async function createCards() {
  let main = document.getElementById("contaL");
  let user = sessionStorage.getItem("conta");
  let cliente = await $.ajax({
    url: "/api/clientes/getByName/" + user,
    method: "get",
    dataType: "json",
  });
  main.innerHTML += makeCard(cliente);
}

function makeCard(cliente) {
  return `<div class="grade-card">
            <h2>
                Nome: ${cliente.C_Name}
            </h2>
            <h2>Data de Nascimento: ${cliente.C_data_nasc}</h2>
            <h2>NIF: ${cliente.C_nif}</h2>
            <h2>Morada: ${cliente.C_rua_nome} ${cliente.c_n_policia}</h2>
        </div>`;
}

window.onload = () => {
  createCards();
};
