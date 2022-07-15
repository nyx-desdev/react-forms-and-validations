import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  let [formData, setFormData] = useState([
    {
      address: "",
      addressError: "Required",
      panUpload: "",
      panUploadError: "Required",
      date: null,
      dateError: "Required",
    },
  ]);
  const [startDate, setStartDate] = useState();

  const handleChange = (index, e) => {
    const { value } = e.target;
    const data = [...formData];
    data[index].address = value;
    setFormData(data);
  };

  const onChange = (e, index) => {
    var files = e.target.files[0];
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    // this.setState({ files: [...this.state.files, ...filesArr] });
    const data = [...formData];
    data[index].panUpload = files;
    setFormData(data);
  };

  const onSetDate = (date, index) => {
    const data = [...formData];
    data[index].date = date;
    setFormData(data);
  };

  const handleaddclick = () => {
    setFormData([
      ...formData,
      {
        address: "",
        addressError: "Required",
        panUpload: "",
        panUploadError: "Required",
        date: null,
        dateError: "Required",
      },
    ]);
  };

  return (
    <div className="App">
      {formData.map((item, index) => (
        <>
          {/* {JSON.stringify(item)} */}
          <input
            type="text"
            // name="address"
            onChange={(e) => handleChange(index, e)}
          />
          <p style={{ color: "red" }}>{item.addressError}</p>
          <input
            type="file"
            // name="panUpload"
            onChange={(e) => onChange(e, index)}
          />
          <p style={{ color: "red" }}>{item.panUploadError}</p>
          <DatePicker
            selected={item.date}
            onChange={(date) => onSetDate(date, index)}
          />
          <p style={{ color: "red" }}>{item.dateError}</p>
        </>
      ))}
      <button className="btn btn-success" onClick={handleaddclick}>
        Add More
      </button>
    </div>
  );
}

export default App;
