function deepCopy(obj, copies = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (copies.has(obj)) {
        return copies.get(obj);
    }

    if (obj instanceof Date) {
        return new Date(obj);
    }

    if (obj instanceof Map) {
        return new Map(Array.from(obj, ([key, val]) =>
        [deepCopy(key, copies), deepCopy(val, copies)]));
    }

    if (obj instanceof Set) {
        return new Set(Array.from(
            obj, val => deepCopy(val, copies)
            ));
    }

    const copy = Array.isArray(obj) ? [] : {};

    copies.set(obj, copy);

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copy[key] = deepCopy(obj[key], copies);
        }
    }

    Object.setPrototypeOf(copy, Object.getPrototypeOf(obj));

    return copy;
}

function areObjectsEqual(obj1, obj2) {

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key in obj1) {

    const value1 = obj1[key];
    const value2 = obj2[key];

    const areValuesObjects =
      typeof value1 === 'object' &&
      typeof value2 === 'object';

    if (areValuesObjects) {
      return areObjectsEqual(value1, value2)
    }

    if (value1 !== value2) {
      return false;
    }
  }

  return true;
}
