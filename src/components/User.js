import React from 'react';
import { Card, } from 'semantic-ui-react';
import { UserConsumer, } from "../providers/UserProvider";

const User = () => (
  <UserConsumer> 
    {value => (
      <Card>
        <Card.Content>
          <Card.Header>{value.username}</Card.Header>
        </Card.Content>
        <Card.Content>
          <p>{value.firstName}</p>
        </Card.Content>
        <Card.Content>
          <p>{value.lastName}</p>
        </Card.Content>
        <Card.Content>
          <p>{value.email}</p>
        </Card.Content>
      </Card>
    )}
  </UserConsumer> 
)

export default User;