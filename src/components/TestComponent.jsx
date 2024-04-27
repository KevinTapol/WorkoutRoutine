import { useEffect, useState } from 'react'
import Spinner from './Spinner'
import Workout from './Workout';

import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const workoutLoader = async ({ params }) => {
  const res = await fetch(`/api/workouts/${params.id}`);
  const data = await res.json();
  return data;
};

const TestComponent = ({ isTestPage = true }) => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const checkToast = () => {
    toast.success('You Clicked the button!')
  }

  const workout = useLoaderData();

  // useEffect(() => {
  //   const fetchWorkouts = async () => {
  //     const apiUrl = isTestPage ? '/api/workouts?_limit=3' : '/api/workouts';
  //     try {
  //       const res = await fetch(apiUrl);
  //       const data = await res.json();
  //       setWorkouts(data);
  //     } catch (error) {
  //       console.log('Error fetching data', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchWorkouts();
  // }, []);

  return (
    
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-xl'>Bacon Loading...</h1>
        <Spinner />
        <span>This is a test page for random components, routing and other stuff.</span>
        <button className='btn bg-blue-500 p-2 rounded-lg text-white b-2 hover:bg-green-500' onClick={checkToast}>check toast</button>
      </div>

      <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isTestPage ? 'Recent Workouts' : 'Browse Workouts'}
        </h2>

        {loading ? (
          <div className='flex justify-center items-center'>
            <Spinner />
          </div> 
          
        ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {workouts.map((workout) => (
                <div>
                  <Workout key={workout.id} workout={workout} />
                </ div>            
              ))}
            </div>
        )}
      </div>
    </section>
    </>
  )
}

export default TestComponent