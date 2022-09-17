import style from './TaskCard.module.css'
import { FaTasks } from 'react-icons/fa'
import { MdOutlineTaskAlt } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'
import { CgDetailsMore } from 'react-icons/cg'

import { Link } from 'react-router-dom'

const deleteTask = async (url, id) => {
  const req = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  console.log('task de id: ', id + ' deletada')
}

const TaskCard = ({ task, url, onDelete, handleMessage }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    deleteTask(url, task.id)
    handleMessage(task.id)
    onDelete(task.id)
  }

  return (
    <div className={style.card}>
      <form onSubmit={handleSubmit}>
        <div>
          <FaTasks />
        </div>
        <h2 className={style.name}>{task.name}</h2>
        <h3 className={style.data}>{task.data}</h3>
        <div className={style.funcoes}>
          <Link to={`/details/${task.id}`} className={style.details}>
            <CgDetailsMore />
          </Link>
          <Link to={`edit/${task.id}`} className={style.edicao}>
            <BiEdit />
          </Link>
          <button type="submit" className={style.concluir}>
            <MdOutlineTaskAlt />
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskCard
