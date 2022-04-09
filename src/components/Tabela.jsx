function Tabela({saveData,dataList,deleteData,updadeData}) {
    return(
        <div className="row">
            <button
                className="btn btn-success"
                onClick={saveData}
            >Adicionar</button>
            <table className="table table-striped">
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
                    {
                        dataList.map((data,index)=> (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{data.nome}</td>
                                <td>{data.idade}</td>
                                <td>{data.email}</td>
                                <td width='250' >
                                    {/* <button
                                        className="btn btn-primary"
                                        onClick={readData(index)}
                                    >Info</button>*/}
                                    <button
                                        className="btn btn-warning"
                                        onClick={e => {updadeData(index)}}
                                    >Atualizar</button> 
                                    <button
                                        className="btn btn-danger" 
                                        onClick={e =>{deleteData(index)}}
                                    >Excluir</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Tabela;