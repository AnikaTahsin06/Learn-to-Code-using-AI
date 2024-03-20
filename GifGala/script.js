document.addEventListener("DOMContentLoaded", function () {
  const rsvpForm = document.getElementById("rsvpForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  // Event listener for form submission
  rsvpForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the value of the attendance field
    const attendanceField = document.getElementById("attendance");
    const attendance = attendanceField.value;

    // Check if the user is attending
    if (attendance === "yes") {
      // If attending, display a party emoji and a positive message
      confirmationMessage.innerHTML =
        "🎉 Thank you for RSVPing to the GIF Gala! We can't wait to see you there.";
      confirmationMessage.style.display = "block";

      rsvpForm.reset();
    } else {
      // If attending, display a party emoji and a positive message
      confirmationMessage.innerHTML = "😞 We will miss you at the GIF Gala";
    }
    confirmationMessage.style.display = "block";
    rsvpForm.reset();
  });
});
