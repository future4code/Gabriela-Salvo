let checkAnagram = (s, t) => {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    return s === t;
};
console.log(checkAnagram("banana", "banana"));
//# sourceMappingURL=exercise_11_08.js.map