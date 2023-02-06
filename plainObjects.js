export const isPlainObject = value => {
    if (Object.getPrototypeOf(value) === null) {
      return true
    }
    let proto = value
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto)
    }
    return Object.getPrototypeOf(value) === proto
  }

export const flattenObj = obj => {

    for (const key in obj) {
        if (isPlainObject(obj[key])) {
            let copy = { ...obj[key] };
            delete obj[key];
            return Object.assign(copy, obj)
        }
    }
    return;
}

const areKeysPlainObjects = obj => {
    for (const key in obj) {
        if (isPlainObject(obj[key])) {
            return true;
        }
    }
}

export const flattenObjDeep = obj => {
    if (!obj) return {};
    // check if elements have an array, if yes flatten recursively, else return list
    return areKeysPlainObjects(obj) ?
            flattenObjDeep(flattenObj(obj)) :
        obj;
}