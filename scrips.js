// ==========================================
// DATA STRUCTURE - Memories/Blog Posts
// ==========================================
const memories = [
  {
    id: 1,
    title: "Ngày khai giảng năm học 2013-2014",
    date: "2013-09-05",
    category: "events",
    tags: ["khai-giảng", "2013", "năm-đầu"],
    image: "assets/view4.png",
    description: "Ngày đầu tiên bước chân vào mái trường THPT Trần Văn Dư, những cảm xúc bỡ ngỡ và háo hức...",
    content: "Ngày 5 tháng 9 năm 2013, chúng ta bước vào cổng trường với tâm trạng háo hức và lo lắng. Đó là ngày đầu tiên của hành trình 3 năm đáng nhớ."
  },
  {
    id: 2,
    title: "Áo lớp - Kỷ niệm thanh xuân",
    date: "2014-03-15",
    category: "classroom",
    tags: ["áo-lớp", "lớp-học", "kỷ-niệm"],
    image: "assets/view1.png",
    description: "Chiếc áo lớp không chỉ là trang phục, mà là biểu tượng của tình bạn và những kỷ niệm chung...",
    content: "Mỗi lần nhìn thấy chiếc áo lớp, chúng ta lại nhớ về những ngày tháng học trò tươi đẹp."
  },
  {
    id: 3,
    title: "Tiết thể dục cuối cùng",
    date: "2016-04-20",
    category: "classroom",
    tags: ["thể-dục", "hoạt-động", "2016"],
    image: "assets/view2.png",
    description: "Tiết học thể dục cuối cùng, nơi chúng ta cùng nhau vui đùa và tạo nên những kỷ niệm đẹp...",
    content: "Đồng phục thể dục, tiếng cười vang, và những bước chân cùng nhau trên sân trường."
  },
  {
    id: 4,
    title: "Chuyến đi thực tế",
    date: "2015-11-10",
    category: "trips",
    tags: ["chuyến-đi", "thực-tế", "2015"],
    image: "assets/view6.png",
    description: "Chuyến đi đến tượng đài Mẹ Thứ - Tượng Mẹ Việt Nam Anh Hùng, một trải nghiệm đáng nhớ...",
    content: "Chuyến đi không chỉ là học tập mà còn là dịp để chúng ta gắn kết với nhau hơn."
  },
  {
    id: 5,
    title: "Chia tay thầy cô thực tập",
    date: "2015-06-15",
    category: "events",
    tags: ["thầy-cô", "chia-tay", "cảm-động"],
    image: "assets/view5.png",
    description: "Những giọt nước mắt trong ngày chia tay các thầy cô thực tập đã gắn bó với chúng ta...",
    content: "Cảm ơn thầy cô đã mang đến những bài học quý giá, dù thời gian ngắn ngủi nhưng ấm áp và đầy ý nghĩa."
  },
  {
    id: 6,
    title: "Nữ sinh TVD - Sức mạnh và tự tin",
    date: "2015-03-08",
    category: "classroom",
    tags: ["nữ-sinh", "ngày-8-3", "lớp-học"],
    image: "assets/view7.png",
    description: "Những nữ sinh TVD với sức mạnh, sự tự tin và trái tim đầy yêu thương...",
    content: "Ngày 8/3, chúng ta tôn vinh những người phụ nữ tuyệt vời trong lớp."
  },
  {
    id: 7,
    title: "Lễ tốt nghiệp 2016",
    date: "2016-05-25",
    category: "graduation",
    tags: ["tốt-nghiệp", "2016", "chia-tay"],
    image: "assets/past.png",
    description: "Ngày chúng ta khoác lên mình chiếc áo cử nhân, với niềm tự hào và chút xao xuyến...",
    content: "Lễ tốt nghiệp đánh dấu sự kết thúc của một chặng đường và mở ra những hành trình mới."
  },
  {
    id: 8,
    title: "Kỷ niệm trước cổng trường",
    date: "2016-05-20",
    category: "graduation",
    tags: ["cổng-trường", "kỷ-niệm", "chia-tay"],
    image: "assets/view3.png",
    description: "Trước cổng trường, nơi chúng ta hứa với nhau những ước mơ và hy vọng...",
    content: "Mỗi lần đi qua cổng trường, chúng ta lại nhớ về những lời hứa và ước mơ của tuổi trẻ."
  }
];

