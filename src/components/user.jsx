import { React, useState } from "react";
import api from "../api"
//создаем компонент Users

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())
    
        const handleDelete = (userId) =>{
            const newArray = users.filter((user)=>{
                return (user._id !== userId)
            })
        setUsers(newArray)
        
        }
        console.log(users);
        const renderPhrase = (number) =>{

        }


    return (<>
    {users.length > 0 ? 
    (<h2>
        <span className="badge bg-primary">С тобой тусанет {users.length} человек</span>
    </h2>) 
    :
    (<h2>
        <span className="badge bg-danger">Никто с тобой не тусанет</span>
    </h2>)
    }

    {users.length > 0 && (    
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качество</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретились раз</th>
        <th scope="col">Оценка</th>
        <th scope="col">Кнопка </th>
      </tr>
    </thead>
    <tbody>
        {users.map((item, i)=>{
            return (
            <tr key = {item._id}>
                <td>{item.name}</td>
                <td>{item.qualities.map((qual)=>{
                    return (
                    <span key = {qual._id} className={`badge bg-${qual.color}`}>
                        {qual.name}
                        
                    </span>)
                })}</td>
                <td>
                    {item.profession.name}
                </td>
                <td>
                    {item.completedMeetings}
                </td>
                <td>
                    {item.rate}
                </td>
                <td>
                    <button className="btn btn-danger" onClick={()=> handleDelete(item._id)
                        
                    }>
                        Удалить
                    </button>
                </td>
            </tr>)
        })}
      
    </tbody>
  </table>)}

  </>
  )
}

export default Users