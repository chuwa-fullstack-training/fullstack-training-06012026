/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    // implement your code here
    for(let [key, value] of Object.entries(p)){
        o[key] = value;
    }
    return o;
}

function extend(o, p) {
    // implement your code here
    for(let entry of Object.entries(p)){
        o[entry[0]] = entry[1];
    }
    return o;
}

function extend(o, p) {
    // implement your code here
    Object.entries(p).forEach(
        ([key, value]) => {
            o[key] = value;
        }
    )
    return o;
}


/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    // implement your code here
    let new_obj = {};
    new_obj = extend(extend(new_obj, p), o);

    return new_obj;
}

function union(o, p) {
    // implement your code here
    const new_obj = {};
    return extend(extend(new_obj, p), o);
}

function union(o, p) {
    // implement your code here
    return extend(extend({}, p), o);
}



/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    // implement your code here
    Object.keys(o).forEach(
        (key)=> {
            if (!(key in p)){
                delete o[key];
            }
        }
    )
    return o;
}

function restrict(o, p) {
    // implement your code here
    for(let key of Object.keys(o)){
        if (p[key] === undefined){
            delete o[key];
        }
    }
    return o;
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    // implement your code here
    return extend({}, restrict(extend({}, o), p));
}