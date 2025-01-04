let eventCount = 0;

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Event Form Handling
document.getElementById("eventForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Collect input values
  const eventName = document.getElementById('eventName').value;
  const eventDate = document.getElementById('eventDate').value;
  const eventTime = document.getElementById('eventTime').value;
  const eventLocation = document.getElementById('eventLocation').value;
  const eventCategory = document.getElementById('eventCategory').value;

  // Create event item
  const eventItem = document.createElement('li');
  eventItem.innerHTML = `
    <div>
      <strong>${eventName}</strong><br>
      ${eventDate} at ${eventTime}<br>
      Location: ${eventLocation}<br>
      <em>Category: ${eventCategory}</em>
    </div>
    <button class="remove-btn">Remove</button>
  `;

  // Add event to the list
  document.getElementById("eventList").appendChild(eventItem);

  // Add remove functionality
  eventItem.querySelector(".remove-btn").addEventListener("click", function() {
    eventItem.remove();
    updateEventCount(-1);
  });

  // Update event count
  updateEventCount(1);

  // Reset form
  event.target.reset();
});

// Search Functionality
document.getElementById("searchBar").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  document.querySelectorAll("#eventList li").forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(query) ? "" : "none";
  });
});

// Update Event Counter
function updateEventCount(change) {
  eventCount += change;
  document.getElementById("eventCounter").textContent = `Total Events: ${eventCount}`;
}

  
  