import { useState } from "react";
import Board from "./Board";
import History from "./History";

export default function Game() {
    const [player, setPlayer] = useState("X")
    const [winner, setWinner] = useState(null)
    const [history, setHistory] = useState([[
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]])
    const [move, setMove] = useState(0)
    const grid = history[move]
    console.log(grid, move, history.length)
    
    
    const isWin = () => {
        const lines = [
            [[0 ,0], [0, 1], [0, 2]], // -
            [[1 ,0], [1, 1], [1, 2]],
            [[2 ,0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]], // |
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]], // \
            [[0, 2], [1, 1], [2, 0]]
        ]
        for (const line of lines) {
            let winnerReq = 3
            for (const position of line) {
                if (grid[position[0]][position[1]] == player) {
                    winnerReq--;
                }
            }
            if (winnerReq==0) {
                setWinner(player)
            }
        }
    }
    
    const handleClick = (i, j) => {
        if (grid[i][j] == "" && winner == null) {
            const newGrid = grid.slice()
            newGrid[i][j] = player
            setHistory([...history, newGrid])
            setMove(history.length-1)
            isWin()
            if (winner == null) {
                setPlayer(p => p=='X' ? 'O' : 'X')
            }
        }
    }
    
    function handleHistory(index) {
        console.log(index)
        setMove(index)
    }
    
    
    return <div className="game">
    <Board 
    player={player} 
    winner={winner}
    grid={grid} 
    handleClick={handleClick}
    />
    <History 
    history={history}
    handleClick={handleHistory}
    />
    </div>
}
