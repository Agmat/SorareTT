import '../src/styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import client from '../src/app/apollo-client';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
