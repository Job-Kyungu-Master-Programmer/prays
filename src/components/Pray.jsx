import React, { useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";



const Pray = ( { pray, onDelete,priorityChange, likes, like} ) => {
    const label = pray.important ? false : true

  return (
      <div className={label ? 'pray__red' : 'pray'}>
        <h1 className={ label ? "pray__red__title" : "pray__title"}>{pray.title}</h1>
            <div className="pray__dates">
                <span className="pray__posted pray__date">posted : {pray.day}/{pray.month}/{pray.years}</span>
                <span className="pray__posted">{pray.hours}:{pray.minutes}</span>
           </div>
        <span className={ label ? "pray__red__content" : "pray__content" }>{pray.content}</span>
        <div className={ label ? "pray__red__plan" : "pray__plan" }>
            <h3 className={ label ? "pray__red__plan" : "pray__plan__title" }>Planification</h3>
            <span className="pray__posted pray__date">Date  : {pray.formDate}</span>
            <span className="pray__posted">From <em>{pray.fromTime}</em>  to <em>{pray.toTime}</em></span>
        </div>
        <div className="pray__bottom">
             <div onClick={priorityChange}
              className="pray__button__basc"
              >
               { label ?  <MdCheckBox className='pray__check'/> : <MdOutlineCheckBoxOutlineBlank />  }
            </div>
            <span className="pray__author">Author : Jeancy</span>
            <strong className="pray__likes">
               <span onClick={onDelete} className="pray__delete">
                 <AiOutlineDelete />
               </span>
               <span
                onClick={likes} 
                className="pray__like">
                <AiOutlineLike />
                    <em>{pray.like}</em>
               </span>
            </strong>
        </div>
      </div>
  )
}

export default Pray