function Formulario() {
    return(
        <div className="card-body">
            <form className="form-horizontal">
                <article className="control-group">
                    <label className="control-label">Nome</label>
                    <input
                        size="50" 
                        class="form-control"
                        type="text"
                        placeholder="Nome" 
                    />
                </article>

                <article class="control-group">
                    <label class="control-label">Endereço</label>
                    <input
                        size="80"
                        class="form-control"
                        type="text"
                        placeholder="Endereço"
                    />
                </article>

                <article class="control-group">
                    <label class="control-label">Telefone</label>
                    <input
                        size="35"
                        class="form-control"
                        type="text"
                        placeholder="Telefone"
                    />
                </article>

                <article class="control-group">
                    <label class="control-label">Email</label>
                    <input
                        size="40"
                        class="form-control"
                        type="text"
                        placeholder="Email"
                    />
                </article>
            </form>
        </div>
    )
}

export default Formulario;