// Mengganti background gambar pada section1
const section1 = document.getElementById("section1");

const backgrounds = ["../Img/bg/1.png", "../Img/bg/2.jpg", "../Img/bg/3.jpg"];

let index = 0;

function changeBackground() {
  section1.style.backgroundImage = `url(${backgrounds[index]})`;
  index = (index + 1) % backgrounds.length;
}

changeBackground();
setInterval(changeBackground, 3000);

// Fungsi untuk menambahkan elemen di mobile
function addElementForMobile() {
  if (window.innerWidth < 768) {
    const newElement = document.createElement("div");
    newElement.className = "mobile-only"; // Tambahkan class untuk styling khusus
    newElement.innerHTML = `<li><a href="">lorem ip</a></li>`;

    // Tambahkan elemen ini di bagian akhir navbar
    const navbar = document.getElementById("navbar");
    navbar.appendChild(newElement);
  }
}

// Jalankan fungsi saat halaman dimuat
window.onload = addElementForMobile;

// Tambahkan event listener untuk resize agar elemen bisa ditambahkan jika ukuran layar berubah
window.addEventListener("resize", function () {
  const existingElement = document.querySelector(".mobile-only");
  if (window.innerWidth < 768 && !existingElement) {
    addElementForMobile();
  } else if (window.innerWidth >= 768 && existingElement) {
    existingElement.remove(); // Hapus elemen jika ukuran layar lebih besar dari 768px
  }
});

// Modal behavior
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Mengatur interaksi dengan form
const inputs = document.querySelectorAll(".form-group input");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.nextElementSibling.classList.add("active");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.nextElementSibling.classList.remove("active");
    }
  });
});

// Counter Class untuk animasi angka
class Counter {
  constructor(element) {
    this.element = element;
    this.target = +element.getAttribute("data-target");
    this.current = 0;
    this.speed = 50; // Kecepatan per langkah dalam milidetik
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
      threshold: 0.5, // Akan mulai ketika setengah elemen terlihat
    });
    this.observer.observe(this.element);
  }

  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.startCounting();
        this.observer.unobserve(this.element); // Hentikan observer setelah animasi berjalan
      }
    });
  }

  startCounting() {
    const increment = Math.ceil(this.target / 100); // Bagian kecil dari target untuk menampilkan efek animasi
    const updateCounter = () => {
      this.current += increment;
      if (this.current >= this.target) {
        this.element.textContent = this.target;
      } else {
        this.element.textContent = this.current;
        setTimeout(updateCounter, this.speed);
      }
    };
    updateCounter();
  }
}

// Inisialisasi semua elemen counter
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".counter").forEach((el) => new Counter(el));
});

// Menambahkan efek fade-in pada elemen tertentu saat di-scroll
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".why-choose");
  const options = {
    root: null,
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        section.classList.add("fade-in");
        observer.unobserve(section);
      }
    });
  }, options);

  observer.observe(section);
});

// Fungsi untuk navigasi slide
function nextSlide(id) {
  const slider = document.getElementById(id);
  slider.appendChild(slider.firstElementChild);
}

function prevSlide(id) {
  const slider = document.getElementById(id);
  slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
}
