import React, { useState } from "react";
import NavBar from "../NavBar";
import api from "../../apis/index";
import { useHistory } from "react-router-dom";

const ClassroomForm = () => {
  const history = useHistory();

  const [formName, setFormName] = useState("");
  const [labList, setLabList] = useState([]);
  const [labUnit, setLabUnit] = useState("");

  const [userList, setUserList] = useState([]);
  const [userUnit, setUserUnit] = useState("");

  const updateName = (event) => {
    setFormName(event.target.value);
  };

  const updateUrl = (event) => {
    setLabUnit(event.target.value);
  };

  const updateUserName = (event) => {
    setUserUnit(event.target.value);
  };

  const addLab = () => {
    if (labUnit) {
      setLabList((prevState) => {
        const temp = [...prevState];
        temp.push(labUnit);
        return [...temp];
      });
      setLabUnit("");
    }
  };

  const removeLab = (index) => {
    const newLabList = [...labList];
    newLabList.splice(index, 1);
    setLabList(newLabList);
  };

  const addUser = () => {
    if (userUnit) {
      setUserList((prevState) => {
        const temp = [...prevState];
        temp.push(userUnit);
        return [...temp];
      });
      setUserUnit("");
    }
  };

  const removeUser = (index) => {
    const newUserList = [...userList];
    newUserList.splice(index, 1);
    setUserList(newUserList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const retorno = {
      classroom_name: formName,
      description: "",
      repo_urls: labList,
      students: userList,
    };
    api.post("/classroom", retorno);
    history.push("/profile");
  };

  return (
    <div id="content">
      <NavBar pageName="New Classroom" />
      <form onSubmit={handleSubmit}>
        <div>
          <p>Classroom Name</p>
          <input onChange={updateName} value={formName} />
          <button type="submit">Save Classroom</button>
        </div>

        <div className="d-flex justify-content-around mt-5">
          <div className="card">
            <div>
              <input onChange={updateUserName} value={userUnit} />
              <button type="button" onClick={addUser}>
                Add
              </button>
            </div>
            <div className="card-header">Students</div>
            <ul className="list-group list-group-flush">
              {userList.map((url, i) => {
                return (
                  <div key={i}>
                    <li className="list-group-item d-flex justify-content-between">
                      {url}
                      <button
                        type="button"
                        onClick={() => {
                          removeUser(i);
                        }}
                      >
                        x
                      </button>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="card">
            <div>
              <input onChange={updateUrl} value={labUnit} />
              <button type="button" onClick={addLab}>
                Add
              </button>
            </div>
            <div className="card-header">Repository URLs</div>
            <ul className="list-group list-group-flush">
              {labList.map((url, i) => {
                return (
                  <div key={i}>
                    <li className="list-group-item  d-flex justify-content-between">
                      {url}
                      <button
                        type="button"
                        onClick={() => {
                          removeLab(i);
                        }}
                      >
                        x
                      </button>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ClassroomForm;
