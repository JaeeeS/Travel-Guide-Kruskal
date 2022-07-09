//Implementation of Kruskal’s Algorithm: Determining the Optimal Route to visit Laguna’s Heritage Sites

let map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [14.1447, 121.4723],
    zoom: 10
});

let myIcon = L.icon({
    iconUrl:"qt.png",
    iconSize:[20,28],
    iconAnchor: [25,16]
});

let startIcon = L.icon({
    iconUrl:"marker-1.0-0-7b0099-7b0099-ffffff-ffffff-ffffff-28--56.png",
    iconSize:[20,28],
    iconAnchor: [25,16]
});

let greenIcon = L.icon({
    iconUrl:"green.png",
    iconSize:[28,28],
    iconAnchor: [25,16]
});

var i=0,j=0;

var markers = [
    [14.066705222297276, 121.33332919941736, "Seven Lakes",'<img src="./pics/1.jpg"/>'],
    [14.02730073744836, 121.38817863295809, "Bato Springs Resort",'<img src="./pics/2.jpg"/>'],
    [14.262807962009827, 121.49892572608279, "Pagsanjan Falls",'<img src="./pics/3.jpg"/>'],
    [14.16198176968508, 121.21446144956965, "Dampalit Falls",'<img src="./pics/4.jpg"/>'],
    [14.282255870025823, 121.09674663736942, "Enchanted Kingdom",'<img src="./pics/5.jpg"/>'],
    [14.239966896095593, 121.05948384272597, "Nuvali Park",'<img src="./pics/6..jpg"/>'],
    [14.213683496153633, 121.16670622298969, "Rizal Shrine",'<img src="./pics/7..jpg"/>'],
    [14.097650270120496, 121.25807570473597, "Hidden Valley Springs",'<img src="./pics/8..jpg"/>'],
    [14.136516845365227, 121.19445448276346, "Mt. Makiling",'<img src="./pics/9.jpg"/>'],
    [14.211018137119373, 121.47984780835147, "Hulugan Falls",'<img src="./pics/10..jpg"/>'],
    [14.131472402361647, 121.41530055760921, "Nagcarlan Underground Cemetery",'<img src="./pics/11.jpg"/>'],
    [14.234412592297366, 121.36406776840965, "Pila Heritage Site",'<img src="./pics/12.jpg"/>'],
    [14.283437335164363, 121.51052986866496, "Japanese Garden",'<img src="./pics/13.jpg"/>'],
    [14.156776641204797, 121.23417713957265, "Makiling Botanical Garden",'<img src="./pics/14.jpg"/>'],
    [14.195989917891007, 121.0805690395729, "Republic Wakepark",'<img src="./pics/15.jpg"/>'],
    [14.076870056591169, 121.31265119724476, "Sulyap Gallery Cafe",'<img src="./pics/16.jpg"/>']
    ];


var edges = [
	[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], [0, 10], [0, 11], [0, 12], [0, 13], [0, 14], [0, 15], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10], [1, 11], [1, 12], [1, 13], [1, 14], [1, 15], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9], [2, 10], [2, 11], [2, 12], [2, 13], [2, 14], [2, 15], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10], [3, 11], [3, 12], [3, 13], [3, 14], [3, 15], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10], [4, 11], [4, 12], [4, 13], [4, 14], [4, 15], [5, 6], [5, 7], [5, 8], [5, 9], [5, 10], [5, 11], [5, 12], [5, 13], [5, 14], [5, 15], [6, 7], [6, 8], [6, 9], [6, 10], [6, 11], [6, 12], [6, 13], [6, 14], [6, 15], [7, 8], [7, 9], [7, 10], [7, 11], [7, 12], [7, 13], [7, 14], [7, 15], [8, 9], [8, 10], [8, 11], [8, 12], [8, 13], [8, 14], [8, 15], [9, 10], [9, 11], [9, 12], [9, 13], [9, 14], [9, 15], [10, 11], [10, 12], [10, 13], [10, 14], [10, 15], [11, 12], [11, 13], [11, 14], [11, 15], [12, 13], [12, 14], [12, 15], [13, 14], [13, 15], [14, 15],
];        
      
