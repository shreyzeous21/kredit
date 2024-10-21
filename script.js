const testimonials = [
  {
    quote: "I recently used this website for a purchase and I was extremely satisfied with the ease of use and the variety of options available. The checkout process was seamless and the delivery was prompt.",
    author: "Jane Doe",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
  {
    quote: "The customer service was excellent! I had a question about my order, and they responded quickly and helpfully. Highly recommend!",
    author: "John Smith",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/john-smith.png",
  },
  {
    quote: "A fantastic shopping experience! The products are top-notch and delivery was faster than expected. Will definitely shop here again!",
    author: "Alice Johnson",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/alice-johnson.png",
  },
];

let currentIndex = 0;

function updateTestimonial() {
  const testimonialQuote = document.getElementById("testimonial-quote");
  const testimonialAuthor = document.getElementById("testimonial-author");
  const testimonialImg = document.getElementById("testimonial-img");

  testimonialQuote.textContent = testimonials[currentIndex].quote;
  testimonialAuthor.textContent = testimonials[currentIndex].author;
  testimonialImg.src = testimonials[currentIndex].img;
}

document.getElementById("next-button").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length; // Loop back to start
  updateTestimonial();
});

document.getElementById("prev-button").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; // Loop to end
  updateTestimonial();
});

// Initialize with the first testimonial
updateTestimonial();
//   testi end



function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden');
}