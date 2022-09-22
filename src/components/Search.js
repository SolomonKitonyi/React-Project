import { useState } from "react";

function Search({courses,setFilteredCourses,refresh,setRefresh}) {
    const [search,setSearch] = useState("")
    function handleSearch(e) {
        setSearch(e.target.value)
        let filtered = courses.filter(course => course.name.toLowerCase().startsWith(e.target.value.toLowerCase())) 
        setFilteredCourses(filtered)
        setRefresh(!refresh)
    }
    return (
        <div className="search">
            <input placeholder="Search Course" value={search} onChange={handleSearch}/>
        </div>
    )
}
export default Search;