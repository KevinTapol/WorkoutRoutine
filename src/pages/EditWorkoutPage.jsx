import { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

const EditWorkoutPage = ({ updateWorkoutSubmit }) => {
  // useLoaderData() is used to access the data (similar to useEffect()) from jobLoader which is exported from JobPage.jsx, imported from App.jsx and passed in as a prop to the prop loader in the Route component for the edit-job route.
  // useLoaderData() is also being put above the useState() hook so that we can add the defaults from it to the useState() hooks below it.
  const workout = useLoaderData();
  const [day, setDay] = useState(workout.day);
  const [muscleGroup, setMuscleGroup] = useState(workout.muscleGroup);
  const [exerciseName, setExerciseName] = useState(workout.exerciseName);
  const [imgUrl, setImgUrl] = useState(workout.imgUrl);
  const [routine, setRoutine] = useState(workout.routine);

  const navigate = useNavigate();
  // We need useParams() to grab the individual job by id and shove it into the object updatedJob
  const { id } = useParams();

  const submitForm = (e) => {
    e.preventDefault();

    const updatedWorkout = {
      id,
      day,
      muscleGroup,
      exerciseName,
      imgUrl,
      routine,
    };

    updateWorkoutSubmit(updatedWorkout);

    // toast.success('Workout Updated Successfully');

    return navigate(`/workouts/${id}`);
  };

  return (
  <section className='bg-indigo-50'>
  <div className='container m-auto max-w-2xl py-24'>
    <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
      <form onSubmit={submitForm}>
        <h2 className='text-3xl text-center font-semibold mb-6'>Add Workout</h2>
{/* workout Day dropdown menu */}
        <div className='mb-4'>
          <label
            htmlFor='day'
            className='block text-gray-700 font-bold mb-2'
          >
            Workout Day
          </label>
          <select
            id='day'
            name='day'
            className='border rounded w-full py-2 px-3'
            required
            value={day}
            onChange={(e) => setDay(e.target.value)}
          >
            <option value='Push'>Push Day</option>
            <option value='Pull'>Pull Day</option>
            <option value='Leg'>Leg Day</option>
            <option value='Other'>Other</option>
          </select>
        </div>
{/* Muscle Group */}
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>
            Muscle Group
          </label>
          <input
            type='text'
            id='muscleGroup'
            name='muscleGroup'
            className='border rounded w-full py-2 px-3 mb-2'
            placeholder='Exercise Name'
            required
            value={muscleGroup}
            onChange={(e) => setMuscleGroup(e.target.value)}
          />
        </div>
{/* Exercise Name */}
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2'>
            Exercise Name
          </label>
          <input
            type='text'
            id='exerciseName'
            name='exerciseName'
            className='border rounded w-full py-2 px-3 mb-2'
            placeholder='Exercise Name'
            required
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
        </div>

{/* Exercise Image */}
        <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Exercise Image URL
              </label>
              <input
                type='text'
                id='imgUrl'
                name='imgUrl'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='https://placebacon.net/200/200'
                required
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </div>
{/* Routine text area */}
        <div className='mb-4'>
          <label
            htmlFor='routine'
            className='block text-gray-700 font-bold mb-2'
          >
            Routine
          </label>
          <textarea
            id='routine'
            name='routine'
            className='border rounded w-full py-2 px-3'
            rows='4'
            placeholder='3 sets of 12 10 or 8 reps till form failure'
            value={routine}
            onChange={(e) => setRoutine(e.target.value)}
          ></textarea>
        </div>
        
{/* button */}
        <div>
          <button
            className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Update Workout
          </button>
        </div>

      </form>
    </div>
  </div>
</section>
);
};
export default EditWorkoutPage;