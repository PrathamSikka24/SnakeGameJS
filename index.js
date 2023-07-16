//Game constants and variables


const direction={x:0, y:0}
const foodSound=new Audio('food.mp3');
const gameOverSound=new Audio('game-over.mp3');
const changeDirSound=new Audio('changedirection.mp3');
const backgroundMusic=new Audio('backgroundmusic.mp3');
let speed=2;
let lastPaintTime=0;
let snakeArr= [

    { x: 15, y:13}
]
food={
    x:6, y:7
};

//Game Functions

function main(ctime){
window.requestAnimationFrame(main);
console.log(ctime)
if((ctime- lastPaintTime)/1000 < 1/speed){
return;
}
lastPaintTime=ctime;
gameEngine();

}
function gameEngine(){
    //Part 1: Display the snake array and food




    //Part 2: Display the snake
    board.innerHTML="";
    snakeArr.forEach((e, index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        snakeElement.classList.add('snake')
        board.appendChild(snakeElement);
        if (index===0){
            snakeElement.classList.add('head');

        }
        board.appendChild(snakeElement);
       
    }
    
    );
        foodElement=document.createElement('div');
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add('food')
        board.appendChild(snakeElement);


}