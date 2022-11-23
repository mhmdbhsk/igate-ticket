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
      'I-GATE akan dilaksanakan pada hari Sabtu, 17 Desember 2022 di Gedung Prof. Soedarto, S.H. Pastikan kamu segera datang untuk meramaikan acara I-GATE karena banyak keseruan yang bisa kamu dapatkan di sini! I-GATE akan open gate mulai pukul 15.00 Jangan lupa untuk dicatat yaa!',
  },
  {
    id: 3,
    question: 'Di I-GATE ada apa aja sih?',
    answer:
      'Banyak sekali rangkaian acara seru-seruan bareng yang sudah menunggu mulai dari penampilan tiap angkatan, penyerahan awarding hingga puncak acara yang meriah.',
  },
  {
    id: 4,
    question: 'Emangnya harga tiket I-GATE itu berapa sih?',
    answer:
      'Harga tiketnya 35k per orang. Tapi jangan khawatir! Harga tersebut sudah termasuk makanan dan minuman yang akan disediakan selama acara berlangsung.',
  },
  {
    id: 5,
    question: 'Bagaimana tata cara pembelian tiket online?',
    answer: (
      <List type='ordered' size='xs'>
        <List.Item>
          Kita buka online ticketing via https://igate.hmif-undip.com/
        </List.Item>
        <List.Item>
          Bisa mulai dengan masuk ke halaman &apos;Beli Tiket&apos;.
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
    question: 'Kalau mau beli tiket langsung gimana?',
    answer:
      'Tiket offline tersedia terbatas di Kantin I-GATE depan E101 gedung FSM dan setelahnya akan ditanya biodata untuk pendataan.',
  },
  {
    id: 7,
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
  { id: 8, question: 'Dresscode yang digunakan', answer: 'Formal atau Batik' },
];

export default faqConfigs;
