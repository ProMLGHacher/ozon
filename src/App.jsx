import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'

function App() {

  const [data, setData] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(json => {
        setData(json)
      })
  }, [])

  return (
    <div className='wrapper'>
      {
        data.products?.map((elem) => {
          return <div className='elem' onClick={() => {
            navigate('/products/' + elem.id)
          }} >
            <img className='img' src={elem.thumbnail} alt="" />
            <p>{elem.title}</p>
            <p>{elem.price}</p>
          </div>
        }, [])
      }
    </div>
  )
}

export default App
