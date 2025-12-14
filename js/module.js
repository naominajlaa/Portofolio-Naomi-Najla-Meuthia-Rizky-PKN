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
    image: "./assets/havana-nestum.jpg",
    description: "lkfdlsjfldsfs",
  },

  { title: "Minggu 1 — Judul Topik" },
  { title: "Minggu 1 — Judul Topik" },
  { title: "Minggu 1 — Judul Topik" },
  { title: "Minggu 1 — Judul Topik" },
];

const container = document.getElementById("modules-container");

arrModule.forEach((item, index) => {
  console.log(item);
  const div = document.createElement("div");
  div.className = "module";
  div.style.cursor = "pointer";

  div.innerHTML = `
      <strong>${item.title}</strong>
       <p>Ringkasan singkat pembahasan. <em>Bukti:</em> link / screenshot / PDF.</p>
        <p>${item.description}</p>
      <p class="meta" style="margin:6px 0">Klik untuk lihat detail</p>
    `;

  div.addEventListener("click", () => {
    window.location.href = `module-detail.html?id=${index}`;
  });

  container.appendChild(div);
});
