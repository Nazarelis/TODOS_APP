import './TodoItem.css'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';


function TodoItem(props){
    return(
      <div className='li-container'>
        <li className={`Todo-Item  ${props.completed && "Todo-Item-completed"} `}>
          <div className='container-state-button'>
            <span 
            className={`state.button stateButton-check ${props.completed && "stateButton-check--active"} `}
            onClick={props.onComplete}
            > <CheckCircleTwoToneIcon/>
             {props.completed} 
             </span>
          </div>

          <div className='container-todoItem-p'>
            <p className={`todoItem-p ${props.completed && "todoItem-p--complete"}`}>{props.text}</p>
          </div>

          <span 
          onClick={props.onDelete}
          className='delete-button deleteButton--complete'> <DeleteIcon /> </span>





      </li>

      </div>
      
    ) 
  }

  export {TodoItem};