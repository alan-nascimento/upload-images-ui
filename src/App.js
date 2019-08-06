import React, { Component } from 'react';
import GlobalStyle from './styles/global';
import { Container, Content } from './styles';

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Content>Testing</Content>
        <GlobalStyle />
      </Container>
    );
  }
}
