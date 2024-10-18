// testi start
const testimonials = [
  {
    quote:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    name: "Michael Gough",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
  {
    quote:
      "This platform is a game changer. The components are incredibly easy to use and adapt, saving us so much development time!",
    name: "Sarah Johnson",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sarah-johnson.png",
  },
  {
    quote:
      "Highly recommend! Flowbite has streamlined our design process with its comprehensive library of components.",
    name: "James Smith",
    img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/james-smith.png",
  },
];
let currentIndex = 0;
function updateTestimonial() {
  const testimonial = testimonials[currentIndex];
  document.getElementById("testimonial-quote").textContent = testimonial.quote;
  document.querySelector("figcaption img").src = testimonial.img;
  document.querySelector("figcaption .pr-3").textContent = testimonial.name;
  // Update index for the next testimonial
  currentIndex = (currentIndex + 1) % testimonials.length;
}
// Initial update
updateTestimonial();
// Set an interval to update the testimonial every 2 seconds
setInterval(updateTestimonial, 4000);
//   testi end

