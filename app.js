
function initMap(){

  var options={
    center: {lat: 41.7151, lng: 44.8271},
    zoom: 12,
    mapId: "715a3683b7b7bf8a"
  }

    map = new google.maps.Map(document.getElementById('map'), options);

    // Marker

    /*const marker = new google.maps.Marker({
      position: {lat: 41.7151, lng: 44.8271},
      map: map
    });

    const detailWindow= new google.maps.InfoWindow({
      content: `<h2>Tbilisi City</h2>`
    });

    marker.addListener("mouseover", () => {
      detailWindow.open(map, marker);
    })*/

    //add Marker

    function addMarker(property){
      const marker = new google.maps.Marker({
        position: property.location,
        map: map
      });

      const detailWindow= new google.maps.InfoWindow({
        content: property.content
      });

      marker.addListener('mouseover',()=>{
        detailWindow.open(map,marker);
      })

    }


    addMarker({location: {lat: 41.7151, lng: 44.8271}, content: `<h2>Tbilisi City</h2>`});
    addMarker({location: {lat: 41.7203, lng: 44.7406}, content: `<h2>Tbilisi Saburtalo</h2>`});
    addMarker({location: {lat: 41.7096, lng: 44.7569}, content: `<h2>Tbilisi Vake</h2>`});


}