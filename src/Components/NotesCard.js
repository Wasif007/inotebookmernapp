import React from 'react'

const NotesCard = (props) => {
    const {title,description}=props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
  </div>
</div>
</div>
  )
}

export default NotesCard
