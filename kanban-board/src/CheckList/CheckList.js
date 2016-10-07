import React, {Component, PropTypes} from 'react'

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
        <input type="text"
          className="checklist--add-task"
          placeholder="Type then hit Enter to add a task" />
      </div>
    )
  }
}

CheckList.propTypes = {
  cardId: PropTypes.number,
  tasks: PropTypes.arrayOf(PropTypes.object)
}

export default CheckList
