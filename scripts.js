function switchLanguage() {

    const switchElement = document.getElementById('languageSwitch');
    

    if (switchElement.checked) {
      window.location.href = 'espanol.html'; 
    } else {
      
      window.location.href = 'index.html'; 
    }
  }
  

  document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                if (filter === "all" || category === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