// Timeline data
const timelineData = [
  {
    date: "09/2013",
    title: "Khai giảng năm học mới",
    description: "Bước vào mái trường THPT Trần Văn Dư với những ước mơ và khát vọng"
  },
  {
    date: "03/2014",
    title: "May áo lớp đầu tiên",
    description: "Chiếc áo lớp đầu tiên, gắn kết tình bạn và tạo nên bản sắc riêng"
  },
  {
    date: "11/2014",
    title: "Hội trại cuối năm",
    description: "Những đêm lửa trại, những bài hát và câu chuyện không bao giờ quên"
  },
  {
    date: "06/2015",
    title: "Chia tay thầy cô thực tập",
    description: "Những giọt nước mắt và lời cảm ơn chân thành đến các thầy cô"
  },
  {
    date: "11/2015",
    title: "Chuyến đi thực tế",
    description: "Khám phá lịch sử và văn hóa, tạo thêm nhiều kỷ niệm đẹp"
  },
  {
    date: "03/2016",
    title: "Lớp 12 - Năm cuối cùng",
    description: "Những ngày tháng căng thẳng nhưng đầy ý nghĩa của năm học cuối"
  },
  {
    date: "05/2016",
    title: "Lễ tốt nghiệp",
    description: "Khoảnh khắc xúc động nhất, chia tay mái trường thân yêu"
  },
  {
    date: "02/2026",
    title: "Họp mặt 10 năm",
    description: "Gặp lại nhau sau 10 năm, ôn lại kỷ niệm và tạo thêm kỷ niệm mới"
  }
];

// ==========================================
// GLOBAL VARIABLES
// ==========================================
let currentFilter = 'all';
let currentLightboxIndex = 0;
let galleryImages = [];

// ==========================================
// DARK MODE FUNCTIONALITY
// ==========================================
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
  body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
});

// ==========================================
// BLOG/MEMORIES SECTION
// ==========================================
function renderBlogPosts(posts) {
  const blogGrid = document.getElementById('blogGrid');
  const noResults = document.getElementById('noResults');

  if (posts.length === 0) {
    blogGrid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';

  blogGrid.innerHTML = posts.map(post => `
    <article class="blog-card" data-id="${post.id}">
      <img src="${post.image}" alt="${post.title}" class="blog-card-image" loading="lazy" />
      <div class="blog-card-content">
        <div class="blog-card-date">
          <i class="fas fa-calendar-alt"></i>
          ${formatDate(post.date)}
        </div>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-description">${post.description}</p>
        <div class="blog-card-tags">
          ${post.tags.map(tag => `<span class="blog-tag">#${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  filterAndRenderPosts(searchTerm, currentFilter);
});

// ==========================================
// FILTER FUNCTIONALITY
// ==========================================
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active state
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Get category and filter
    currentFilter = btn.dataset.category;
    const searchTerm = searchInput.value.toLowerCase();
    filterAndRenderPosts(searchTerm, currentFilter);
  });
});

function filterAndRenderPosts(searchTerm, category) {
  let filtered = memories;

  // Filter by category
  if (category !== 'all') {
    filtered = filtered.filter(post => post.category === category);
  }

  // Filter by search term
  if (searchTerm) {
    filtered = filtered.filter(post =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.description.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.includes(searchTerm))
    );
  }

  renderBlogPosts(filtered);
}

// ==========================================
// TIMELINE SECTION
// ==========================================
function renderTimeline() {
  const timelineContainer = document.querySelector('.timeline-container');

  timelineContainer.innerHTML = timelineData.map(item => `
    <div class="timeline-item">
      <div class="timeline-content">
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-description">${item.description}</p>
      </div>
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-marker"></div>
    </div>
  `).join('');
}

// ==========================================
// LIGHTBOX FUNCTIONALITY
// ==========================================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

function initLightbox() {
  // Get all gallery images
  galleryImages = Array.from(document.querySelectorAll('.gallery-image'));

  // Add click event to each image
  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      openLightbox(index);
    });
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const img = galleryImages[index];

  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
  lightboxCaption.textContent = img.alt;

  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function showPrevImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
  openLightbox(currentLightboxIndex);
}

function showNextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
  openLightbox(currentLightboxIndex);
}

// Lightbox event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevImage);
lightboxNext.addEventListener('click', showNextImage);

// Close on background click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  switch (e.key) {
    case 'Escape':
      closeLightbox();
      break;
    case 'ArrowLeft':
      showPrevImage();
      break;
    case 'ArrowRight':
      showNextImage();
      break;
  }
});

// ==========================================
// BACK TO TOP BUTTON
// ==========================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }

  // Add scrolled class to header
  const header = document.querySelector('header');
  if (window.pageYOffset > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ==========================================
// SMOOTH SCROLL FOR NAVIGATION
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ==========================================
// LAZY LOADING IMAGES
// ==========================================
function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.src; // Trigger loading
          img.classList.add('fade-in');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.product-item, .blog-card, .timeline-item, .design-item');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1
    });

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });
  }
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Render initial content
  renderBlogPosts(memories);
  renderTimeline();

  // Initialize features
  initLightbox();
  initLazyLoading();
  initScrollAnimations();

  // Add loading animation
  document.body.classList.add('loaded');

  console.log('🎓 Website TVD Memories đã được tải thành công!');
  console.log(`📚 Tổng số kỷ niệm: ${memories.length}`);
  console.log(`⏰ Timeline events: ${timelineData.length}`);
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
// Debounce function for search
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to search
const debouncedSearch = debounce((searchTerm) => {
  filterAndRenderPosts(searchTerm, currentFilter);
}, 300);

searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  debouncedSearch(searchTerm);
});
