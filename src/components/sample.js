const images = [
  { height: 10, width: 10 },
  { height: 10, width: 10 },
  { height: 10, width: 10 },
];

const calcArea = (images) => images.map((image) => image.height * image.width);

const areas = calcArea(images); //[300, 1800, 1728]
console.log(areas);
const areaTotal = areas.reduce((prev, area) => prev += area, 0);
console.log(areaTotal);