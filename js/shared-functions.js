// ========================================
// FONCTIONS PARTAGÉES ENTRE LES PAGES
// ========================================

// Fonction pour gérer les votes
function vote(button, direction) {
  const scoreElement = button.parentElement.querySelector('.deal-score');
  const currentScore = parseInt(scoreElement.textContent.match(/\d+/)[0]);
  const newScore = currentScore + direction;
  scoreElement.textContent = `${newScore}°`;
  // Effet visuel temporaire
  button.style.transform = 'scale(1.2)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 150);
}

// Fonction pour gérer les actions des boutons (commentaires, partager, enregistrer)
function handleActionButton(button, action) {
  // Animation visuelle
  button.style.transform = 'scale(1.1)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 150);
}

// Fonction pour copier un code promo
function copyPromoCode(event, code) {
  event.stopPropagation();
  navigator.clipboard.writeText(code).then(() => {
    const copyBtn = event.target;
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copié!';
    copyBtn.classList.add('copied');
    copyBtn.setAttribute('aria-label', 'Code promo copié dans le presse-papiers');
    setTimeout(() => {
      copyBtn.textContent = originalText;
      copyBtn.classList.remove('copied');
      copyBtn.setAttribute('aria-label', `Copier le code promo ${code}`);
    }, 2000);
  });
}

// Fonction toggle footer
function toggleFooter() {
  const footer = document.getElementById('footer');
  const footerContent = document.getElementById('footer-content');
  const arrow = document.querySelector('.arrow-up');
  
  footer.classList.toggle('expanded');
  
  if (footer.classList.contains('expanded')) {
    arrow.textContent = '↓';
    arrow.style.transform = 'rotate(180deg)';
  } else {
    arrow.textContent = '↑';
    arrow.style.transform = 'rotate(0deg)';
  }
}