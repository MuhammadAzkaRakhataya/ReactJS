import React, { useEffect , useState} from 'react'
import Case from '../components/Case'
import axios from 'axios'
import Table from '../components/Table/Table'


export default function TrashStuff() {
    
    const [stuffTrash, setStuffTrash] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8000/stuff/trash' , {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      })
      .then(res => {
        setStuffTrash(res.data.data);
      })
      .catch(err => {
        console.log(err)
        if (err.response.status == 401) {
          navigate('/login?message=' + encodeURIComponent('Anda Belum Login'));
        }
      })
    }, [])

    const  headers = [
      "#",
      "Name",
      "Category"
    ]

    const endpointModal = {
      "restore": "http://localhost:8000/stuff/restore/{id}",
      "delete_permanent": "http://localhost:8000/stuff/permanent/{id}"
    }

    const inputData = {}

    const tittle = 'Stuff'

    const columnIdentitasDelete = 'name'

    const buttons = [
      "restore",
      "permanentDeletes",
    ]

    const tdColumn = {
      "name": null,
      "category": null
    }

    return (
      <>
      <Case>
        <Table headers={headers} data={stuffTrash} endpoint={endpointModal} inputData={inputData} titleModal={tittle} indentitasColumn={columnIdentitasDelete} opsiButton={buttons} 
        columnForTd={tdColumn}> 
        </Table>
      </Case>
      </>
  )
}
