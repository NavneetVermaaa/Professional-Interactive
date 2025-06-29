function openModal() {
    document.getElementById('profileModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('profileModal').style.display = 'none';
}

document.getElementById('searchInput').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const name = card.getAttribute('data-name');
        if (name.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});



function openModal(id) {
    document.getElementById('profileModal-' + id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById('profileModal-' + id).style.display = 'none';
}





// ANIMATION 



  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => {
    observer.observe(card);
  });

