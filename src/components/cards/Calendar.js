import Calendar from "react-calendar"
import React,{useState} from "react";


const ReactCalendar = ()=> {
    const [date, setDate] = useState(new Date())
     const onChange = date =>{
       setDate(date)
     }

     <Calendar onChange={onChange} value={date}
              

     />

    }

    export default ReactCalendar