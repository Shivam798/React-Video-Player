import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import CourseList from './component/CourseList'
import CourseStruct from './component/CourseStruct'

function App() {
  return (
    <div>
      <BrowserRouter>
            <Route exact path="/" component={CourseList}></Route>
            <Route path="/:coursename" component={CourseStruct}></Route>
            
        </BrowserRouter>  
    </div>
  )
}

export default App
