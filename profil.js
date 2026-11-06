const dataHewan = {
    // ================= ANIMAL =================
    singa: {
        nama: "Singa",
        ilmiah: "Panthera leo",
        gambar: "images/singa.jpg",
        pengertian: "Singa adalah mamalia karnivora dari keluarga Felidae yang dikenal sebagai salah satu predator besar.",
        habitat: "Padang rumput, savana, dan semak belukar di Afrika.",
        makanan: "Zebra, rusa, kerbau, dan antelop.",
        jenis: "Singa Afrika dan singa Asia.",
        ciri: "Memiliki tubuh kuat, gigi taring besar, cakar tajam, dan surai pada singa jantan.",
        fakta: "Singa hidup berkelompok yang disebut pride."
    },
    gajah: {
        nama: "Gajah",
        ilmiah: "Elephantidae",
        gambar: "images/gajah.jpg",
        pengertian: "Gajah merupakan mamalia darat berukuran besar yang memiliki belalai panjang.",
        habitat: "Hutan, padang rumput, dan sabana di Afrika serta Asia.",
        makanan: "Rumput, daun, kulit kayu, buah, dan akar tumbuhan.",
        jenis: "Gajah Afrika sabana, gajah Afrika hutan, dan gajah Asia.",
        ciri: "Memiliki belalai, gading pada sebagian individu, telinga lebar, dan kaki besar.",
        fakta: "Gajah memiliki ingatan yang baik dan hidup dalam kelompok sosial."
    },
    harimau: {
        nama: "Harimau",
        ilmiah: "Panthera tigris",
        gambar: "images/harimau.jpg",
        pengertian: "Harimau adalah mamalia karnivora dari keluarga kucing besar.",
        habitat: "Hutan tropis, padang rumput, dan hutan pegunungan di Asia.",
        makanan: "Rusa, babi hutan, dan mamalia lainnya.",
        jenis: "Harimau Bengal, Siberia, Sumatra, dan beberapa subspesies lainnya.",
        ciri: "Memiliki tubuh besar, bulu belang, gigi tajam, dan kemampuan berenang.",
        fakta: "Setiap harimau memiliki pola belang yang berbeda."
    },
    jerapah: {
        nama: "Jerapah",
        ilmiah: "Giraffa camelopardalis",
        gambar: "images/jerapah.jpg",
        pengertian: "Jerapah merupakan mamalia herbivora yang dikenal karena leher dan kakinya yang panjang.",
        habitat: "Savana dan padang rumput di Afrika.",
        makanan: "Daun, tunas, dan ranting pohon, terutama akasia.",
        jenis: "Jerapah memiliki beberapa spesies, seperti jerapah utara, selatan, dan Masai.",
        ciri: "Memiliki leher panjang, kaki tinggi, dan pola bercak pada tubuh.",
        fakta: "Jerapah merupakan hewan darat tertinggi di dunia."
    },
    zebra: {
        nama: "Zebra",
        ilmiah: "Equus",
        gambar: "images/zebra.jpg",
        pengertian: "Zebra adalah mamalia herbivora dari keluarga kuda yang memiliki pola belang hitam dan putih.",
        habitat: "Padang rumput dan savana di Afrika.",
        makanan: "Rumput dan berbagai tumbuhan.",
        jenis: "Zebra dataran, zebra gunung, dan zebra Grevy.",
        ciri: "Memiliki tubuh menyerupai kuda dengan pola belang yang khas.",
        fakta: "Pola belang setiap zebra berbeda satu sama lain."
    },
    orangutan: {
        nama: "Orangutan",
        ilmiah: "Pongo",
        gambar: "images/orangutan.jpg",
        pengertian: "Orangutan merupakan primata besar yang banyak menghabiskan waktunya di atas pepohonan.",
        habitat: "Hutan hujan tropis Kalimantan dan Sumatra.",
        makanan: "Buah-buahan, daun, kulit kayu, dan serangga.",
        jenis: "Orangutan Sumatra, Kalimantan, dan Tapanuli.",
        ciri: "Memiliki lengan panjang, rambut kemerahan, dan kemampuan memanjat yang baik.",
        fakta: "Orangutan dikenal cerdas dan mampu menggunakan alat sederhana."
    },
    badak: {
        nama: "Badak",
        ilmiah: "Rhinocerotidae",
        gambar: "images/badak.jpg",
        pengertian: "Badak adalah mamalia herbivora berukuran besar yang memiliki satu atau dua cula.",
        habitat: "Padang rumput, hutan, dan kawasan semak.",
        makanan: "Rumput, daun, ranting, dan tumbuhan.",
        jenis: "Badak Jawa, Sumatra, India, putih, dan hitam.",
        ciri: "Memiliki tubuh besar, kulit tebal, dan cula di bagian hidung.",
        fakta: "Beberapa jenis badak saat ini terancam punah."
    },
    panda: {
        nama: "Panda",
        ilmiah: "Ailuropoda melanoleuca",
        gambar: "images/panda.jpg",
        pengertian: "Panda adalah mamalia yang terkenal dengan warna bulu hitam dan putih.",
        habitat: "Hutan pegunungan di Tiongkok.",
        makanan: "Bambu merupakan makanan utamanya.",
        jenis: "Panda raksasa dan panda merah merupakan dua hewan berbeda.",
        ciri: "Memiliki tubuh besar, bulu hitam putih, dan wajah bulat.",
        fakta: "Panda dapat menghabiskan sebagian besar waktunya untuk makan bambu."
    },

    // ================= BIRDS =================
    elang: {
        nama: "Elang",
        ilmiah: "Accipitridae",
        gambar: "images/elang.jpg",
        pengertian: "Elang adalah burung pemangsa yang memiliki penglihatan tajam dan kemampuan terbang yang kuat.",
        habitat: "Hutan, pegunungan, pesisir, dan padang terbuka.",
        makanan: "Ikan, mamalia kecil, reptil, dan burung lainnya.",
        jenis: "Elang Jawa, elang laut, dan elang emas.",
        ciri: "Memiliki paruh melengkung, cakar kuat, dan sayap lebar.",
        fakta: "Elang dapat melihat mangsa dari jarak yang sangat jauh."
    },
    merak: {
        nama: "Merak",
        ilmiah: "Pavo",
        gambar: "images/merak.jpg",
        pengertian: "Merak merupakan burung yang terkenal dengan bulu ekornya yang indah dan berwarna-warni.",
        habitat: "Hutan terbuka dan padang rumput.",
        makanan: "Biji-bijian, buah, serangga, dan hewan kecil.",
        jenis: "Merak India dan merak hijau.",
        ciri: "Memiliki bulu berwarna cerah dan ekor panjang pada merak jantan.",
        fakta: "Merak jantan mengembangkan bulu ekornya untuk menarik perhatian betina."
    },
    burung_hantu: {
        nama: "Burung Hantu",
        ilmiah: "Strigiformes",
        gambar: "images/burung_hantu.jpg",
        pengertian: "Burung hantu adalah burung pemangsa yang banyak aktif pada malam hari.",
        habitat: "Hutan, perkebunan, dan kawasan terbuka.",
        makanan: "Tikus, serangga, dan hewan kecil lainnya.",
        jenis: "Serak Jawa, celepuk, dan berbagai jenis burung hantu lainnya.",
        ciri: "Memiliki mata besar, wajah khas, dan kemampuan terbang yang senyap.",
        fakta: "Burung hantu dapat memutar kepalanya hingga sekitar 270 derajat."
    },
    nuri: {
        nama: "Burung Nuri",
        ilmiah: "Loriinae",
        gambar: "images/nuri.jpg",
        pengertian: "Burung nuri merupakan kelompok burung paruh bengkok yang terkenal dengan warna bulunya.",
        habitat: "Hutan tropis dan kawasan pepohonan.",
        makanan: "Nektar, buah-buahan, serbuk sari, dan biji-bijian.",
        jenis: "Nuri kepala hitam, nuri bayan, dan berbagai jenis lori.",
        ciri: "Memiliki bulu berwarna cerah dan paruh melengkung.",
        fakta: "Beberapa jenis nuri mampu menirukan suara manusia."
    },
    flamingo: {
        nama: "Flamingo",
        ilmiah: "Phoenicopteridae",
        gambar: "images/flamingo.jpg",
        pengertian: "Flamingo merupakan burung air yang dikenal dengan warna merah muda pada bulunya.",
        habitat: "Danau dangkal, laguna, dan kawasan perairan asin.",
        makanan: "Alga, udang kecil, dan organisme air.",
        jenis: "Flamingo besar, kecil, Karibia, dan Chili.",
        ciri: "Memiliki kaki panjang, leher panjang, dan paruh melengkung.",
        fakta: "Warna merah muda flamingo dipengaruhi oleh pigmen dalam makanannya."
    },
    pelikan: {
        nama: "Pelikan",
        ilmiah: "Pelecanus",
        gambar: "images/pelikan.jpg",
        pengertian: "Pelikan adalah burung air yang memiliki kantong besar di bawah paruhnya.",
        habitat: "Danau, sungai, rawa, dan wilayah pesisir.",
        makanan: "Ikan dan hewan air kecil.",
        jenis: "Pelikan putih besar, pelikan cokelat, dan pelikan Australia.",
        ciri: "Memiliki paruh panjang dan kantong elastis untuk membantu menangkap ikan.",
        fakta: "Pelikan menggunakan kantong paruhnya untuk menampung ikan."
    },
    merpati: {
        nama: "Merpati",
        ilmiah: "Columbidae",
        gambar: "images/merpati.jpg",
        pengertian: "Merpati merupakan burung yang banyak ditemukan di lingkungan perkotaan maupun alam liar.",
        habitat: "Perkotaan, hutan, tebing, dan kawasan permukiman.",
        makanan: "Biji-bijian, buah, dan tumbuhan kecil.",
        jenis: "Merpati batu, merpati hias, dan merpati mahkota.",
        ciri: "Memiliki tubuh sedang, paruh pendek, dan kemampuan terbang yang baik.",
        fakta: "Merpati memiliki kemampuan mengenali arah untuk kembali ke tempat asalnya."
    },
    kakatua: {
        nama: "Kakatua",
        ilmiah: "Cacatuidae",
        gambar: "images/kakatua.jpg",
        pengertian: "Kakatua merupakan burung paruh bengkok yang dikenal dengan jambul di atas kepalanya.",
        habitat: "Hutan tropis, savana, dan kawasan pepohonan di Australia serta Indonesia.",
        makanan: "Biji-bijian, kacang, buah, dan tunas tumbuhan.",
        jenis: "Kakatua jambul kuning, kakatua putih, dan kakatua raja.",
        ciri: "Memiliki jambul yang dapat ditegakkan dan paruh yang kuat.",
        fakta: "Kakatua dikenal sebagai burung yang cerdas dan aktif."
    },

    // ================= INSECTS =================
    "kupu-kupu": {
        nama: "Kupu-kupu",
        ilmiah: "Lepidoptera",
        gambar: "images/kupu-kupu.jpg",
        pengertian: "Kupu-kupu merupakan serangga bersayap yang mengalami metamorfosis sempurna.",
        habitat: "Taman, hutan, padang rumput, dan kebun.",
        makanan: "Nektar bunga dan cairan dari buah.",
        jenis: "Kupu-kupu monarki, kupu-kupu sayap burung, dan kupu-kupu jeruk.",
        ciri: "Memiliki dua pasang sayap bersisik dan antena.",
        fakta: "Kupu-kupu mengalami empat tahap kehidupan: telur, ulat, kepompong, dan dewasa."
    },
    lebah: {
        nama: "Lebah",
        ilmiah: "Anthophila",
        gambar: "images/lebah.jpg",
        pengertian: "Lebah merupakan serangga yang berperan penting dalam proses penyerbukan tanaman.",
        habitat: "Taman, hutan, kebun, dan padang bunga.",
        makanan: "Nektar dan serbuk sari bunga.",
        jenis: "Lebah madu, lebah tanpa sengat, dan lebah tukang kayu.",
        ciri: "Memiliki tubuh berbulu, sayap, dan antena.",
        fakta: "Lebah membantu penyerbukan banyak tanaman yang dimanfaatkan manusia."
    },
    semut: {
        nama: "Semut",
        ilmiah: "Formicidae",
        gambar: "images/semut.jpg",
        pengertian: "Semut adalah serangga sosial yang hidup dalam koloni dengan pembagian tugas.",
        habitat: "Tanah, hutan, kebun, dan sekitar permukiman.",
        makanan: "Biji-bijian, nektar, serangga kecil, dan sisa makanan.",
        jenis: "Semut rangrang, semut hitam, dan semut api.",
        ciri: "Memiliki enam kaki, antena, dan tubuh yang terbagi menjadi tiga bagian.",
        fakta: "Semut dapat bekerja sama untuk membawa makanan yang ukurannya lebih besar dari tubuhnya."
    },
    capung: {
        nama: "Capung",
        ilmiah: "Odonata",
        gambar: "images/capung.jpg",
        pengertian: "Capung adalah serangga yang memiliki dua pasang sayap dan kemampuan terbang yang baik.",
        habitat: "Dekat sungai, kolam, rawa, dan perairan lainnya.",
        makanan: "Nyamuk dan serangga kecil.",
        jenis: "Capung jarum dan capung biasa.",
        ciri: "Memiliki mata besar, tubuh panjang, dan dua pasang sayap transparan.",
        fakta: "Sebagian besar kehidupan awal capung berlangsung di dalam air."
    },
    belalang: {
        nama: "Belalang",
        ilmiah: "Caelifera",
        gambar: "images/belalang.jpg",
        pengertian: "Belalang merupakan serangga pemakan tumbuhan yang memiliki kaki belakang kuat.",
        habitat: "Padang rumput, sawah, kebun, dan ladang.",
        makanan: "Daun, rumput, dan bagian tumbuhan lainnya.",
        jenis: "Belalang kayu, belalang hijau, dan belalang kembara.",
        ciri: "Memiliki kaki belakang panjang untuk melompat.",
        fakta: "Belalang dapat melompat jauh dibandingkan ukuran tubuhnya."
    },
    kumbang: {
        nama: "Kumbang",
        ilmiah: "Coleoptera",
        gambar: "images/kumbang.jpg",
        pengertian: "Kumbang merupakan kelompok serangga dengan sayap depan yang keras sebagai pelindung.",
        habitat: "Hutan, kebun, tanah, dan berbagai lingkungan lainnya.",
        makanan: "Daun, kayu, buah, jamur, atau serangga kecil, tergantung jenisnya.",
        jenis: "Kumbang tanduk, kumbang koksi, dan kumbang rusa.",
        ciri: "Memiliki sayap depan keras yang melindungi sayap belakang.",
        fakta: "Kumbang merupakan salah satu kelompok hewan dengan jumlah spesies terbanyak."
    },
    nyamuk: {
        nama: "Nyamuk",
        ilmiah: "Culicidae",
        gambar: "images/nyamuk.jpg",
        pengertian: "Nyamuk merupakan serangga kecil yang berkembang biak melalui tahapan kehidupan di air.",
        habitat: "Lingkungan lembap dan tempat yang memiliki genangan air.",
        makanan: "Nektar menjadi makanan bagi banyak nyamuk dewasa; betina dari beberapa jenis juga mengisap darah.",
        jenis: "Aedes, Anopheles, dan Culex.",
        ciri: "Memiliki tubuh kecil, sayap, kaki panjang, dan alat mulut khusus.",
        fakta: "Nyamuk mengalami tahap telur, larva, pupa, dan dewasa."
    },
    "belalang-daun": {
        nama: "Belalang Daun",
        ilmiah: "Tettigoniidae",
        gambar: "images/belalang-daun.jpg",
        pengertian: "Belalang daun merupakan serangga yang bentuk tubuh dan warnanya menyerupai daun.",
        habitat: "Pepohonan, semak, dan hutan tropis.",
        makanan: "Daun dan bagian tumbuhan lainnya.",
        jenis: "Berbagai jenis belalang daun dalam kelompok Tettigoniidae.",
        ciri: "Memiliki bentuk tubuh menyerupai daun untuk berkamuflase.",
        fakta: "Kamuflase membantu belalang daun menghindari perhatian predator."
    },

    // ================= REPTILES =================
    buaya: {
        nama: "Buaya",
        ilmiah: "Crocodylidae",
        gambar: "images/buaya.jpg",
        pengertian: "Buaya merupakan reptil semiakuatik yang hidup di air dan di daratan.",
        habitat: "Sungai, rawa, danau, serta wilayah pesisir.",
        makanan: "Ikan, burung, dan berbagai hewan lainnya.",
        jenis: "Buaya muara, buaya nil, dan buaya siam.",
        ciri: "Memiliki tubuh bersisik, ekor kuat, dan rahang besar.",
        fakta: "Buaya merupakan reptil yang telah hidup sejak zaman purba."
    },
    ular: {
        nama: "Ular",
        ilmiah: "Serpentes",
        gambar: "images/ular.jpg",
        pengertian: "Ular adalah reptil tanpa kaki yang bergerak dengan mengandalkan otot tubuhnya.",
        habitat: "Hutan, padang rumput, rawa, dan berbagai lingkungan lainnya.",
        makanan: "Tikus, katak, burung, telur, dan hewan kecil lainnya.",
        jenis: "Kobra, piton, sanca, dan ular hijau.",
        ciri: "Memiliki tubuh panjang tanpa kaki dan kulit bersisik.",
        fakta: "Ular menggunakan lidahnya untuk membantu mengenali zat kimia di lingkungan."
    },
    komodo: {
        nama: "Komodo",
        ilmiah: "Varanus komodoensis",
        gambar: "images/komodo.jpg",
        pengertian: "Komodo merupakan kadal terbesar yang masih hidup dan berasal dari Indonesia.",
        habitat: "Pulau Komodo, Rinca, Flores, Gili Motang, dan Gili Dasami.",
        makanan: "Rusa, babi hutan, dan hewan lainnya.",
        jenis: "Komodo merupakan satu spesies kadal, yaitu Varanus komodoensis.",
        ciri: "Memiliki tubuh besar, ekor kuat, cakar tajam, dan lidah bercabang.",
        fakta: "Komodo merupakan satwa asli Indonesia yang dilindungi."
    },
    "kura-kura": {
        nama: "Kura-kura",
        ilmiah: "Testudines",
        gambar: "images/kura-kura.jpg",
        pengertian: "Kura-kura adalah reptil yang memiliki cangkang sebagai pelindung tubuhnya.",
        habitat: "Darat, sungai, danau, serta laut, tergantung jenisnya.",
        makanan: "Tumbuhan, buah, serangga, dan hewan air kecil, sesuai jenisnya.",
        jenis: "Kura-kura darat, kura-kura air tawar, dan penyu laut.",
        ciri: "Memiliki cangkang keras dan tubuh yang dapat menarik sebagian anggota tubuhnya ke dalam cangkang.",
        fakta: "Cangkang kura-kura merupakan bagian dari kerangka tubuhnya."
    },
    iguana: {
        nama: "Iguana",
        ilmiah: "Iguana",
        gambar: "images/iguana.jpg",
        pengertian: "Iguana merupakan reptil yang banyak hidup di pepohonan dan memiliki ekor panjang.",
        habitat: "Hutan tropis dan kawasan hangat di Amerika Tengah serta Amerika Selatan.",
        makanan: "Daun, bunga, dan buah.",
        jenis: "Iguana hijau dan iguana Antillen Kecil.",
        ciri: "Memiliki kulit bersisik, jambul punggung, dan ekor panjang.",
        fakta: "Iguana hijau merupakan perenang yang baik."
    },
    bunglon: {
        nama: "Bunglon",
        ilmiah: "Chamaeleonidae",
        gambar: "images/bunglon.jpg",
        pengertian: "Bunglon merupakan kelompok reptil yang terkenal dengan kemampuan mengubah warna tubuh.",
        habitat: "Pepohonan dan semak di berbagai wilayah hangat.",
        makanan: "Serangga dan hewan kecil.",
        jenis: "Bunglon panther, bunglon veiled, dan bunglon Jackson.",
        ciri: "Memiliki mata yang dapat bergerak secara independen dan lidah panjang.",
        fakta: "Perubahan warna bunglon juga digunakan untuk komunikasi dan mengatur suhu tubuh."
    },
    cicak: {
        nama: "Cicak",
        ilmiah: "Gekkonidae",
        gambar: "images/cicak.jpg",
        pengertian: "Cicak merupakan reptil kecil yang sering ditemukan di dinding rumah dan pepohonan.",
        habitat: "Rumah, pepohonan, kebun, dan kawasan berbatu.",
        makanan: "Nyamuk, lalat, dan serangga kecil.",
        jenis: "Cicak rumah, cicak terbang, dan berbagai jenis tokek kecil.",
        ciri: "Memiliki kaki dengan bantalan perekat yang membantu memanjat permukaan.",
        fakta: "Beberapa jenis cicak dapat melepaskan ekornya untuk mengalihkan perhatian predator."
    },
    kadal: {
        nama: "Kadal",
        ilmiah: "Lacertilia",
        gambar: "images/kadal.jpg",
        pengertian: "Kadal merupakan kelompok reptil yang umumnya memiliki empat kaki dan ekor panjang.",
        habitat: "Hutan, kebun, padang rumput, dan daerah berbatu.",
        makanan: "Serangga, hewan kecil, dan tumbuhan, tergantung jenisnya.",
        jenis: "Kadal kebun, kadal pasir, dan kadal lidah biru.",
        ciri: "Memiliki kulit bersisik, empat kaki pada sebagian besar jenis, dan ekor panjang.",
        fakta: "Beberapa jenis kadal dapat melepaskan ekornya sebagai mekanisme pertahanan."
    },

    // ================= KARNIVORA =================
    serigala: {
        nama: "Serigala",
        ilmiah: "Canis lupus",
        gambar: "images/serigala.jpg",
        pengertian: "Serigala merupakan mamalia karnivora yang hidup dan berburu secara berkelompok.",
        habitat: "Hutan, padang rumput, tundra, dan pegunungan.",
        makanan: "Rusa, kelinci, mamalia kecil, dan hewan lainnya.",
        jenis: "Serigala abu-abu, serigala Arktik, dan serigala merah.",
        ciri: "Memiliki moncong panjang, telinga tegak, bulu tebal, dan gigi tajam.",
        fakta: "Serigala menggunakan suara dan bahasa tubuh untuk berkomunikasi."
    },

    cheetah: {
        nama: "Cheetah",
        ilmiah: "Acinonyx jubatus",
        gambar: "images/cheetah.jpg",
        pengertian: "Cheetah merupakan mamalia karnivora yang dikenal sebagai hewan darat tercepat.",
        habitat: "Padang rumput dan savana di Afrika.",
        makanan: "Antelop, kelinci, dan mamalia kecil.",
        jenis: "Cheetah Afrika dan cheetah Asia.",
        ciri: "Memiliki tubuh ramping, kaki panjang, dan bintik hitam pada bulunya.",
        fakta: "Cheetah memiliki kemampuan berlari sangat cepat dalam jarak pendek."
    },

    macan_tutul: {
        nama: "Macan Tutul",
        ilmiah: "Panthera pardus",
        gambar: "images/macantutul.jpg",
        pengertian: "Macan tutul merupakan mamalia karnivora dari keluarga kucing besar.",
        habitat: "Hutan tropis, padang rumput, dan kawasan pegunungan.",
        makanan: "Rusa, monyet, babi hutan, dan mamalia lainnya.",
        jenis: "Macan tutul Afrika, Jawa, India, dan Amur.",
        ciri: "Memiliki tubuh kuat dan pola bintik berbentuk roset pada bulunya.",
        fakta: "Macan tutul merupakan pemanjat pohon yang sangat baik."
    },

    hyena: {
        nama: "Hyena",
        ilmiah: "Hyaenidae",
        gambar: "images/hyena.jpg",
        pengertian: "Hyena merupakan mamalia karnivora yang dikenal sebagai pemburu sekaligus pemakan bangkai.",
        habitat: "Savana, padang rumput, dan kawasan terbuka di Afrika.",
        makanan: "Daging, bangkai, dan berbagai jenis hewan.",
        jenis: "Hyena tutul, hyena belang, hyena cokelat, dan aardwolf.",
        ciri: "Memiliki rahang kuat, telinga tegak, dan kaki depan lebih panjang daripada kaki belakang.",
        fakta: "Hyena tutul hidup dalam kelompok sosial yang disebut klan."
    },

    // ================= OMNIVORA =================
    beruang: {
        nama: "Beruang",
        ilmiah: "Ursidae",
        gambar: "images/beruang.jpg",
        pengertian: "Beruang merupakan mamalia yang sebagian besar jenisnya memiliki pola makan omnivora.",
        habitat: "Hutan, pegunungan, dan kawasan kutub, tergantung jenisnya.",
        makanan: "Buah, akar, ikan, serangga, dan hewan kecil.",
        jenis: "Beruang madu, beruang kutub, beruang cokelat, dan panda.",
        ciri: "Memiliki tubuh besar, cakar kuat, dan indra penciuman yang tajam.",
        fakta: "Beruang memiliki indra penciuman yang sangat baik."
    },

    babi: {
        nama: "Babi",
        ilmiah: "Sus scrofa",
        gambar: "images/babi.jpg",
        pengertian: "Babi merupakan mamalia omnivora yang dapat memakan berbagai jenis tumbuhan dan hewan kecil.",
        habitat: "Hutan, padang rumput, dan lingkungan peternakan.",
        makanan: "Akar, buah, biji-bijian, serangga, dan hewan kecil.",
        jenis: "Babi hutan dan babi domestik.",
        ciri: "Memiliki moncong kuat, tubuh berisi, dan indra penciuman yang baik.",
        fakta: "Babi memiliki kemampuan belajar dan mengingat yang baik."
    },

    ayam: {
        nama: "Ayam",
        ilmiah: "Gallus gallus domesticus",
        gambar: "images/ayam.jpg",
        pengertian: "Ayam merupakan unggas omnivora yang banyak dipelihara oleh manusia.",
        habitat: "Peternakan, pekarangan, dan lingkungan pedesaan.",
        makanan: "Biji-bijian, rumput, serangga, dan cacing.",
        jenis: "Ayam kampung, ayam broiler, dan ayam kate.",
        ciri: "Memiliki paruh pendek, dua kaki, sayap, dan bulu.",
        fakta: "Ayam berkomunikasi menggunakan berbagai jenis suara."
    },

    bebek: {
        nama: "Bebek",
        ilmiah: "Anatidae",
        gambar: "images/bebek.jpg",
        pengertian: "Bebek merupakan kelompok unggas air yang dapat memakan tumbuhan dan hewan kecil.",
        habitat: "Danau, sungai, rawa, dan kawasan perairan.",
        makanan: "Tumbuhan air, biji-bijian, serangga, dan hewan air kecil.",
        jenis: "Bebek domestik, bebek liar, dan bebek mandarin.",
        ciri: "Memiliki paruh pipih, kaki berselaput, dan bulu yang tahan air.",
        fakta: "Kaki berselaput membantu bebek berenang di air."
    },

    monyet: {
        nama: "Monyet",
        ilmiah: "Cercopithecidae dan Platyrrhini",
        gambar: "images/monyet.jpg",
        pengertian: "Monyet merupakan kelompok primata yang sebagian besar memiliki pola makan beragam.",
        habitat: "Hutan tropis, hutan pegunungan, dan kawasan pepohonan.",
        makanan: "Buah, daun, biji-bijian, serangga, dan hewan kecil.",
        jenis: "Monyet ekor panjang, monyet rhesus, dan monyet hitam Sulawesi.",
        ciri: "Memiliki tangan yang dapat menggenggam dan kemampuan memanjat.",
        fakta: "Monyet merupakan hewan sosial yang hidup dalam kelompok."
    },

    rakun: {
        nama: "Rakun",
        ilmiah: "Procyon lotor",
        gambar: "images/rakun.jpg",
        pengertian: "Rakun merupakan mamalia omnivora yang dikenal dengan pola hitam di sekitar matanya.",
        habitat: "Hutan, rawa, dan kawasan perkotaan di Amerika Utara.",
        makanan: "Buah, kacang-kacangan, serangga, ikan, dan hewan kecil.",
        jenis: "Rakun biasa dan beberapa kerabat rakun lainnya.",
        ciri: "Memiliki ekor bercincin, wajah khas, dan kaki depan yang cekatan.",
        fakta: "Rakun dikenal memiliki kemampuan memanipulasi benda dengan kaki depannya."
    },

    tikus: {
        nama: "Tikus",
        ilmiah: "Rattus",
        gambar: "images/tikus.jpg",
        pengertian: "Tikus merupakan mamalia kecil yang dapat memakan berbagai jenis tumbuhan dan sumber makanan hewani.",
        habitat: "Hutan, ladang, perkotaan, dan sekitar permukiman.",
        makanan: "Biji-bijian, buah, akar, serangga, dan sisa makanan.",
        jenis: "Tikus rumah, tikus got, dan tikus ladang.",
        ciri: "Memiliki gigi seri yang terus tumbuh, ekor panjang, dan indra pendengaran baik.",
        fakta: "Tikus memiliki kemampuan beradaptasi di berbagai lingkungan."
    },

    gagak: {
        nama: "Burung Gagak",
        ilmiah: "Corvus",
        gambar: "images/gagak.jpg",
        pengertian: "Burung gagak merupakan burung cerdas yang memiliki pola makan omnivora.",
        habitat: "Hutan, pegunungan, padang terbuka, dan perkotaan.",
        makanan: "Buah, biji-bijian, serangga, bangkai, dan hewan kecil.",
        jenis: "Gagak hutan, gagak besar, dan gagak bangkai.",
        ciri: "Memiliki bulu gelap, paruh kuat, dan kemampuan belajar yang baik.",
        fakta: "Burung gagak mampu menggunakan alat sederhana untuk memperoleh makanan."
    },

    rusa: {
        nama: "Rusa",
        ilmiah: "Cervidae",
        gambar: "images/rusa.jpg",
        pengertian: "Rusa merupakan mamalia herbivora yang memiliki tubuh lincah dan sebagian jenisnya memiliki tanduk.",
        habitat: "Hutan, padang rumput, dan kawasan semak.",
        makanan: "Rumput, daun, tunas, dan buah-buahan.",
        jenis: "Rusa timor, rusa sambar, dan rusa bawean.",
        ciri: "Memiliki kaki panjang, tubuh ramping, dan kemampuan berlari yang baik.",
        fakta: "Sebagian besar rusa jantan memiliki tanduk yang dapat tumbuh kembali."
    },

    kelinci: {
        nama: "Kelinci",
        ilmiah: "Oryctolagus cuniculus",
        gambar: "images/kelinci.jpg",
        pengertian: "Kelinci merupakan mamalia herbivora berukuran kecil yang dikenal dengan telinga panjangnya.",
        habitat: "Padang rumput, hutan, dan lingkungan yang memiliki banyak tumbuhan.",
        makanan: "Rumput, daun, dan berbagai jenis tumbuhan.",
        jenis: "Kelinci domestik dan kelinci liar.",
        ciri: "Memiliki telinga panjang, gigi seri yang terus tumbuh, dan kaki belakang kuat.",
        fakta: "Kelinci memiliki kemampuan mendengar yang baik."
    },

    kuda: {
        nama: "Kuda",
        ilmiah: "Equus caballus",
        gambar: "images/kuda.jpg",
        pengertian: "Kuda merupakan mamalia herbivora yang dikenal memiliki tubuh kuat dan kemampuan berlari.",
        habitat: "Padang rumput, peternakan, dan kawasan terbuka.",
        makanan: "Rumput, jerami, dan tumbuhan lainnya.",
        jenis: "Kuda Arab, kuda Thoroughbred, dan kuda poni.",
        ciri: "Memiliki empat kaki kuat, kuku, serta surai dan ekor berbulu.",
        fakta: "Kuda dapat tidur sambil berdiri dalam kondisi tertentu."
    },

    sapi: {
        nama: "Sapi",
        ilmiah: "Bos taurus",
        gambar: "images/sapi.jpg",
        pengertian: "Sapi merupakan mamalia herbivora yang banyak dipelihara untuk menghasilkan susu dan daging.",
        habitat: "Peternakan, padang rumput, dan kawasan terbuka.",
        makanan: "Rumput, jerami, dan tumbuhan lainnya.",
        jenis: "Sapi Bali, sapi Limousin, sapi Brahman, dan sapi Friesian Holstein.",
        ciri: "Memiliki tubuh besar, empat kaki, dan sistem pencernaan ruminansia.",
        fakta: "Sapi memiliki empat bagian lambung yang membantu mencerna tumbuhan."
    }
};

