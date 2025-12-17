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
        "Pendidikan Kewarganegaraan bertujuan membentuk warga negara yang berpengetahuan, berkarakter, dan bertanggung jawab berdasarkan nilai Pancasila. Pembelajaran menekankan keaktifan mahasiswa, peran dosen sebagai fasilitator, serta penggunaan metode problem solving untuk melatih berpikir kritis dalam menghadapi persoalan kebangsaan.",
    },
    {
      title: "Sejarah Identitas Nasional",
      image: "./assets/sagu-keju.jpg",
      description:
        "Identitas nasional Indonesia terbentuk melalui proses sejarah bersama, terutama pengalaman penjajahan, yang melahirkan kesadaran untuk bersatu sebagai satu bangsa. Persatuan Indonesia bersifat historis dan etik, diwujudkan dalam Sumpah Pemuda, semangat Bhinneka Tunggal Ika, dan cita-cita nasional sebagaimana tercantum dalam UUD 1945.",
    },
    {
      title: "Rakyat, Hukum, Negara Relasi Kekuasaan",
      image: "./assets/sagu-keju.jpg",
      description:
        "Negara dan hukum lahir dari kesepakatan rakyat melalui teori kontrak sosial. Kekuasaan negara bersumber dari rakyat, hukum menjadi kesepakatan bersama, dan legitimasi kekuasaan bergantung pada kemampuan negara melindungi hak serta kepentingan rakyat.",
    },
    {
      title: "Ideologi dan Falsafah Bangsa",
      image: "./assets/sagu-keju.jpg",
      description:
        "Ideologi adalah sistem gagasan dan nilai yang menjadi pedoman berpikir dan bertindak bagi individu maupun bangsa. Ideologi mengatur kehidupan politik, sosial, ekonomi, dan budaya. Pancasila merupakan ideologi terbuka Indonesia yang bersumber dari nilai budaya bangsa dan berfungsi sebagai pandangan hidup serta dasar negara.",
    },
    {
      title: "Konstitusi",
      image: "./assets/havana-nestum.jpg",
      description:
        "Konstitusi adalah aturan dasar tertinggi negara yang mengatur struktur kekuasaan, hak asasi manusia, dan hubungan negara dengan warga negara. Konstitusi lahir dari kontrak sosial rakyat dan menjadi sumber hukum tertinggi yang harus ditaati semua pihak. UUD 1945 dapat diamandemen secara sah untuk menyesuaikan perkembangan demokrasi.",
    },
    {
      title: "Fungsi dan Peran Negara",
      image: "./assets/sagu-keju.jpg",
      description:
        "Negara berfungsi menjaga ketertiban, menegakkan hukum, menjalankan pemerintahan, dan mewujudkan kesejahteraan rakyat. Semua fungsi ini dijalankan melalui kebijakan publik yang bersifat mengikat. Pelaksanaannya harus berdasarkan prinsip good governance: transparansi, akuntabilitas, partisipasi, supremasi hukum, dan keadilan.",
    },
    {
      title: "Demokrasi?",
      image: "./assets/sagu-keju.jpg",
      description:
        "Demokrasi adalah pemerintahan dari, oleh, dan untuk rakyat. Demokrasi tidak hanya sebagai bentuk pemerintahan, tetapi juga sebagai sistem politik dan nilai kehidupan. Demokrasi Indonesia berlandaskan Pancasila, menekankan musyawarah mufakat, sistem perwakilan, pembagian kekuasaan, dan perlindungan HAM.",
    },
    {
      title: "Multikulturalisme",
      image: "./assets/sagu-keju.jpg",
      description:
        "Multikulturalisme adalah pandangan yang mengakui dan menghargai keberagaman suku, agama, budaya, dan identitas dalam masyarakat. Di Indonesia, multikulturalisme menjadi dasar persatuan bangsa sesuai dengan Bhinneka Tunggal Ika dan Pancasila, untuk menciptakan keadilan, toleransi, dan integrasi nasional.",
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
