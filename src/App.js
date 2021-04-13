
import './App.css';

import React, { Component } from 'react'
import Favorites from './Favorites'

const baseURL = 'https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes/'

export default class App extends Component {

  state = {
    favorites: []
  }

  getNewJoke = () => {
    fetch(baseURL)
      .then(response => response.json())
      .then(joke => this.setState({
        joke
      }))
  }

  addFavorite = () => {
    const thisJoke = this.state.joke 
    const checker = this.state.favorites.find(joke => joke === thisJoke)
    if(!checker) {
      this.setState({
      favorites: [...this.state.favorites, thisJoke]
      })
    }
  }

  removeFavorite = (favorite) => {
    const newFaves = this.state.favorites.filter(joke => joke !== favorite)
    this.setState({
      favorites: newFaves
    })
  }

  render() {
    return (
      <div className = 'app'>
        <header>
          <h1>Jokes When You Toke</h1>
        </header>
        <div className = 'joke'>
          { this.state.joke ? <h3>Q: {this.state.joke.setup}</h3> : null}
          { this.state.joke ? <h3>A: {this.state.joke.punchline}</h3> : null}
        </div>
        <div className = 'button-container'>
          <button onClick={this.getNewJoke}>Gimme a Dad Joke, Yo</button>
          { this.state.joke ? <button className = 'favorite-button' onClick={this.addFavorite}>Favorite Dis Joke</button> : null}
        </div>
        { this.state.favorites ?<Favorites favorites={this.state.favorites} addFavorite={this.addFavorite} removeFavorite={this.removeFavorite}/> :null}
      </div>
    )
  }
}

