const studentContainer = document.getElementById('student-container');
const galeriContainer = document.getElementById('galeri-container');
const albumContainer = document.getElementById('album-container');

// =================================================================
// 1. ISI DAFTAR SISWA DI SINI (INI ADALAH DATABASE ANDA)
// =================================================================
// Tips: Pastikan urutan foto di folder images bernama: 1.jpg, 2.jpg, dst 
// sesuai urutan nama di bawah ini.

const dataSiswa = [
    { nama: "Aditya Gunawan", role: "Wakil Ketua", Motivasi: "Motivasi" },
    { nama: "Alfi Nurpadilah", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Annisa Pebriani", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Anna Zham-Zham", role: "Seksi Kebersihan", Motivasi: "Motivasi" },
    { nama: "Atika Thohariyyah", role: "Bendahara", Motivasi: "Motivasi" },
    { nama: "Aydil Fitran", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Farid Ramadhani", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Fariz Alwasi", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Ghina Maulani", role: "Anggota" },
    { nama: "Ilham Fauzan Nur Arifin", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Indas Febi Anggraeni", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Lia Aprialiani", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Maudy Aprelia", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Meysa Nurul Fazri", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Muhammad Alfian Holidi", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Muhammad Rizky Al Azmy T", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Muhammad Iyaas Fauzi Irwan Siri", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Najwa Meilani", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Nova Dzalsa Khairunnisa", role: "Sekretaris", Motivasi: "Motivasi" },
    { nama: "Noval Mauladani", role: "Ketua Kelas", Motivasi: "Motivasi" },
    { nama: "Noviyanti Syahrani", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Nurmalasari", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Rai Adinu Rifa'i", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Raya Refanda Je Angiyi", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Reza Fachri Ramdani", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Rheyna Cindy Azzahra", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Rifki Abdillah", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Ryani Anggraeni", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Salwa Meisya Nabilah", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Sana Meilana", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Sarah Mauziah", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Satria Gunawan", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Silvia Zakiyati", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Syulis Syamsiah", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Tegar Bintang Pamungkas", role: "Anggota", Motivasi: "Motivasi" },
    { nama: "Winda Febrianti", role: "Anggota" },
    // ... TERUSKAN SAMPAI SISWA TERAKHIR (Copy-paste baris di atas)
    // Contoh:
    // {nama: "Nama Siswa 11", role: "Anggota" },
    // {nama: "Nama Siswa 12", role: "Anggota" },
];

// =================================================================
// 2. KONFIGURASI FOLDER & DATA GALERI
// =================================================================
const folderFoto = "assets/"; // Folder foto siswa
const ekstensiFoto = ".jpeg";   // Pastikan semua foto formatnya sama


// =================================================================
// 3. FUNGSI PEMBUAT KARTU SISWA (Fixed)
// =================================================================
function createCard(siswa, index) {
    const nomorFoto = index + 1;
    const urlFoto = folderFoto + nomorFoto + ekstensiFoto;

    return `
    <div class="card w-full shadow-xl transition-transform hover:scale-105 duration-300 bg-black/40 border border-[#0000FF] text-white backdrop-blur-sm">
        <figure class="h-64 overflow-hidden bg-white/5">
            <img src="${urlFoto}" 
                 alt="${siswa.nama}" 
                 class="w-full h-full object-cover"
                 loading="lazy" 
                 onerror="this.src='https://via.placeholder.com/300?text=No+Image'"/> 
        </figure>
        <div class="card-body p-5">
            <h2 class="card-title text-lg font-bold text-white">${siswa.nama}</h2>
            <div class="badge badge-outline badge-sm text-white border-[#0000FF] text-white">${siswa.role}</div>
            <p class="card-description text-sm text-white italic">"${siswa.Motivasi}"</p>
            
            <div class="card-actions justify-end mt-4">
                <a href="https://wa.me/628123456789" class="btn btn-sm btn-circle btn-ghost text-green-400 hover:bg-green-900/50">
                    <i class="fab fa-whatsapp text-xl"></i>
                </a>
                <button class="btn btn-sm btn-outline text-white border-[#0000FF] hover:bg-blue-600 hover:text-white hover:border-blue-600">Detail</button>
            </div>
        </div>
    </div>`;
}

// =================================================================
// 4. FUNGSI PEMBUAT GALERI (Dengan Modal/Zoom)
// =================================================================
// =================================================================
// DATA ALBUM FOTO
// =================================================================
// Cara isi:
// 1. 'folder': nama folder di dalam assets/galeri/
// 2. 'cover': nama file foto untuk sampul depan
// 3. 'isi': list semua nama file foto di dalam folder tersebut
const dataAlbum = [
    {
        judul: "Study Tour Jogja",
        folder: "study_tour", // Pastikan folder ini ada
        cover: "1.jpeg",       // Foto sampul
        deskripsi: "Kenangan seru saat kita ke Jogja, capek tapi hepi!",
        isi: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"] // Daftar semua foto
    },
    {
        judul: "Classmeeting 2024",
        folder: "classmeet",
        cover: "1.jpeg",
        deskripsi: "Juara 1 Futsal & Tarik Tambang, kelas kita emang OP!",
        isi: ["1.jpeg", "2.jpeg", "3.jpeg"]
    },
    {
        judul: "Hari Guru",
        folder: "hari_guru",
        cover: "1.jpeg",
        deskripsi: "Kejutan buat Wali Kelas tersayang.",
        isi: ["1.jpeg", "2.jpeg"]
    }
];

// Konfigurasi Path Dasar
const basePath = "assets/galeri/";

// =================================================================
// FUNGSI RENDER DAFTAR ALBUM (TAMPILAN DEPAN)
// =================================================================


function renderAlbums() {
    let htmlContent = '';

    dataAlbum.forEach((album, index) => {
        // Path foto cover
        const coverPath = `${basePath}${album.folder}/${album.cover}`;

        htmlContent += `
        <div class="card bg-base-100 shadow-xl image-full hover:scale-[1.02] transition-transform duration-300 cursor-pointer group"
             onclick="bukaAlbum(${index})">
            <figure>
                <img src="${coverPath}" alt="${album.judul}" class="w-full h-64 object-cover" 
                     onerror="this.src='https://via.placeholder.com/400x300?text=No+Cover'"/>
            </figure>
            <div class="card-body justify-end p-5">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div class="relative z-10">
                    <h2 class="card-title text-white text-2xl drop-shadow-md">
                        <i class="fas fa-folder-open text-yellow-400 mr-2"></i> ${album.judul}
                    </h2>
                    <p class="text-gray-200 text-sm mb-2">${album.deskripsi}</p>
                    <div class="badge badge-outline text-white border-white">
                        ${album.isi.length} Foto
                    </div>
                </div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button class="btn btn-circle btn-lg bg-white/20 border-0 text-white backdrop-blur-sm">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
        `;
    });

    if (albumContainer) albumContainer.innerHTML = htmlContent;
}

// =================================================================
// FUNGSI BUKA ISIAN ALBUM (SAAT DIKLIK)
// =================================================================
function bukaAlbum(index) {
    const album = dataAlbum[index];
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modal = document.getElementById('album_modal');

    // 1. Set Judul Modal
    modalTitle.innerText = album.judul;

    // 2. Kosongkan isi modal sebelumnya
    modalContent.innerHTML = '';

    // 3. Loop isi foto dan masukkan ke modal (Masonry Layout)
    let photosHtml = '';
    album.isi.forEach(fotoFile => {
        const fullPath = `${basePath}${album.folder}/${fotoFile}`;

        photosHtml += `
            <div class="mb-4 break-inside-avoid">
                <div class="rounded-lg overflow-hidden border border-gray-700 group relative">
                    <img src="${fullPath}" 
                         class="w-full h-auto transform transition duration-500 group-hover:scale-110" 
                         loading="lazy" 
                         alt="Foto ${album.judul}">
                         
                    <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <a href="${fullPath}" target="_blank" class="btn btn-sm btn-circle btn-ghost text-white">
                            <i class="fas fa-expand"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    modalContent.innerHTML = photosHtml;

    // 4. Tampilkan Modal
    modal.showModal();
}

// Jalankan Render Album saat halaman dimuat
document.addEventListener('DOMContentLoaded', renderAlbums);
// =================================================================
// 5. EKSEKUSI (RENDER KE HTML)
// =================================================================

// Render Siswa
let allCards = '';
if (studentContainer) {
    dataSiswa.forEach((siswa, index) => {
        allCards += createCard(siswa, index);
    });
    studentContainer.innerHTML = allCards;
}

