import Table from '../components/Table/Table'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Case from '../components/Case';
import axios from 'axios';

export default function User() {

  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
      axios.get("http://localhost:8000/user", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setUser(res.data.data);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status == 401) {
            navigate("/login?message=" + encodeURIComponent("Anda Belum Login!"));
          }
        });
    }
  
    const headers = [
      "no" , 
      "username", 
      "email",
      "role",
      
    ]

    const title = "User";
  
    const endpointModal = {
          data_detail: "http://localhost:8000/user/show/{id}",
          store:  "http://localhost:8000/user",
          delete: "http://localhost:8000/user/{id}",
          update: "http://localhost:8000/user/update/{id}",
        };

    const columnIdentitasDelete = "name";
    

    const buttons = [
            "create",
            "trash",
            "edit",
            "delete"
          ]
        
    const tdColumn = {
      "username" : null, 
      "email" : null,
      "role": null,
    }
      
    const inputData = {
      username: {
        tage: "select",
        type: "select",
        option: "null",
      },
      password: {
        tag: "input",
        type: "text",
        option: "null",
      },
      email: {
        tag: "input",
        type: "text",
        option: "null",
      },
      role: {
        tag: "select",
        type: "select",
        option: ["staff", "admin"],
      },
    };

  return (
    <Case>
    
    <Table headers={headers} data={user} endpoint={endpointModal} titleModal={title} opsiButton={buttons} columnForTd={tdColumn} identitasColumn={columnIdentitasDelete} inputData={inputData}>
    </Table>

    
    
    </Case>
  )
}
