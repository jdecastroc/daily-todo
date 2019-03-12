import React from 'react';
import ApolloClient from 'apollo-boost';
import MainLayout from '../src/components/MainLayout';
import { GRAPHQL_SERVER_URL } from '../src/common/types';

import 'cross-fetch/polyfill';
import { getDayFromUser } from '../src/services/calendar';


const Home = (initialData:any) => {
  return (
      <MainLayout />
  )
}

Home.getInitialProps = async ({}) => {
  const client = new ApolloClient({
    uri: GRAPHQL_SERVER_URL
  });
  const result = await client.query(getDayFromUser(1, "23092019"));
  return {
    initialData: result
  }
}

export default Home;