import React, { useState, useEffect } from 'react';
import Base from '../api/Base';
import Dashboard from './Dashboard'
import Users from './Users'
import FormPray from './FormPray'
import BasculPray from './BasculPray'
import Pray from './Pray'
import Mood from './Mood'
import { MdFormatListBulletedAdd } from "react-icons/md";
import Error from './Error';
import NotSucess from './NotSucess';


const Modals = () => {
    //For open formPray
    const [openPop, setOpenPop] = useState(false)
    // For FormPray - controllers input
    const [pray, setPray] = useState([])
    const [title, setTitle] = useState('')
    const [formDate, setFormDate] = useState('')
    const [fromTime, setFromTime] = useState('')
    const [toTime, setToTime] = useState('')
    const [content, setContent] = useState('');
    //for notification
    const [errors, setErrros] = useState(null)
    const [success, setSucces] = useState(null)
    const [showAll, setshowAll] = useState(true) // for display important


    useEffect(() => {
        Base.getAll()
        .then(returned => {
            setPray(returned)
        })
    },[])

    //form add pray
    const addPray = (e) => {
        e.preventDefault()
    
        let dates = new Date()    
        const infoPrays = {
            title: title,
            formDate: formDate,
            fromTime: fromTime,
            toTime: toTime,
            content: content, 
            important: Math.random() < 0.5,
            like: 0,
            //for date and hours
            day: dates.getDate(),
            month: dates.getMonth() + 1,
            years: dates.getFullYear(),
            hours: dates.getHours(),
            minutes: dates.getMinutes(),
            // id: pray.length + 1
        }
        Base.createPray(infoPrays).then(returned => {
            setPray(pray.concat(returned))
            setTitle('')
            setFormDate('')
            setFromTime('')
            setToTime('')
            setContent('')
            setSucces(' Had you added a (request or prayer)! 🙌')
            setTimeout(() => {
                setSucces(null)
             }, 2000)
        }).catch(error => {
            setErrros('An error has occurred, please try the action again ❌')
            setTimeout(() => {
                setErrros(null)
            },3500)
            return null
        })
    }

    //delete pray
    const deletePray = (id) => {
        const prayId = pray.filter(pr => pr.id !== id)
        Base.deletingPray(id,prayId).then(returned => {
            setPray(pray.map(pr => pr.id !== id ? pr : returned))
            setPray(pray.filter(p => p.id !== id))
            setSucces('Pray or request to remove it!')
            setTimeout(() => {
                setSucces(null)
            }, 2000)
        }).catch(error => {
            setErrros('An error has occurred, please try the action again ❌')
            setTimeout(() => {
                setErrros(null)
            },3500)
        })
    }

    // priority
    const priorityChange = (id) => {
        const prayId = pray.find(p => p.id === id)
        const prayChange = {...prayId, important: !prayId.important}
        Base.priority(id, prayChange).then(returned => {
            setPray(pray.map(pr => pr.id !== id ? pr : returned))
        })
    }
    //For likes
     const liking = (id) => {
         const prayId = pray.find(p => p.id === id)
         const likeCounter = { ...prayId, like: prayId.like + 1 }
         Base.likeUpdate(id, likeCounter).then(returned => {
             setPray(pray.map(p => p.id === id ? returned : p))
         })
     }

    //for Basculad 
    const basculad = showAll ? pray : pray.filter(pr => pr.important)

    return (
        <div className="modals">
         <div className="modals__container">
            <div className="modals__header">
                <Dashboard />
                <Users />
            </div>
            <Mood />
            <Error errors={errors} />
            <NotSucess success={success} />
            <div className="modals__modals">
                <BasculPray prayCounter={pray} basc={showAll} setBasc={setshowAll} />
                <div className="modals__list">
                   {basculad.map(prayer => 
                      <Pray key={prayer.id} pray={prayer} 
                      onDelete={() => deletePray(prayer.id)}
                      priorityChange={() => priorityChange(prayer.id)}
                      likes={() => liking(prayer.id)}
                      />
                    )}
                </div>
            </div>
            <FormPray
              //for open form
              openFormPray={openPop} setOpenPop={setOpenPop}
              //for controllers inputs
              addPray={addPray}
              title={title} setTitle={setTitle}
              formDate={formDate} setFormDate={setFormDate}
              fromTime={fromTime} setFromTime={setFromTime}
              content={content} setContent={setContent}
              toTime={toTime} setToTime={setToTime}
            />
         </div>
         <button
            onClick={() => setOpenPop(!openPop)}
            className="modals__add__pray">
            <MdFormatListBulletedAdd />
            <span>Add pray</span>
         </button>
     </div>
  )
}

export default Modals