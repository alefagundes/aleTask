import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Input from '../components/Input'
import style from './EditTask.module.css'
import Message from '../components/Message'

const url = import.meta.env.VITE_API

const EditTask = () => {
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()
  const [task, setTask] = useState({})

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
    console.log(task)
  }

  useEffect(() => {
    const getTask = async (url, id) => {
      const req = await fetch(`${url}/${id}`)
      const res = await req.json()
      setTask(res)
    }
    getTask(url, id)
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    const atualiaTask = async (url, id) => {
      const req = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      })
    }
    atualiaTask(url, task.id)
    setMessage(`Tarefa ${id} atualizada com sucesso!`)
    setTimeout(() => {
      setMessage('')
      navigate('/')
    }, 2000)
  }

  return (
    <div className={style.formEdit}>
      {!task && <p>Carregando...</p>}
      {message.length > 0 && <Message msg={message} />}
      <h1>
        Editando tarefa: <span>{id}</span>
      </h1>
      <form key={task.id} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Nome da tarefa"
          value={task.name}
          handleChange={handleChange}
          maxLength={20}
        />
        <Input
          type="text"
          placeholder="Data da tarefa"
          name="data"
          id="date"
          value={task.data}
          handleChange={handleChange}
          maxLength={8}
          minLength={6}
        />
        <textarea
          value={task.descricao}
          className={style.descricao}
          name="descricao"
          cols="50"
          rows="10"
          maxLength={180}
          onChange={handleChange}
        ></textarea>
        <Input type="submit" value="SALVAR" />
      </form>
    </div>
  )
}
export default EditTask
