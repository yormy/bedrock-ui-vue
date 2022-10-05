function getObjectKeys(obj) {
  return Object.keys(obj);
}

function getObjectArrayType(obj) {
  var type = Object.prototype.toString.call(obj);
  if (type === "[object Object]") {
    return "object";
  } else if (type === "[object Array]") {
    return "array";
  } else {
    return "unknown";
  }
}

export default function JsonMerge(defaults, destination) {
  var defKeys = getObjectKeys(defaults);
  var result = {};
  for (var d = 0; d < defKeys.length; d++) { //loop through object keys

    //does default key exist in destination
    if (destination[defKeys[d]] !== undefined) { //YES

      //Is key an object
      if (getObjectArrayType(destination[defKeys[d]]) === "object") { //YES
        result[defKeys[d]] = JsonMerge(defaults[defKeys[d]], destination[defKeys[d]]);
      } else {
        result[defKeys[d]] = destination[defKeys[d]];
      }
    } else { //NO
      result[defKeys[d]] = defaults[defKeys[d]]; //add default to graph spec
    }
  }
  return result;
}
