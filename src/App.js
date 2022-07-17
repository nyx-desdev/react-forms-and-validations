import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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
      dob: {
        key: "dob",
        label: "dob",
        type: "date",
        value: "",
        rules: {
          required: true,
        },
      },
      panUpload: {
        key: "panUpload",
        // label: "Pan Upload",
        type: "file",
        value: "",
        // rules: {
        //   required: true,
        // },
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

  const handleUploadChange = (index, e, key) => {
    console.log(index, e, key)
    // const { value } = e.target;
    // console.log(key);
    console.log(e.target.files[0])
    const data = [...formData];
    console.log('d',data[index][key].value)
    data[index][key].value = e.target.files[0];
    console.log('dd',data)
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
        dob: {
          key: "dob",
          label: "dob",
          type: "date",
          value: "",
          rules: {
            required: true,
          },
        },
        panUpload: {
          key: "panUpload",
          // label: "Pan Upload",
          type: "file",
          value: "",
          // rules: {
          //   required: true,
          // },
        },
      },
    ]);
  };

  const handleFormDataPost = () => {
    // let arr = [...formData];
    // let member = {}
    // for (let i = 0; i < arr.length; i++) {
    //   arr[i].member = `member $[i]`
    // }
    // console.log(member)
    let arr = [];
    for (let i = 0; i < formData.length; i++) {
      console.log(formData[i]);

      let obj = {};
      for (const variable in formData[i]) {
        // console.log(formData[i][variable].value)
        obj[variable] = formData[i][variable].value;
      }
      arr.push(obj);
      console.log("obj", obj);
    }
    console.log("arr", arr);

    console.log("data", formData);
  };

  return (
    <div className="App">
      <p>Forms</p>

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
          <input
            {...item.dob}
            // type="text"
            // name="address"
            onChange={(e) => handleChange(index, e, item.dob.key)}
          />
          <input
            // {...item.panUpload}
            type="file"
            // value=""
            // type="text"
            // name="address"
            onChange={(e) => handleUploadChange(index, e, item.panUpload.key)}
          />
        </div>
      ))}
      <button onClick={handleFormDataPost}>Post</button>

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
      <button className="btn btn-success" onClick={handleaddclick}>
        Add More
      </button>
    </div>
  );
}

export default App;
