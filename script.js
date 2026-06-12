/* ===== State ===== */
const STORAGE_KEY = 'dima_taxi_reviews';
const MAX_REVIEWS = 100;

let reviews = loadReviews();
let currentFilter = 0;
let currentUserId = getUserId();

/* ===== DOM refs ===== */
const reviewsList = document.getElementById('reviewsList');
const reviewForm = document.getElementById('reviewForm');
const reviewName = document.getElementById('reviewName');
const reviewText = document.getElementById('reviewText');
const reviewStars = document.getElementById('reviewStars');
const nameError = document.getElementById('nameError');
const textError = document.getElementById('textError');
const filterSelect = document.getElementById('filterStars');
const clearFilterBtn = document.getElementById('clearFilterBtn');
const toast = document.getElementById('toast');
const burgerBtn = document.getElementById('burgerBtn');
const mainNav = document.getElementById('mainNav');
const stars = document.querySelectorAll('.star');

/* ===== LocalStorage helpers ===== */
function loadReviews() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    showToast('Ошибка загрузки отзывов. Пожалуйста, обновите страницу.');
    return [];
  }
}

function saveReviews() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  } catch (e) {
    showToast('Ошибка сохранения отзыва. Попробуйте ещё раз.');
  }
}

function getUserId() {
  let id = localStorage.getItem('dima_user_id');
  if (!id) {
    id = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('dima_user_id', id);
  }
  return id;
}

/* ===== Toast ===== */
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* ===== Render reviews ===== */
function renderReviews() {
  const filtered = currentFilter === 0
    ? reviews
    : currentFilter === 3
      ? reviews.filter(r => r.stars <= 3)
      : reviews.filter(r => r.stars === currentFilter);

  if (filtered.length === 0) {
    reviewsList.innerHTML = '<p class="reviews__empty">Нет отзывов, соответствующих фильтру.</p>';
    return;
  }

  const sorted = [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date));

  reviewsList.innerHTML = sorted.map(r => {
    const starsHtml = '\u2605'.repeat(r.stars) + '\u2606'.repeat(5 - r.stars);
    const isOwner = r.userId === currentUserId;
    const dateStr = new Date(r.date).toLocaleDateString('ru-RU', {
      day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    return `
      <div class="review-card" data-id="${r.id}">
        ${isOwner ? '<button class="review-card__delete" data-id="' + r.id + '" aria-label="Удалить отзыв">Удалить</button>' : ''}
        <div class="review-card__header">
          <span class="review-card__name">${escapeHtml(r.name)}</span>
          <span class="review-card__stars">${starsHtml}</span>
        </div>
        <p class="review-card__text">${escapeHtml(r.text)}</p>
        <span class="review-card__date">${dateStr}</span>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.review-card__delete').forEach(btn => {
    btn.addEventListener('click', function() {
      const id = this.dataset.id;
      deleteReview(id);
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/* ===== Delete review ===== */
function deleteReview(id) {
  reviews = reviews.filter(r => r.id !== id);
  saveReviews();
  renderReviews();
  showToast('Отзыв удалён.');
}

/* ===== Add review ===== */
function addReview(name, stars, text) {
  if (reviews.length >= MAX_REVIEWS) {
    reviews.sort((a, b) => new Date(a.date) - new Date(b.date));
    reviews.shift();
  }

  const review = {
    id: 'rev_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    userId: currentUserId,
    name: name.trim(),
    stars: stars,
    text: text.trim(),
    date: new Date().toISOString()
  };

  reviews.push(review);
  saveReviews();
  renderReviews();
  showToast('Спасибо! Ваш отзыв добавлен.');
}

/* ===== Validation ===== */
function validateForm(name, text) {
  let isValid = true;

  if (name.trim().length < 2) {
    nameError.textContent = 'Имя должно содержать минимум 2 символа.';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  if (text.trim().length < 10) {
    textError.textContent = 'Текст отзыва должен содержать минимум 10 символов.';
    isValid = false;
  } else {
    textError.textContent = '';
  }

  return isValid;
}

/* ===== Star rating ===== */
stars.forEach(star => {
  star.addEventListener('click', function() {
    const value = parseInt(this.dataset.value);
    reviewStars.value = value;
    updateStars(value);
  });

  star.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const value = parseInt(this.dataset.value);
      reviewStars.value = value;
      updateStars(value);
    }
  });
});

function updateStars(value) {
  stars.forEach(s => {
    const starValue = parseInt(s.dataset.value);
    s.classList.toggle('active', starValue <= value);
    s.setAttribute('aria-checked', starValue <= value ? 'true' : 'false');
  });
}

/* ===== Form submit ===== */
reviewForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = reviewName.value;
  const text = reviewText.value;
  const stars = parseInt(reviewStars.value);

  if (!validateForm(name, text)) {
    return;
  }

  if (stars === 0) {
    showToast('Пожалуйста, выберите оценку.');
    return;
  }

  addReview(name, stars, text);
  reviewForm.reset();
  reviewStars.value = '0';
  updateStars(0);
});

/* ===== Filter ===== */
filterSelect.addEventListener('change', function() {
  currentFilter = parseInt(this.value);
  renderReviews();
});

clearFilterBtn.addEventListener('click', function() {
  filterSelect.value = '0';
  currentFilter = 0;
  renderReviews();
});

/* ===== Burger menu ===== */
burgerBtn.addEventListener('click', function() {
  const isOpen = mainNav.classList.toggle('open');
  this.classList.toggle('active');
  this.setAttribute('aria-expanded', isOpen);
  this.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
});

/* ===== Close menu on link click ===== */
document.querySelectorAll('.header__nav-link').forEach(link => {
  link.addEventListener('click', function() {
    mainNav.classList.remove('open');
    burgerBtn.classList.remove('active');
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.setAttribute('aria-label', 'Открыть меню');
  });
});

/* ===== Initial render ===== */
renderReviews();

/* ===== Intersection Observer for section animations ===== */
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));