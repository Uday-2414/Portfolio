
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.add('show');
        menuToggle.style.display = 'none';
        closeMenu.style.display = 'inline-block';
    });

    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('show');
        closeMenu.style.display = 'none';
        menuToggle.style.display = 'inline-block';
    });

    // Close menu when a link is clicked
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            closeMenu.style.display = 'none';
            menuToggle.style.display = 'inline-block';
        });
    });


    // certificate display

    function openFullScreen(src) {
  const modal = document.getElementById("fullscreenModal");
  const modalImg = document.getElementById("fullscreenImage");
  modalImg.src = src;
  modal.style.display = "flex";
}

function closeFullScreen() {
  document.getElementById("fullscreenModal").style.display = "none";
}


// Resume Viewer

function closeResume(event) {
 
  if (event.target.id === "resumeViewer" || event.target.classList.contains("close-btn")) {
    document.getElementById("resumeViewer").classList.remove("show");
  }
}