// if,else,nested-if
let nilai = 85;

if (nilai >= 90) {
  //if
  console.log("Nilai saya A");
} else if (nilai > 80) {
  //nested if
  console.log("Nilai saya B +");
} else if (nilai >= 8) {
  console.log("Nilai saya B");
} else if (nilai >= 75) {
  console.log("Nilai saya C +");
} else if (nilai >= 70) {
  console.log("Nilai saya C");
} else {
  //else
  console.log("Nilai saya D");
}

// switch case
let buah = "Sirsak";

switch (buah) {
  case "Mangga":
    console.log("Ini buah Mangga");
    break;
  case "Sirsak":
    console.log("Ini buah Sirsak");
    break;
  case "Jeruk":
    console.log("Ini buah Jeruk");
    break;
  default:
    console.log("Ini buah yang tidak ada di list");
}

// for statement
for (let i = 1; i <= 7; i++) {
  console.log("Iterasi ke-" + i);
}

// while, do while
let x = 1;

do {
  console.log("Nilai x: " + x);
  x++;
} while (x <= 15);

// function
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(10, 20);
console.log("Hasil penambahan: " + hasil);