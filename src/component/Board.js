import { useState } from "react";
import Square from "./Square";

export default function Board(
    {
        player, 
        winner, 
        grid, 
        handleClick
    }) {
    
    return <>
    <div> 
    {
        winner == null 
        ? "Next player: " + player 
        : "Winner: " + winner
    }  
    </div>
    <br/>
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