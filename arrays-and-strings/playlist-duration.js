// https://maxcode.dev/problems/playlist/
function playlistDuration(playlist) {
  const timeUnitTotals = playlist.reduce((timeUnits, [,time]) => {
    const [trackSec, trackMin, trackHour = 0] = time.split(':').map(Number).reverse();
    const { seconds, minutes, hours } = timeUnits;



    return {
      seconds: seconds + trackSec,
      minutes: minutes + trackMin,
      hours: hours + trackHour,
    }

  }, {seconds: 0, minutes: 0, hours: 0})

  return formatTime(convertTimeUnits(timeUnitTotals));
}

function formatTime({seconds, minutes, hours}) {
  const time = [hours, minutes, seconds].map(unit => String(unit).padStart(2, '0'));
  return hours === 0 ? time.slice(1).join(':') : time.join(':');
}

function convertTimeUnits({seconds, minutes, hours}) {
  minutes += Math.floor(seconds / 60);
  seconds %= 60;
  hours += Math.floor(minutes / 60);
  minutes %= 60;

  return {seconds, minutes, hours}
}

// ---------| Элегантное решение автора  |---------

function playlistDuration2(playlist) {
  const seconds = playlist.reduce((totalTime, [,time]) => {
    const [s, m, h] = time.split(':').reverse().map(Number);
    return totalTime + s + m * 60 + h * 60 * 60;
  }, 0);

  const s = seconds % 60;
  const m = Math.floor(seconds / 60) % 60;
  const h = Math.floor(seconds / 60 / 60);

  const nums = h === 0 ? [m, s] : [h, m, s];

  return nums.map(num => String(num).padStart(2, '0')).join(':');
}





const innuendo = [
  ["Innuendo", "6:31"],
  ["I'm Going Slightly Mad", "4:22"],
  ["Headlong", "4:38"],
  ["I Can't Live with You", "4:33"],
  ["Don't Try So Hard", "3:39"],
  ["Ride the Wild Wind", "4:42"],
  ["All God's People", "4:21"],
  ["These Are the Days of Our Lives", "4:15"],
  ["Delilah", "3:35"],
  ["The Hitman", "4:56"],
  ["Bijou", "3:36"],
  ["The Show Must Go On", "4:35"],
];

console.log(playlistDuration(innuendo)); // "53:43"

const blackMirrorSeason4 = [
  ["USS Callister", "01:16:00"],
  ["Arkangel", "52:00"],
  ["Crocodile", "59:00"],
  ["Hang the DJ", "51:00"],
  ["Metalhead", "41:00"],
  ["Black Museum", "01:09:00"],
];

console.log(playlistDuration(blackMirrorSeason4)); // "05:48:00"