var myFeatureGroup = L.featureGroup().addTo(map).on("click", groupClick); var test;
//markers
function mark(array){
   for (var i=0; i<array.length; i++) {
   var lon = array[i][1];
   var lat = array[i][0];
   var popupText = array[i][2];
   var image = array[i][3];
            
   var markerLocation = new L.LatLng(lat, lon);
   var marker = new L.Marker(markerLocation,{icon:myIcon});
   map.addLayer(marker);         
   marker.bindPopup(popupText+image);
   marker.addTo(myFeatureGroup);
   test = i;
   marker.test = test;
   }   
}

//----markers description

function groupClick(event) {
	if(event.layer.test == 0){
  	document.getElementById("info1").style.display = "block";
  }
  else
  document.getElementById("info1").style.display = "none";
    
  if(event.layer.test == 1){
  	document.getElementById("info2").style.display = "block";
  }
  else
  document.getElementById("info2").style.display = "none";
    
  if(event.layer.test == 2){
  	document.getElementById("info3").style.display = "block";
  }
  else
  document.getElementById("info3").style.display = "none";
    
  if(event.layer.test == 3){
  	document.getElementById("info4").style.display = "block";
  }
  else
  document.getElementById("info4").style.display = "none";
  
  if(event.layer.test == 4){
  	document.getElementById("info5").style.display = "block";
  }
  else
  document.getElementById("info5").style.display = "none";
    
  if(event.layer.test == 5){
  	document.getElementById("info6").style.display = "block";
  }
  else
  document.getElementById("info6").style.display = "none";
    
  if(event.layer.test == 6){
  	document.getElementById("info7").style.display = "block";
  }
  else
  document.getElementById("info7").style.display = "none";
    
  if(event.layer.test == 7){
  	document.getElementById("info8").style.display = "block";
  }
  else
  document.getElementById("info8").style.display = "none";
  if(event.layer.test == 8){
  	document.getElementById("info9").style.display = "block";
  }
  else
  document.getElementById("info9").style.display = "none";
    
  if(event.layer.test == 9){
  	document.getElementById("info10").style.display = "block";
  }
  else
  document.getElementById("info10").style.display = "none";
    
  if(event.layer.test == 10){
  	document.getElementById("info11").style.display = "block";
  }
  else
  document.getElementById("info11").style.display = "none";
    
  if(event.layer.test == 11){
  	document.getElementById("info12").style.display = "block";
  }
  else
  document.getElementById("info12").style.display = "none";
  
  if(event.layer.test == 12){
  	document.getElementById("info13").style.display = "block";
  }
  else
  document.getElementById("info13").style.display = "none";
    
  if(event.layer.test == 13){
  	document.getElementById("info14").style.display = "block";
  }
  else
  document.getElementById("info14").style.display = "none";
    
  if(event.layer.test == 14){
  	document.getElementById("info15").style.display = "block";
  }
  else
  document.getElementById("info15").style.display = "none";
    
  if(event.layer.test == 15){
  	document.getElementById("info16").style.display = "block";
  }
  else
  document.getElementById("info16").style.display = "none";   
}

mark(markers);

//user's location

function getLocation() {
    if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } 
    else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

var userMark = [];
var longitude = [];
var latitude = [];

function showPosition(position) {
    var a = position.coords.latitude;
    var b = position.coords.longitude;
    
    latitude.push(a);
    longitude.push(b);latlong()
}

function getUser(){
    var a = document.getElementById("lat").value;
    var b = document.getElementById("long").value;
    
    latitude.push(a);
    longitude.push(b);latlong()
}

function latlong(){
    var a = latitude[0];
    var b = longitude[0];
    showMarker(a,b);
}

function showMarker(lat,long){
    var a = lat;
    var b = long;
    var c = "You are here";
    var markerLocation = new L.LatLng(a, b);
    var marker = new L.Marker(markerLocation);
    map.addLayer(marker);
    var y = document.getElementById("info1");
    marker.bindPopup("You are here");
    userMark.push([a,b,c]);
    markers.push([a,b,c]);
    //selected.push(16); 
   userpoly();
}

