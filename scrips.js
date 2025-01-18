// script.js

// Get the modal
var modal = document.getElementById("image-modal");

// Get the image and insert it inside the modal
var images = document.querySelectorAll(".design-products.design-item img");
var modalImage = document.getElementById("modal-image");

// When an image is clicked, open the modal and display the clicked image
images.forEach(function(image) {
  image.addEventListener("click", function() {
    modal.style.display = "block";
    modalImage.src = this.src; // Set modal image source to clicked image
  });
});

// When the user clicks on <span> (close button), close the modal
var closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});
