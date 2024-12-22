import { useEffect, useState } from 'react';
import './App.css'
import NameSearchInput from './components/SearchInput/NameSearchinput'
import SearchByDepartment from './components/SearchByDepartment/SearchByDepartment'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood').then((res) => { return res.json() }).then((data) => setData(data))
  }, [])

  return (
    <>
      <NameSearchInput data={data} setData={setData} />
      <SearchByDepartment data={data} setData={setData} />
    </>
  )
}

export default App