//---user location and connect to the nearest destination----
function userpoly(){
    var userEdges = []; var userEdgeNDis=[];  
    for(var i = 0; i<selected.length; i++){
        userEdges.push([userMark[0], chosen[i]]);
    }
    //edge and distance (weight)
   
    for(var i =0;i<selected.length;i++){
      var a = userEdges[i][0];
      var b = userEdges[i][1];
      var e = {edgen: [16,i], weight:distance(a, b)};
    userEdgeNDis.push(e);
    }
    
    userEdgeNDis.sort( function(a, b) { return a.weight- b.weight; } );
    console.log(userEdgeNDis[0]);
    var g = markers[16];console.log(g);
    var h = userEdgeNDis[0].edgen[1];
    var i = selected[h];
    var j = markers[i]; console.log(j);
    //var polyline = L.polyline(g,j).addTo(map); 
    
    var polylinePoints = [g,j];            
    var polyline = L.polyline(polylinePoints).addTo(map); 
}




//---user location and connect to the nearest destination----
function userpoly2(){
    var userEdges2 = []; var userEdgeNDis2=[];  
    for(var i = 0; i<selected.length; i++){
        userEdges2.push([userMark2[0], chosen[i]]);
    }
    //edge and distance (weight)
   
    for(var i =0;i<selected.length;i++){
      var a = userEdges2[i][0];
      var b = userEdges2[i][1];
      var e = {edgen: [16,i], weight:distance(a, b)};
    userEdgeNDis2.push(e);
    }
    
    userEdgeNDis2.sort( function(a, b) { return a.weight- b.weight; } );
    console.log(userEdgeNDis2[0]);
    var c = userMark2[0];console.log(c);
    var h = userEdgeNDis2[0].edgen[1];
    var i = selected[h];
    var d = markers[i]; console.log(d);
    //var polyline = L.polyline(g,j).addTo(map); 
    var x = [c,d];            console.log(x);
    var polyline2 = L.polyline(x).addTo(map); 
}



//---union find----
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

    var x =[];
    for(var i = 0; i<markers.length;i++){
      x.push(i);
    }

//---delete or unselect----
var selected = [];
function cut(val){
  var index = selected.indexOf(val);
  if (index > -1) {
     selected.splice(index, 1);
  }
}

//----storing and deleting destinations---
function add1(){
    selected.push(0);include();
}
function un1(){
    cut(0);include();
}
function add2(){
    selected.push(1);include();
}
function un2(){
    cut(1);include();
}
function add3(){
    selected.push(2);include();
}
function un3(){
    cut(2);include();
}
function add4(){
    selected.push(3);include();
}
function un4(){
    cut(3);include();
}
function add5(){
    selected.push(4);include();
}
function un5(){
    cut(4);include();
}
function add6(){
    selected.push(5);include();
}
function un6(){
    cut(5);include();
}
function add7(){
    selected.push(6);include();
}
function un7(){
    cut(6);include();
}
function add8(){
    selected.push(7);include();
}
function un8(){
    cut(7);include();
}
function add9(){
    selected.push(8);include();
}
function un9(){
    cut(8);include();
}
function add10(){
    selected.push(9);include();
}
function un10(){
    cut(9);include();
}
function add11(){
    selected.push(10);include();
}
function un11(){
    cut(10);include();
}
function add12(){
    selected.push(11);include();
}
function un12(){
    cut(11);include();
}
function add13(){
    selected.push(12);include();
}
function un13(){
    cut(12);include();
}
function add14(){
    selected.push(13);include();
}
function un14(){
    cut(13);include();
}
function add15(){
    selected.push(14);include();
}
function un15(){
    cut(14);include();
}
function add16(){
    selected.push(15);include();
}
function un16(){
    cut(15);include();
}

function include(){
    f.innerHTML = "";
    removeDuplicates(selected);
    for(var i = 0; i<selected.length;i++){
        var d = selected[i];
        var e = markers[d];
        var img = '<img src="redc.png"/>'
        f.innerHTML += img+markers[d][2];
        nMarkers();
    } 
}

var f = document.getElementById("demo");
function removeDuplicates(data){
    return data.filter((value, index)=>data.indexOf(value) === index);   
}

