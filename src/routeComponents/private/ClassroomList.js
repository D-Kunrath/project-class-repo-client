import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import api from "../../apis/index";
import { useHistory } from "react-router-dom";

const ClassroomList = () => {
  const history = useHistory();
  const [classroomList, setClassroomList] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await api.get("/classroom/all");
        setClassroomList(result.data);
        console.log("/classroom/all", result);
      } catch (err) {
        console.error(err);
        alert("Error fetch classroom list");
      }
    };

    fetch();
  }, []);

  const removeClassroom = async (index, id) => {
    try {
      await api.delete(`/classroom/${id}`);

      const newClassList = [...classroomList];
      newClassList.splice(index, 1);
      setClassroomList(newClassList);
    } catch (error) {
      console.error(error);
      alert("Error Deleting classroom");
    }
  };

  return (
    <div id="content">
      <NavBar pageName="Classroom List" />

      <ul className="list-group">
        {classroomList.map((item, index) => {
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
                history.push(`/labslit/${item._id}`, item);
              }}
            >
              {item.classroom_name}
              <span className="badge badge-primary badge-pill">
                {item.students.length}
              </span>
              <button
                type="button"
                onClick={() => {
                  removeClassroom(index, item._id);
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

export default ClassroomList;
