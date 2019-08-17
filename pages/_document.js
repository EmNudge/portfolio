import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    const getScript = () => ({
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
  
        gtag('config', 'UA-128564416-2');
      `
    });

    return (
      <Html lang="en">
        <Head>
          <meta 
            name="Description" 
            content="Calvin Kipperman, Kipperman portfolio, web dev" 
          />
          <link rel="icon" href="/static/favicon.ico"></link>
          { process.env.NODE_ENV !== 'development' &&
            <React.Fragment>
              <script 
                async 
                src="https://www.googletagmanager.com/gtag/js?id=UA-128564416-2"
              />
              <script dangerouslySetInnerHTML={getScript()} />
            </React.Fragment>
          }
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