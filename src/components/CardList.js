import Card from "./Card";

const CardList = ({ data }) => {
    return (
        <div className="ma2">
            {data.map(({ id, name, email }, i) => (
                <Card key={i} id={id} name={name} email={email} />
            ))}
        </div>
    );
};

export default CardList;
