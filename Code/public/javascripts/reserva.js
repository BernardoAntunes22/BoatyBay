window.onload = function(){
    let cliente = JSON.parse(sessionStorage.getItem("conta"));
    let marina = JSON.parse(sessionStorage.getItem("marinaId"));
    populateBoats(cliente)
}

async function populateBoats(cliente){
    let result = await $.ajax({
        url: "/API/barcos/getByCliente/"+ cliente.C_id,
        method: "get",
    });
    console.log(result);
    for(let item of result){
        let html = `<option value = "${item.B_id}">${item.B_nome}</option>`;
        document.getElementById("boat").innerHTML += html;

    }

}

async function submit(){
    
}