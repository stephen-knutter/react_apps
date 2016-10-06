import React from 'react'
import ReactDOM from 'react-dom'
import KanbanBoard from './KanbanBoard/KanbanBoard'
import './index.css'

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the **whole** book",
    color: "#abdc28",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Find the source at [github](https://github.com/pro-react)",
    color: "#299a0b",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiements",
        done: false
      }
    ]
  }
];

ReactDOM.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'))
