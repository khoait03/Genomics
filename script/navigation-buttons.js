// Section Navigation Script
(function () {
     // Định nghĩa các section cần navigate
     const sections = [
          { id: 'hero', selector: '.phusa-hero-section' },
          { id: 'danhmuc', selector: '.phusa-danhmuc-container-bg' },
          { id: 'nghiencuu', selector: '.phusa-nghien-cuu-container' },
          { id: 'sanpham', selector: '.phusa-san-pham-container-bg' },
          { id: 'footerimg', selector: '.footer-img' },
          { id: 'footer', selector: '.phusa-newsletter-section' },
     ];

     let currentSectionIndex = 0;

     // Khởi tạo navigation buttons
     function initNavigationButtons() {
          const scrollNavDiv = document.createElement('div');
          scrollNavDiv.className = 'phusa-scroll-nav';
          scrollNavDiv.innerHTML = `
            <button class="phusa-scroll-nav-btn" id="phusaScrollUp" aria-label="Cuộn lên">
                <svg viewBox="0 0 24 24">
                    <path d="M18 15l-6-6-6 6"/>
                </svg>
            </button>
            <button class="phusa-scroll-nav-btn" id="phusaScrollDown" aria-label="Cuộn xuống">
                <svg viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </button>
        `;
          document.body.appendChild(scrollNavDiv);

          // Thêm event listeners
          document.getElementById('phusaScrollUp').addEventListener('click', scrollToPreviousSection);
          document.getElementById('phusaScrollDown').addEventListener('click', scrollToNextSection);

          // Update button states
          updateButtonStates();
     }

     // Cuộn đến section tiếp theo
     function scrollToNextSection() {
          if (currentSectionIndex < sections.length - 1) {
               currentSectionIndex++;
               scrollToSection(currentSectionIndex);
          }
     }

     // Cuộn đến section trước đó
     function scrollToPreviousSection() {
          if (currentSectionIndex > 0) {
               currentSectionIndex--;
               scrollToSection(currentSectionIndex);
          }
     }

     // Cuộn đến section cụ thể
     function scrollToSection(index) {
          const section = document.querySelector(sections[index].selector);
          if (section) {
               section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
               });
               updateButtonStates();
          }
     }

     // Cập nhật trạng thái của buttons
     function updateButtonStates() {
          const upBtn = document.getElementById('phusaScrollUp');
          const downBtn = document.getElementById('phusaScrollDown');

          if (upBtn && downBtn) {
               // Disable nút up nếu đang ở section đầu
               if (currentSectionIndex === 0) {
                    upBtn.classList.add('disabled');
               } else {
                    upBtn.classList.remove('disabled');
               }

               // Disable nút down nếu đang ở section cuối
               if (currentSectionIndex === sections.length - 1) {
                    downBtn.classList.add('disabled');
               } else {
                    downBtn.classList.remove('disabled');
               }
          }
     }

     // Theo dõi scroll để cập nhật current section
     function updateCurrentSection() {
          const scrollPosition = window.scrollY + window.innerHeight / 2;

          sections.forEach((section, index) => {
               const element = document.querySelector(section.selector);
               if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                         currentSectionIndex = index;
                    }
               }
          });

          updateButtonStates();
     }

     // Xử lý scroll to top button
     function initScrollTopButton() {
          const scrollTopBtn = document.querySelector('.phusa-scroll-top');

          if (scrollTopBtn) {
               window.addEventListener('scroll', function () {
                    if (window.scrollY > 300) {
                         scrollTopBtn.classList.add('show');
                    } else {
                         scrollTopBtn.classList.remove('show');
                    }
               });
          }
     }

     // Khởi tạo khi DOM đã sẵn sàng
     if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', function () {
               initNavigationButtons();
               initScrollTopButton();

               // Theo dõi scroll
               let scrollTimeout;
               window.addEventListener('scroll', function () {
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(updateCurrentSection, 100);
               });
          });
     } else {
          initNavigationButtons();
          initScrollTopButton();

          // Theo dõi scroll
          let scrollTimeout;
          window.addEventListener('scroll', function () {
               clearTimeout(scrollTimeout);
               scrollTimeout = setTimeout(updateCurrentSection, 100);
          });
     }
})();
