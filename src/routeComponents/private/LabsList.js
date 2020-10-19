import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import api from "../../apis/index";
import { useHistory } from "react-router-dom";

const LabsList = (props) => {
  const history = useHistory();
  const [repoList, setRepoList] = useState([]);

  const classroom_id = props.match.params.id;

  useEffect(() => {
    console.log(classroom_id);
    const fetch = async () => {
      try {
        const { data } = await api.get(`/repo/all/${classroom_id}`);
        setRepoList(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetch();
  }, [classroom_id]);

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
