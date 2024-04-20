import { Link } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          {/* Using the Card.jsx component passing in the children h2 p and Link component */}
          <Card>
            <h2 className='text-2xl font-bold'>For Gym Rats</h2>
            <p className='mt-2 mb-4'>
              Browse our Workout Routines and start today!
            </p>
            <Link
              to='/workouts'
              className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
              Browse Workouts
            </Link>
          </Card>
          <Card bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>For Gym Trainers</h2>
            <p className='mt-2 mb-4'>
              List your workout to help others.
            </p>
            <Link
              to='/addWorkout'
              className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
            >
              Add Workout
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;