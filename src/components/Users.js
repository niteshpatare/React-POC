import axios from "axios";
import React from "react";
class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    const url = "https://reqres.in/api/users";
    axios.get(url).then((res) => {
      let lusers = res.data.data;
      //   this.setState({
      //     users: lusers,
      //   });
      const setStateFunction = (state, props) => {
        const newState = { ...state, users: lusers };
        return newState;
      };
      this.setState(setStateFunction);
    });
    // axios.post(url, { name: "gio", job: "dev" }).then((res) => {
    //   console.log("post sent" + JSON.stringify(res));
    // });
  }
  render() {
    return (
        <>

        <div className="container">
          <h3>User List</h3>
          <div className="row">
            {this.state.users.map((el) => {
              return (
                <div className="col-md-3" key={el.id}>
                  <div className="card-content  text-break">
                    <div className="card-img">
                      <img src={el.avatar} alt="" width="100%" />
                      <span>
                        <h4> {el.id}</h4>
                      </span>
                    </div>
                    <div className="card-desc text-wrap">
                      <h3>
                        {el.first_name}&nbsp;{el.last_name}
                      </h3>
                      <p className="text-wrap " style={{width:'100%'}}>{el.email}</p>
                    </div>
                  </div>
                  <br />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Users;
