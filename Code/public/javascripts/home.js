var map;
var marinas;
var home;
var greenIcon;
var marinaIcon;

function map() {
    map = L.map('map').setView([39.65, -7.5], 6.5);
    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=nzLBBO7atyb6b5uMflmX', {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(map);
 
}

function setMarina(idx){
    let marina = marinas[idx];
    destino = L.latLng( marina.M_lat,  marina.M_long)
    setRota();
};

function setRota(){
    if (destino)
    L.Routing.control({
        waypoints: [
            home.getLatLng(),
            destino,
        ],
        routeWhileDragging: true
    }).addTo(map);
}


marinaIcon = L.icon({
    iconUrl: "images/Marina.png",
    iconSize:     [25, 25], 
});


async function marinaMarkers(){
    marinas = await $.ajax({
        url:"/API/marinas",
        method: "get",
    });
    for (var idx in marinas) {
        let marina = marinas[idx];
        L.marker({lat: marina.M_lat, lon: marina.M_long}, {icon: marinaIcon}).bindPopup(`<p>${marina.M_name}</p><p>Número de Telefone: ${marina.M_telefone}</p><p>Lugares Pequenos: ${marina.M_lugarPeq}</p><p>Lugares Médios: ${marina.M_lugarMed}</p><p>Lugares Grandes: ${marina.M_lugarGra}</p><button onclick="setMarina(${idx})">Rota</button><p><button onclick="mostralocalizacao(${idx})">Reservar</button>`).addTo(map);
    }
}



function mostralocalizacao(idx) {
    sessionStorage.setItem("marina", JSON.stringify(marinas[idx]));
    window.location = "reserva.html";
}

window.onload = () => {

    map();
    marinaMarkers();

}


function LogOut(){
    sessionStorage.clear()
    window.location = "index.html"
}

greenIcon = L.icon({
    iconUrl: "images/Home.png",
    iconSize:     [50, 50], 
});


navigator.geolocation.getCurrentPosition(function(location) {
    var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
    home = L.marker(latlng, {icon: greenIcon}).bindPopup(`<p>Current Location</p>`).addTo(map); 
    L.map('map').setView(new latlng, 8);  
})
