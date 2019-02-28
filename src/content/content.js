import React, { Component } from 'react';
import './content.scss';

class Content extends Component {

  state = {
    data: [],
    load: 1
  }

  componentDidMount() {
    console.log('inside the component did Mount');
    this.fetchData();
    window.addEventListener("scroll", this.scrollCheck);
  }

  scrollCheck = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight ) {
      this.fetchData();
    }
  }

  fetchData = () => {

    const { load } = this.state;

    if(load > 10 || load === 1000) {
      window.removeEventListener("scroll", this.scrollCheck);
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${load}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState(prevState => ({
          data: prevState.data.concat(json),
          load: prevState.load+1
        }));
      })
      .catch(error => {
        console.log(error);
        this.setState({
          load: 1000
        })
      })
  }

  render() {
    const { data } = this.state;

    const items = data.map((item) => (<li key={item.id}> {item.name} </li>));

    return (
      <div>
        <br />
        <br />
        <br />
        <br />

        { items }

      </div>
    )
  }
}

export default Content;
