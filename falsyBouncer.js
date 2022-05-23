function falsyBouncer(arr) {
    return arr.filter(Boolean); // This way work for false, null, 0, "", undefined and NaN
}
