import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';
import { IStyledComponentsTagsProps } from '../src/common/types';

export default class MyDocument extends Document<IStyledComponentsTagsProps> {
  static getInitialProps({ renderPage }: any) {
    //Styled-componentes style injection
    const sheet = new ServerStyleSheet();
    const page = renderPage((App:any) => (props:any) =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>My diary</title>
          {this.props.styleTags}
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=PT+Sans" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-table@latest/react-table.css"
          />
        </Head>
        <body style={{
           'box-sizing': 'border-box', 
           margin: '0',
           padding: '0',
        }}>
          <Main />
          <NextScript />
        </body>
        <script defer src="https://use.fontawesome.com/releases/v5.7.2/js/all.js" integrity="sha384-0pzryjIRos8mFBWMzSSZApWtPl/5++eIfzYmTgBBmXYdhvxPc+XcFEk+zJwDgWbP" crossOrigin="anonymous"></script>
      </html>
    );
  }
}