import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
          <NavLink to={`/movies/${movie.id}`} className="saved-movie" style={{textDecoration: 'none', color: 'black'}} activeStyle={{fontWeight: 'bold', textDecoration: 'underline'}}>{movie.title}</NavLink>
        ))}
        <Link to="/" style={{textDecoration: 'none', color: 'black'}} className="home-button">Home</Link>
      </div>
    );
  }
}
