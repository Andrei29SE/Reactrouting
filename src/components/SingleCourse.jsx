import courses from "../data/courses"
import { Link, useParams } from "react-router-dom"

const SingleCourse = () => {
  const params = useParams()
  const course = courses.find((course)=> course.slug === params.slug)
  return <>
  <h1>{course.title}</h1>
  <h2>{course.slug}</h2>
  <p>{course.id}</p>
  <Link to=".." relative="path">All courses</Link>
  </>

}

export default SingleCourse