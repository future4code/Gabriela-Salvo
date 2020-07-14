function transformTime(seconds) {
    const secondsToMin = Math.floor(seconds / 60);
    const minstToSeconds = seconds - secondsToMin * 60;
    const minsToHours = Math.floor(secondsToMin / 60);
    const hoursToMins = secondsToMin - minsToHours * 60;
    console.log(secondsToMin, minsToHours, hoursToMins);
    return `${seconds} segundos equivalem a ${minsToHours} hora(s),
        ${hoursToMins} minuto(s) e ${minstToSeconds} segundo(s)`;
}
console.log(transformTime(100));
//# sourceMappingURL=exercise5.js.map