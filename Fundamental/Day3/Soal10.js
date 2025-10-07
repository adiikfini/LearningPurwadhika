function checkDataType(data) {
  // Gunakan operator typeof untuk mendapatkan tipe data dalam bentuk string
  const dataType = typeof data;

  // Kondisi 1: Cek apakah tipe datanya adalah 'string'
  if (dataType === 'string') {
    return 1;

  // Kondisi 2: Cek apakah tipe datanya adalah 'number'
  } else if (dataType === 'number') {
    return 2;

  // Kondisi 3: Untuk semua tipe data lainnya
  } else {
    return 3;
  }
}

console.log(checkDataType(2));

