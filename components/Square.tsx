interface SquareProps {
    value: string;
    onSquareClick: any;
}

export default function Square({ value, onSquareClick }: SquareProps) {
    return (
        <button className="square" onClick={ onSquareClick }>
        {  value }
        </button>
    );
}