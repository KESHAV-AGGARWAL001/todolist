import React, { useState } from 'react'
import './App.css'
let id_number = 1;

const App = () => {

  const [input, setInput] = useState("");
  const [ArrayOfData, setArrayOfData] = useState([]);

  const AddTodo = () => {
    setArrayOfData([
      ...ArrayOfData,
      {
        id: id_number++,
        todo: input
      }]
    );
    setInput("");
  }

  return (
    <div className='container d-flex flex-column'>
      <div>
        <h1 className='m-5 justify-content-center'>𝕴𝖔𝖉𝖔 𝕷𝖎𝖘𝖙</h1>

        <div class="input-group mb-6">
          <input type="text" className="form-control" placeholder="Add your todo task" aria-label="Add your Todo Task" aria-describedby="basic-addon2" value={input} onChange={e => setInput(e.target.value)} />
          <div class="input-group-append">
            <button class="btn btn-dark" onClick={AddTodo} >ADD</button>
          </div>
        </div>
        <ul >
          {ArrayOfData.map(data => (
            <li key={data?.id} className='card' style={{ width: "auto", height: "70px", margin: "2rem" }}>
              <div className='card-body d-flex justify-content-between'>
                <label className=' text-blue  mt-auto mb-auto '>{data?.todo?.length > 0 ? data?.todo : data.todo = prompt("Enter some data")}</label>
                <button className="delete btn btn-dark" onClick={() => setArrayOfData(ArrayOfData.filter((em) => em?.id !== data?.id))}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul >

      </div >
    </div >
  )
};

export default App
