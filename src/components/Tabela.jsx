import { Button } from "./Styles";

function Tabela({selectData,dataList}) {

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Email</th>
                    <th>Ação</th>
                </tr>
            </thead>
            <tbody>
            {dataList.map((data,index)=> (
                <tr key={index}>
                    <th>{index+1}</th>
                    <td>{data.nome}</td>
                    <td>{data.idade}</td>
                    <td>{data.email}</td>
                    <td width='250' >
                        <Button onClick={e=>{selectData(data)}}>Selecionar</Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default Tabela;