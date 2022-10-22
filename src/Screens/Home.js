import React, { useEffect, useState } from "react";
import {
  Card,
  DatePicker,
  Chart,
  Dataset,
  Calendar,
  Picklist,
  PicklistOption,
} from "react-rainbow-components";

import photo from "../assets/img.png";

const containerStyles = {
  maxWidth: "100%",
  borderBottom: "1px solid #bcbcbc",
  padding: "15px",
  marginBottom: "10px",
};

const barStyles = {
  padding: "15px",
  width: "100%",
};

const labels = [
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Sunday",
  "Saturday",
];
const values = [1, 2, 0, 0, 0, 0, 0];

const calendarContainerStyles = {
  width: "28rem",
  height: "27rem",
};
const selectStyles = {
  width: "8rem",
};

function Home() {
  const [name, setName] = useState("Helen Hopkins");
  const [info, setInfo] = useState(true);
  const [range, setRange] = useState();
  const [date, setDate] = useState(new Date("2022-10-22 00:00:00"));

  const changeInfo = (e, name, info) => {
    const listItemsCount = document.getElementById("listItems").children;
    for (let index = 0; index < listItemsCount.length; index++) {
      listItemsCount[index].classList.remove("list-item-active");
    }

    e.target.classList.add("list-item-active");
    setName(name);
    setInfo(info);
  };

  return (
    <div className="home-content">
      <div className="list-row">
        <div className="list-header">Patients</div>
        <div className="list-items" id="listItems">
          <div
            className="list-item"
            onClick={(e) => changeInfo(e, "Helen Hopkins", true)}
          >
            <div className="list-item-label">Helen</div>
            <div className="list-item-status bg-danger"></div>
          </div>

          <div
            className="list-item"
            onClick={(e) => changeInfo(e, "Maria", false)}
          >
            <div className="list-item-label">Maria</div>
            <div className="list-item-status bg-danger"></div>
          </div>

          <div
            className="list-item"
            onClick={(e) => changeInfo(e, "Julien", false)}
          >
            <div className="list-item-label">Julien</div>
            <div className="list-item-status bg-danger"></div>
          </div>

          <div
            className="list-item"
            onClick={(e) => changeInfo(e, "Sarah", false)}
          >
            <div className="list-item-label">Sarah</div>
            <div className="list-item-status bg-danger"></div>
          </div>

          <div
            className="list-item"
            onClick={(e) => changeInfo(e, "Ricky", false)}
          >
            <div className="list-item-label">Ricky</div>
            <div className="list-item-status bg-success"></div>
          </div>

          <div
            className="list-item"
            onClick={(e) => changeInfo(e, "Sam", false)}
          >
            <div className="list-item-label">Sam</div>
            <div className="list-item-status bg-success"></div>
          </div>

          <div
            className="list-item"
            onClick={(e) => changeInfo(e, "Doris", false)}
          >
            <div className="list-item-label">Doris</div>
            <div className="list-item-status bg-success"></div>
          </div>

          <div
            className="list-item"
            onClick={(e) => changeInfo(e, "Jack ", false)}
          >
            <div className="list-item-label">Jack </div>
            <div className="list-item-status bg-success"></div>
          </div>

          <div
            className="list-item"
            onClick={(e) => changeInfo(e, "Peter", false)}
          >
            <div className="list-item-label">Peter</div>
            <div className="list-item-status bg-warning"></div>
          </div>

          <div
            className="list-item"
            onClick={(e) => changeInfo(e, "Samantha", false)}
          >
            <div className="list-item-label">Samantha</div>
            <div className="list-item-status bg-warning"></div>
          </div>

          <div
            className="list-item"
            onClick={(e) => changeInfo(e, "Andy", false)}
          >
            <div className="list-item-label">Andy</div>
            <div className="list-item-status bg-success"></div>
          </div>

          <div
            className="list-item"
            onClick={(e) => changeInfo(e, "Davon", false)}
          >
            <div className="list-item-label">Davon</div>
            <div className="list-item-status bg-danger"></div>
          </div>
        </div>
      </div>

      <div className="main-window">
        <div className="list-header">{name}</div>

        {info ? (
          <div className="wrapper">
            <div className="part">
              <div className="big-label">
                <i className="fa fa-exclamation-circle"></i>
                Falls & Other emergencies
              </div>

              <div className="rainbow-p-around_large mt-3">
                <Card>
                  <div
                    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
                    style={containerStyles}
                  >
                    <DatePicker
                      id="datePicker-15"
                      label="Select range of dates"
                      placeholder="Select range of dates"
                      selectionType="range"
                      formatStyle="large"
                      variant="single"
                      locale="en-US"
                      value={range}
                      onChange={(value) => setRange(value)}
                    />
                  </div>

                  <div className="card-info">
                    TOTAL : 11 EVENTS <br />
                    <br />
                    <i className="fa fa-circle"></i> FALLS : 5 TIMES <br />
                    <i className="fa fa-exclamation-triangle"></i> ON THE FLOOR
                    : 3 TIMES <br />
                    <i className="fa fa-square"></i> LEAVING PROPERTY ALONE : 3
                    <br />
                  </div>

                  <div
                    className="rainbow-p-vertical_medium rainbow-m_auto"
                    style={barStyles}
                  >
                    <div className="rainbow-align-content_center">
                      <Chart
                        labels={[
                          "Monday",
                          "Tuesday",
                          "Thursday",
                          "Wednsday",
                          "Friday",
                          "Sunday",
                          "Saturday",
                        ]}
                        type="bar"
                        className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
                        disableXAxisGridLines
                        disableYAxisGridLines
                      >
                        <Dataset
                          title="Falls"
                          values={[2, 1, 0, 2, 0, 0]}
                          backgroundColor="#1de9b6"
                          borderColor="#1de9b6"
                        />
                        <Dataset
                          title="On the floor"
                          values={[1, 1, 0, 0, 1]}
                          backgroundColor="#01b6f5"
                          borderColor="#01b6f5"
                        />

                        <Dataset
                          title="Leaving Alone"
                          values={[0, 1, 1, 1, 0]}
                          backgroundColor="#d90429"
                          borderColor="#01b6f5"
                        />
                      </Chart>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="rainbow-p-around_large mt-3">
                <Card>
                  <div
                    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
                    style={barStyles}
                  >
                    <DatePicker
                      id="datePicker-15"
                      label="Select range of dates"
                      placeholder="Select range of dates"
                      selectionType="range"
                      formatStyle="large"
                      variant="single"
                      locale="en-US"
                      value={range}
                      onChange={(value) => setRange(value)}
                    />
                  </div>

                  <img className="img-fluid mb-2" alt="photo" src={photo} />
                  <div className="p-3">
                    <span className="text-secondary">04:34 PM</span>{" "}
                    <b>THE FALL WAS DETECTED</b>
                  </div>
                </Card>
              </div>
            </div>
            <div className="part">
              <div className="big-label">
                <i className="fa fa-exclamation-circle"></i>
                Sleep
              </div>

              <div className="rainbow-p-around_large mt-3">
                <Card>
                  <div
                    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
                    style={containerStyles}
                  >
                    <DatePicker
                      id="datePicker-15"
                      label="Select range of dates"
                      placeholder="Select range of dates"
                      selectionType="range"
                      formatStyle="large"
                      variant="single"
                      locale="en-US"
                      value={range}
                      onChange={(value) => setRange(value)}
                    />
                  </div>

                  <div
                    className="rainbow-p-vertical_xx-large rainbow-m_auto"
                    style={barStyles}
                  >
                    <div className="rainbow-align-content_center">
                      <Chart
                        labels={["A", "B", "C", "D"]}
                        type="line"
                        className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
                      >
                        <Dataset
                          title="Dataset 1"
                          values={[23, 45, 123, 56]}
                          backgroundColor="#1de9b6"
                          borderColor="#1de9b6"
                        />
                        <Dataset
                          title="Dataset 2"
                          values={[66, 100, 30, 156]}
                          backgroundColor="#01b6f5"
                          borderColor="#01b6f5"
                        />
                      </Chart>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="rainbow-p-around_large mt-3">
                <Card>
                  <div className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto p-3">
                    <Calendar
                      id="calendar-1"
                      locale="en-US"
                      value={date}
                      onChange={(value) => setDate(value)}
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        ) : (
          <p className="p-3">There is no information about this person</p>
        )}
      </div>
    </div>
  );
}

export default Home;
