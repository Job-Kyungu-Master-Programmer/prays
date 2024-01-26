import React from 'react'
import { LuSettings2 } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbListCheck } from "react-icons/tb";




const BasculPray = ( { prayCounter, basc, setBasc } ) => {
  return (
      <div className="basc">
           <div className="basc__title">Task Pray </div>
           <div className="basc__bascs">
               <div onClick={() => setBasc(!basc)}  className="basc__basc">
                  { basc ? <TbListCheck /> : <LuSettings2 />}
               </div>
               <button className="basc__btn">
                  <IoNotificationsOutline /><span>{prayCounter.length}</span>
               </button>
           </div>
      </div>
  )
}

export default BasculPray