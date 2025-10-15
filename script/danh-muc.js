const cards = document.querySelectorAll('.phusa-danhmuc-card');
const mainBanner = document.getElementById('mainBanner');

const bannerImages = {
     'giao-duc': 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&h=800&fit=crop',
     'nghien-cuu': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1400&h=800&fit=crop',
     'dich-vu': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1400&h=800&fit=crop',
     'nong-nghiep': 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1400&h=800&fit=crop',
};

cards.forEach((card) => {
     card.addEventListener('click', function () {
          cards.forEach((c) => c.classList.remove('phusa-danhmuc-active'));
          this.classList.add('phusa-danhmuc-active');

          const category = this.getAttribute('data-category');
          mainBanner.src = bannerImages[category];
     });
});
