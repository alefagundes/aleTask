import style from './CreateTask.module.css'
import { MdTask } from 'react-icons/md'

//components
import Input from '../components/Input'
import Message from '../components/Message'

//hoots
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateTask = ({ url }) => {
  const [message, setMessage] = useState('')
  const [newtask, setNewTask] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    setNewTask({ ...newtask, [e.target.name]: e.target.value })
  }

  const createTask = async (url) => {
    try {
      const newTask = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
        },
        body: JSON.stringify(newtask),
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(url)
    setMessage('Tarefa criada com sucesso!')
    setTimeout(() => {
      setMessage('')
      navigate('/')
    }, 2000)
  }

  return (
    <div className={style.container}>
      {message.length > 0 && <Message msg={message} />}
      <h1>
        Create <span>Task</span> <MdTask />
      </h1>
      <form className={style.formCreate} onSubmit={handleSubmit}>
        <Input
          placeholder="Nome da tarefa"
          id="name"
          name="name"
          type="text"
          value={newtask.name}
          handleChange={handleChange}
          maxLength={18}
          minLength={3}
        />
        <Input
          name="data"
          placeholder="Informe uma data"
          id="date"
          value={newtask.date}
          type="text"
          maxLength={10}
          minLength={8}
          handleChange={handleChange}
        />
        <textarea
          value={newtask.descricao}
          className={style.descricao}
          name="descricao"
          cols="50"
          rows="10"
          maxLength={180}
          minLength={10}
          onChange={handleChange}
        ></textarea>
        <Input type="submit" value="CREATE TASK" />
      </form>
    </div>
  )
}

export default CreateTask
