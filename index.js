var recipes = {};

function updateObjectWithKeyAndValue(obj,key,value){
<<<<<<< HEAD
  return Object.assign({}, obj, { [key]: value });
=======
  return Object.assign(obj, {[key]:value});
>>>>>>> b6fa9f18c351c6ae98c2c700862bb8341f0d1261
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj,key){
<<<<<<< HEAD
  var newObj = Object.assign({},obj);
=======
  var newObj = obj;
>>>>>>> b6fa9f18c351c6ae98c2c700862bb8341f0d1261
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}