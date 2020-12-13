async function login() {
    let name = $("#nome").val();
    let result = await $.ajax({
        url: "/API/clientes/login/"+name,
        method: "get",
        dataType: "json"
    });
    if(result)
        window.location = "home.html";
        
}

