import { Link,useLocation } from "react-router-dom"
import courses from "../data/courses"
import  queryString  from "query-string"
import { useState } from "react"

function sortCourses(courses,key){
    const sortedCourses = [...courses]
    sortedCourses.sort((a, b)=> (a[key] > b[key]? 1:-1))
    return sortedCourses
}
const Courses = () => {
    const location = useLocation()
    const querry = queryString.parse(location.search)
    const[sortKey,setSortKey]=useState(querry.sort)
    const[sortedCourses, setSortedCourses]=useState(sortCourses(courses,sortKey))
  return ( <>
            <h1>Courses</h1>
            {sortedCourses.map((course)=>{
      return (<div key={course.id}>
          <Link to={course.slug} className="courseLink">
          {course.title}</Link>
      </div>)
     })}
        </>
  )
}

export default Courses