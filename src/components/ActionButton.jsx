import {NavLink} from 'react-router-dom';
import {Button} from './Styles';


function ActionButton({addDate,deleteData,updadeData,selectedData}) {
    return(
      <>
        {selectedData?
          <>
            <Button
              bgColor='#fb0f0f'
              onClick={deleteData}
            ><NavLink className='navlink' to='/'>
              Eliminar
            </NavLink></Button>
  
            <Button
              bgColor='#ff9800'
              onClick={updadeData}
            ><NavLink className='navlink' to='/'>
              Atualizar
            </NavLink></Button>
          </>:
          <Button
            bgColor='#009dee'
            onClick={addDate}
          ><NavLink className='navlink' to='/'>
            Adicionar a lista
          </NavLink></Button>
        }
        <Button bgColor='#848686'>
        <NavLink className='navlink' to='/'>
          Voltar
        </NavLink></Button>
      </>
    )
  }

export default ActionButton;