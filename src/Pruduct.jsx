import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Pruduct = () => {

    const { id } = useParams()

    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://dummyjson.com/products/' + id)
          .then(res => res.json())
          .then(json => {
            setData(json)
          })
      }, [])

    return (
        <div>
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <p>{data.discountPercentage}</p>
            <p>{data.rating}</p>
            <p>{data.stock}</p>
            <p>{data.brand}</p>
            <p>{data.category}</p>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {
                    data.images?.map((img) => {
                        return <img src={img} alt="" />
                    })
                }
            </div>
        </div>
    )
}

export default Pruduct
