document.querySelector(".module-title").textContent = data.judul;
document.querySelector(".module-author").textContent = data.penulis;
document.querySelector(".module-content").textContent = data.konten;
document.querySelector(".module-image").src = data.gambar;
const arrModule = [
  {
    title: "Minggu 1 — Judul Topik",
    image: "./assets/havana-nestum.jpg",
    description: "naomi nao",
  },
  {
    title: "Rakyat, Hukum, Negara Relasi Kekuasaan",
    image: "./assets/sagu-keju.jpg",
    description: "smadnsaldlksajdlksaj",
  },
  {
    title: "Minggu 1 — Judul Topik",
    image: "./assets/pkn.jpg",
    description: "lkfdlsjfldsfs",
  },
  { title: "Minggu 1 — Judul Topik" },
  { title: "Minggu 1 — Judul Topik" },
  { title: "Minggu 1 — Judul Topik" },
  { title: "Minggu 1 — Judul Topik" },
];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const module = arrModule[id];

const container = document.getElementById("module-detail");

container.innerHTML = `
  <h1>${module.title}</h1>

  ${
    module.image
      ? `<img src="${module.image}" style="width:300px; margin:20px 0;">`
      : ""
  }

  <p>${module.description ?? "Tidak ada deskripsi."}</p>
  
  <p>Konten detail pembelajaran dapat ditulis di sini.</p>
`;
