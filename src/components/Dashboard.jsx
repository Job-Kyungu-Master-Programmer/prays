import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import imageUser from '../images/user-286.png'


const Dashboard = () => {
  const [openInfoUser, setOpenInfoUser] = useState(false)
  return (
    <div className="dash">
          <div 
          onClick={() => setOpenInfoUser(!openInfoUser)}
          className="dash__profil" >
            <div className="dash__image">
                <img src={imageUser} alt="" className="dash__img" />
            </div>
            <div className="dash__text">
                <h2 className="dash__text__name"><span className='dash_hi'>Hi !</span>, Jeancy Dalos 👋</h2>
                <span className="dash__experience">Intelligent</span>
            </div>
            <span className="dash__icon"><MdKeyboardArrowDown /></span>
          </div>
          <div className={openInfoUser ? "infosUserOpen" : "dash__infos"}>
             <div className="dash__ident">
                <div className="dash__idents">
                    <span className="dash__sp">Name :</span>
                    <h4 className="dash__person">Jeancy</h4>
                </div>
                <div className="dash__idents">
                <span className="dash__sp">Username :</span>
                    <h4 className="dash__person">Dalos</h4>
                </div>
             </div>
             <div className="dash__ident">
                <div className="dash__idents">
                    <span className="dash__sp">Occupation :</span>
                    <h4 className="dash__person">Student</h4>
                </div>
                <div className="dash__idents">
                <span className="dash__sp">Country :</span>
                    <h4 className="dash__person">Etats-unis</h4>
                </div>
             </div>
             <div className="dash__ident">
                <div className="dash__idents">
                    <span className="dash__sp">Number :</span>
                    <h4 className="dash__person">+145 454 745 5654</h4>
                </div>
                <div className="dash__idents">
                <span className="dash__sp">Mail :</span>
                    <h4 className="dash__person">jeancy@gmail.com</h4>
                </div>
             </div>
             <div className="dash__ident">
                <div className="dash__idents">
                    <span className="dash__sp">Age :</span>
                    <h4 className="dash__person">26</h4>
                </div>
                <div className="dash__idents">
                    <span className="dash__sp">ID_user :</span>
                    <h4 className="dash__person">45154</h4>
                </div>
             </div>
             <button className="dash__logout">logout</button>
          </div>
    </div>
  )
}

export default Dashboard