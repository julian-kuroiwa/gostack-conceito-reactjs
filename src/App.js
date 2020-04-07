import React, {useState, useEffect} from "react";
import api from "./services/api";

import "./styles.css";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get("repositories")
      .then(response => {
        setProjects(response.data);
      });
  }, []);

  async function handleAddRepository() {
    // TODO
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {
          projects.map(project => {
            return (
              <li>
                {project.title}

                <button onClick={() => handleRemoveRepository(project.id)}>
                  Remover
                </button>
              </li>
            )
          })
        }
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
