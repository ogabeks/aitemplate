import React, { useState } from "react";
import {
  Picklist,
  Option,
  DatePickerModal,
  Button,
  Table,
  Badge,
  Column,
} from "react-rainbow-components";

function Reports() {
  const [isOpen, setisOpen] = useState(false);
  const [title, setTitle] = useState();
  const [value, setValue] = useState("");
  const [selectionType, setSelectionType] = useState("");
  const [selection, setSelection] = useState({ name: "", label: "" });
  const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" />;
  const DataTable = [
    { name: "Sarah", fall: "3", floor: "2", leave: "3" },
    { name: "John", fall: "3", floor: "2", leave: "3" },
    { name: "Kamal", fall: "3", floor: "2", leave: "3" },
    { name: "Kareem", fall: "3", floor: "2", leave: "3" },
    { name: "Sam", fall: "3", floor: "2", leave: "3" },
  ];
  function handlePicklistChange(value) {
    if (value.name === "Custom") {
      setisOpen(true);
      setSelectionType("range");
      setValue(null);
      setValue("Select a Date");
    } else {
      setSelection(value);
    }
  }

  function formatDates(dates) {
    if (dates) {
      const startDay = new Intl.DateTimeFormat().format(dates[0]);
      if (dates.length > 1) {
        const endDay = new Intl.DateTimeFormat().format(dates[1]);
        return `${startDay} - ${endDay}`;
      }
      return startDay;
    }
    return "";
  }

  function handleDatePickerChange(value) {
    const formatedDate = formatDates(value);
    if (value.length > 1) {
      setValue(value);
      setSelection({ name: "Custom", label: formatedDate });
      setTitle(formatedDate);
      setisOpen(false);
    } else {
      setValue(value);
      setSelection({ name: "Custom", label: formatedDate });
      setTitle(formatedDate);
    }
  }
  return (
    <div className="p-3 wp">
      <div className="big-label">Reports</div>
      <div className="mt-3 d-flex justify-content-around align-items-end">
        <Picklist label="Select Person" style={{ flexBasis: "20%" }}>
          <Option name="header" label="List of people" variant="header" />
          <Option name="option 1" label="Ray Jackson" />
          <Option name="option 2" label="Coman Salem" />
          <Option name="option 3" label="Idrisse Ma" />
          <Option name="option 4" label="Tommy Kay" />
        </Picklist>
          
        <Picklist label="Select Status" style={{ flexBasis: "20%" }}>
          <Option name="header" label="List of status" variant="header" />
          <Option name="option 1" label="Falls" />
          <Option name="option 2" label="On the floor" />
          <Option name="option 3" label="Leaving alone" />
        </Picklist>
          
        <Picklist
          value={selection}
          style={{ flexBasis: "40%" }}
          placeholder="Select Date"
          label="Select dates"
          onChange={handlePicklistChange}
        >
          <Option name="Custom" label="Custom" />
          <Option name="Today" label="Today" />
          <Option name="Yesterday" label="Yesterday" />
          <Option name="This Week" label="This Week" />
        </Picklist>
        <DatePickerModal
          title={title}
          isOpen={isOpen}
          variant="double"
          value={value}
          selectionType="range"
          onChange={handleDatePickerChange}
          onRequestClose={() => setisOpen(false)}
        />
        <Button
          style={{ height: "40px" }}
          label="Apply Filter"
          onBlur={() => alert("No info yet!")}
          variant="success"
          className="rainbow-m-around_medium"
        />
      </div>

      <Table data={DataTable} keyField="id">
        <Column header="Name" field="name" />
        <Column header="Fall" field="fall" component={StatusBadge} />
        <Column header="On the floor" field="floor" />
        <Column header="Leave alone" field="leave" />
      </Table>
    </div>
  );
}

export default Reports;
