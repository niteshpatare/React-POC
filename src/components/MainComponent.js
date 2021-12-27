import React, { Fragment } from "react";

const MainComponent = () => {
  const employeeList = [
    {
      empId: 1,
      empName: "Bill",
      empDesgn: "S/w Engg",
      empDept: "Sys Admin",
      empImg: "images/profile.png",
    },
    {
      empId: 2,
      empName: "Sean",
      empDesgn: "S/w Engg",
      empDept: "Sys Admin",
      resign: true,
    },
    {
      empId: 3,
      empName: "Gio",
      empDesgn: "S/w Engg",
      empDept: "Sys Network",
    },
    {
      empId: 4,
      empName: "Jonas",
      empDesgn: "S/w Engg",
      empDept: "Production",
      empImg: "https://picsum.photos/id/504/500/128.jpg",
    },
    {
      empId: 5,
      empName: "Jack",
      empDesgn: "S/w Engg",
      empDept: "Devlopment",
      empImg: "https://picsum.photos/id/505/500/128.jpg",
    },
  ];
  const deptAlert = React.createRef();
  const deptonClickHandler = (event) => {
    alert(deptAlert.current.innerText);
  };

  return (
    <Fragment>
      <h3 ref={deptAlert} onClick={deptonClickHandler}>
        Employee List
      </h3>
      <div className="row">
        {employeeList.map((el, index) => {
          let img = "";
          el.empImg
            ? (img = el.empImg)
            : (img = `https://picsum.photos/id/50${index}/500/128`);
          return (
            <div className="col-md-3" key={el.empId}>
              <div className="card-content ">
                <div className="card-img">
                  <img src={img} alt="" />
                  <span>
                    <h4>{el.empId}</h4>
                  </span>
                </div>
                <div className="card-desc">
                  <h3>{el.empName}</h3>
                  <p>{el.empDesgn}</p>
                  <button className="btn-card">{el.empDept}</button> <br /> <a href={`/about/${el.empId}`} >About Id</a> &nbsp;
                  {el.resign? <a href='/about/resign'>Resigned</a> : false}
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
export default MainComponent;
