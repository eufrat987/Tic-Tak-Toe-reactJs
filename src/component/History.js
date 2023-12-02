
export default function History({history, handleClick}) {
    let idx = 0;
    return <ul>
    {
        history.map(h => {
            if (idx == 0) {
                idx++;
                return <li key={idx}> <button onClick={() => handleClick(0)}>Go to game start</button> </li>
            }
            const state = idx
            return <li key={idx}> <button onClick={() => handleClick(state)}>Go to move #{idx++}</button> </li>
        }
        )
    }
    </ul>
}