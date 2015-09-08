var triangle = function(side1, side2, side3) {

  if ((side1 > side2 || side1 > side3 || side2 > side3) === true) {

    if (side1 === side2 && side1 === side3 && side2 === side3) {
      return "equilateral";
      }
  } else {
  return "not a triangle";
  }
};










// var triangle = function(side1, side2, side3) {
//   [side1, side2, side3].sort()
//
//   var set1 = side1 + side2;
//   var set2 = side2 + side3;
//   var set3 = side1 + side3;
//
//   if (!(set1 > set2 || set1 > set3 || set2 > set3)) {
//     if ((set1 + set2) % set3 === 0) {
//       return "equilateral";
//       }
//     }
//   else {
//     return "not a triangle";
//     }
// };

// (set1 || set2 <= set3) === true
  // if  ((set1 + set2) % set3 === 0) {
  //   return "equilateral"
  // } else if (set1 || set2 <= set3) {
  //   return "not a triangle"
  // } else {
  //   return "other triangle"
  // }
  // if (side1 + side2 <= side3) {
  //   return false
  // } else if (side2 + side3 <= side1) {
  //   return false
  // } else if (side1 + side3 <= side2) {
  //   return false
  // } else {
  //   return true
  // }