//----chosen destinations-----
var chosen = [];
function enter(){ 
    f.innerHTML = "";
    removeDuplicates(selected);
    for(var i = 0; i<selected.length;i++){
        var d = selected[i];
        var e = markers[d];
        chosen.push(e);
        var img = '<img src="redc.png"/>'
        f.innerHTML += img+markers[d][2];
        nMarkers();
    }
    document.getElementById("confirm").style.display = "block";
}

//----for getting  the weight----
function distance( a, b )
{
  var dx = a[0] - b[0];
  var dy = a[1] - b[1];
  return dx*dx + dy*dy;
}

//combination pairs of chosen markers (edges) 
var result = []; var MST = [];
function nEdge(){
    var array = [];
    for(var i = 0; i<selected.length;i++){
        array.push(i);
    }
    for(var i=0;i<array.length-1;i++){
        for(var j=i+1;j<array.length;j++){
        result.push([array[i],array[j]]);
      }
    }
    
//edge and distance (weight)
    var nEdgendist=[];
    for(var i =0;i<result.length;i++){
      var a = result[i][0];
      var b = result[i][1];
      var e = {edge: result[i], weight:distance(chosen[a], chosen[b])};
      nEdgendist.push(e);
    };
    
//----sorting the weight in ascending order----    
    nEdgendist.sort( function(a, b) { return a.weight- b.weight; } );
    console.log(nEdgendist);
    

// Implementation of Kruskal    
    let uf = new UnionFind(x);
    for(var i=0;i<result.length;i++){
      var a = nEdgendist[i].edge[0];
      var b = nEdgendist[i].edge[1];   
        if(!uf.connected(a,b)){
          MST.push([a,b]);
          uf.union(a,b);
        }
    }
   c();  
}

console.log(selected); //Selected destinations
console.log(chosen);  //marked destinations
console.log(result);  //New edges
console.log(MST);

//----for polylines of the MST----
function c(){
for(var i = 0; i<selected.length;i++){
    var a = MST[i][0];
    var b = MST[i][1];
    var a1 = selected[a];
    var b1 = selected[b];
    var c = [markers[a1][2], markers[b1][2]];
    var d =  [markers[a1][0], markers[a1][1]];
    var e =  [markers[b1][0], markers[b1][1]];
    var f = [markers[a1],markers[b1]];
    var polyline = L.polyline(f).addTo(map);  
}userpoly();userpoly2();
}

//-----markers for selected destinations -----
function nMarkers(){
 for (var i=0; i<selected.length; i++) {
   var x = selected[i];
   var lon = markers[x][1];
   var lat = markers[x][0];
   var popupText = markers[x][2];
     var popupImage = markers[x][3];
         
   var markerLocation = new L.LatLng(lat, lon);
   var marker = new L.Marker(markerLocation,{icon:greenIcon});
   map.addLayer(marker);         
   marker.bindPopup(popupText+popupImage);
 }
}

function nMark(){
 for (var i=0; i<selected.length; i++) {
   var x = selected[i];
   var lon = markers[x][1];
   var lat = markers[x][0];
   var popupText = markers[x][2];
     var popupImage = markers[x][3];
         
   var markerLocation = new L.LatLng(lat, lon);
   var marker = new L.Marker(markerLocation,{icon:myIcon});
   map.addLayer(marker);         
   marker.bindPopup(popupText+popupImage);
 }
}

//-----display
function int(){
    document.getElementById("myModal").style.display = "block";
}

function exit(){
    document.getElementById("myModal").style.display = "none";
}

function ex(){
    document.getElementById("confirm").style.display = "none";
}
function exi(){
    document.getElementById("mark").style.display = "none";
}
function pin(){
    document.getElementById("mark").style.display = "block";
}

function start(){
    if (document.getElementById('d0').checked) {
     var b = markers[0][1];
     var d = markers[0][0];

        var markerLocation = new L.LatLng(b,d);
   var marker = new L.Marker(markerLocation,{icon:startIcon});
   map.addLayer(marker);         
   marker.bindPopup(popupText+popupImage);
}
}