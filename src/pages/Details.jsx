//css
import style from './Details.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdTask } from 'react-icons/md'

const Details = () => {
  const url = import.meta.env.VITE_API
  const { id } = useParams()
  const [task, setTask] = useState({})

  useEffect(() => {
    const getTask = async (id) => {
      const req = await fetch(`${url}/${id}`)
      const res = await req.json()
      setTask(res)
    }
    getTask(id)
  }, [])

  return (
    <div className={style.details}>
      {!task && <p>Carregando...</p>}
      <h1>
        Tarefa <MdTask />: <span>{task.name}</span>
      </h1>
      <h2>
        Data: <span>{task.data}</span>
      </h2>
      <textarea
        disabled
        value={task.descricao}
        cols="50"
        rows="10"
        defaultValue="Informe uma descricao para a tarefa"
        className={style.descricao}
      ></textarea>
      <Link to="/" className={style.voltar}>
        Voltar
      </Link>
    </div>
  )
}

export default Details
