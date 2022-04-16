import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import {Header,Button} from './components/Styles'
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
    
    dataList.map((data,index)=>{
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

     <Button bgColor='#e61384'>
       Ir para o formulário
      </Button>

      <Tabela 
        selectData={selectData}
        dataList={dataList}
      />

      <Formulario
        getData={getData}
        dados={dados}
      />

      {
        selectedData?
          <>
            <Button
              bgColor='#fb0f0f'
              onClick={deleteData}
            >Eliminar</Button>

            <Button
              bgColor='#ff9800'
              onClick={updadeData}
            >Atualizar</Button>
          </>
        :
          <Button
            bgColor='#009dee'
            onClick={addDate}
          >Adicionar na Lista</Button>
      }
      <Button>Voltar</Button>


    </>
  );
}

export default App;