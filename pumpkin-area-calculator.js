function calculateRectangleArea(length, width) {
  if (!(length < 0) && !(width < 0)) {
    let area = length * width;
    return area;
  } 
}
function calculateTriangleArea(base, height) {
  if (!(base < 0) && !(height < 0)) {
    let area = (base * height) / 2;
    return area;
  } 
}
function calculateCircleArea(radius) {
  if (!(radius < 0)) {
    let area = Math.PI * radius * radius;
    return area;
  } 
}

