window.onload = function(){



}


async function update(){
    let name = $('#nome').val();
    let tele = $('#tele').val();
    let email = $('#Email').val();
    

    let body = {

    };

    if(name != '') {
        body.M_name = name;
    }
    if(tele != ''){
        body.M_telefone = tele;
    }
    if(email != ''){
        body.M_email = email;
    }

    let id = JSON.parse(sessionStorage.getItem("marinaid"));
    let res = await $.ajax({
        type: "PUT",
        url: '/api/marinas/' + id,
        data: JSON.stringify(body),
        contentType: "application/json"
    });
    console.log(res);
    window.location = "a_home.html";
}




async function delete_(){
    let id = JSON.parse(sessionStorage.getItem("marinaid"));
    let res = await $.ajax({
        type: "DELETE",
        url: '/api/marinas/' + id,
    });
   window.location = "a_home.html";

}