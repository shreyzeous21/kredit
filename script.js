const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque alias nisi enim corrupti aliquid veniam eaque, voluptatum beatae aliquam ea sit nobis cupiditate natus dignissimos ducimus hic voluptate inventore. Facilis!",
    author: "John Doe",
    img: "/Layer-21.png",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque alias nisi enim corrupti aliquid veniam eaque, voluptatum beatae aliquam",
    author: "Jane Smith",
    img: "/Layer-21.png",
  },
  {
    quote: "Highly recommend to everyone!",
    author: "Michael Johnson",
    img: "/Layer-21.png",
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

const toggleButton = document.querySelector('.toggle-button');

// Add event listener for swipe functionality
function handleSwipe(event) {
  // Your swipe handling logic here
}

document.addEventListener('touchstart', handleSwipe);



function selectButton(selectedButton) {
  const buttons = document.querySelectorAll('.radio-button');

  buttons.forEach(button => {
    button.classList.remove('bg-[#014260]', 'text-white', 'border-[#014260]');
    button.classList.add('bg-transparent', 'text-gray-800', 'border-gray-300');
  });

  selectedButton.classList.remove('bg-transparent', 'text-gray-800', 'border-gray-300');
  selectedButton.classList.add('bg-[#014260]', 'text-white', 'border-[#014260]');
}