import React from "react";

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: "",
      edesgn: "",
      edeprt: "",
      eimg: "",
    };
    this.fileInput = React.createRef();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.ename);
    alert(this.state.edesgn);
    alert(this.state.edeprt);
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">Register</div>
                <div className="card-body">
                  <form
                    className="form-horizontal"
                    method="post"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="form-group">
                      <label htmlFor="name" className="cols-sm-2 control-label">
                        Employee Name
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            name="ename"
                            id="name"
                            placeholder="Enter your Name"
                            value={this.state.ename}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="designation"
                        className="cols-sm-2 control-label"
                      >
                        Designation
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            name="edesgn"
                            id="designation"
                            placeholder="Enter your designation"
                            value={this.state.edesgn}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="dpartment"
                        className="cols-sm-2 control-label"
                      >
                        Department
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            name="edeprt"
                            id="dpartment"
                            placeholder="Enter your department"
                            value={this.state.edeprt}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="img" className="cols-sm-2 control-label">
                        Image
                      </label>
                      <div className="cols-sm-10">
                        <div className="input-group">
                          <input
                            type="file"
                            className="form-control"
                            name="eimg"
                            id="img"
                            placeholder="Add file"
                            ref={this.fileInput}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group ">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block login-button"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
