//To-DO: Update code to remove Html, Head, etc from app/login page

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* You can add global CSS files here, for example: */}
          {/* <link rel="stylesheet" href="/path/to/styles.css" /> */}
          <title>Simply Sync</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
