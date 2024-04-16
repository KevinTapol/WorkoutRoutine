import { Link } from 'react-router-dom';

const ViewAllWorkouts = () => {
  return (
    <section className='m-auto max-w-lg my-10 px-6'>
      <Link
        to='/workouts'
        className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
      >
        View All Workouts
      </Link>
    </section>
  );
};
export default ViewAllWorkouts;