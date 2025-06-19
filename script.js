// ===== DOM ELEMENT SELECTION =====
// We use const for elements that won't be reassigned (modern ES6+ best practice)

// Select all rating buttons using querySelectorAll (returns a NodeList)
const ratings = document.querySelectorAll(".rating");

// Select the submit button using querySelector (returns single element)
const submitButton = document.querySelector(".submit-button");

// Select the thank you card by its unique ID
const thanksCard = document.getElementById("thanks-card");

// Select the main rating card by its unique ID
const ratingCard = document.getElementById("rating-card");

// Select the container holding all rating buttons
const ratingContainer = document.querySelector(".rating-container");

// ===== STATE MANAGEMENT =====
// We use let because this variable will be updated when user selects a rating
let selectedRating = 0;

// ===== RATING SELECTION FUNCTIONALITY =====
// We use forEach to add event listeners to each rating button
// This is more efficient than adding individual listeners

ratings.forEach((rating) => {
    // Add click event listener to each rating button
    // We use arrow function syntax (ES6+) for cleaner code
    rating.addEventListener("click", () => {
        
        // Store the selected rating value
        // textContent gets the text inside the button (1, 2, 3, 4, or 5)
        selectedRating = rating.textContent;
        
        // Remove 'selected' class from all rating buttons
        // This ensures only one rating appears selected at a time
        ratings.forEach((r) => r.classList.remove("selected"));
        
        // Add 'selected' class to the currently clicked rating
        // This provides visual feedback to show which rating is active
        rating.classList.add("selected");
    });
});

// ===== FORM SUBMISSION FUNCTIONALITY =====
// Handle the submit button click event
submitButton.addEventListener("click", () => {
    
    // Validation: Only proceed if user has selected a rating
    // We check if selectedRating is greater than 0 (truthy check)
    if (selectedRating > 0) {
        
        // Hide the rating interface elements
        // We add 'hidden' class to make elements invisible
        ratingContainer.classList.add("hidden");
        ratingCard.classList.add("hidden");
        
        // Show the thank you card
        // We remove 'hidden' class to make the thank you state visible
        thanksCard.classList.remove("hidden");
        
        // Update the thank you message with selected rating
        // We use template literal syntax (`${variable}`) for string interpolation
        document.querySelector(".thank-you-message").textContent = 
            `You selected ${selectedRating} out of 5`;
        
        // At this point, the user sees the thank you screen with their rating
    }
    
    // Note: If no rating is selected, nothing happens (implicit validation)
});