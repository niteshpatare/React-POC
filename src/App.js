import React, { Suspense, Fragment } from "react";
import NewExpense from "./components/NewExpense.js";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
// import { MainComponent } from "./components/MainComponent";
const MainComponent = React.lazy(() => import("./components/MainComponent"));

function App() {
  const myTitle = "CYbageMIS";
  const obj = { id: 1 };
  const arr = [100, 200, 300];
  const fun = () => {
    setInterval(function () {
      console.log("Hello");
      document.location.href = "/";
    }, 51000);
    return "fun";
  };
  const onAddExpenseHandler = (enteredExpenseData) => {
    const expenseDataA = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log("App Store" + JSON.stringify(expenseDataA));
  };
  return (
    <Fragment>
      <section className="details-card">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                  <MainComponent />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </section>
      {/* <NewExpense onAddExpense={onAddExpenseHandler} /> */}
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
