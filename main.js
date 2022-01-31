const board = document.querySelectorAll(`.square`);


let country = 0;

for (let i = 0; i < board.length; i++) {


    const changeClick =() =>{
        country++;
        if( country% 2 ==0 ){
            addCross()
        } else{
            addOver()     
        }
        
        if(board[i].classList.contains('adds')){
            board[i].removeEventListener("click", changeClick)
      console.log(country);
      
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
