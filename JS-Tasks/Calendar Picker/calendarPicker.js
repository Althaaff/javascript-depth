const dateInput = document.getElementById("dateInput");
const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");
const calendarGrid = document.querySelector(".calendar-grid");

let currentDate = new Date();
let selectedDate = null;
let viewYear = currentDate.getFullYear();
let viewMonth = currentDate.getMonth();

function renderCalendar() {
  // clear previous days
  while (calendarGrid.children.length > 7) {
    console.log("🏃");
    // keeps sun to sat in the next month from previous month //
    calendarGrid.removeChild(calendarGrid.lastChild);
  }

  // set month/year display
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  monthYear.textContent = `${monthNames[viewMonth]} ${viewYear}`;

  // calculate first day and days in month
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  console.log("first day", firstDay);
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  console.log("daysInMonth", daysInMonth);

  // add empty slots for days before first day :
  // loop runs 0 to 1 :
  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement("div");
    calendarGrid.appendChild(emptyDay);
  }

  // ddd days
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");
    dayElement.className = "day";
    dayElement.textContent = day;

    // highlight selected date :
    if (
      selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === viewMonth &&
      selectedDate.getFullYear() === viewYear
    ) {
      dayElement.classList.add("selected");
    }

    // add click event :
    dayElement.addEventListener("click", () => {
      selectedDate = new Date(viewYear, viewMonth, day);
      console.log(selectedDate);
      dateInput.value = formatDate(selectedDate);
      calendar.classList.add("hidden");
      renderCalendar();
    });

    calendarGrid.appendChild(dayElement);
  }
}

function formatDate(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

dateInput.addEventListener("click", () => {
  calendar.classList.toggle("hidden");
  if (!calendar.classList.contains("hidden")) {
    renderCalendar();
  }
});

prevMonth.addEventListener("click", () => {
  viewMonth--;
  if (viewMonth < 0) {
    viewMonth = 11;
    viewYear--;
  }
  renderCalendar();
});

nextMonth.addEventListener("click", () => {
  viewMonth++;
  if (viewMonth > 11) {
    viewMonth = 0;
    viewYear++;
  }
  renderCalendar();
});

// Close calendar when clicking outside
document.addEventListener("click", (e) => {
  console.log("clicked");
  if (!dateInput.contains(e.target) && !calendar.contains(e.target)) {
    calendar.classList.add("hidden");
  }
});

// initialize
renderCalendar();
