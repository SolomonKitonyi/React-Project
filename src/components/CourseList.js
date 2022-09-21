import CourseItem from "./CourseItem";

function CourseList ({courses}) {
    return (
        <div>
            <h1>Course List</h1>
            <div className="course-list">
                {courses.map(course => (
                    <CourseItem key={course.id} course = {course}/>
                ))}
            </div>
        </div>
    )
}
export default CourseList;