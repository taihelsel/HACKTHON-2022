import "../HeatMapPage.css";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
export default function HeatMap() {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoiam9zaGJlbnBoaWxpcCIsImEiOiJjbDkwNnZxMzMwd201M3ZwOHBhdHhuMTh6In0.G5QStu3kuENYWaEJmoSfbw";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-80);
  const [lat, setLat] = useState(40.4);
  const [zoom, setZoom] = useState(11);
  const fetchTickets = () => {
    return [
      {
        score: 19191990,
        coords: [-79.91746, 40.44356],
      },

      {
        score: 19191991000000000,
        coords: [-79.94606, 40.44961],
      },

      {
        score: 1919199600000000,
        coords: [-80.00474, 40.39283],
      },

      {
        score: 19191992,
        coords: [-80.00949, 40.42532],
      },

      {
        score: 191919912,
        coords: [-79.93531, 40.42282],
      },

      {
        score: 191919912,
        coords: [-79.91199, 40.37286],
      },

      {
        score: 191919910,
        coords: [-79.93244, 40.43484],
      },

      {
        score: 1919199 - 1,
        coords: [-79.92158, 40.43892],
      },

      {
        score: 191919917,
        coords: [-79.97294, 40.40908],
      },

      {
        score: 191919913,
        coords: [-79.97291, 40.42896],
      },

      {
        score: 19191999,
        coords: [-80.05708, 40.45932],
      },

      {
        score: 191919910,
        coords: [-79.91069, 40.37747],
      },

      {
        score: 19191994,
        coords: [-79.98257, 40.43154],
      },

      {
        score: 19191995,
        coords: [-79.99177, 40.42093],
      },

      {
        score: 19191992,
        coords: [-80.02488, 40.41999],
      },

      {
        score: 19191991,
        coords: [-79.99531, 40.41504],
      },

      {
        score: 19191998,
        coords: [-80.0148, 40.43467],
      },

      {
        score: 19191996,
        coords: [-80.02489, 40.41446],
      },

      {
        score: 1919199 - 1,
        coords: [-80.01647, 40.40107],
      },
    ];
  };
  const buildData = () => {
    const data = fetchTickets();
    const geojsonData = data.map(({ score, coords }) => {
      return {
        type: "Feature",
        properties: { dbh: score },
        geometry: { type: "Point", coordinates: coords },
      };
    });
    return {
      type: "FeatureCollection",
      features: geojsonData,
    };
  };

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    map.current.on("load", () => {
      const s = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: { dbh: 111 },
            geometry: { type: "Point", coordinates: [-79.91746, 40.44356] },
          },
          {
            type: "Feature",
            properties: { dbh: 1200000000000 },
            geometry: { type: "Point", coordinates: [-79.94606, 40.44961] },
          },
        ],
      };
      map.current.addSource("trees", {
        type: "geojson",
        data: buildData(),
      });
      // add heatmap layer here
      map.current.addLayer(
        {
          id: "trees-heat",
          type: "heatmap",
          source: "trees",
          maxzoom: 15,
          paint: {
            // increase weight as diameter breast height increases
            "heatmap-weight": {
              property: "dbh",
              type: "exponential",
              stops: [
                [1, 0],
                [62, 1],
              ],
            },
            // increase intensity as zoom level increases
            "heatmap-intensity": {
              stops: [
                [11, 1],
                [15, 3],
              ],
            },
            // assign color values be applied to points depending on their density
            "heatmap-color": [
              "interpolate",
              ["linear"],
              ["heatmap-density"],
              0,
              "rgba(236,222,239,0)",
              0.2,
              "rgb(208,209,230)",
              0.4,
              "rgb(166,189,219)",
              0.6,
              "rgb(103,169,207)",
              0.8,
              "rgb(28,144,153)",
            ],
            // increase radius as zoom increases
            "heatmap-radius": {
              stops: [
                [11, 15],
                [15, 20],
              ],
            },
            // decrease opacity to transition into the circle layer
            "heatmap-opacity": {
              default: 1,
              stops: [
                [14, 1],
                [15, 0],
              ],
            },
          },
        },
        "waterway-label"
      );
      // add circle layer here
      map.current.addLayer(
        {
          id: "trees-point",
          type: "circle",
          source: "trees",
          minzoom: 14,
          paint: {
            // increase the radius of the circle as the zoom level and dbh value increases
            "circle-radius": {
              property: "dbh",
              type: "exponential",
              stops: [
                [{ zoom: 15, value: 1 }, 5],
                [{ zoom: 15, value: 62 }, 10],
                [{ zoom: 22, value: 1 }, 20],
                [{ zoom: 22, value: 62 }, 50],
              ],
            },
            "circle-color": {
              property: "dbh",
              type: "exponential",
              stops: [
                [0, "rgba(236,222,239,0)"],
                [10, "rgb(236,222,239)"],
                [20, "rgb(208,209,230)"],
                [30, "rgb(166,189,219)"],
                [40, "rgb(103,169,207)"],
                [50, "rgb(28,144,153)"],
                [60, "rgb(1,108,89)"],
              ],
            },
            "circle-stroke-color": "white",
            "circle-stroke-width": 1,
            "circle-opacity": {
              stops: [
                [14, 0],
                [15, 1],
              ],
            },
          },
        },
        "waterway-label"
      );
    });

    map.current.on("click", "trees-point", (event) => {
      new mapboxgl.Popup()
        .setLngLat(event.features[0].geometry.coordinates)
        .setHTML(`<strong>DBH:</strong> ${event.features[0].properties.dbh}`)
        .addTo(map);
    });
  }, []);

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
