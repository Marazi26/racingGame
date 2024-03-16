const crowd = document.getElementById('crowd')
const sound = document.getElementById('sound')
const start = document.querySelector('.start')


const traffic = document.querySelector('traffic')
const karmir = document.querySelector('.karmir')
const dexin = document.querySelector('.dexin')
const kanach = document.querySelector('.kanach')

const blueCar = document.querySelector('.blue-car')
const redCar = document.querySelector('.red-car')

const finish = document.querySelector('.finish')


function moveRight(img) {
    const autoPosition = parseInt(img.style.left) || 0;
    img.style.left = autoPosition + (Math.random() * 10 + 30) + "px";

    if (autoPosition > 1320) {
        clearInterval(moveInterval); 
        alert(img.classList.contains('blue-car') ? "Blue Car Wins!" : "Red Car Wins!").classList('alert');
    }
}

const starttraffic = (  
    start.addEventListener('click', () => {
        console.log("hello")
        setTimeout(() => {
            karmir.style.backgroundColor = "red"
            dexin.style.backgroundColor = "yellow"
            kanach.style.backgroundColor = "green"
        },1000)

        setTimeout(() => {
            karmir.style.backgroundColor = "rgb(21, 185, 21)"
            dexin.style.backgroundColor = "rgb(21, 185, 21)"
            kanach.style.backgroundColor = "rgb(21, 185, 21)"
        },3000)
    })
)

const moveInterval = setInterval(() => {
    const trafficColor = getComputedStyle(kanach).backgroundColor;
    if (trafficColor === "rgb(21, 185, 21)") { 
        moveRight(blueCar);
        moveRight(redCar);
    }
}, 70); 



// // let crowdMusic = new Audio("./sound/YouTube-3.mp3")
// // let soundMusic = new Audio("sound/Racing Car - Sound Effect (HD)-1.mp3")


// // function playmusic(){
// //     start.addEventListener('click', (e) =>{
// //         e.preventDefault()
// //         if(e.target){
// //             crowdMusic.play()
// //         } else {
// //             soundMusic.play()
// //         }
// //     })
// //     console.log(256);
// // }
