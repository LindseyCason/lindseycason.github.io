function objectValues(data) {
    var array= Object.values(data);
    return array;
}
//////////////////////////
function keysToString(data) {
    return Object.keys(data).join(" ");
}   

//////////////////////////////
//15
function valuesToString(data) {
    var toArray = Object.values(data);
    var strArray = [];
    for(var i=0; i< toArray.length; i++) {
        if (typeof toArray[i] === "string") {
            strArray.push(toArray[i]);
        }
    }
    var toString = strArray.join(" ");
    return toString;
}
////////////////////////////////
//16
function arrayOrObject(data) {
    if(typeof data === "object"){
        if(Array.isArray(data))
        { return "array";
    }
    else{
        return "object";
    }
    }
}

/////////////////////////////////
//17
function capitalizeWord(data) {
    var newArray = [];
        var modified = data.charAt(0).toUpperCase() + data.substring(1);
        newArray.push(modified);
return newArray;    
}
///////////////////////////////
//18
 function capitalizeAllWords(string) {
    var newArray = [];
    var splitStrings = string.split(" ");
        for(var i = 0; i < splitStrings.length; i++) {
            var modified = splitStrings[i].charAt(0).toUpperCase() + splitStrings[i].substring(1);
                newArray.push(modified);
 
        }
        return newArray.join(" ");
 }
////////////////////////////////
//19
function welcomeMessage(object) {
    var capName = object.name.charAt(0).toUpperCase() + object.name.substring(1);
    
    return "Welcome" + " " + capName + "!";
}

///////////////////////////////////
//20

function profileInfo(object) {
    var capName = object.name.charAt(0).toUpperCase() + object.name.substring(1);
    var capSpec = object.species.charAt(0).toUpperCase() + object.species.substring(1);
    return capName + " is a " + capSpec;
}
//////////////////////////////////
//21

function maybeNoises(object) {
  if (!(object.hasOwnProperty("noises"))) {
    return "there are no noises";
  }
  else if (object.noises.length === 0) {
    return "there are no noises"
  }  
  else if(object.hasOwnProperty("noises")) {
    if(object.noises.length >= 1) {
      return object.noises.join(" ");
    }
}}
///////////////////////////////////
//22
 function hasWord(string, word) {
     //var strings=string;
 if(string.search(word)>=1) {
     return true;
 }
 else {
     return false;
 }
 }
///////////////////////////////////
//23
function addFriend(name, object) {
    object.friends.push(name);
    return object;
}
///////////////////////////////////
//24
function isFriend(name, object) {
    
    if(!(object.hasOwnProperty("friends"))) {
    return false;
    }
    else if (object.friends.indexOf(name) >=0) {
    return true;
    }
    else if(object.friends.indexOf(name) <=0) {
    return false;

}
}
///////////////////////////////////
//25
function nonFriends (name, list) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    if (!isFriend(name, list[i]) && list[i].name !== name) {
      result.push(list[i].name);
    }
  }
  return result;
}


///////////////////////////////////
//26

function updateObject(object, key, value) {
    if (object[key] !== null) { // if object[key] exists, update it's value with new <value>
        object[key] = value
    } else if (object[key] === null) { // if object[key] does not exist, create it and set it's value to <value>
        object[key] = value
    } return object;
}

///////////////////////////////////////////
//27

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) { // loop through the object
        for (var key in object) {
            if (key === array[i]) { // if a key matches something in the array, delete that key
                delete object[key];
            }
        }
    } return object;
}
//////////////////////////////
//28
function dedup(data) {
    var duplicates = [];
    var newArray = [];
    for (var i = 0; i < data.length; i++) { // loop through <data> to see if any value exist in duplicates
        if (!(data[i] in duplicates)) { // if data[i] is not found in duplicates, push data[i] to the newArray
            newArray.push(data[i]);
            duplicates[data[i]] = true;
        }
    }
    return newArray;
}










