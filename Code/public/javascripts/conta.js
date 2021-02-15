
window.onload = async function () {
  try{
    let user = JSON.parse(sessionStorage.getItem("conta"));
    let cliente = await $.ajax({
      url: "/api/clientes/getByID/" + user.C_id,
      method: "get",
      });
      makeCard(cliente);
  }catch(err){
      console.log(err.message)
  }

 
}


function makeCard(cliente) {
  let html = "";
      html += `<div class="clientesI" onclick = "edit(${cliente.C_id})">
          <h3>Nome: ${cliente.C_Name}</h2><br>
          <h3>Data de nascimento: ${getDate(cliente.C_data_nasc)}</h3><br>
          <h3>NIF: ${cliente.C_NIF}</h3><br>
          <h3>Email: ${cliente.C_Email}</h3><br>
          <h3>Número de telemóvel: ${cliente.C_telemovel}</h3><br>
      </div>`;

      document.getElementById("contaL").innerHTML = html;
}

function LogOut(){
  sessionStorage.clear()
  window.location = "index.html"
}


function seaR(){
  window.location = "c_reservas.html"
}

function getDate(data) {
  return data.substring(data.indexOf('T'), -1);
}


function edit(id){
  sessionStorage.setItem('clienteId', id);
  window.location = "contaEdit.html"
}