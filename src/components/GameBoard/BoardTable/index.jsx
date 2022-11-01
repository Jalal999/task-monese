import './BoardTableStyle.scss';

const BoardTable = ({cells, handleClick}) => {

    const onClick = (num) => {
        handleClick(num);
    }

    const BoardCell = ({ num }) => {
        return <td style={{ color: cells[num] === 'X' ? 'blue' : 'red' }} onClick={() => onClick(num)}>{cells[num]}</td>
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <BoardCell num={0} />
                        <BoardCell num={1} />
                        <BoardCell num={2} />
                    </tr>
                    <tr>
                        <BoardCell num={3} />
                        <BoardCell num={4} />
                        <BoardCell num={5} />
                    </tr>
                    <tr>
                        <BoardCell num={6} />
                        <BoardCell num={7} />
                        <BoardCell num={8} />
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default BoardTable;