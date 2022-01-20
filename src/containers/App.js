import { Component } from "react";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";
import "tachyons";

class App extends Component {
    constructor() {
        super();

        this.state = {
            origialKitties: [],
            kitties: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) =>
                [
                    { id: 1012, name: "Zero", email: "Zero@koolkitties.com" },
                ].concat(users.concat(users))
            )
            .then((users) => this.setState({ origialKitties: users }))
            .then(() => this.setState({ kitties: this.state.origialKitties }));
    }

    onSearchChange = (e) => {
        this.setState({ searchField: e.target.value.toLowerCase() }, () => {
            const filteredKitties = this.state.origialKitties.filter((kitty) =>
                kitty.name.toLowerCase().includes(this.state.searchField)
            );

            this.setState({ kitties: filteredKitties });
        });
    };

    render() {
        const renderElement = () => {
            const { kitties } = this.state;
            if (!kitties.length) {
                return <h2>Loading</h2>;
            }
            return <CardList data={kitties} />;
        };

        return (
            <div className="tc">
                <h1>React Kats😺</h1>
                <SearchBar searchChange={this.onSearchChange} />
                <Scroll>{renderElement()}</Scroll>
            </div>
        );
    }
}

export default App;
