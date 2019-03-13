import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import MainLayout from '../src/components/MainLayout';
import { GRAPHQL_SERVER_URL } from '../src/common/types';

// import 'cross-fetch/polyfill';
import { getDayFromUser } from '../src/services/calendar';


const Diary = (initialData:any) => {
  return (
      <MainLayout />
  )
}

Diary.getInitialProps = async ({}) => {
  // const client = new ApolloClient({
  //   uri: GRAPHQL_SERVER_URL
  // });

  const client = new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.map(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
          );
        if (networkError) console.log(`[Network error]: ${networkError}`);
      }),
      new HttpLink({
        uri: GRAPHQL_SERVER_URL,
        credentials: 'same-origin'
      })
    ]),
    cache: new InMemoryCache()
  });

  const result = await client.query(getDayFromUser(1, "23092019"));
  return {
    initialData: result
  }
}

export default Diary;