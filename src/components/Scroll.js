const Scroll = (props) => {
    return (
        <div className="ma3" style={{ overflowY: "scroll", height: "37rem" }}>
            {props.children}
        </div>
    );
};

export default Scroll;
