import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from './styles';

export default class Upload extends Component {
  componentDidMount() {}

  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Drag your images here...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">This file is not supported</UploadMessage>;
    }

    return <UploadMessage type="success">Drop your images here</UploadMessage>;
  };

  render() {
    return (
      <Dropzone accept="image/*" onDropAccepted={() => {}}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    );
  }
}
