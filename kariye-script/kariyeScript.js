(function (global) {
  const KarieScript = {
    /**
     * Displays a greeting message
     * @param {string} name - Name of the user
     */
    greet(name = "Guest") {
      const greeting = document.createElement("h1");
      greeting.textContent = `Hello, ${name}! 👋`;
      greeting.style.textAlign = "center";
      greeting.style.color = "#2c3e50";
      greeting.style.marginTop = "50px";
      greeting.style.fontFamily = "Arial, sans-serif";

      document.body.appendChild(greeting);
    }
  };

  // Expose globally
  global.KarieScript = KarieScript;
})(window);
