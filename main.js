const board = document.querySelectorAll(`.square`);


let counter = 0;

for (let i = 0; i < board.length; i++) {
    const changeClick =() =>{
        counter++;
        if( counter% 2 ==0 ){
            addCross()
        } else{
            addOver()     
        }
        
        if(board[i].classList.contains('adds')){
            board[i].removeEventListener("click", changeClick)
    
        }
       
    }
    const addCross = () =>{
        board[i].classList.add(`cross`);
        board[i].classList.add(`adds`);
    }
    const addOver = () =>{
        board[i].classList.add(`over`);
        board[i].classList.add(`adds`);
    }

board[i].addEventListener(`click`,changeClick);
  
}
