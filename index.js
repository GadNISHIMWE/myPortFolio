// SMOOTH SCROLL
document.querySelectorAll("a").forEach(link => {
  link.onclick = e => {
    if (link.hash) {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({
        behavior: "smooth"
      });
    }
  };
});

// DARK MODE
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const icon = toggle.querySelector("i");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
    }
  });
});

// ACTIVE NAV BUTTON ON SCROLL
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navButtons = document.querySelectorAll(".nav-btn");

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navButtons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("href") === `#${current}`) {
      btn.classList.add("active");
    }
  });
});
// FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          alert("Message sent!");
          contactForm.reset();
        } else {
          return response.json().then(data => {
            throw new Error(data.error || "Unable to send message.");
          });
        }
      })
      .catch(error => {
        alert("Failed to send message. Please try again later.");
        console.error(error);
      });
  });
}

// About
// Simple interaction for side icons
const icons = document.querySelectorAll(".side-icons .icon");

icons.forEach(icon => {
  icon.addEventListener("click", () => {
    icons.forEach(i => i.classList.remove("active"));
    icon.classList.add("active");
  });
});

// portfolio

const filterButtons = document.querySelectorAll(".portfolio-filters button");
const cards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    cards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});

// Skills

// Animate skill circles
const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {
  let percent = circle.getAttribute("data-percent");
  let current = 0;

  let interval = setInterval(() => {
    if (current >= percent) {
      clearInterval(interval);
    } else {
      current++;
      circle.style.background = `conic-gradient(#f7b500 ${current}%, #222 ${current}%)`;
      circle.querySelector("span").textContent = current + "%";
    }
  }, 20);
});

// Experience

// Fade-in animation on scroll
const timelineItems = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {
  timelineItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }
  });
});

// Initial state
timelineItems.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = "translateY(50px)";
  item.style.transition = "0.6s ease";
});

// Testimonial

let index = 0;
const testimonials = document.querySelectorAll(".testimonial");

// Show testimonial
function showTestimonial(i) {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[i].classList.add("active");
}

// Next
function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}

// Previous
function prevTestimonial() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
}

// Auto slide
setInterval(() => {
  nextTestimonial();
}, 5000);