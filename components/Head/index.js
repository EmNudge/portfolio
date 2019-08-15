import Head from "next/head";

export default ({title}) => {
  const getTitle = () => {
    if (title.length && !title.includes("/")) return title;
    const formattedTitle = title
      .slice(1)
      .replace(/^\w/, char => char.toUpperCase());
    return !formattedTitle.length ? "Home" : formattedTitle;
  };

  const getScript = () => ({
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-128564416-2');
    `
  });

  return (
    <Head>
      <title>Kipperman | {getTitle()}</title>
      <link rel="icon" href="/static/icon.ico"></link>
      {process.env.NODE_ENV !== 'development' &&
        <React.Fragment>
          <script 
            async 
            src="https://www.googletagmanager.com/gtag/js?id=UA-128564416-2"
          />
          <script dangerouslySetInnerHTML={getScript()} />
        </React.Fragment>
      }
    </Head>
  );
};
