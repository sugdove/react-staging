import React from 'react'
import Form from './components/Form'
export default function App() {

  const formList = [
    { label: "名称", type: "input", prop: "name" },
    { label: "密码", type: "password", prop: "password" },
    { label: "年龄", type: "number", prop: "age" },
    {
      label: "性别",
      type: "radio",
      prop: "sex",
      data: [
        { label: "男", value: "1" },
        { label: "女", value: "2" },
      ],
    },
    {
      label: "爱好",
      type: "checkbox",
      prop: "hobby",
      data: [
        { label: "篮球", value: "1" },
        { label: "足球", value: "2" },
        { label: "乒乓球", value: "3" },
      ],
    },
    {
      label: "大学",
      type: "select",
      prop: "education",
      data: [
        { label: "本科", value: "1" },
        { label: "专科", value: "2" },
        { label: "高中", value: "3" },
      ],
    },
  ];
  
  function handleSubmit(val){
    console.log(val)
  }

  return (
    <div>
      <Form formList={formList} handleSubmit={ handleSubmit }/>
    </div>
  )
}

