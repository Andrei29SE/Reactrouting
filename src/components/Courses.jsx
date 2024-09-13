import { Link,useLocation, useNavigate } from "react-router-dom"
import courses from "../data/courses"
import  queryString  from "query-string"
import { useEffect, useState } from "react"

const SORT_KEYS = ['title','slug','id']

function sortCourses(courses,key){
    const sortedCourses = [...courses]
    if (!key|| !SORT_KEYS.includes(key)){
        return sortCourses
    }else{
    sortedCourses.sort((a, b)=> (a[key] > b[key]? 1:-1))
    return sortedCourses}
}
const Courses = () => {
    const location = useLocation()
    const querry = queryString.parse(location.search)
    const navigate = useNavigate()
    const[sortKey,setSortKey]=useState(querry.sort)
    const[sortedCourses, setSortedCourses]=useState(sortCourses(courses,sortKey))

useEffect(()=>{
    if(!SORT_KEYS.includes(sortKey)){
        navigate('.')
        setSortKey()
        setSortedCourses([...courses])
    }},[sortKey,navigate])
    
  return ( <>
            <h1>{sortKey? `Sorted by ${sortKey}`:'Courses'}</h1>
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