// [REVISI 1]: Tambahkan tipe return 'void' ke fungsi utama.
// Pastikan tidak ada nilai yang dikembalikan dari fungsi utama, 
// karena tugasnya hanya memanggil callback.
function calculator(num1: number, num2: number, cb: (output: number) => void) {
    let result = num1 + num2;
    return cb(result); 
}

function displayer(output: number): void {
    console.log(output);
}

function displayerv1(output: number): void {
    console.log(`Hasil Calculator = ${output}`);
}

// Pemanggilan fungsi sekarang sudah benar secara tipe dan logika
calculator(5, 10, displayer);
calculator(3, 3, displayerv1);