interface ClearButtonProps {
    onClick: () => void;    
    className?: string;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClick, className }) => {
    return (
        <button onClick={onClick} className={`clearButton ${className}`}>
            Clear
        </button>
    );
};

export default ClearButton;

