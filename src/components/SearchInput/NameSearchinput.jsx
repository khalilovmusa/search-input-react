import {useState, useEffect} from 'react';
import './NameSearchInput.css';

const NameSearchInput = ({data, setData}) => {

    const [searchBox, setSearchBox] = useState('');


    const filteredDataByName = data?.filter((person) => {
        return person.name.toLowerCase().includes(searchBox.toLowerCase())
    })

    return(
        <div className='name-search-wrapper'>
            <input placeholder="Search By Name..." className="name-input" value={searchBox} onChange={(e) => setSearchBox(e.target.value)} />
            <ol>
                {filteredDataByName?.map((person) => {
                    return(
                        <li key={person.id}>{person.name}</li>
                    )
                })}
            </ol>
        </div>
    )
}

export default NameSearchInput;