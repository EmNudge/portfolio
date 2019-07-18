import Head from "next/head";

export default ({title}) => {
  const getTitle = () => {
    if (title.length && !title.includes("/")) return title;
    const formattedTitle = title
      .slice(1)
      .replace(/^\w/, char => char.toUpperCase());
    return !formattedTitle.length ? "Home" : formattedTitle;
  };

  return (
    <Head>
      <title>Kipperman | {getTitle()}</title>
    </Head>
  );
};
