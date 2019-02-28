import React, { Component } from 'react';
import './wrapper.scss';
import Content from '../content/content';

export default class Wrapper extends Component {

  render() {
    return (
      <div>
        <br />
        <p> Printing the Wrapper component </p>
        <Content />
      </div>
    );
  }
}
