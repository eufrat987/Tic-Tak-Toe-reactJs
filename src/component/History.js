
export default function History({history, handleClick}) {
    return <ul>
    {
        history.map((h, idx) => {
            if (idx == 0) {
                return <li key={idx}> <button onClick={() => handleClick(0)}>Go to game start</button> </li>
            }
            return <li key={idx}> <button onClick={() => handleClick(idx)}>Go to move #{idx}</button> </li>
        }
        )
    }
    </ul>
}