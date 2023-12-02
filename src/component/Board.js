import { useState } from "react";
import Square from "./Square";

export default function Board() {
    const [player, setPlayer] = useState("X")
    const [winner, setWinner] = useState(null)
    const [grid, setGrid] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ])

    const isWin = () => {
        const lines = [
            [[0 ,0], [0, 1], [0, 2]],
            [[1 ,0], [1, 1], [1, 2]],
            [[2 ,0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
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
            setGrid(newGrid)
            isWin()
            setPlayer(p => p=='X' ? 'O' : 'X')
        }
    }

    return <>
    <div className='row'>
    <Square value={grid[0][0]} onClick={() => handleClick(0, 0)}/>
    <Square value={grid[0][1]} onClick={() => handleClick(0, 1)}/>
    <Square value={grid[0][2]} onClick={() => handleClick(0, 2)}/>
    </div>
    
    <div className='row'>
    <Square value={grid[1][0]} onClick={() => handleClick(1, 0)}/>
    <Square value={grid[1][1]} onClick={() => handleClick(1, 1)}/>
    <Square value={grid[1][2]} onClick={() => handleClick(1, 2)}/>
    </div>
    
    <div className='row'>
    <Square value={grid[2][0]} onClick={() => handleClick(2, 0)}/>
    <Square value={grid[2][1]} onClick={() => handleClick(2, 1)}/>
    <Square value={grid[2][2]} onClick={() => handleClick(2, 2)}/>
    </div>
    </>
}