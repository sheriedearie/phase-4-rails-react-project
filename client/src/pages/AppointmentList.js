import React, { useContext, useState, useEffect } from 'react';
import AppointmentCard from './AppointmentCard';
import { UserContext } from '../components/User'
import { Button } from "../styles";
import { Link } from "react-router-dom";

const AppointmentList = () => {
  const { user } = useContext(UserContext);
//   const [appt, setAppt] = useState([]);

//   useEffect(() => {
//     refresh()
// }, []);


// function refresh(){
//     fetch(`/api/appointments`)
//          .then(resp => resp.json())
//          .then(appointment => setAppt(appointment))
// }

// document.addEventListener('ItemDeleted', refresh)

// console.log("refreshing appintments")

  return (
    <div>
      <h3 className="title"> Here Are Your Appointments!</h3>
      <div>
        <Button as={Link} to="/walkers">
          New Appointment
        </Button>
      </div>
      {user.appointments.map((appointment) => {
        //console.log(appointment);
        return (<AppointmentCard key={appointment.id} appointment={appointment} />)
      })}
    </div>
  )
}

export default AppointmentList