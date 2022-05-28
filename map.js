// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
//src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB9ih7JqjB-YhvF-d1_qnKXY8bNgpGq4gQ&libraries=hospital"
function initMap() {
    // Create the map.
    // const pyrmont = { lat: -33.866, lng: 151.196 };
    const pyrmont = { lat: 12.295, lng: 76.639 }
    const map = new google.maps.Map(document.getElementById("map"), {
        center: pyrmont,
        zoom: 17,
        mapId: "8d193001f940fde3",
    });
    // Create the places service.
    const service = new google.maps.places.PlacesService(map);
    let getNextPage;
    const moreButton = document.getElementById("more");

    moreButton.onclick = function() {
        moreButton.disabled = true;
        if (getNextPage) {
            getNextPage();
        }
    };
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: 'fsq3p0b44TdnIXCzKuetAqdBMitCbNc/W/rX0a9KCvSuxsg='
        }
    };

    fetch('https://api.foursquare.com/v3/places/nearby?ll=12.259%2C76.639&hacc=50000&query=hospital', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


    // Perform a nearby search.
    // var request = {
    //   location: pyrmont,
    //   radius: 500000,
    //   type:"airport"
    // };
    // service.nearbySearch(
    //   { location: pyrmont, radius: 50000, type: "atm" },
    //   (results, status, pagination) => {
    //     if (status !== "OK" || !results) return;
    // console.log("1")
    // service.nearbysearch(request,callback);
    // function callback(results,status){
    //   if(status == google.maps.places.PlacesServiceStatus.OK){
    //     for (var i = 0; i< results.length; i++){
    //       createMarker(results[i])
    //     }
    //   }
    // }

    //   addPlaces(response, map);
    //   moreButton.disabled = !pagination || !pagination.hasNextPage;
    //   if (pagination && pagination.hasNextPage) {
    //     getNextPage = () => {
    //       // Note: nextPage will call the same handler function as the initial call
    //       pagination.nextPage();
    //     };
    //   }
    // }
    //);
    //}

    // // function addPlaces(places, map) {
    //   const placesList = document.getElementById("places");

    //   for (const place of places) {
    //     if (place.geometry && place.geometry.location) {
    //       const image = {
    //         url: place.icon,
    //         size: new google.maps.Size(71, 71),
    //         origin: new google.maps.Point(0, 0),
    //         anchor: new google.maps.Point(17, 34),
    //         scaledSize: new google.maps.Size(25, 25),
    //       };

    //       new google.maps.Marker({
    //         map,
    //         icon: image,
    //         title: place.name,
    //         position: place.geometry.location,
    //       });

    //       const li = document.createElement("li");

    //       li.textContent = place.name;
    //       placesList.appendChild(li);
    //       li.addEventListener("click", () => {
    //         map.setCenter(place.geometry.location);
    //       });
    //     }
    //   }
    var res = JSON.parse(response)
    console.log(res)
    for (var i = 0, length = res.length; i < length; i++) {
        var data = res[i],
            latlng = new google.maps.LatLng(data.lat, data.lng)
        console.log(data)
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: data.title
        })
        marker.setMap(map)
    }
}

window.initMap = initMap;