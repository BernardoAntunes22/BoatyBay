window.onload = function(){
    $('#data').datepicker({ dateFormat: 'yy/mm/dd' });


}


async function update(){
    let name = $('#nome').val();
    let data = $('#data').val();
    let nif = $('#NIF').val();
    let email = $('#Email').val();
    let tele = $('#tele').val();

    let body = {
        // C_Name: name,
        // C_data_nasc: data,
        // C_NIF: nif,
        // C_Email : email,
        // C_telemovel : tele,
    };

    if(name != '') {
        body.C_Name = name;
    }
    if(data != ''){
        body.C_data_nasc = data;
    }
    if(nif != ''){
        body.C_nif = nif;
    }
    if(email != ''){
        body.C_Email = email;
    }
    if(tele != ''){
        body.C_telemovel = tele;
    }

    let cliente = JSON.parse(sessionStorage.getItem("conta"));
    let res = await $.ajax({
        type: "PUT",
        url: '/api/clientes/' + cliente.C_id,
        data: JSON.stringify(body),
        contentType: "application/json"
    });
    console.log(res);
    window.location = "conta.html";
}




async function delete_(){
    let cliente = JSON.parse(sessionStorage.getItem("conta"));
    let res = await $.ajax({
        type: "DELETE",
        url: '/api/clientes/' + cliente.C_id,
    });
   window.location = "index.html";

}