function updateDateTime() {
	const currentDate = new Date();
	const time = currentDate.toLocaleTimeString();

	const dateElement = document.getElementById("date");
	dateElement.innerHTML =
		' <i class="fa-solid fa-calendar text-muted"></i> ' +
		currentDate.toDateString() +
		' <i class="fas fa-clock ms-2 text-muted"></i> ' +
		time;
}

// Update the date initially
updateDateTime();

// Update the date every second
setInterval(updateDateTime, 1000);



// function startMarquee() {
// 	const infoElement = document.getElementById("info");
// 	infoElement.classList.add("scrolling-text");
// }
// startMarquee()
// // Start the marquee after 1 minute (60,000 milliseconds)
// setTimeout(startMarquee, 60000);
const dropdown = document.getElementById("dropdown");

const dropdownContent = document.getElementById("dropdownContent");

dropdown.addEventListener("mouseenter", function () {
	dropdownContent.classList.add("show");
});

dropdown.addEventListener("mouseleave", function () {
	dropdownContent.classList.remove("show");
});

