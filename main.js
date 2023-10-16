const buttonTab = document.querySelectorAll('.button-tab');

buttonTab[0].addEventListener('click', () => select(0));
buttonTab[1].addEventListener('click', () => select(1));
buttonTab[2].addEventListener('click', () => select(2));

function select(index){
    const selectClass = document.querySelectorAll('.tab');

    // Loop melalui semua elemen dalam selectClass
    selectClass.forEach((element, i) => {
        if (i === index) {
            // Jika indeks sesuai dengan yang dipilih, tambahkan kelas 'select'
            element.classList.add('select');
            buttonTab[i].classList.add('select');
        } else {
            // Jika indeks tidak sesuai, hapus kelas 'select'
            element.classList.remove('select');
            buttonTab[i].classList.remove('select');
        }
    });
}
