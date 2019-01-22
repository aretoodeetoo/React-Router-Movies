import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  // const homeButton = (e) => {
  //   e.preventDefault();
  //   props.history.push('/');
  // }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <Link to={`/movies/${movie.id}`} className="saved-movie">{movie.title}</Link>
        ))}
        <Link to="/" style={{textDecoration: 'none', color: 'black'}} className="home-button">Home</Link>
      </div>
    );
  }
}
