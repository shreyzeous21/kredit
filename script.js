const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque alias nisi enim corrupti aliquid veniam eaque, voluptatum beatae aliquam ea sit nobis cupiditate natus dignissimos ducimus hic voluptate inventore. Facilis!",
    author: "John Doe",
    img: "https://example.com/image1.jpg",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque alias nisi enim corrupti aliquid veniam eaque, voluptatum beatae aliquam",
    author: "Jane Smith",
    img: "https://example.com/image2.jpg",
  },
  {
    quote: "Highly recommend to everyone!",
    author: "Michael Johnson",
    img: "https://example.com/image3.jpg",
  },
];

let currentIndex = 0;

function updateTestimonial() {
  const testimonialQuote = document.getElementById("testimonial-quote");
  const testimonialAuthor = document.getElementById("testimonial-author");
  const testimonialImg = document.getElementById("testimonial-img");
  const testimonialCard = document.getElementById("testimonial-card");

  // Fade out effect
  testimonialCard.classList.add("opacity-0");

  setTimeout(() => {
    testimonialQuote.innerText = testimonials[currentIndex].quote;
    testimonialAuthor.innerText = testimonials[currentIndex].author;
    testimonialImg.src = testimonials[currentIndex].img;

    // Fade in effect
    testimonialCard.classList.remove("opacity-0");
  }, 500); // Match this with the duration of the CSS transition
}

// Update testimonial on page load
updateTestimonial();

// Handle button clicks
document.getElementById("prev-button").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
});

document.getElementById("next-button").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial();
});

function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}
