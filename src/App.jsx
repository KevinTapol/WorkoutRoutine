import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import NotFoundPage from './pages/NotFoundPage'
import AddWorkoutPage from './pages/AddWorkoutPage'
import EditWorkoutPage from './pages/EditWorkoutPage'
import WorkoutsPage from './pages/WorkoutsPage'
import WorkoutPage, { workoutLoader } from './pages/WorkoutPage'
import {addWorkout, updateWorkout, deleteWorkout} from './components/BackendRequests'
import TestComponent from './components/TestComponent'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout /> } >
        <Route index element={ <Homepage /> } />
        <Route path='/workouts' element={ <WorkoutsPage /> } />
        <Route path='/addWorkout' element={ <AddWorkoutPage addWorkoutSubmit={addWorkout} /> } />
        <Route path='/editWorkout/:id' element={ <EditWorkoutPage updateWorkoutSubmit={updateWorkout}/> } loader={workoutLoader}/>
        <Route path='/workouts/:id' element={ <WorkoutPage deleteWorkout={deleteWorkout} /> } loader={workoutLoader} />
        <Route path='/test' element={ <TestComponent  /> }  />
        <Route path='*' element={ <NotFoundPage /> } />
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router} />
  )
}

export default App