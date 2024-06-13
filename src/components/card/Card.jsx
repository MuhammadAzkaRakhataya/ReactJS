import React from 'react'

export default function Card(props) {

    const {nama,rombel,rayon } = props;

  return (
    <div style = {
        {
            width: 500,
            height: '150px',
            border: '1px solid black',
            borderRadius: 5,
            marginTop: 10,
        }
        
    }>

    <tr>
        <td>Nama :</td>
        <td>{props.nama}</td>
    </tr>
    <tr>
        <td>Rombel :</td>
        <td>{props.rombel}</td>
    </tr>
    <tr>
        <td>Rayon :</td>
        <td>{props.rayon}</td>
    </tr>

    </div>
  )
}
