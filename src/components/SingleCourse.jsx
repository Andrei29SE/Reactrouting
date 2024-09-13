import courses from "../data/courses"
import { Link, useNavigate, useParams} from "react-router-dom"
// import NotFound from "./NotFound"
import { useEffect } from "react"

const SingleCourse = () => {
  const params = useParams()
  const navigate=useNavigate()
  
  const course = courses.find((course)=> course.slug === params.slug)
//   if (!course) { return <NotFound/>}
useEffect(()=> {
    if(!course){
        navigate("..", {relative:'path'})
    }
} , [course, navigate])
  return <>
  <h1>{course?.title}</h1>
  <h2>{course?.slug}</h2>
  <p>{course?.id}</p>
  <Link to=".." relative="path">All courses</Link>
  </>

}

export default SingleCourse 