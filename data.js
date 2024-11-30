const nama = "ci rusdi bos ku";
let usia = ;

const biodata = document.getElementById(`biodata`);

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 16) {  
        generasi = "generasi penerus ci rusdi";
    } else if (usia > 20 && usia < 90) {
    generasi = "anda member nya mas jmk 48";
    }
     else if (usia < 189) {
        generasi = "edo ganteng nya najis bisa dipercepat gak";
     }
     else if(usia < 9) {
        generasi = "he member suki sudah kita sudah tenggelam";
     }
     else {
        generasi = "anda anak suki"; 
    }

return biodata.innerHTML = generasi;

}

console.log(nama);
console.log(usia)

generateBiodata();