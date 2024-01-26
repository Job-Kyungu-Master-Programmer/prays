
const FormPray = ( { 
  openFormPray, setOpenPop, addPray, title, formDate,fromTime,
  setTitle, setFormDate, setFromTime,toTime, setToTime,
  content, setContent
   } ) => {


  return (
    <div className={openFormPray ? 'openForm' : 'formPray'}>
        <form onSubmit={addPray} className="formPray__form">
             <h3 className="formPray__title">Create a prayer request </h3>
            <input type="text"
              value={title} onChange={(e) => setTitle(e.target.value)}
            className="formPray__input" placeholder='Your subject'
             />
            <input type="date" 
             value={formDate} onChange={(e) => setFormDate(e.target.value)}
            className="formPray__input"
            />
             <div className="formPray__times">
             <span>From</span> 
             <input type="time"
              value={fromTime} onChange={(e) => setFromTime(e.target.value)}
            className="formPray__input formPray__time"
             />
             <span>To</span> 
             <input type="time"
              value={toTime} onChange={(e) => setToTime(e.target.value)}
            className="formPray__input formPray__time"
             />
             </div>
            <textarea  value={content} onChange={(e) => setContent(e.target.value)}
             placeholder="Your request pray" className="formPray__textarea"></textarea>
        <button onClick={() => setOpenPop(!openFormPray)} className="formPray__btn">Add a prayer request 🙏</button>
        </form>
    </div>
  )
}

export default FormPray