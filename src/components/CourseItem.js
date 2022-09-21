function CourseItem ({course}) {
    return (
        <div className="course-item">
            <h3>{course.name}</h3>
            <h2>{course.hours}</h2>
        </div>
    )
}
export default CourseItem;