
import './App.css';
import { Component } from 'react';
import Container from './components/Container/Container'

class App extends Component {

state = {
  contacts: [],
  name: ''
}
  
  handleChange = e => {
    this.setState({ value: e.target.value });
  };


  
  render() {
  return (
    <Container>

    </Container>
  );
}
  
  }

export default App;
