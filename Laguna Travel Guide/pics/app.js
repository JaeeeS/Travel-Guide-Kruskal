let map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [14.2822, 121.0968],
    zoom: 11
});

let myIcon = L.icon({
    iconUrl: "redc.png",
    iconSize: [28, 28],
    iconAnchor: [25, 16]
});

let greenIcon = L.icon({
    iconUrl: "blue.png",
    iconSize: [28, 28],
    iconAnchor: [25, 16]
});

var i = 0,
    j = 0;
var markers = [
    [14.2822, 121.0968],
    [14.239966896095593, 121.05948384272597],
    [14.213683496153633, 121.16670622298969],
    [14.16198176968508, 121.21446144956965],
    [14.136516845365227, 121.19445448276346],
    [14.097650270120496, 121.25807570473597],
    [14.076870056591169, 121.31265119724476],
    [14.066705222297276, 121.33332919941736],
    [14.02730073744836, 121.38817863295809],
    [14.131472402361647, 121.41530055760921]
];


var edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [2, 3],
    [2, 4],
    [1, 4],
    [4, 5],
    [3, 5],
    [5, 6],
    [5, 9],
    [6, 7],
    [7, 8],
    [8, 9],
    [7, 9]
];

//markers
for (var i = 0; i < markers.length; i++) {
    var lon = markers[i][1];
    var lat = markers[i][0];
    var popupText = markers[i][2];

    var markerLocation = new L.LatLng(lat, lon);
    var marker = new L.Marker(markerLocation, { icon: myIcon });
    map.addLayer(marker);
    marker.bindPopup(popupText);
}

//user's location

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var x = document.getElementById("lat");
    var y = document.getElementById("long");
    var a = position.coords.latitude;
    var b = position.coords.longitude;
    x.innerHTML = a;
    y.innerHTML = b;
    var markerLocation = new L.LatLng(a, b);
    var marker = new L.Marker(markerLocation);
    map.addLayer(marker);
    marker.bindPopup("You are here");
}

//weight
function distance(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return dx * dx + dy * dy;
}


var edgendist = [];
for (var i = 0; i < edges.length; i++) {
    var a = edges[i][0];
    var b = edges[i][1];
    var e = { edge: edges[i], weight: distance(markers[a], markers[b]) };
    edgendist.push(e);
};
edgendist.sort(function(a, b) { return a.weight - b.weight; });
console.log(edgendist);



//union find
class UnionFind {
    constructor(elements) {
        this.count = elements.length;
        this.parent = {};

        elements.forEach(e => (this.parent[e] = e));
    }

    union(a, b) {
        let rootA = this.find(a);
        let rootB = this.find(b);

        if (rootA === rootB) return;

        if (rootA < rootB) {
            if (this.parent[b] != b) this.union(this.parent[b], a);
            this.parent[b] = this.parent[a];
        } else {
            if (this.parent[a] != a) this.union(this.parent[a], b);
            this.parent[a] = this.parent[b];
        }
    }

    find(a) {
        while (this.parent[a] !== a) {
            a = this.parent[a];
        }
        return a;
    }

    connected(a, b) {
        return this.find(a) === this.find(b);
    }
}

var x = [];
for (var i = 0; i < markers.length; i++) {
    x.push(i);
}
kruskal();

function kruskal() {
    var MST = [];

    let uf = new UnionFind(x);
    console.log(markers.length - 1);
    //uf.union(x,y);MST.push([x,y]);
    for (var i = 0; i < markers.length; i++) {
        var a = edgendist[i].edge[0];
        var b = edgendist[i].edge[1];
        if (!uf.connected(a, b)) {
            MST.push([a, b]);
            uf.union(a, b);
        }
    }

    console.log(MST);

}