import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <form action="">
        <div className="mb-3">
          <input className="form-control" placeholder="Enter name" />
          <button className="btn btn-primary d-block mt-3 w-100">Search</button>
        </div>
      </form>
    );
  }
}

export default Search;
