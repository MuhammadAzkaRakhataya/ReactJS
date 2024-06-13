import React, { useEffect , useState} from 'react'
import Case from '../components/Case'
import axios from 'axios'
import Table from '../components/Table/Table'


//baris ini menyetel  dengan data yang diambil dari user_id yang dihapus
export default function TrashUser() {
    
    const [userTrash, setUserTrash] = useState([]);

    //Fungsi untuk mengelola state komponen dan efek samping
    useEffect(() => {
      axios.get('http://localhost:8000/user/trash' , {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
      })
      .then(res => {
        setUserTrash(res.data.data);
      })
      //menangani kesalahan
      .catch(err => {
        console.log(err)
        if (err.response.status == 401) {
          navigate('/login?message=' + encodeURIComponent('Anda Belum Login'));
        }
      })
    }, [])

    const headers = [
      "No",
      "Username",
      "Email",
      "Role"
    ]

    //manggil url buat ngehapus
    const endpointModal = {
      "restore": "http://localhost:8000/user/restore/{id}",
      "delete_permanent": "http://localhost:8000/user/permanent/{id}"
    }

    const inputData = {}

    const title = 'User'

    const columnIdentitasDelete = 'name'

    const buttons = [
      "restore",
      "permanentDeletes",
    ]

    //ngasi tau tabel ke properti data
    const tdColumn = {
      "name": null,
      "username": null,
      "email": null,
      "role": null
    }

    //kode ini ngatur gimana cara komponen Table ntuk nampilin data 
    //pengguna yang dihapus beserta tombol-tombol buat ngelakuin restore atau penghapusan permanen.
    return (
      <>
      <Case>
        <Table headers={headers} data={userTrash} endpoint={endpointModal} inputData={inputData} titleModal={title} indentitasColumn={columnIdentitasDelete} opsiButton={buttons} 
        columnForTd={tdColumn}> 
        </Table>
      </Case>
      </>
  )
}
