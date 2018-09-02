import React, { Component } from 'react';
import {Button} from './button'

const quotesArray = [{
  content: 'Self expression is survival',
  author: 'Naja Ferguson'
  },
  {
    content:'lkajsdflajsdf',
    author:'Jacob Miller'
    }]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      author: ''
    }
  this.newQuote = this.newQuote.bind(this)
  }

  newQuote = () => {
    let number = Math.floor(Math.random() * 3)
    let quote = quotesArray[number].content

    let quoteAuthor = quotesArray[number].author

    this.setState({
      content: quote,
      author: quoteAuthor
      })

  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the Randome Quote Generator</h1>
        <h3>{this.state.content}</h3>
        <p>{this.state.author}</p>
        <Button />
      </div>
    );
  }
}

export default App;
