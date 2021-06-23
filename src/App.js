import { Component } from 'react';
import { CardList } from './components//card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    } // valori di default

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users =>this.setState({ monsters: users}))
  }
  
  handleChange = (e) =>{
    this.setState({searchField: e.target.value});
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* setState è asincrona, affinche diventi sincrona dobbiamo passare una () callback */}
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}>
        </SearchBox>

        <CardList monsters={filteredMonsters}>
        {
          this.state.monsters.map(monster => <h1 key={monster.id}>{ monster.name }</h1>)
        }
        </CardList>
        
      </div>
    )






  }
}

export default App;