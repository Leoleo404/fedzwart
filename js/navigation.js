document.getElementById('hamburger').addEventListener('click', function () {
      var navLinks = document.getElementById('nav-links');
      var closeButton = document.getElementById('close-btn');

      navLinks.classList.toggle('active'); // Toggle the 'active' class to slide in/out

      // Show the close button when the menu is open
      if (navLinks.classList.contains('active')) {
        closeButton.classList.add('active'); // Show close button
        this.style.display = 'none'; // Hide hamburger when menu is open
      } else {
        closeButton.classList.remove('active'); // Hide close button
        this.style.display = 'block'; // Show hamburger when menu is closed
      }
    });

    // Close button functionality
    document.getElementById('close-btn').addEventListener('click', function () {
      var navLinks = document.getElementById('nav-links');
      var closeButton = document.getElementById('close-btn');

      navLinks.classList.remove('active'); // Remove the 'active' class to slide out
      closeButton.classList.remove('active'); // Hide close button
      document.getElementById('hamburger').style.display = 'block'; // Show the hamburger menu again
    });