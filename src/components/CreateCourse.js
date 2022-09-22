import { useState } from "react";

function CreateCourse ({addCourse}) {
    const [name,setName] = useState("")
    const [hours,setHours] = useState(0)
    function handleSubmit(e) {
        e.preventDefault();
        addCourse(name,hours)
    }
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h3>Create New Course</h3>
                <input  placeholder="Name" type={"text"} value={name} onChange={(e) => setName(e.target.value)}/>
                <input  placeholder="Hours to Complete" type="number" value={hours} onChange={(e) => setHours(e.target.value)}/>
                <button>Create</button>
            </form>
        </div>
    )
}
export default CreateCourse;