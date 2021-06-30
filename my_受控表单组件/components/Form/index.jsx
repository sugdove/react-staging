import React, { useState } from "react";
import "./index.scss";
export default function Form(props) {
  // 传入formList
  // 如果有默认值则传入 formDefault
  // hanldeChange获取返回参数
  const { formList, formDefault } = props;

  let obj = {};

  if (formDefault) {
    obj = formDefault;
  } else {
    formList.forEach((item) => {
      item.type === "checkbox" ? (obj[item.prop] = []) : (obj[item.prop] = "");
    });
  }

  const [form, setForm] = useState(obj);

  function handleChange(item, e) {
    const value = e.target.value;
    console.log(value);
    const { type, prop } = item;
    const formObj = { ...form };
    if (type === "checkbox") {
      let arr = [...form[prop]];
      arr.indexOf(value) > -1
        ? arr.splice(arr.indexOf(value), 1)
        : arr.push(value);
      setForm({
        ...formObj,
        ...{ [prop]: arr },
      });
    } else {
      setForm({
        ...formObj,
        ...{ [prop]: value },
      });
    }
  }

  function handleSubmit() {
    props.handleSubmit(form);
  }

  return (
    <div className="Form_wrap">
      {formList.map((item, index) => {
        const { label, type, prop, data } = item;
        let info;
        switch (type) {
          case "input":
            // 受控组件 value 改为 defaultValue
            info = (
              <input
                name={prop}
                defaultValue={form[prop]}
                onChange={(e) => {
                  handleChange(item, e);
                }}
              ></input>
            );
            break;
          case "password":
            info = (
              <input
                key={prop + index}
                defaultValue={form[prop]}
                onChange={(e) => {
                  handleChange(item, e);
                }}
                type="password"
              ></input>
            );
            break;
          case "number":
            info = (
              <input
                key={prop + index}
                defaultValue={form[prop]}
                onChange={(e) => {
                  handleChange(item, e);
                }}
                type="number"
              ></input>
            );
            break;
          case "radio":
            info = data.map((item2, index2) => {
              return (
                <label key={prop + index2}>
                  <label htmlFor="">{item2.label}</label>
                  <input
                    value={item2["value"]}
                    onChange={(e) => {
                      handleChange(item, e);
                    }}
                    checked={form[prop] === item2["value"]}
                    type="radio"
                  ></input>
                </label>
              );
            });
            break;
          case "checkbox":
            info = data.map((item2, index2) => {
              return (
                <label key={prop + index2}>
                  <label htmlFor="">{item2.label}</label>
                  <input
                    value={item2["value"]}
                    onChange={(e) => {
                      handleChange(item, e);
                    }}
                    checked={form[prop].indexOf(item2["value"]) > -1}
                    type="checkbox"
                  ></input>
                </label>
              );
            });
            break;
          case "select":
            let options = data.map((item2, index2) => {
              return (
                <option
                  key={prop + index2}
                  value={item2["value"]}
                  label={item2["label"]}
                ></option>
              );
            });
            info = (
              <select
                onChange={(e) => {
                  handleChange(item, e);
                }}
                defaultValue={form[prop]}
              >
                {options}
              </select>
            );
            break;
          default:
            break;
        }

        let res = (
          <div className="form_item" key={item + index}>
            <label htmlFor={prop}>{label}</label>
            {info}
          </div>
        );

        return res;
      })}
      <button style={{ width: "50px" }} onClick={handleSubmit}>
        提交
      </button>
    </div>
  );
}
