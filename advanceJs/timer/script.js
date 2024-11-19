const timeInput = document.getElementById("time-input");
const startTimerBtn = document.getElementById("start-timer");
const timerList = document.getElementById("timer-list");

timeInput.addEventListener("input", (event) => {
	// if (event.target.value == 0) event.target.value = "";
	event.target.value = event.target.value.replace(/[^0-9]/g, "");
});

// Adding event listener to this button
startTimerBtn.addEventListener("click", () => {
	let time = timeInput.value;

	if (!time || time <= 0) return;

	const newTimer = document.createElement("div");

	const timeSpan = document.createElement("span");
	timeSpan.innerText = timeFormat(time);
	newTimer.appendChild(timeSpan);

	const intervalId = setInterval(() => {
		time--;
		timeSpan.innerText = timeFormat(time);
		if (time == 0) {
			// Play and alerm
			clearInterval(intervalId);
		}
	}, 1000);

	const deleteBtn = document.createElement("button");
	deleteBtn.innerText = "Delete";
	newTimer.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", () => {
		clearInterval(intervalId);
		newTimer.remove();
	});

	// Adding new timer to the list
	timerList.appendChild(newTimer);

	timeInput.value = "";
});

function timeFormat(seconds) {
	let h = Math.floor(seconds / 3600);
	seconds %= 3600;
	let m = Math.floor(seconds / 60);
	seconds %= 60;

	return `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${
		seconds < 10 ? "0" + seconds : seconds
	}`;
}
