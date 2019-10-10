import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { CXContext } from "./Datacontext";
import { ChartTemplate } from "./ChartTemplate";

const Map = () => {   

  const context = React.useContext(CXContext);
  const allDim = context.ndx.dimension(d => d);
  const array = allDim.top(Infinity); 

  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map('map', {
      center: [48.852969, 2.349903],
      zoom: 6,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }, []);

  //add multiple markers
  let markersArray = [];
  for (let i = 0; i < array.length; i++) {
    let marker = new L.marker([array[i].latitude, array[i].longitude]).bindPopup(`this is ${array[i].city}`);
    markersArray.push(marker);
  }
  const markers = L.layerGroup(markersArray);

  //add layer
  const layerRef = useRef(null);
  useEffect(
    () => {
      layerRef.current = markers.addTo(mapRef.current);
    }
  );

  return <div id="map"></div>
}

export default Map



// const MapFunc = async (divRef, ndx) => {

//   const allDim = ndx.dimension(d => d);
//   const array = allDim.top(Infinity);
//   console.log(ndx);
//   console.log(array);
//   console.log([array[0].latitude, array[0].longitude])

//   const Map = await L.map('map', {    
//     center: [array[0].latitude, array[0].longitude],
//     zoom: 16,
//     layers: [
//       L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       }),
//     ]
//   });
  
//   console.log(Map);
//   return <div id="map">Map</div>;
// };





//   // create map
//   const mapRef = useRef(null);
//   useEffect(() => {
//     mapRef.current = L.map('map', {
//       center: [48.852969, 2.349903],
//       zoom: 6,
//       layers: [
//         L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//           attribution:
//             '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         }),
//       ]
//     });
//   }, []);

//   //add multiple markers
//   let markersArray = [];
//   for (let i = 0; i < array.length; i++) {
//     let marker = new L.marker([array[i].latitude, array[i].longitude]).bindPopup(`this is ${array[i].city}`);
//     markersArray.push(marker);
//   }
//   const markers = L.layerGroup(markersArray);

//   //add layer
//   const layerRef = useRef(null);
//   useEffect(
//     () => {
//       layerRef.current = markers.addTo(mapRef.current);
//     }
//   );

//   return <div id="map"></div>

// }



// export const Map = props => {
//   return (
//     < ChartTemplate chartFunction={MapFunc} title="Map" />
//   )
// }

