import { useState } from "react"
import "./SearchByDepartment.css"

const SearchByDepartment = ({data, setData}) => {

    const [workSearch, setWorkSeach] = useState('');

    const filteredDataByWork = data?.filter((person) => {
        return person.department.toLowerCase().includes(workSearch.toLowerCase())
    })

    return(
        <div >
            <input className="department-search" placeholder="Search By department..." 
            value={workSearch} 
            onChange={(e) => setWorkSeach(e.target.value)} />
            <ul>
                {filteredDataByWork?.map((item) => {
                    return <li key={item.id}>{item.name},{item.department}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchByDepartment;