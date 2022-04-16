import { useEffect, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import ActionButton from './components/ActionButton';
import Formulario from './components/Formulario';
import {Header,Navbar} from './components/Styles';
import Tabela from './components/Tabela';

class CreateData{
  static lastId = 0;
  constructor({nome,idade,email}){
    this.id = CreateData.lastId++;
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }
}


function App() {

  const [dados, setDados] = useState({
    nome:'',
    idade:0,
    email:''
  });

  const [selectedData, setSelectedData] = useState(false)
  
  const [dataList, setDataList] = useState(getIntoLocalStorge);

  useEffect(()=>{
    localStorage.setItem('datalist',JSON.stringify(dataList))
  },[dataList])

  function formPadrao() {
    setSelectedData(false);
    setDados({nome:'',idade:0,email:''})
  }

  function getData(e) {
    const name = e.target.name;
    const value = e.target.value;

    setDados({...dados,[name]:value});
  }

  function addDate() {
    const data = new CreateData(dados)
    
    setDataList([...dataList,data]);
  }

  function selectData(data) {
    setSelectedData(true);
    setDados(data);
  }

  function deleteData() {
    if(selectedData){
      const newList = dataList
        .filter(({id}) => id !== dados.id);
      
        setDataList(newList);
    }

    formPadrao();
  }

  function updadeData() {
    let copiaDataList = [...dataList]
    
    dataList.map((data,index) => {
      if (data.id === dados.id) {
        copiaDataList[index] =  dados;
        setDataList(copiaDataList);
      }
    });

    formPadrao()

  }

  function getIntoLocalStorge(){
    return localStorage.getItem('datalist')
      ?JSON.parse(localStorage.getItem('datalist'))
      :[];
  }

  return (
    <>
      <Header>
        <h2>Crud em ReactJS <span>Eduardo JP</span></h2>
     </Header>

     <Navbar>
        <NavLink className='navlink' to='/'>Tabela</NavLink>
        <NavLink className='navlink' to='/form' onClick={formPadrao}>
          Adicionar com formulário
        </NavLink>
     </Navbar>

      <Routes>
        <Route path='/' element={
          <Tabela 
            selectData={selectData}
            dataList={dataList} />
        }/>
        <Route path='form' element={
          <>
            <Formulario getData={getData} dados={dados}/>

            <ActionButton
              addDate={addDate} 
              deleteData={deleteData} 
              updadeData={updadeData}
              selectedData={selectedData}
            />            
          </>
        } />
      </Routes>
    </>
  );
}

export default App;