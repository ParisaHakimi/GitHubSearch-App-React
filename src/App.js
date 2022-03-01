import React, { Component } from "react";
import NavBar from "./components/layout/NavBar";
import "./App.css";
import UserItem from "./components/users/UserItem";
import axios from "axios";
import Spinner from "./components/layout/Loader";
import Search from "./components/users/Search";
class App extends Component {
  state = {
    users: [],
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID} &client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="container mt-3">
          <Search />
          {this.state.loading ? (
            <Spinner />
          ) : (
            <div className="row">
              {this.state.users.map((user) => (
                <UserItem key={user.id} user={user} />
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default App;
