import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AboutId = () => {
  let params = useParams();
  const [user, setUser] = useState({
    data: {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
  });
  let content = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://reqres.in/api/users/" + params.aboutId;
        const response = await axios.get(url);
        // setUser(response.data);
        const setStateFunction = (state, props) => {
          const newState = { ...state, data: response.data.data };
          return newState;
        };

        setUser(setStateFunction);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  let objData = [];
  const disp2 = Object.entries(user).forEach((obj) => {
    debugger;
    console.log("Obj:-", JSON.stringify(obj));
    objData.push(obj[1]);
  });

  const dispUserData = Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${JSON.stringify(value)}`);
    if (key !== "data") return;
    content.push(
      <div className="col-md-3" key={key}>
        <div className="card-content  text-break">
          <div className="card-img">
            <img src={value.avatar} alt="" width="100%" />
            <span>
              <h4> {value.id}</h4>
            </span>
          </div>
          <div className="card-desc text-wrap">
            <h3>
              {value.first_name}&nbsp;{value.last_name}
            </h3>
            <p className="text-wrap " style={{ width: "100%" }}>
              {value.email}
            </p>
          </div>
        </div>
        <br />
      </div>
    );
  });

  return (
    <React.Fragment>
      <h3>User Details: {params.aboutId}</h3>

      {user && content}
      {objData.map((value) => {
        return (
          <div className="col-md-3" key={value.id}>
            <div className="card-content  text-break">
              <div className="card-img">
                <img src={value.avatar} alt="" width="100%" />
                <span>
                  <h4> {value.id}</h4>
                </span>
              </div>
              <div className="card-desc text-wrap">
                <h3>
                  {value.first_name}&nbsp;{value.last_name}
                </h3>
                <p className="text-wrap " style={{ width: "100%" }}>
                  {value.email}
                </p>
              </div>
            </div>
            <br />
          </div>
        );
      })}
    </React.Fragment>
  );
};
export default AboutId;

//data: {"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}
// {
// '0': {cat: 'Category', id: 1},
// '1': {cat: 'Category', id: 1},
// }
