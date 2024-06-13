import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Table from '../components/Table/Table';
import Case from '../components/Case';

export default function Lending() {

    const [lending, setLending] = useState([]);
    // const [stuffs, setStuffs] = useState([]);

  
    //Pas buka aplikasi, data lending langsung diambil dan disimpan.
    // Dicek juga izin aksesnya, kalau nggak ada, pengguna bakal diarahin ke login.
    const navigate = useNavigate();
  
    useEffect(() => {
      getLending();
    }, []);

    function getLending() {
        axios.get("http:///localhost:8000/lending", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((res) => {
            setLending(res.data.data);
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
    "name stuff", 
    "username" , 
    "waktu", 
    "name" , 
    "note",
    "total stuff"
  ]

  // function getStuffs() {
  //   axios
  //     .get("http:///localhost:8000/stuff", {
  //       headers: {
  //         Authorization: "Bearer " + localStorage.getItem("token"),
  //       },
  //     })
  //     .then((res) => {
  //       setStuffs(res.data.data);
  //       const stuffNames = stuffs.map((stuff) => stuff.name);
  //       // Memasukkan nama ke dalam tdColumn
  //       tdColumn.name = stuffNames;
  //       console.log("tdColumn dengan nama:", tdColumn);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       if (err.response.status == 401) {
  //         navigate("/login?message=" + encodeURIComponent("Anda Belum Login!"));
  //       }
  //     });
  // }

    const endpointModal = {
        store: "http://localhost:8000/lending/store",
      };
    
      const inputData = {
        name: {
          tage: "input",
          type: "text",
          option: "null",
        },
       
        stuff_id: {
          tage: "input",
          type: "number",
          option: "null",
        },

        user_id: {
          tage: "input",
          type: "number",
          option: "null",
        },

        date_time: {
          tage: "input",
          type: "datetime-local",
          option: "null",
        },

        total_stuff: {
          tage: "input",
          type: "number",
          option: "null",
        },

        notes: {
          tage: "input",
          type: "text",
          option: "null",
        },
      };
    
      const title = "Stuff";
    
      const columnIdentitasDelete = "name";
    

    const buttons = [
        "create",
      ]
    
      const tdColumn = {
        "stuff" : "name",
        "user" : "username",
        "date_time" : null,
        "name" : null,
        "notes" : null,
        "total_stuff" : null,
        
      }
    

  return (
   
    <Case>
        <Table headers={headers} data={lending} endpoint={endpointModal} titleModal={title} opsiButton={buttons} columnForTd={tdColumn} identitasColumn={columnIdentitasDelete} inputData={inputData} >
        </Table>
    </Case>

  )
}
