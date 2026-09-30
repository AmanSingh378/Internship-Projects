/* MOBILE NAVIGATION */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const navLinkItems = document.querySelectorAll(".nav-link");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("open");
  navLinks.classList.toggle("open");

  document.body.classList.toggle("menu-open");
});


/* Close mobile menu after clicking a link */

navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.classList.remove("open");
    navLinks.classList.remove("open");

    document.body.classList.remove("menu-open");
  });
});


/* NAVBAR SCROLL EFFECT */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


/* ACTIVE NAVIGATION LINK */

const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {

  const scrollPosition = window.scrollY + 150;

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {

      navLinkItems.forEach((link) => {
        link.classList.remove("active");
      });

      const activeLink = document.querySelector(
        `.nav-link[href="#${sectionId}"]`
      );

      if (activeLink) {
        activeLink.classList.add("active");
      }

    }

  });

}

window.addEventListener("scroll", updateActiveLink);


/* CONTACT FORM VALIDATION */

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

const formSuccess = document.getElementById("formSuccess");


/* Email validation */

function isValidEmail(email) {

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);

}


/* Clear errors */

function clearErrors() {

  const formGroups = document.querySelectorAll(".form-group");

  formGroups.forEach((group) => {
    group.classList.remove("error");
  });

  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";
}


/* Form submit */

contactForm.addEventListener("submit", (event) => {

  event.preventDefault();

  clearErrors();

  let isValid = true;


  /* Name */

  if (nameInput.value.trim() === "") {

    nameInput
      .closest(".form-group")
      .classList.add("error");

    nameError.textContent =
      "Please enter your name.";

    isValid = false;

  } else if (nameInput.value.trim().length < 2) {

    nameInput
      .closest(".form-group")
      .classList.add("error");

    nameError.textContent =
      "Name must contain at least 2 characters.";

    isValid = false;

  }


  /* Email */

  if (emailInput.value.trim() === "") {

    emailInput
      .closest(".form-group")
      .classList.add("error");

    emailError.textContent =
      "Please enter your email.";

    isValid = false;

  } else if (!isValidEmail(emailInput.value.trim())) {

    emailInput
      .closest(".form-group")
      .classList.add("error");

    emailError.textContent =
      "Please enter a valid email address.";

    isValid = false;

  }


  /* Subject */

  if (subjectInput.value.trim() === "") {

    subjectInput
      .closest(".form-group")
      .classList.add("error");

    subjectError.textContent =
      "Please enter a subject.";

    isValid = false;

  }


  /* Message */

  if (messageInput.value.trim() === "") {

    messageInput
      .closest(".form-group")
      .classList.add("error");

    messageError.textContent =
      "Please enter your message.";

    isValid = false;

  } else if (messageInput.value.trim().length < 10) {

    messageInput
      .closest(".form-group")
      .classList.add("error");

    messageError.textContent =
      "Message must contain at least 10 characters.";

    isValid = false;

  }


  /* Success */

  if (isValid) {

    formSuccess.classList.add("show");

    contactForm.reset();

    setTimeout(() => {
      formSuccess.classList.remove("show");
    }, 5000);

  }

});


/* REMOVE ERROR WHILE TYPING */

const formInputs = [
  nameInput,
  emailInput,
  subjectInput,
  messageInput
];

formInputs.forEach((input) => {

  input.addEventListener("input", () => {

    input
      .closest(".form-group")
      .classList.remove("error");

  });

});


/* SMOOTH SCROLL FOR ANCHOR LINKS */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

  anchor.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (targetId === "#") {
      event.preventDefault();
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {

      event.preventDefault();

      const navbarHeight =
        navbar.offsetHeight;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    }

  });

});


/* SIMPLE SCROLL REVEAL */

const revealElements = document.querySelectorAll(
  ".service-card, .feature-card, .feature-large, .testimonial-card, .pricing-card"
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach((element) => {

  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition =
    "opacity 0.6s ease, transform 0.6s ease";

  revealObserver.observe(element);

});


/* CURRENT YEAR */

const yearElement = document.querySelector(".footer-bottom p");

if (yearElement) {

  const currentYear = new Date().getFullYear();

  yearElement.textContent =
    `© ${currentYear} Flowly. All rights reserved.`;

}
