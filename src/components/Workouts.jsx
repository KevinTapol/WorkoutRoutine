import { useState, useEffect } from 'react';
import Workout from './Workout';
import Spinner from './Spinner';

const Workouts = ({ isHome = false }) => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const apiUrl = isHome ? '/api/workouts?_limit=3' : '/api/workouts';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setWorkouts(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Workouts' : 'Browse Workouts'}
        </h2>

        {loading ? (
          <Spinner />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {workouts.map((workout) => (
              <Workout key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default Workouts;