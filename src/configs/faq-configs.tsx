import { Box, List } from '@mantine/core';

const faqConfigs = [
  {
    id: 1,
    question: 'I-GATE itu apa sih?',
    answer:
      'Informatics Gathering (I-GATE) merupakan kegiatan penyambutan mahasiswa tingkatan 2022 serta perkenalan dan pentas seni setiap tingkatan. Program ini bertujuan untuk meningkatkan rasa kekeluargaan dan mempererat kebersamaan antar keluarga Informatika Undip dan meningkatkan tali silaturahmi keluarga besar Informatika Undip. Selain itu, kegiatan I-GATE juga dapat mendukung terciptanya suasana yang kondusif dalam keluarga Informatika Undip.',
  },
  {
    id: 2,
    question: 'Kapan dan dimana I-GATE diselenggarakan?',
    answer:
      'I-GATE akan dilaksanakan pada hari sabtu, 17 Desember 2022 di Gedung Prof. Soedarto, S. H. Pastikan kamu segera datang untuk memeriahkan acara I-GATE karena banyak banget keseruan yang bisa kamu dapetin disini! I-GATE akan di buka mulai pukul 15.00. Jangan lupa dicatat ya!',
  },
  {
    id: 3,
    question: 'Apa saja rangkaian acara yang akan diadakan I-GATE nanti?',
    answer:
      'Banyak sekali rangkaian acara seru-seruan bareng yang sudah menunggu mulai dari penampilan tiap angkatan hingga penyerahan awarding.',
  },
  {
    id: 4,
    question: 'Emangnya harga tiket I-GATE itu berapa sih?',
    answer:
      ' Tiketnya sendiri berharga 35k per orangnya. Tetapi, jangan khawatir! untuk harga tersebut sudah termasuk makanan dan minuman yang akan di sediakan saat acara berlangsung.',
  },
  {
    id: 5,
    question:
      'Aku ingin sekali membeli tiket I-GATE, tapi tata cara pembayarannya seperti apa ya?',
    answer: (
      <List type='ordered' size='xs'>
        <List.Item>
          Kita buka online ticketing via https://igate.hmif-undip.com/
        </List.Item>
        <List.Item>
          Bisa mulai dengan masuk ke halaman &apos;Daftar&apos;.
        </List.Item>
        <List.Item>
          Tekan tombol &apos;Cara Pembayaran&apos; pada form dan akan tampil pop
          up yang berisi keterangan metode pembayaran dan daftar rekening yang
          bisa digunakan untuk pembayaran
        </List.Item>
        <List.Item>
          Lakukan pembayaran dan konfirmasi dengan cara mengirimkan bukti
          pembayaran ke form yang ada.
        </List.Item>
      </List>
    ),
  },
  {
    id: 6,
    question: 'Do and Donts!',
    answer: (
      <List type='ordered' size='xs'>
        <List.Item>
          Tidak diperbolehkan membawa benda tajam dan barang-barang berbahaya
          lainnya.
        </List.Item>
        <List.Item>Tidak diperbolehkan menggunakan sandal.</List.Item>
        <List.Item>Tidak diperbolehkan membawa vape atau rokok.</List.Item>
        <List.Item>Dilarang membawa obat-obatan terlarang.</List.Item>
        <List.Item>Dilarang membawa senjata api atau petasan.</List.Item>
        <List.Item>Tidak diperbolehkan membawa minuman keras.</List.Item>
        <List.Item>Dilarang membawa alat tulis.</List.Item>
        <List.Item>Tidak diperbolehkan membawa laser pointer.</List.Item>
        <List.Item>Dilarang membawa drone.</List.Item>
        <List.Item>Dilarang membawa botol minum atau tumblr. </List.Item>
        <List.Item>Dilarang membawa noise speaker. </List.Item>
        <List.Item>Dilarang membawa hewan peliharaan. </List.Item>
      </List>
    ),
  },
  { id: 7, question: 'Dresscode yang digunakan', answer: 'Formal atau Batik' },
];

export default faqConfigs;
