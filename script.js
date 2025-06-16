const ratings = document.querySelectorAll(".rating");
const submitButton = document.querySelector(".submit-button");
const thanksCard = document.getElementById("thanks-card");
const ratingCard = document.getElementById("rating-card");
const ratingContainer = document.querySelector(".rating-container");
let selectedRating = 0;
// Add click event listeners to each rating element
ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        // Set selectedRating to the clicked rating's text
        selectedRating = rating.textContent;
        // Remove 'selected' class from all ratings
        ratings.forEach((r) => r.classList.remove("selected"));
        // Add 'selected' class to the clicked rating
        rating.classList.add("selected");
    });
});

// Add click event listener to the submit button
submitButton.addEventListener("click", () => {
    // Only proceed if a rating has been selected
    if (selectedRating > 0) {
        // Hide the rating container and card
        ratingContainer.classList.add("hidden");
        ratingCard.classList.add("hidden");
        // Show the thank you card
        thanksCard.classList.remove("hidden");
        // Display the selected rating in the thank you message
        document.querySelector(
            ".thank-you-message"
        ).textContent = `You selected ${selectedRating} out of 5`;
    }
});
