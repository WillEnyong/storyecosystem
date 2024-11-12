// Ambil elemen-elemen untuk slider dan tombol navigasi
const slider = document.querySelector('.slider');
const leftButton = document.querySelector('.nav-left');
const rightButton = document.querySelector('.nav-right');

// Ambil lebar satu item (sesuaikan dengan tata letak yang digunakan)
const itemWidth = document.querySelector('.item').offsetWidth + 20; // 20px adalah margin antara item

// Set posisi awal
let currentPosition = 0;

// Fungsi untuk menggeser slider ke kiri
leftButton.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += itemWidth; // Geser ke kanan
        slider.style.transform = `translateX(${currentPosition}px)`;
    }
});

// Fungsi untuk menggeser slider ke kanan
rightButton.addEventListener('click', () => {
    const maxPosition = -(slider.scrollWidth - slider.offsetWidth);
    if (currentPosition > maxPosition) {
        currentPosition -= itemWidth; // Geser ke kiri
        slider.style.transform = `translateX(${currentPosition}px)`;
    }
});
