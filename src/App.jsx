import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import NotFoundPage from './pages/NotFoundPage'
import AddWorkoutPage from './pages/AddWorkoutPage'
import EditWorkoutPage from './pages/EditWorkoutPage'
import WorkoutsPage from './pages/WorkoutsPage'
import WorkoutPage from './pages/NotFoundPage'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout /> } >
        <Route index element={ <Homepage /> } />
        <Route path='/workouts' element={ <WorkoutsPage /> } />
        <Route path='/addWorkout' element={ <AddWorkoutPage /> } />
        <Route path='/editWorkout' element={ <EditWorkoutPage /> } />
        <Route path='/workouts/:id' element={ <WorkoutPage /> } />
        <Route path='*' element={ <NotFoundPage /> } />
      </Route>
    )
  )
  
  return (
    <RouterProvider router={router} />
  )
}

export default App