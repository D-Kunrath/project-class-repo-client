import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import api from "../../apis/index";
import { useHistory } from "react-router-dom";

const LabsList = () => {
  const history = useHistory();
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    let id;
    if (history.location.state && history.location.state._id) {
      id = history.location.state._id;
    } else {
      console.log("no _ID");
      history.goBack();
    }
    console.log("id", id);
    const fetch = async () => {
      try {
        /////////////////////////////////////////////////////// lembra de mudar
        const { data } = await api.get(`/classroom/${id}`);
        console.log("/classroom/${id}", data);

        // TODO Ajustar com DB
        /////////////////////////////////////////
        const mock = [
          {
            _id: "5f8b8d4149f9fa1e93f463dc",
            classroom_id: "5f8a5bdbe304351d2cea0867",
            scores: [
              {
                _id: "5f8a4b0538aebc19462c31cd",
                git_user: "d-kunrath",
                score: 0,
                done: false,
              },
              {
                _id: "5f8a4b0538aebc19462c31ce",
                git_user: "rubemdiogo",
                score: 0,
                done: false,
              },
            ],
            repo_url: "http://test.com.br/test", /////////////// nao está vindo da api
            __v: 0,
          },
        ];

        /////////////////////////////////////////////////////
        setRepoList(mock); /// setRepoList(xxxxxxxxxxxxxxxxxxxxxxxxx);
      } catch (err) {
        console.error(err);
        alert("Error fetch Labs list");
      }
    };

    fetch();
  }, []);

  const removeRepo = async (index, id) => {
    try {
      await api.delete(`/repo/${id}`);

      const newClassList = [...repoList];
      newClassList.splice(index, 1);
      setRepoList(newClassList);
    } catch (error) {
      console.error(error);
      alert("Error Deleting classroom");
    }
  };

  return (
    <div id="content">
      <NavBar pageName="Classroom List" />

      <ul className="list-group">
        {repoList.map((item, index) => {
          let styles;
          if (index % 2) {
            styles =
              "list-group-item d-flex justify-content-between align-items-center list-group-item-dark";
          } else {
            styles =
              "list-group-item d-flex justify-content-between align-items-center";
          }
          return (
            <li
              key={index}
              className={styles}
              style={{ cursor: "pointer" }}
              onClick={() => {
                history.push("/labedit", item);
                console.log(item);
              }}
            >
              {item.repo_url}
              <button
                type="button"
                onClick={() => {
                  removeRepo(index, item._id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LabsList;
