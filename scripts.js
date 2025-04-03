document.addEventListener("DOMContentLoaded", function () {
    const reviewsContainer = document.getElementById("reviews-container");

    // Sample static reviews (replace with API-based fetching if available)
    const reviews = [
        {
            name: "Alise Kabakoff",
            date: "2 days ago",
            stars: 5,
            text: "Amazing food and great ambiance! Will visit again.",
            avatar: "A"
        },
        {
            name: "Rahul Sharma",
            date: "1 week ago",
            stars: 4,
            text: "Great taste and service. Biryani was delicious!",
            avatar: "R"
        },
        {
            name: "Sophia Patel",
            date: "3 days ago",
            stars: 5,
            text: "One of the best places to enjoy Hyderabadi cuisine!",
            avatar: "S"
        }
    ];

    function generateStarRating(stars) {
        return "★".repeat(stars) + "☆".repeat(5 - stars);
    }

    reviews.forEach(review => {
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("col-md-4");

        reviewCard.innerHTML = `
            <div class="review-card">
                <div class="review-header">
                    <div class="review-avatar">${review.avatar}</div>
                    <div>
                        <h5>${review.name}</h5>
                        <p class="review-date">${review.date}</p>
                        <div class="stars">${generateStarRating(review.stars)}</div>
                    </div>
                </div>
                <p class="review-text">${review.text}</p>
            </div>
        `;

        reviewsContainer.appendChild(reviewCard);
    });
});
