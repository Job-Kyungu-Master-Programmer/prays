import React, { useState } from 'react'
import { HiOutlineUserGroup } from "react-icons/hi2";


const Users = () => {
  const [openUsers, setOpenUsers] = useState(false)
  return (
    <div className="users">
        <div className="users__icon" onClick={() => setOpenUsers(!openUsers)}>
          <span className="users__connected"> All Users</span> <HiOutlineUserGroup />
        </div>
        <div className={openUsers ? "profilOpen" : "users__profil"}>
          <div className="users__user">
              <h3 className="users__name">Jacob Walos</h3>
              <span className="users_occupation">Student</span>
          </div>
          <div className="users__user">
              <h3 className="users__name">Jacob Walos</h3>
              <span className="users_occupation">Student</span>
          </div>
          <div className="users__user">
              <h3 className="users__name">Jacob Walos</h3>
              <span className="users_occupation">Student</span>
          </div>
          <div className="users__user">
              <h3 className="users__name">Jacob Walos</h3>
              <span className="users_occupation">Student</span>
          </div>
          <div className="users__user">
              <h3 className="users__name">Jacob Walos</h3>
              <span className="users_occupation">Student</span>
          </div>
        </div>
    </div>
  )
}

export default Users