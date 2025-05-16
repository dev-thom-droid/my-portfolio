document.addEventListener("DOMContentLoaded", () => {
  // Greeting based on time of day
  const greetingElement = document.createElement("div");
  greetingElement.className = "greeting";

  const hour = new Date().getHours();
  let greetingText = "";

  if (hour >= 5 && hour < 12) {
    greetingText = "Good Morning 🌅";
  } else if (hour >= 12 && hour < 18) {
    greetingText = "Good Afternoon ☀️";
  } else if (hour >= 18 && hour < 22) {
    greetingText = "Good Evening 🌇";
  } else {
    greetingText = "Good Night 🌙";
  }

  greetingElement.textContent = greetingText;
  document.body.prepend(greetingElement);

  // Theme toggle functionality
  const themeToggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";

  if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }

  // Contact form validation
  const contactForm = document.forms["contactForm"];
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const name = contactForm["name"].value.trim();
      const email = contactForm["email"].value.trim();
      const phone = contactForm["phone"].value.trim();
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      const phonePattern = /^[0-9+\-\s]{7,15}$/;

      if (!name || !email || !phone) {
        // Use confirm instead of alert for better UI option or keep alert
        alert("Please fill in all required fields.");
        e.preventDefault();
        return false;
      }

      if (!email.match(emailPattern)) {
        alert("Invalid email address.");
        e.preventDefault();
        return false;
      }

      if (!phone.match(phonePattern)) {
        alert("Invalid phone number.");
        e.preventDefault();
        return false;
      }
    });
  }
});
