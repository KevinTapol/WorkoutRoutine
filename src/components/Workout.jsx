import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Workout = ({ workout }) => {
  const [showFullRoutine, setShowFullRoutine] = useState(false);
  let routine = workout.routine;

  if (!showFullRoutine) {
    routine = routine.substring(0, 90) + '...';
  }

  return (
    <div className='bg-white rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-gray-600 my-2'>{workout.muscleGroup}</div>
          <h3 className='text-xl font-bold'>{workout.exerciseName}</h3>
        </div>
        {/* passing in the description variable based on boolean useState hook instead of the workouts.description */}
        <div className='mb-5'>{routine}</div>

        <button
        // The event listener must be as a function and that function as best practices is to have another function changing the state. Some prefer to set directly to false or true, but best practices is to take the current state and set it to not current state.
          onClick={() => setShowFullRoutine((prevState) => !prevState)}
          className='text-indigo-500 mb-5 hover:text-indigo-600'
        >
          {showFullRoutine ? 'Less' : 'More'}
        </button>

        <h3 className='text-indigo-500 mb-2'>{workout.day} / Day</h3>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='text-orange-700 mb-3'>
            <FaMapMarker className='inline text-lg mb-1 mr-1' />
            {workout.day}
          </div>
          <Link
            to={`/workouts/${workout.id}`}
            className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Workout;