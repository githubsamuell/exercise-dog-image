import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogJson: '',
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dogJson.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem("dogURL", this.state.data.message);
    const dogBreed = this.state.dogJson.message.split('/')[4];
    alert(dogBreed);
  }

  fetchDog() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    fetch(url)
      .then((dado) => dado.json())
      .then((data) => this.state({ dogJson: data }));
  }

  render() {
    if (this.state.dogJson === '') return 'loading...';
    return (
      <div>
        <p>Doguinhos</p>
        <button type="button" onClick={ this.fetchDog }>Novo doguinho!</button>
        <div>
          <img src={ this.state.dogJson.message } alt="Random dog" />
        </div>
      </div>
    );
  }
}

export default App;
