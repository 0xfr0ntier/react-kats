const SearchBar = ({ searchChange }) => {
    return (
        <>
            <input
                className="br3 pa3"
                type="search"
                placeholder="Kitty name"
                onChange={searchChange}
            />
        </>
    );
};

export default SearchBar;
