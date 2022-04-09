function Formulario({getData}) {
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
                        name="nome"
                        onInput={getData}
                    />
                </article>

                <article class="control-group">
                    <label class="control-label">Idade</label>
                    <input
                        size="80"
                        class="form-control"
                        type="text"
                        placeholder="Idade"
                        name="idade"
                        onInput={getData}
                    />
                </article>

                <article class="control-group">
                    <label class="control-label">Email</label>
                    <input
                        size="40"
                        class="form-control"
                        type="text"
                        placeholder="Email"
                        name="email"
                        onInput={getData}
                    />
                </article>
            </form>
        </div>
    )
}

export default Formulario;