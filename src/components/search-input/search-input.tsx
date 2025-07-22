import './search-input.scss';

interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<Props> = ({ value, onChange }) => {
    return (
        <div className="search-input-wrapper">
            <input
                className="search-input"
                type="text"
                placeholder="🔍 Search for a movie..."
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default SearchInput;