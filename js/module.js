console.log("module.js loaded");

const container = document.getElementById("modules-container");
console.log("container:", container);

if (!container) {
  console.error("modules-container NOT FOUND");
  return;
}

const arrModule = [
  {
    title: "Minggu 1 — Judul Topik",
    image: "/assets/havana-nestum.jpg",
    description: "naomi nao",
  },
  {
    title: "Rakyat, Hukum, Negara Relasi Kekuasaan",
    image: "/assets/sagu-keju.jpg",
    description: "smadnsaldlksajdlksaj",
  },
];

arrModule.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "module";
  div.style.cursor = "pointer";

  div.innerHTML = `
    <strong>${item.title}</strong>
    <p>${item.description ?? ""}</p>
    <p class="meta">Klik untuk lihat detail</p>
  `;

  div.onclick = () => {
    window.location.href = `/html/module-detail.html?id=${index}`;
  };

  container.appendChild(div);
});
