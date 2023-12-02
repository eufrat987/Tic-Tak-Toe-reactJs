import { useState } from "react"

export default function Square ({pos, setPlayer, setGrid, grid}) {
    const onClick = () => {
        console.log(grid[pos.x][pos.y])
        if (grid[pos.x][pos.y] == "") {
            setPlayer(p => {
                if (p=='X') {
                    setGrid(grid => {
                        console.log(grid)
                        grid[pos.x][pos.y] = 'X'
                        return grid
                    })
                    return 'O'
                } else {
                    setGrid(grid => {
                        grid[pos.x][pos.y] = 'O'
                        return grid
                    })
                    return 'X'
                }
            })
        }
    }
    
    return (
        <button className="square" onClick={onClick}>
        {  grid[pos.x][pos.y]  }
        </button>
        )
    }