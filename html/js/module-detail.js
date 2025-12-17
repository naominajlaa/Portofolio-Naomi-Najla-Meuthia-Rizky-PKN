const arrModule = [
  {
    title: "Minggu 1 — Judul Topik",
    image: "./assets/havana-nestum.jpg",
    description: "naomi nao",
  },
  {
    title: "Minggu 2 — Rakyat, Hukum, Negara",
    image: "./assets/sagu-keju.jpg",
    description: "Relasi kekuasaan dalam kehidupan bernegara",
  },
  {
    title: "Minggu 3 — Demokrasi Pancasila",
    image: "./assets/pkn.jpg",
    description: "Penerapan demokrasi di Indonesia",
  },
  {
    title: "Minggu 4 — Konstitusi dan UUD 1945",
    image: "./assets/konstitusi.jpg",
    description: "Peran konstitusi sebagai hukum dasar negara",
  },
  {
    title: "Minggu 5 — Hak dan Kewajiban Warga Negara",
    image: "./assets/hak-kewajiban.jpg",
    description: "Keseimbangan hak dan kewajiban warga negara",
  },
  {
    title: "Minggu 6 — Sistem Pemerintahan Indonesia",
    image: "./assets/pemerintahan.jpg",
    description: "Lembaga negara dan sistem presidensial",
  },
  {
    title: "Minggu 7 — Negara Hukum",
    image: "./assets/negara-hukum.jpg",
    description: "Supremasi hukum dan keadilan",
  },
  {
    title: "Minggu 8 — Peran Warga Negara",
    image: "./assets/peran-warga.jpg",
    description: "Partisipasi aktif dalam kehidupan berbangsa",
  },
];

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

if (!arrModule[id]) {
  document.querySelector(".module-title").textContent =
    "Module tidak ditemukan";
} else {
  const module = arrModule[id];

  document.querySelector(".module-title").textContent = module.title;
  document.querySelector(".module-author").textContent = module.description;

  document.querySelector(".module-content").textContent =
    "Konten detail pembelajaran dapat ditulis di sini.";

  const img = document.querySelector(".module-image");
  if (module.image) {
    img.src = module.image;
  } else {
    img.style.display = "none";
  }
}
