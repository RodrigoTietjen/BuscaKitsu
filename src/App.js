import React from 'react';
import './App.scss';
import CharacterService from './service/character-service';
import { QueryTable } from './component/query-table'
import Loader from 'react-loader-spinner';
import { Modal } from './component/modal'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      tableData: [],
      currentPage: 1,
      loading: false,
      selectedCharacter: null
    };

    this.tableConfig = {
      columns: [
        {
          customCellRender: this.customCellRender,
          label: 'Personagem',
          field: 'name',
          width: '25%'
        },
        {
          label: 'Descrição',
          field: 'description',
          width: '75%'
        },
      ],
      query: {
        queryable: true,
        queryLabel: 'Nome do Personagem',
        onQueryConfirm: this.handleQueryConfirm
      }
    };
  }

  componentDidMount() {
    this.handleQueryConfirm('', 1);
  }

  handleQueryConfirm = (query, page) => {
    this.setState({
      loading: true
    });
    CharacterService.filterCharactersByName(query, (page -1) * 20).then(res => {
      this.setState({
        tableData: res.map(c => {
          return {
            ...c.attributes,
            relationships: c.relationships
          }
        }),
        currentPage: page,
        loading: false
      })
    });
  }

  customCellRender = (character) => {
    return (
      <div key={`name-${character.malId}`} className="cell">
        <img src={character.image && character.image.original}></img>
        <span>{character.name}</span>
      </div>
    )
  }

  handleCharacterSelect = (character) => {
    this.setState({
      selectedCharacter: character
    })
  }

  closeModal = () => {
    this.setState({
      selectedCharacter: null
    })
  }

  render() {
    
    return (
      <div className="App">
        {this.state.loading &&  <Loader className="loader" type="ThreeDots" color="#D42026" height={100} width={100} />}
        {this.state.selectedCharacter &&  <Modal closeModal={this.closeModal} selectedCharacter={this.state.selectedCharacter}/>}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
        <header className="App-header">
          <div className="left">
            <span>
              Busca Kitsu
            </span>
            <span>
              Teste Front-end
            </span>
          </div>
          <span className="right">
            Rodrigo Tietjen
          </span>
          <span className="line"/>
        </header>
        <div className="App-content">
          <QueryTable
            data={this.state.tableData}
            config={this.tableConfig}
            currentPage={this.state.currentPage}
            onCharacterSelect={this.handleCharacterSelect}
          />
        </div>
        <footer className="App-footer">
  
        </footer>
      </div>
    );
  }
}

export default App;
