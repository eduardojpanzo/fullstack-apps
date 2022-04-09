import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Tabela from './components/Tabela';

function App() {
  const [dados, setDados] = useState({
    nome:'',
    idade:0,
    email:''
  });
  const [dataList,setDataList] = useState([]);

  useEffect(()=>{
    localStorage.setItem('dataList',JSON.stringify(dataList));
  },[dataList])

  function getData(e) {
    const name = e.target.name;
    const value = e.target.value;

    setDados({...dados,[name]:value})
  }

  function saveData() {
    setDataList([...dataList, dados])
  }

  function deleteData(id) {
    const newList = dataList.filter((data,index)=>index !== id);

    setDataList(newList)
  }

  function updadeData(id) {
    // dataList[id]
  }
  return (
    <div className='container'>
     <Header />

      <Tabela saveData={saveData} dataList={dataList} deleteData={deleteData} updadeData={updadeData}/>

      <Formulario getData={getData}/>

      {/* <ModalUpdate/> */}
    </div>
  );
}

export default App;
