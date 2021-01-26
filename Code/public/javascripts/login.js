async function login() {
    let name = $("#nome").val();
    console.log(name);
    
    let result = await $.ajax({
        url: "/API/clientes/login/"+name,
        method: "get",
        
    });
    console.log(result);
   

    if(result.accountType == 'Cliente') {
        sessionStorage.setItem('conta', JSON.stringify(result));
        window.location = "home.html";
    }
    else if(result.accountType == 'Marina') {
        sessionStorage.setItem('conta', JSON.stringify(result));
        window.location = "m_home.html";

        console.log("qqdcoisa");
    }
    else {
        //Login falhado
        console.log("qqdcoisa");
    }
        
}

