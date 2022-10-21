

function initMap(){

  let boolean=false;

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


    

    const svgIcon={
      url: './img/location.png',
     // size: new google.maps.Size(17,17),
     // origin: new google.maps.Point(10, 10),
      anchor: new google.maps.Point(17, 54),
      scaledSize: new google.maps.Size(35, 35),
    }

    const nextIcons=[
      {
        url: './img/1024px-Saburtalo,_Tbilisi.jpg',
        anchor: new google.maps.Point(17, 54),
        scaledSize: new google.maps.Size(35, 35),
      },

      {
        url: './img/Vake_District,_Tbilisi,_Georgia.jpg',
        anchor: new google.maps.Point(17, 54),
        scaledSize: new google.maps.Size(35, 35),
      },

    ]

    function addMarker(property){

      const marker = new google.maps.Marker({
        position: property.location,
        map: map,
        icon: svgIcon
      });

      const detailWindow= new google.maps.InfoWindow({
        content: property.content
      });

      marker.addListener('click',()=>{
        boolean=!boolean;
        if(boolean){
          detailWindow.open(map,marker);
          if(property.nextIcons){
            marker.setIcon(property.nextIcons);
          }
         
        } else{
          detailWindow.close();
          if(property.nextIcons){
            marker.setIcon(svgIcon)
          }
        
        }
        
      })


    }


    addMarker({location: {lat: 41.7151, lng: 44.8271}, content: `<h2>Tbilisi City</h2>`});
    addMarker({location: {lat: 41.7203, lng: 44.7406}, content: `<h5>Saburtalo</h5><p>saburtalo</p><p>Tbilisi Georgia</p>`, nextIcons: nextIcons[0] });
    addMarker({location: {lat: 41.7096, lng: 44.7569}, content: `<h5>Tbilisi Vake</h5> <p>Vake</p> <p>Tbilisi georgia</p>`, nextIcons: nextIcons[1]});


}