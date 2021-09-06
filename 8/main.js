function initMap() {
    let position = { lat: 55.76429410415721, lng: 37.56837217646526 }
    let map = new google.maps.Map(document.querySelector('.map'), {
        center: position,
        zoom: 12,
    });
    let marker = new google.maps.Marker({
        position: position,
        map: map,
        title: 'Москва, Столярный Переулок 3к13'
    })
}
