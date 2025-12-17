document.addEventListener("DOMContentLoaded", () => {
  console.log("module.js loaded");

  const container = document.getElementById("modules-container");
  console.log("container:", container);

  if (!container) {
    console.error("modules-container NOT FOUND");
    return;
  }

  const arrModule = [
    {
      title: "Pendidikan Kewarganegaraan",
      image: "./assets/havana-nestum.jpg",
      description:
        "Apa yang dimaksud dengan Pendidikan Kewarganegaraan dan mengapa penting bagi warga negara?",
    },
    {
      title: "Sejarah Identitas Nasional",
      image: "./assets/sagu-keju.jpg",
      description:
        "Apa yang dimaksud dengan identitas nasional dan bagaimana identitas tersebut terbentuk dalam sejarah Indonesia?",
    },
    {
      title: "Rakyat, Hukum, Negara Relasi Kekuasaan",
      image: "./assets/sagu-keju.jpg",
      description:
        "Apa perbedaan pandangan Hobbes, Locke, dan Rousseau tentang kondisi alamiah manusia?",
    },
    {
      title: "Ideologi dan Falsafah Bangsa",
      image: "./assets/sagu-keju.jpg",
      description:
        "Apa yang dimaksud dengan identitas nasional dan bagaimana identitas tersebut terbentuk dalam sejarah Indonesia?",
    },
    {
      title: "Konstitusi",
      image: "./assets/havana-nestum.jpg",
      description: "Apa yang dimaksud dengan konstitusi?",
    },
    {
      title: "Fungsi dan Peran Negara",
      image: "./assets/sagu-keju.jpg",
      description: "Apa saja fungsi utama negara?",
    },
    {
      title: "Demokrasi?",
      image: "./assets/sagu-keju.jpg",
      description: "Apa yang dimaksud dengan demokrasi?",
    },
    {
      title: "Multikulturalisme",
      image: "./assets/sagu-keju.jpg",
      description:
        "Apa hubungan multikulturalisme dengan Pancasila dan Bhinneka Tunggal Ika?",
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
      window.location.href = `./module-detail.html?id=${index}`;
    };

    container.appendChild(div);
  });
});
