let latitude=22.7868542, longitude=88.3643296;
mapboxgl.accessToken = "pk.eyJ1IjoiYnJpYW5ob2FuZzA3MzAwOCIsImEiOiJjbGFvOG1xcWcwMDFnM3dyMGZ4NWh4Yno3In0.rK4TS6pytWEXYhenvGT2Ng"

var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom: 4
})
var img1 = document.querySelector("#EiffelTower")

var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([2.2945,48.8584])
.addTo(map)

var img2 = document.querySelector("#GoldenBridge")

var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([107.995300,15.998900])
.addTo(map)

var img3 = document.querySelector("#LeaningTowerOfPisa")

var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([10.3966,43.7230])
.addTo(map)

var img4 = document.querySelector("#StatueOfLiberty")

var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([-74.0445,40.6892])
.addTo(map)

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)





