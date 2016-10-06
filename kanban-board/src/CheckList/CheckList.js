import React, {Component} from 'react'

import './CheckList.css'

class CheckList extends Component {
  render() {
    let tasks = this.props.tasks.map((task) => (
      <li className='checklist-task' key={task.id}>
        <input type="checkbox" defaultChecked={task.done} />
        {task.name}
        <a href="#" className="checklist-task-remove" />
      </li>
    ));

    return(
      <div className="checkList">
        <ul>{tasks}</ul>
      </div>
    )
  }
}

export default CheckList
