


function map() {
    var map = L.map('map').setView([39.65, -7.5], 6.5);
    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=nzLBBO7atyb6b5uMflmX', {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }).addTo(map);

    var marker = L.marker([37.077355366634734, -8.12029283083673]).addTo(map);
    
}

window.onload = () => {

    map();

}
