
/*
 make class of innerGame use that to store data about everygame associated with a div
 everytime a div is clicked render that game 
 update that game according to whose turn it is and move on to the next game
 first add an event listener to all the game divs on click on one div open that up and render its inner game
 remove the event listener from all arrays now and only show the game that is still playable 
 make a minimize button to view all the games in every div
 maybe not render the games each time but only update them every time to reflect their new state in the javascript
 

 requirements
    A simple tictactoe board with a game inside each cell
    showing the game that is currently being played
    showing the whole of the board when user requires
    updating the state of the game as it is being played 
    checking if the game is over or not after every move
    checking if the whole game is over or not after every cell game is over


directions
    make the grid layout for outer game and inner game 
    make a class to represent the inner game 
    make sure the inner game is working perfectly before moving on to transitioning between games

 */


    /*
    change the dataset property in html to start from 1
    */




    // we will re write it all tommorow shit ton of bugs couldnt understand what was going will do a re write with proper testing along the way
    /*
    psuedo code
    outergame class 
        3*3 martrix of inner games 
        
        inner games will have
        the div with the gamethe div id associated with it will also be stored
        all 9 cells of their divs 
        and a 3*3 matrix to represent state
    we will try an oop solution that is what will work best here

    */



/*
    everything seems to be working add functionality to detect draw in outer and inner game as well
    also add functionality to check winner in outer game copying this code till here to save in a backup.txt file 
    if we lose it again
*/





    class outerGame 
    {
        constructor()
        {
          this.matrix = 
          [
            [new innerGame(0),new innerGame(1),new innerGame(2)],
            [new innerGame(3),new innerGame(4),new innerGame(5)],
            [new innerGame(5),new innerGame(7),new innerGame(8)]
          ]
          this.winner= "0"
          this.finished = false
        }

        update(outerGrid, innerGrid)
        {
           return this.matrix[outerGrid.row][outerGrid.col].update(innerGrid)
        }
        checkWinner() 
        {
            /*
             j  0  1  2
            i 
            0   X  X  X
            1   X  X  X
            2   X  X  X
            */
            
            // Check rows for a winner
            for (let i = 0; i < 3; i++) {
                if (this.matrix[i][0].winner === this.matrix[i][1].winner && this.matrix[i][1].winner === this.matrix[i][2].winner  && (this.matrix[i][0].winner != "0" && this.matrix[i][0].winner != "DRAW")) {
                    this.winner = this.matrix[i][0].winner;
                    this.finished = true
                    return;
                }
                if (this.matrix[0][i].winner === this.matrix[1][i].winner && this.matrix[1][i].winner === this.matrix[2][i].winner  && (this.matrix[0][i].winner != "0" && this.matrix[0][i].winner != "DRAW")) {
                    this.winner = this.matrix[0][i].winner;
                    this.finished = true
                    return;
                }
            }
        
            
        
            // Check diagonals for a winner
            if (this.matrix[0][0].winner === this.matrix[1][1].winner && this.matrix[1][1].winner === this.matrix[2][2].winner  && (this.matrix[0][0].winner != "0" && this.matrix[0][0].winner != "DRAW")) {
                this.winner = this.matrix[0][0].winner;
                this.finished = true
                return;
            }
        
            if (this.matrix[0][2].winner === this.matrix[1][1].winner && this.matrix[1][1].winner === this.matrix[2][0].winner  && (this.matrix[1][1].winner != "0" && this.matrix[1][1].winner != "DRAW")) {
                this.winner = this.matrix[i][0].winner;
                this.finished = true
                return;
            }
        
            return;
        }
    }
    class innerGame 
    {
        constructor(id)
        {
            this.matrix = 
            [
                ["0","0","0"],
                ["0","0","0"],
                ["0","0","0"]
            ]
            this.id = id
            this.winner = "0"
            this.finished = false
        }
        update(innerGrid)
        {
            // console.log("in update function inner game     ", this)
            this.matrix[innerGrid.row][innerGrid.col]
            if(this.matrix[innerGrid.row][innerGrid.col]!= "0")
            {
                throw "Not Empty"
            }
            this.matrix[innerGrid.row][innerGrid.col] = player
            this.checkWinner()
            this.checkDraw()
            return this.finished
            
        }
        checkWinner() 
        {
            /*
             j  0  1  2
            i 
            0   X  X  X
            1   X  X  X
            2   X  X  X
            */
            
            // Check rows for a winner
            for (let i = 0; i < 3; i++) {
                if (this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][1] === this.matrix[i][2]  && (this.matrix[i][0] != "0")) {
                    this.winner = this.matrix[i][0];
                    this.finished = true
                    return;
                }
                if (this.matrix[0][i] === this.matrix[1][i] && this.matrix[1][i] === this.matrix[2][i] && (this.matrix[0][i] != "0")) {
                    this.winner = this.matrix[0][i];
                    this.finished = true
                    return;
                }
            }
        
            
        
            // Check diagonals for a winner
            if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2] && (this.matrix[0][0] != "0")) {
                this.winner = this.matrix[0][0];
                this.finished = true
                return;
            }
        
            if (this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0] && (this.matrix[2][0] != "0")) {
                this.winner = this.matrix[0][2];
                this.finished = true
                return;
            }
        
            return;
        }
        checkDraw()
        {
            if(this.finished)
            {
                return
            }

            for(let i = 0; i<3;i++)
            {
                for(let j = 0; j<3; j++)
                {
                    if(this.matrix[i][j] == "0")
                    {
                        return
                    }
                }
            }
            this.finished = true
            this.winner = "DRAW"
        }
        
    }

    const game = new outerGame()
    const outerCells = document.querySelectorAll(".game") 
    const innerCells = document.querySelectorAll(".innerCell")
    let tileChosen = false
    const alerDiv = document.getElementById("alerts")
    let player = "X"
    let sameElClicked = false
    alerDiv.innerHTML = `Player ${player} Turn`
    outerCells.forEach(element =>
        {
            element.addEventListener("click",(e)=>
            {
                const currCell = e.currentTarget
                // console.log(currCell , "    this cell was clicked")
                // console.log("tile chosen  " , tileChosen)
                if(tileChosen)
                {
                    // console.log("clicked but tile chosen")
                    return
                }
                if(currCell.classList.contains("finished"))
                {
                    // console.log("clicked but game finished")

                    return
                }
                if(sameElClicked)
                {
                    sameElClicked = false
                    return
                }
                outerCells.forEach(element=>{
                    element.classList.remove("active")
                })

                    currCell.classList.add("active")
               
                tileChosen = true
            })
        })
    innerCells.forEach(element =>
        {
            element.addEventListener("click" , (e)=>
            {
                const currCell = e.currentTarget
                const parentCell = currCell.parentElement.parentElement
                if (!parentCell.classList.contains("active"))
                {
                    return
                } 
                // console.log(currCell)
                const outerGameGrid = matchNumberWithGrid(parentCell.dataset.id)
                const innerGameGrid = matchNumberWithGrid(currCell.dataset.id)
                let isFinished
                try
                {
                    isFinished =   game.update(outerGameGrid,innerGameGrid)
                }
                catch
                {
                    alerDiv.innerHTML = `Cell Already played try again player ${player}`
                    return
                }
                // console.log("is finished   " , isFinished)
                if (!isFinished)
                {
                    currCell.innerHTML = player
                    togglePlayer()
                    shift(currCell.dataset.id)
                    return
                }

                parentCell.innerHTML  = game.matrix[outerGameGrid.row][outerGameGrid.col].winner
                parentCell.classList.add("finished")
                game.checkWinner()
                if(game.finished)
                {
                    alerDiv.innerHTML = `GAME IS FINISHED PLAYER ${game.winner} IS THE WINNER`
                    return
                }
                togglePlayer()
                shift(currCell.dataset.id)
                return
            })
        })


function matchNumberWithGrid(number) {
    const grid = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"]
    ];

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (grid[row][col] === number) {
                return { row, col };
            }
        }
    }

    return null;
}
function shift(id)
{


    let nextCell
    outerCells.forEach(element=>{
        element.classList.remove("active")
        if(element.dataset.id == id)
        {
            nextCell = element
        }
    })
    // console.log("nextCell   " , nextCell)

    if (nextCell.classList.contains("finished"))
    {
        tileChosen = false
        sameElClicked = true
        // console.log(tileChosen)
        // console.log("edge case")
        outerCells.forEach(element=>{
            element.classList.remove("active")
            // console.log(element)
        })
        
        return
    }
    nextCell.classList.add("active")
    return
      
}

function togglePlayer()
{
    if(player == "X")
    { 
        player = "O"
       
    }
    else
    {

        player = "X"
    }
    alerDiv.innerHTML = `Player ${player} Turn`
}

        