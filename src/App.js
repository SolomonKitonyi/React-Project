import { useEffect, useState } from 'react';
import './App.css';
import CourseList from './components/CourseList';
import CreateCourse from './components/CreateCourse';
import Header from './components/Header';
import Search from './components/Search';
import {Switch,Route,useHistory} from 'react-router-dom'

function App() {
  const [courses,setCourses] = useState([]);
  const [filteredCourses,setFilteredCourses] = useState([]);
  const [refresh,setRefresh] = useState(false)
  const history = useHistory()
  useEffect(() => {
    fetch(`https://young-crag-67928.herokuapp.com/courses`)
    .then(res => res.json())
    .then(data => {
      setCourses(data)
    })
  },[refresh])
  useEffect(() => {
    if(filteredCourses.length > 0) {
      setCourses(filteredCourses)
    }
  },[filteredCourses])
  function addCourse(name,hours) {
    const formData = {
          name: name,
          hours: hours,
      }
      if(name.length < 2 || hours === 0) return
      fetch(`https://young-crag-67928.herokuapp.com/courses`,{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
      })
      .then((res) => res.json())
      .then(data => {
        setRefresh(!refresh)
        history.push("/")
        setRefresh(!refresh)
      })
      setRefresh(!refresh)
  } 
  return (
    <div className="App">
      <Header />
      <h1>Welcome</h1>
      <Switch>
        <Route path="/" exact>
         <Search courses= {courses} setFilteredCourses={setFilteredCourses} refresh={refresh} setRefresh={setRefresh}/>
         <CourseList courses={filteredCourses.length > 0 ? filteredCourses:courses}/>
         <CreateCourse addCourse={addCourse}/>
        </Route>
        <Route path="/courses">
          <Search courses= {courses} setFilteredCourses={setFilteredCourses} refresh={refresh} setRefresh={setRefresh}/>
          <CourseList courses={filteredCourses.length > 0 ? filteredCourses:courses}/>
        </Route>
        <Route path="/create">
          <CreateCourse addCourse={addCourse}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
