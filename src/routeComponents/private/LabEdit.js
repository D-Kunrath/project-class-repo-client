import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import api from "../../apis/index";
import { useHistory } from "react-router-dom";

const LabEdit = () => {
  const history = useHistory();
  const [scores, setScores] = useState([]);

  let id;
  if (history.location.state && history.location.state._id) {
    id = history.location.state._id;
  } else {
    console.log("no _ID");
    history.goBack();
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const {
          data: { scores },
        } = await api.get(`/repo/${id}`);
        setScores(scores);
      } catch (err) {
        console.error(err);
        alert("Error fetch Labs list");
      }
    };
    fetch();
    const repoName = history.location.state.repo_url.split('/')
    console.log(repoName);
  }, []);

  const updateScore = async (event, index) => {
    const newScores = [...scores];
    newScores[index].score = event.target.value;
    setScores(newScores);
  };

  const updateDone = async (index) => {
    const newScores = [...scores];
    newScores[index].done = !newScores[index].done;
    setScores(newScores);
  };

  const saveChanges = async () => {
    try {
      await api.patch(`/repo/${id}`, scores);
      const { data } = await api.get(`repo/${id}`);
      history.push(`/labslit/${data.classroom_id}`);
    } catch (error) {
      console.error(error);
      alert("Error Saving Changes");
    }
  };

  return (
    <div id="content">
      <NavBar pageName={`Repo ${history.location.state.repo_url}`} />
      <h3>Students</h3>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>Git UserName</div>
          <div>Score</div>
          <div>Done</div>
        </li>

        {scores.map((item, index) => {
          console.log(item);
          let styles;
          if (index % 2) {
            styles =
              "list-group-item d-flex justify-content-between align-items-center list-group-item-dark";
          } else {
            styles =
              "list-group-item d-flex justify-content-between align-items-center";
          }
          return (
            <li key={index} className={styles}>
              {item.git_user}
              <input
                value={item.score}
                onChange={(event) => {
                  updateScore(event, index);
                }}
              />
              <div>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => {
                    updateDone(index);
                  }}
                />
              </div>
            </li>
          );
        })}
      </ul>
      <button onClick={saveChanges}>Save Changes</button>
    </div>
  );
};
export default LabEdit;
