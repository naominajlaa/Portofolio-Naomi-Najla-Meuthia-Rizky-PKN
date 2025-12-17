const arrModule = [
  {
    title: "Minggu 1 — Judul Topik",
    image: "./assets/havana-nestum.jpg",
    description: "naomi nao",
    content:
      "Pendidikan Kewarganegaraan merupakan upaya sadar bangsa dan negara untuk membekali warga negara dengan pengetahuan, sikap, dan keterampilan agar mampu berperan aktif, bertanggung jawab, serta beradab dalam kehidupan berbangsa dan bernegara. Materi ini menekankan pemahaman hubungan antara negara dan warga negara berdasarkan nilai-nilai Pancasila dan sejarah bangsa Indonesia. Dalam proses pembelajaran, mahasiswa diharapkan aktif terlibat melalui diskusi, presentasi, refleksi, dan pencarian sumber belajar tambahan secara mandiri. Dosen berperan sebagai fasilitator yang mendampingi, mendorong kreativitas, serta memastikan pemahaman mahasiswa terhadap materi. Pembelajaran Pendidikan Kewarganegaraan juga menggunakan metode problem solving, yaitu dengan merumuskan masalah, menganalisis dari berbagai sudut pandang, menyusun hipotesis solusi, mengumpulkan data pendukung, menentukan solusi terbaik, serta mengevaluasi hasilnya. Melalui pendekatan ini, mahasiswa dilatih berpikir kritis, sistematis, dan bertanggung jawab dalam menghadapi permasalahan kebangsaan.",
  },
  {
    title: "Minggu 1 — Judul Topik",
    image: "./assets/havana-nestum.jpg",
    description: "naomi nao",
    content:
      "Materi ini membahas hubungan antara rakyat, hukum, dan negara melalui perspektif teori kontrak sosial. Teori ini menjelaskan bahwa negara terbentuk dari kesepakatan sukarela rakyat untuk menyerahkan sebagian hak alaminya demi terciptanya keamanan, ketertiban, dan keadilan bersama. Dalam kondisi alamiah sebelum adanya negara, para filsuf memiliki pandangan berbeda. Thomas Hobbes melihat keadaan tersebut sebagai kondisi penuh konflik, John Locke menilai lebih damai namun belum aman, sedangkan Jean-Jacques Rousseau memandang manusia pada dasarnya baik tetapi rentan terhadap ketimpangan sosial. Perbedaan pandangan ini melahirkan konsep kontrak sosial sebagai dasar pembentukan negara dan hukum. Negara memperoleh kekuasaannya dari rakyat, sementara hukum berfungsi sebagai kesepakatan bersama yang mengikat seluruh warga negara. Rakyat wajib menaati hukum karena mereka adalah sumber legitimasi pembentukannya. Namun, apabila negara melanggar kontrak sosial dan gagal melindungi hak dasar rakyat, maka rakyat memiliki hak untuk menuntut perubahan kekuasaan. Selain itu, materi ini juga membahas unsur-unsur pembentuk negara, bentuk-bentuk negara berdasarkan ideologi dan sistem kekuasaan, serta sumber-sumber legitimasi kekuasaan, seperti legitimasi religius, elitis, dan demokratis. Secara keseluruhan, materi ini menegaskan bahwa kekuasaan negara bersumber dari rakyat dan harus dijalankan untuk kepentingan rakyat.",
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
