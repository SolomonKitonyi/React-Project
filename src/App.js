import { useEffect, useState } from 'react';
import './App.css';
import CourseList from './components/CourseList';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [courses,setCourses] = useState([]);
  const [filteredCourses,setFilteredCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/courses")
    .then(res => res.json())
    .then(data => {
      setCourses(data)
    })
  },[courses])
  useEffect(() => {
    if(filteredCourses.length > 0) {
      setCourses(filteredCourses)
    }
  },[filteredCourses])
  return (
    <div className="App">
      <Header />
      <Search courses= {courses} setFilteredCourses={setFilteredCourses}/>
     <h1>Welcome</h1>
     <CourseList courses={filteredCourses.length > 0 ? filteredCourses:courses}/>
    </div>
  );
}

export default App;
