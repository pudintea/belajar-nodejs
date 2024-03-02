
--
-- Table
--

CREATE TABLE `sekolah` (
  `id` int(11) UNSIGNED NOT NULL,
  `nama` varchar(60) NOT NULL,
  `kelas` varchar(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `sekolah`
--

INSERT INTO `sekolah` (`id`, `nama`, `kelas`) VALUES
(1, 'Pudin', '10 IPA 1'),
(2, 'Najzmi', '11 IPA1'),
(3, 'Ajat', '7A'),
(4, 'Imron', '8A'),
(5, 'Erlan', '8B'),
(6, 'Dodi', '7A');