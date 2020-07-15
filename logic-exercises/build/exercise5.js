function secondsToHours(seconds) {
    const secondsToMin = Math.floor(seconds / 60);
    const minstToSeconds = seconds - secondsToMin * 60;
    const minsToHours = Math.floor(secondsToMin / 60);
    const hoursToMins = secondsToMin - minsToHours * 60;
    console.log(secondsToMin, minsToHours, hoursToMins);
    return `${seconds} segundos = ${minsToHours} hora(s),
        ${hoursToMins} minuto(s) e ${minstToSeconds} segundo(s)`;
}
console.log(secondsToHours(100));
//# sourceMappingURL=exercise5.js.map