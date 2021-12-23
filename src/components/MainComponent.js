import React, { Fragment } from "react";

const MainComponent = () => {
  const employeeList = [
    {
      empId: 101,
      empName: "Bill",
      empDesgn: "S/w Engg",
      empDept: "Sys Admin",
      empImg: "images/profile.png",
    },
    {
      empId: 102,
      empName: "Sean",
      empDesgn: "S/w Engg",
      empDept: "Sys Admin",
      resign: true,
    },
    {
      empId: 103,
      empName: "Gio",
      empDesgn: "S/w Engg",
      empDept: "Sys Network",
    },
    {
      empId: 104,
      empName: "Jonas",
      empDesgn: "S/w Engg",
      empDept: "Production",
      empImg: "https://picsum.photos/id/504/128/100.jpg",
    },
    {
      empId: 105,
      empName: "Jack",
      empDesgn: "S/w Engg",
      empDept: "Devlopment",
      empImg: "https://picsum.photos/id/505/128/100.jpg",
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
            <div className="col-md-4" key={el.empId}>
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
                  <button className="btn-card">{el.empDept}</button> | <a href={`/about/${el.empId}`} >About Id</a> | 
                  {el.resign? <a href='/about/resign'>Resigned</a>: false}
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
