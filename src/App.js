import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import StepContainer from "./components/StepContainer";

function App() {
  const [formData, setFormData] = useState([
    {
      firstName: {
        key: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Enter your first Name",
        value: "",
        rules: {
          required: true,
        },
      },
      lastName: {
        key: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Enter your Last Name",
        value: "",
        rules: {
          required: true,
        },
      },
    },
  ]);

  // let [formData, setFormData] = useState([
  //   {
  //     address: "",
  //     addressError: "Required",
  //     panUpload: "",
  //     panUploadError: "Required",
  //     date: null,
  //     dateError: "Required",
  //   },
  // ]);

  const handleChange = (index, e, key) => {
    const { value } = e.target;
    console.log(key);
    const data = [...formData];
    data[index][key].value = value;
    setFormData(data);
  };

  // const onChange = (e, index) => {
  //   var files = e.target.files[0];
  //   console.log(files);
  //   var filesArr = Array.prototype.slice.call(files);
  //   console.log(filesArr);
  //   // this.setState({ files: [...this.state.files, ...filesArr] });
  //   const data = [...formData];
  //   data[index].panUpload = files;
  //   setFormData(data);
  // };

  // const onSetDate = (date, index) => {
  //   const data = [...formData];
  //   data[index].date = date;
  //   setFormData(data);
  // };

  const handleaddclick = () => {
    setFormData([
      ...formData,
      {
        firstName: {
          key: "firstName",
          label: "First Name",
          type: "text",
          placeholder: "Enter your first Name",
          value: "",
          rules: {
            required: true,
          },
        },
        lastName: {
          key: "lastName",
          label: "Last Name",
          type: "text",
          placeholder: "Enter your Last Name",
          value: "",
          rules: {
            required: true,
          },
        },
      },
    ]);
  };

  const handleFormDataPost = () => {
    let arr = [...formData];
    let member = {}
    for (let i = 0; i < arr.length; i++) {
      arr[i].member = `member $[i]`
    }
    console.log(member)

    console.log("data", formData);
  };

  return (
    <div className="App">
      <StepContainer />
      {/* <p>Forms</p>

      {formData.map((item, index) => (
        <div key={index} style={{ display: "flex" }}>
          <input
            {...item.firstName}
            // type="text"
            // name="address"
            onChange={(e) => handleChange(index, e, item.firstName.key)}
          />
          <input
            {...item.lastName}
            // type="text"
            // name="address"
            onChange={(e) => handleChange(index, e, item.lastName.key)}
          />
        </div>
      ))}
      <button onClick={handleFormDataPost}>Post</button> */}

      {/* {formData.map((item, index) => (
        <>
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
      ))} */}
      {/* <button className="btn btn-success" onClick={handleaddclick}>
        Add More
      </button> */}
    </div>
  );
}

export default App;
