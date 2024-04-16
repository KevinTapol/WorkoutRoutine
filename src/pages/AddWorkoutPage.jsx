import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddWorkoutPage = ({ addWorkoutSubmit }) => {
  const [day, setDay] = useState('Push Day');
  const [muscleGroup, setMuscleGroup] = useState('Chest');
  const [exerciseName, setExerciseName] = useState('Flat Bench Press');
  const [imgUrl, setImgUrl] = useState('https/placebacon.net/250/250');
  const [routine, setRoutine] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newWorkout = {
      day,
      muscleGroup,
      exerciseName,
      imgUrl,
      routine,
    };

    // console.log(newJob)
    addWorkoutSubmit(newWorkout);
    
    toast.success('Job Added Successfully');
    // using the useNavigate() to redirect to the jobs page after submitting a newly added job
    return navigate('/workouts');
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

            {/* <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Salary
              </label>
              <select
                id='salary'
                name='salary'
                className='border rounded w-full py-2 px-3'
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value='Under $50K'>Under $50K</option>
                <option value='$50K - 60K'>$50K - $60K</option>
                <option value='$60K - 70K'>$60K - $70K</option>
                <option value='$70K - 80K'>$70K - $80K</option>
                <option value='$80K - 90K'>$80K - $90K</option>
                <option value='$90K - 100K'>$90K - $100K</option>
                <option value='$100K - 125K'>$100K - $125K</option>
                <option value='$125K - 150K'>$125K - $150K</option>
                <option value='$150K - 175K'>$150K - $175K</option>
                <option value='$175K - 200K'>$175K - $200K</option>
                <option value='Over $200K'>Over $200K</option>
              </select>
            </div> */}

            {/* <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Company Location'
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className='text-2xl mb-5'>Company Info</h3>

            <div className='mb-4'>
              <label
                htmlFor='company'
                className='block text-gray-700 font-bold mb-2'
              >
                Company Name
              </label>
              <input
                type='text'
                id='company'
                name='company'
                className='border rounded w-full py-2 px-3'
                placeholder='Company Name'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

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
                placeholder='What are your sets reps and weights?'
                value={routine}
                onChange={(e) => setRoutine(e.target.value)}
              ></textarea>
            </div> */}
{/* button */}
            <div>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Add Job
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};
export default AddWorkoutPage;