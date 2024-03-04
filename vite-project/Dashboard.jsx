import React from "react";
import Desc from "./Desc.jsx"
import Img from "./Img.jsx"

export default function Dashboard() {
  return (
    <>
      <div class="container">
        <div class="card">
          <div class="card-body">
            <div className="row">
              <div class="col-8">
                <Desc/>
              </div>
              <div class="col-4">
              <Img/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
