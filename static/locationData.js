export default function GetLocationData() {
   for(let i=0; i < data.length; i++) {
      data[i]['id'] = i;
   } 
    return data;
}


// ---------- Location Dummy Data ---------- //

const data = [
    { "name": "Bournemouth", "distance-miles": 2 } ,
    { "name": "Branksome Dene Chine", "distance-miles": 3 },
    { "name": "Boscombe", "distance-miles": 3 },
    { "name": "Poole", "distance-miles": 4 },
    { "name": "Southbourne", "distance-miles": 5 },
    { "name": "Mudeford Harbour", "distance-miles": 7 },
    { "name": "Avon Beach", "distance-miles": 7 },
    { "name": "Highcliffe", "distance-miles": 9 },
    { "name": "Swanage", "distance-miles": 9 },
    { "name": "Hordle Cliff", "distance-miles": 13 },
    { "name": "Milford on Sea", "distance-miles": 13 },
    { "name": "Kimmeridge", "distance-miles": 14 },
]