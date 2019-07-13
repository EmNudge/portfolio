import Layout from "../components/Layout";
import Console from "../static/console.svg";
import Waveform from "../static/waveform.svg";
import codingLinks from "../data/coding-links";
import "./index.scss";

const Index = () => {
  const info = {
    name: "Calvin Kipperman",
    position: "Fullstack Web Developer",
    langs: ["Javascript", "Typescript", "Rust"],
    software: ["Adobe Suite", "G Suite"],
    passions: ["coding", "acting"]
  };

  return (
    <Layout title="Calvin Kipperman" subtitle="Web Developer">
      <div className="block">
        <div className="console">
          <div className="svg">
            <Console />
          </div>
          <p>Calvins-Website:~ guest$ info</p>
          <table>
            <tbody>
              <tr>
                <td>KEY</td>
                <td>VALUE</td>
              </tr>
              {Object.keys(info).map(key => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{JSON.stringify(info[key])}</td>
                </tr>
              ))}
              <tr>
                <td>hobbies</td>
                <td>this.passions</td>
              </tr>
            </tbody>
          </table>
          <p>
            Calvins-Website:~ guest$ info <span className="cursor" />
          </p>
        </div>
        <div className="developing">
          <h1>Developing</h1>
          <p>
            My name is Calvin Kipperman. I am a fullstack web developer with a
            strong UI background.
          </p>
          <p>
            I develop complex and beautiful web and native applications with
            React, React Native, Vue, and Vanilla JS.
          </p>
        </div>
      </div>
      <div className="jumbotron">
        <div className="block">
          <div className="voice-acting">
            <h1>Voice Acting</h1>
            <p>
              Aside from developing, I do voice work for videogames, animations,
              and commercials. No, seriously, I have an{" "}
              <a href="https://www.imdb.com/name/nm10664016/">IMDb page</a>.
            </p>
            <p>
              If you want to read more about that, you can head over to my voice
              work website,{" "}
              <a href="https://emnudge.com">https://emnudge.com</a>.
            </p>
          </div>
          <div className="waveform">
            <div className="svg">
              <Waveform />
            </div>
          </div>
        </div>
      </div>
      <div className="block code-links">
        <h1>Coding Links</h1>
        <ul>
          {codingLinks.map(({ Icon, name, user, url }) => (
            <li key={name}>
              <a href={url}>
                <div>
                  <Icon />
                </div>
                <div>
                  <h2>{name}</h2>
                  <h3>{user}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Index;
