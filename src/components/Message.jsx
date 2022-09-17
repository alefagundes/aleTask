import style from './Message.module.css'

const Message = ({ msg }) => {
  return (
    <div className={style.message}>
      <p>{msg}</p>
    </div>
  )
}

export default Message
