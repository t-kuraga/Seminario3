// Import stylesheets
import './style.css';
import 'https://d3-geomap.github.io/d3-geomap/d3-geomap.min.css';
import 'https://unpkg.com/d3@5/dist/d3.min.js';
import 'https://unpkg.com/topojson@3/dist/topojson.min.js';

var map = d3.geomap().geofile('/d3-geomap/topojson/world/countries.json').draw(d3.select('#map'));