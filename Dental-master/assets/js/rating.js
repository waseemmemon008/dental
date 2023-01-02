const ratingInputs = document.querySelectorAll('.rating input');
let currentRating;

ratingInputs.forEach(input => {
  input.addEventListener('change', function() {
    currentRating = this.value;
    console.log(`Selected rating: ${currentRating}`);
  });
});