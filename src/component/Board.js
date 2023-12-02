import { useState } from "react";
import Square from "./Square";

export default function Board() {
    const [player, setPlayer] = useState("X")
    const [grid, setGrid] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ])

    return <>
    <div className='row'>
    <Square pos={{x:0, y:0}} setPlayer={setPlayer} setGrid={setGrid} grid={grid}/>
    <Square pos={{x:0, y:1}} setPlayer={setPlayer} setGrid={setGrid} grid={grid}/>
    <Square pos={{x:0, y:2}} setPlayer={setPlayer} setGrid={setGrid} grid={grid}/>
    </div>
    
    <div className='row'>
    <Square pos={{x:1, y:0}} setPlayer={setPlayer} setGrid={setGrid} grid={grid}/>
    <Square pos={{x:1, y:1}} setPlayer={setPlayer} setGrid={setGrid} grid={grid}/>
    <Square pos={{x:1, y:2}} setPlayer={setPlayer} setGrid={setGrid} grid={grid}/>
    </div>
    
    <div className='row'>
    <Square pos={{x:2, y:0}} setPlayer={setPlayer} setGrid={setGrid} grid={grid}/>
    <Square pos={{x:2, y:1}} setPlayer={setPlayer} setGrid={setGrid} grid={grid}/>
    <Square pos={{x:2, y:2}} setPlayer={setPlayer} setGrid={setGrid} grid={grid}/>
    </div>
    </>
}