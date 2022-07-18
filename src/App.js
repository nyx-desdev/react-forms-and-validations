import logo from "./logo.svg";
// import "./App.css";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import { useForm, useFieldArray, appendErrors } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

const UserInformation = (props) => {
  const { register, control, errors } = props;
  const { append, fields, remove } = useFieldArray({
    control,
    name: "users",
  });

  return (
    <div>
      <h1>Seller Regsitration</h1>
      {fields.map((item, index) => (
        <div key={index}>
          <div>
            <label>Photo</label>
            <input
              type="file"
              {...register(`users[${index}].photo`)}
              name={`users[${index}].photo`}
              defaultValue={item.photo}
            />
          </div>
          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              {...register(`users[${index}].date`)}
              name={`users[${index}].date`}
              defaultValue={item.date}
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              {...register(`users[${index}].address`)}
              name={`users[${index}].address`}
              defaultValue={item.address}
            />
          </div>
          <div>
            <label>Aadhar</label>
            <input
              type="text"
              {...register(`users[${index}].aadhar`, {
                required: "Required",
                pattern: {
                  value: /^\d{4}\s\d{4}\s\d{4}$/,
                  message: "Pattern invalid",
                },
              })}
              name={`users[${index}].aadhar`}
              defaultValue={item.aadhar}
            />
            {errors.users?.[index]?.aadhar?.message}
          </div>
          <div>
            <label>Pan</label>
            <input
              type="text"
              {...register(`users[${index}].pan`)}
              name={`users[${index}].pan`}
              defaultValue={item.pan}
            />
          </div>
          <button onClick={() => remove(index)}>Remove Member</button>
        </div>
      ))}
      <button onClick={() => append({ address: "", aadhar: "", pan: "" })}>
        Add Member
      </button>
    </div>
  );
};

function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="App">
      <p>Forms</p>
      <form onSubmit={handleSubmit(onsubmit)}>
        <UserInformation
          register={register}
          control={control}
          errors={errors}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
