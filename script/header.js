
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const headerWrapper = document.querySelector('.phusa-header-wrapper');
            if (window.scrollY > 50) {
                headerWrapper.classList.add('phusa-scrolled');
            } else {
                headerWrapper.classList.remove('phusa-scrolled');
            }
        });

        // Desktop Language toggle switch
        const langToggle = document.getElementById('phusaLangToggle');
        const sliderText = document.getElementById('phusaSliderText');
        let isEnglish = false;

        if (langToggle) {
            langToggle.addEventListener('click', () => {
                isEnglish = !isEnglish;

                if (isEnglish) {
                    langToggle.classList.add('phusa-en-active');
                    sliderText.textContent = 'En';
                } else {
                    langToggle.classList.remove('phusa-en-active');
                    sliderText.textContent = 'Vi';
                }

                console.log('Ngôn ngữ hiện tại:', isEnglish ? 'English' : 'Vietnamese');
            });
        }

        // Mobile Language toggle switch
        const mobileLangToggle = document.getElementById('phusaMobileLangToggle');
        const mobileSliderText = document.getElementById('phusaMobileSliderText');
        let isMobileEnglish = false;

        if (mobileLangToggle) {
            mobileLangToggle.addEventListener('click', () => {
                isMobileEnglish = !isMobileEnglish;

                if (isMobileEnglish) {
                    mobileLangToggle.classList.add('phusa-en-active');
                    mobileSliderText.textContent = 'En';
                } else {
                    mobileLangToggle.classList.remove('phusa-en-active');
                    mobileSliderText.textContent = 'Vi';
                }

                console.log('Ngôn ngữ mobile:', isMobileEnglish ? 'English' : 'Vietnamese');
            });
        }

        // Mobile Menu Toggle
        const mobileToggle = document.getElementById('phusaMobileToggle');
        const mobileSidebar = document.getElementById('phusaMobileSidebar');
        const mobileOverlay = document.getElementById('phusaMobileOverlay');

        function openMobileMenu() {
            mobileToggle.classList.add('phusa-active');
            mobileSidebar.classList.add('phusa-open');
            mobileOverlay.classList.add('phusa-active');
            document.body.style.overflow = 'hidden';
        }

        function closeMobileMenu() {
            mobileToggle.classList.remove('phusa-active');
            mobileSidebar.classList.remove('phusa-open');
            mobileOverlay.classList.remove('phusa-active');
            document.body.style.overflow = '';
        }

        mobileToggle.addEventListener('click', () => {
            if (mobileSidebar.classList.contains('phusa-open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        mobileOverlay.addEventListener('click', closeMobileMenu);

        // Close mobile menu when clicking on nav links
        document.querySelectorAll('.phusa-mobile-nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });

        // Smooth scroll for scroll indicator
        document.querySelectorAll('.phusa-scroll-indicator').forEach(indicator => {
            indicator.addEventListener('click', () => {
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            });
        });
