const DottedMap = require('dotted-map').default;

// Create the map
const map = new DottedMap({
    height: 100,
    // width, // just specify either height or width, so the ratio of the map is correct
    countries: ['FRA'], // look into `countries.geo.json` to see which keys to use. You can also omit this parameter and the whole world will be used
    // region: { lat: { min, max }, lng: { min, max } }, // if not present, it will fit the countries (and if no country is specified, the whole world)
    grid: 'vertical' | 'diagonal', // how points should be aligned
    avoidOuterPins: false | true, // if it’s true, prevent adding pins when they are outside of region/countries
});

// Add some points/change the color of existing points
// map.addPin({
//     lat,
//     lng,
//     svgOptions: { color, radius },
//     data, // whatever you want, useful if you use the method `getPoints` to get the raw points
// });

// If you want to get the raw array of points
map.getPoints();
// [{ x, y, data, svgOptions }]

// Or use this method to get a string which is a SVG
map.getSVG({
    shape: 'circle' | 'hexagon', // if you use hexagon, prefer the grid `diagonal`
    backgroundColor: "#fff", // background color of the map
    color: "#143123",// default color of the points
    radius: 0.5, // default radius of the points
});