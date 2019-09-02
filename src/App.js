import React, { Component } from 'react';

import GlobalStyle from './styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload';
import FileList from './components/FileList';

export default class App extends Component {
  state = {
    uploadedFiles: []
  };

  handleUpload = files => {
    console.log(files);
  };

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Content>
          <Upload onUpload={this.handleUpload} />
          <FileList />
        </Content>
        <GlobalStyle />
      </Container>
    );
  }
}
