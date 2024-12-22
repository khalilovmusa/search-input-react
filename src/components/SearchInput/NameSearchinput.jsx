import {useState, useEffect} from 'react';
import './NameSearchInput.css';

const NameSearchInput = () => {

    const [data, setData] = useState([]);
    const [searchBox, setSearchBox] = useState('');

    useEffect(() => {
        fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood').then((res) => {return res.json()}).then((data) => setData(data))
    },[])

    const filteredDataByName = data?.filter((person) => {
        return person.name.toLowerCase().includes(searchBox.toLowerCase())
    })

    return(
        <div className='name-search-wrapper'>
            <input placeholder="Search By Name..." className="name-input" value={searchBox} onChange={(e) => setSearchBox(e.target.value)} />
            <ul>
                {filteredDataByName?.map((person) => {
                    return(
                        <li key={person.id}>{person.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NameSearchInput;