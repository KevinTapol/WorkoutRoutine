import React from 'react'

const addWorkout = async (newWorkout) => {
    const res = await fetch('/api/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newWorkout)
    })
    // When we return from this function we get the redirect from AddJobPage.jsx form function onSubmit called submitForm.
    return
  }

  const deleteWorkout = async (id) => {
    // console.log('delete', id)
    const res = await fetch(`/api/workouts/${id}`, {
      method: 'DELETE'
    })
    return
}

const updateWorkout = async (workout) => {
    const res = await fetch(`/api/workouts/${workout.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workout)
    })
}


const BackendRequests = () => {
  return (
    <div>BackendRequests</div>
  )
}

export { BackendRequests as default, addWorkout, deleteWorkout, updateWorkout };