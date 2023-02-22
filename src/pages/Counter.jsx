import React from "react";
import CounterItem from "../components/CounterItem";

export default function Counter() {
  return (
    <div className="container bg-light text-center">
      <h1 className="m-4">React Counter</h1>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
              <CounterItem />
            </div>
            <div className="row">
              <CounterItem />
            </div>
            <div className="row">
              <CounterItem />
            </div>
            <div className="row">
              <CounterItem />
            </div>
        </div>
      </div>
    </div>
  );
}

