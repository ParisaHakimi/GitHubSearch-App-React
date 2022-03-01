import React, { Component } from "react";
class UserItem extends Component {
  render() {
    return (
      <div className="col-md-4 text-center mb-2">
        <div className="card">
          <img
            style={{
              width: "7rem",
              height: "7rem",
              borderRadius: "50%",
              margin: "2rem auto",
            }}
            src={this.props.user.avatar_url}
            alt=""
          />
          <h3>{this.props.user.login}</h3>
          <a href="" className="btn btn-dark">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
