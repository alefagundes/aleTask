import style from './Home.module.css'
import { useEffect, useState } from 'react'
import TaskCard from '../components/TaskCard'
import Message from '../components/Message'

const apiURL = import.meta.env.VITE_API

const Home = () => {
  const [message, setMessage] = useState('')
  const [tasks, setTasks] = useState([])

  const onDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  const handleMessage = (id) => {
    setMessage(`Tarefa ${id} concluida com sucesso!`)
    setTimeout(() => {
      setMessage('')
    }, 2000)
  }

  useEffect(() => {
    const getTaks = async (url) => {
      const reqTasks = await fetch(url)
      const res = await reqTasks.json()
      setTasks(res)
    }
    getTaks(apiURL)
  }, [])

  return (
    <div>
      {!tasks && <p>Você não possui tarefas!</p>}
      {message.length > 0 && <Message msg={message} />}
      <div className={style.container}>
        {tasks &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              url={apiURL}
              onDelete={onDelete}
              task={task}
              handleMessage={handleMessage}
            />
          ))}
      </div>
    </div>
  )
}

export default Home
