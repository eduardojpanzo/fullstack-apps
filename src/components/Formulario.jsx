import {Article} from './Styles';


function Formulario({getData,dados}) {
    return(
        <form className="formulario">

            <Article>
                <label>Nome</label>
                <input
                    size="50" 
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    onInput={e=>getData(e)}
                    value={dados.nome}
                />
            </Article>

            <Article>
                <label>Idade</label>
                <input
                    size="50"
                    type="number"
                    min={0}
                    placeholder="Idade"
                    name="idade"
                    onInput={e=>getData(e)}
                    value={dados.idade}
                />
            </Article>

            <Article>
                <label>Email</label>
                <input
                    size="50"
                    type="text"
                    placeholder="Email"
                    name="email"
                    onInput={e=>getData(e)}
                    value={dados.email}
                />
            </Article>
        </form>
    )
}

export default Formulario;