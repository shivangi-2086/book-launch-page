// Search Bar Functionality
const searchInput = document.getElementById("searchInput");
const bookCards = document.querySelectorAll(".book-card");

searchInput.addEventListener("keyup", function () {
  const value = searchInput.value.toLowerCase();
  bookCards.forEach(card => {
    const title = card.querySelector("h4").textContent.toLowerCase();
    const author = card.querySelector("p").textContent.toLowerCase();
    if (title.includes(value) || author.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Add to My Tracker & Move to TBR Section
const addButtons = document.querySelectorAll(".book-card button");
const tbrList = document.getElementById("tbrList");

addButtons.forEach(button => {
  button.addEventListener("click", () => {
    const bookCard = button.closest(".book-card");
    const clonedCard = bookCard.cloneNode(true);

    // Remove the old button
    clonedCard.querySelector("button").remove();

    // Create 'Mark as Finished' button
    const finishedBtn = document.createElement("button");
    finishedBtn.textContent = "✔ Mark as Finished";
    finishedBtn.className = "finish-btn";

    finishedBtn.addEventListener("click", () => {
      moveToFinished(clonedCard);
    });

    clonedCard.appendChild(finishedBtn);
    tbrList.appendChild(clonedCard);

    // Feedback for original button
    button.textContent = "✅ Added!";
    button.disabled = true;
    button.style.backgroundColor = "#4caf50";
  });
});

// Move Book to Finished Section
const finishedList = document.getElementById("finishedList");

function moveToFinished(bookCard) {
  bookCard.querySelector(".finish-btn").remove();
  finishedList.appendChild(bookCard);
}
