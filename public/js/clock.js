let clock = document.querySelector('#digi-clock');
function dongHo() {
    let times = new Date();
    clock.innerHTML = times.getHours() + ':' + times.getMinutes() + ':' + times.getSeconds();
    setTimeout(dongHo , 1000);
}
setTimeout(dongHo , 1000);

// let hours = document.querySelector('#hours');
// let minutes = document.querySelector('#minutes');
// let seconds = document.querySelector('#seconds');

// let giay = 0;
// let phut = 0;
// let gio = 0;



// function tangGiay() {
//     setTimeout(tangGiay, 1000);
//     giay++;
//     if(giay === 60){
//         phut++;
//         giay = 0;
//         if (phut === 60){
//             gio++;
//             phut = 0;
//             if(gio == 24){
//                 gio = 0;
//                 phut = 0;
//                 giay = 0;
//             }
//         }
//     }
//     hours.innerHTML = gio;
//     minutes.innerHTML = phut;
//     seconds.innerHTML = giay;
// }
// tangGiay();