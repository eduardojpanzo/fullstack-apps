function Tabela() {
    return(
        <div className="row">
            <button className="btn btn-success">Adicionar</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Sexo</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <?php foreach ($pessoas->pessoas as $pessoa): ?>
                        <tr>
                            <th scope="row">
                                <input type="checkbox" className="custom-checkbox" name="check" value="<?php echo $pessoa['id']; ?>">
                            </th>
                            <td><?php echo $pessoa['nome']; ?></td>
                            <td><?php echo $pessoa['endereco']; ?></td>
                            <td><?php echo $pessoa['telefone']; ?></td>
                            <td><?php echo $pessoa['email']; ?></td>
                            <td><?php echo mostrar_sexo($pessoa['sexo']); ?></td>
                            <td width=250>
                                <a className="btn btn-primary" href="read.php?id=<?php echo($pessoa['id']);?>">Info</a>
                                <a className="btn btn-warning" href="write.php?id=<?php echo($pessoa['id']);?>">Atualizar</a>
                                <a className="btn btn-danger" href="delete.php?id=<?php echo($pessoa['id']);?>">Excluir</a>
                            </td>
                        </tr>
                    <?php endforeach ?> */}
                </tbody>
            </table>
        </div>
    );
}

export default Tabela;