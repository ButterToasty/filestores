var periods = {
  month: 30 * 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000
};

function getTimeSince(timeCreated) {
  var diff = Date.now() - timeCreated;

  if (diff > periods.month) {
    return Math.floor(diff / periods.month) == 1 ? "A Month ago" : Math.floor(diff / periods.month) + " Months ago";
  } else if (diff > periods.week) {
    return Math.floor(diff / periods.week) == 1 ? "A Week ago" : Math.floor(diff / periods.week) + " Weeks ago";
  } else if (diff > periods.day) {
    return Math.floor(diff / periods.day) == 1 ? "A Day ago" : Math.floor(diff / periods.day) + " Days ago";
  } else if (diff > periods.hour) {
    return Math.floor(diff / periods.hour) == 1? "An Hour ago" : Math.floor(diff / periods.hour) + " Hours ago";
  } else if (diff > periods.minute) {
    return Math.floor(diff / periods.minute) == 1 ? "A Min ago" : Math.floor(diff / periods.minute) + " Mins ago";
  }
  return "Just now";
}


const scriptsInEvents = {

	async Sheetleaderboards_Event25_Act1(runtime, localVars)
	{
		const container = document.querySelector('#score-main-window')
		container.scrollTop -= 20;
	},

	async Sheetleaderboards_Event26_Act1(runtime, localVars)
	{
		const container = document.querySelector('#score-main-window')
		container.scrollTop += 20;
	},

	async Sheetleaderboards_Event32_Act4(runtime, localVars)
	{
		localVars.tempTimeStampString = getTimeSince(localVars.tempTimeStampString);
	},

	async Sheetleaderboards_Event48_Act4(runtime, localVars)
	{
		localVars.tempTimeStampString = getTimeSince(localVars.tempTimeStampString);
	},

	async Sheetleaderboards_Event62_Act4(runtime, localVars)
	{
		localVars.tempTimeStampString = getTimeSince(localVars.tempTimeStampString);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

