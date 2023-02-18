import Task from './components/Task'
import './index.css'
import { useState } from 'react'
import { Fade } from 'react-reveal'

export default function App() {
  const [tasks, setTasks] = useState([])

  return (
    <div className='flex flex-col justify-center md:grid md:grid-cols-2 items-center md:p-10 h-screen'>
      <Fade left>
        <div className='flex flex-col items-center justify-center gap-6 h-full md:border-r-2 p-1'>
          <label htmlFor="task" className='font-bold text-4xl lg:text-6xl'>Adicione uma tarefa</label>
          <input
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setTasks(prevValue => [...prevValue, event.target.value])
                event.target.value = ""
              }
            }}
            autoComplete="off"
            id="task"
            type="text"
            placeholder="Coloque sua tarefa aqui"
            className="w-4/5 placeholder:text-center text-center focus:outline-none focus:border-cyan-500 transition border-b-2 text-md lg:text-3xl"
          />
        </div>

        <hr className="h-1 w-11/12 text-center bg-zinc-300 my-10 md:hidden" />
        
        <div className="flex flex-col justify-center items-center text-2xl lg:text-4xl text-zinc-400 md:border-l-2 h-full">
          {
            tasks.length === 0 ?
            <h2>Suas tarefas aparecerão aqui</h2> :
            tasks.map(task => {
              return (
                <Task>{task}</Task>
              )
            })
          }
        </div>
      </Fade>
    </div>
  )
}
