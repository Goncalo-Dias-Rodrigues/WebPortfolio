import { useState } from "react";
import "./App.css";
import informations from "./info.js";

function App() {
  const [content, setContent] = useState("");
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
      <div className="top-bar">
        <h2 className="outlined-title-text">Gonçalo Dias Rodrigues</h2>
      </div>

      <div className="side-bar">
        <button
          className="fixed-button"
          onClick={() => setContent(informations[0])}
        >
          ᐳ About Me ᐸ
        </button>

        <button
          className="fixed-button"
          style={{ top: "160px" }}
          onClick={() => setShowProjects(!showProjects)}
        >
          {showProjects ? "ᐯ Projects ᐯ" : "ᐳ Projects ᐸ"}
        </button>

        {showProjects && (
          <div>
            {informations.slice(1).map((item, index) => (
              <button
                className="projects-list"
                key={index}
                onClick={() => setContent(item)}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}

        {content && (
          <div className="content-box">
            <h2 className="outlined-title-text">{content.name}</h2>
            <p className="outlined-normal-text">{content.information}</p>
            <img
              src={content.image}
              alt={content.name}
              className="content-box-image"
            ></img>
            <button onClick={() => setContent(null)}>Fechar</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
