window.onload = function(){
    $('#reservDate').datepicker({ dateFormat: 'yy/mm/dd' });
    $('#endDate').datepicker({ dateFormat: 'yy/mm/dd' });

}


async function update(){
    let dataI = $('#reservDate').val();
    let dataF = $('#endDate').val();

    let body = {
        R_dateInicial: dataI,
        R_dateFinal: dataF,
    };

    let ReservaID = JSON.parse(sessionStorage.getItem("reservaId"));
    let res = await $.ajax({
        type: "PUT",
        url: '/api/reservas/' + ReservaID,
        data: JSON.stringify(body),
        contentType: "application/json"
    });
    console.log(res);
    window.location = "a_reservas.html";
}




async function delete_(){
    let id = JSON.parse(sessionStorage.getItem("reservaId"));
    let res = await $.ajax({
        type: "DELETE",
        url: '/api/reservas/' + id,
    });
   window.location = "a_reservas.html";

}