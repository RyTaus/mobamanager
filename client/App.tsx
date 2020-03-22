import AppContainer from "./Navigation";
import React from "react";
import ApolloClient, {gql} from 'apollo-boost';

export default function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:8080/',
  });

  client.query({
    query: gql`{ signUp(username:"fromjs", password:"godlike") { id } }`
  }).then(result => console.log(result)).catch(e => console.error(e));

  // client.query({
  //   query: gql`{ user { id } }`
  // }).then(result => console.log(result)).catch(e => console.error(e));

  return <AppContainer />;
}