// Mengambil nama hewan dari alamat URL
const parameterURL = new URLSearchParams(window.location.search);
const namaKunci = parameterURL.get("hewan") || "singa";
const hewan = dataHewan[namaKunci];

// Menampilkan data hewan ke halaman profil
if (hewan) {
    document.title = hewan.nama + " | Zoo-F2NS";

    document.getElementById("namaHewan").textContent = hewan.nama;
    document.getElementById("namaIlmiah").textContent = hewan.ilmiah;

    document.getElementById("gambarHewan").src = hewan.gambar;
    document.getElementById("gambarHewan").alt = hewan.nama;

    document.getElementById("pengertian").textContent = hewan.pengertian;
    document.getElementById("habitat").textContent = hewan.habitat;
    document.getElementById("makanan").textContent = hewan.makanan;
    document.getElementById("jenis").textContent = hewan.jenis;
    document.getElementById("ciri").textContent = hewan.ciri;
    document.getElementById("fakta").textContent = hewan.fakta;
} else {
    document.querySelector(".profile-container").innerHTML =
        "<h2>Profil hewan tidak ditemukan.</h2>";
}

const halamanKategori = {
    singa: "animal.html",
    gajah: "animal.html",
    harimau: "animal.html",
    jerapah: "animal.html",
    zebra: "animal.html",
    orangutan: "animal.html",
    badak: "animal.html",
    panda: "animal.html",

    elang: "birds.html",
    merak: "birds.html",
    burung_hantu: "birds.html",
    nuri: "birds.html",
    flamingo: "birds.html",
    pelikan: "birds.html",
    merpati: "birds.html",
    kakatua: "birds.html",

    "kupu-kupu": "insects.html",
    lebah: "insects.html",
    semut: "insects.html",
    capung: "insects.html",
    belalang: "insects.html",
    kumbang: "insects.html",
    nyamuk: "insects.html",
    "belalang-daun": "insects.html",

    buaya: "reptiles.html",
    ular: "reptiles.html",
    komodo: "reptiles.html",
    "kura-kura": "reptiles.html",
    iguana: "reptiles.html",
    bunglon: "reptiles.html",
    cicak: "reptiles.html",
    kadal: "reptiles.html",

    rusa: "herbivores.html",
    kelinci: "herbivores.html",
    kuda: "herbivores.html",
    sapi: "herbivores.html",

    serigala: "carnivores.html",
    cheetah: "carnivores.html",
    macan_tutul: "carnivores.html",
    hyena: "carnivores.html",

    beruang: "omnivores.html",
    babi: "omnivores.html",
    ayam: "omnivores.html",
    bebek: "omnivores.html",
    monyet: "omnivores.html",
    rakun: "omnivores.html",
    tikus: "omnivores.html",
    gagak: "omnivores.html"
};

const tombolKembali = document.getElementById("tombolKembali");

if (tombolKembali) {
    tombolKembali.href =
        halamanKategori[namaKunci] || "jelajahi.html";
}