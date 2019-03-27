import React from "react";

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = {
    username: "Foodman11",
    firstName: "Carl",
    lastName: "Silver",
    email: "test@test.com",
  };
    
  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export default UserProvider;