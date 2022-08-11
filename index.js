function shout(string) {
    return  string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log (string.toUpperCase());
}

function logWhisper(string) {
    console.log (string.toLowerCase())
}


function sayHiToHeadphonedRoommate(string) {
     const cantAnswer = "I can't hear you!"
     const canAnswer = "YES INDEED!"
     const loveTo = "I would love to!"

     if (string.toLowerCase() === string) {
        return cantAnswer
     }

     else if (string.toUpperCase() ===string) {
        return canAnswer
     }

     else if ("Let's have dinner together!" === string) {
        return loveTo
     }
}