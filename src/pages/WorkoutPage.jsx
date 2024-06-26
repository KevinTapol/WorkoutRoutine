import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const workoutLoader = async ({ params }) => {
  const res = await fetch(`/api/workouts/${params.id}`);
  const data = await res.json();
  return data;
};

const WorkoutPage = ({ deleteWorkout }) => {

    /*
    This useState() and useEffect() fetch on render is being replaced by the async data loader function called dataLoader outside of this JobPage function and at the bottom.
    
    // useParams hook for specific dynamic job id
    const { id } = useParams()

    // useState hook for dynamic job
    const [workout, setWorkout] = useState(null)

    // useState hook for loading state
    const [loading, setLoading] = useState(true)

    instead of useDataLoader()
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`)
                const data = await res.json()
                setWorkout(data)
            } catch (error) {
                console.log('Error fetching data', error)
            } finally {
                setLoading(false)
            }
        }
        // calling the function fetchJobs
        fetchJob()
    }, [])
    */
  const navigate = useNavigate();
  const { id } = useParams(); 
  const workout = useLoaderData();

  const onDeleteClick = (workoutId) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this listing?'
    );

    if (!confirm) return;
    deleteWorkout(workoutId);
    toast.success('Workout deleted successfully');
    navigate('/workouts');
  };

  return (
    
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/workouts'
            className='text-indigo-500 hover:text-indigo-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Workouts
          </Link>
        </div>
      </section>

      <section className='bg-indigo-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <div className='text-gray-500 mb-4'>{workout.muscleGroup}</div>
                <h1 className='text-3xl font-bold mb-4'>{workout.exerciseName}</h1>
                <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1' />
                  <p className='text-orange-700'>{workout.day}</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-indigo-800 text-lg font-bold mb-6'>
                  Workout Routine
                </h3>

                <p className='mb-4'>{workout.routine}</p>

                <h3 className='text-indigo-800 text-lg font-bold mb-2'>
                  Salary
                </h3>

                <p className='mb-4'>{workout.day} / Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                {/* center an image with display block auto the margin on the x axis */}
                <img src={workout.imgUrl} className='block mx-auto' alt="" />
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-xl font-bold mb-6'>Manage workout</h3>
                <Link
                  to={`/editWorkout/${workout.id}`}
                  className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit workout
                </Link>
                <button
                  onClick={() => onDeleteClick(workout.id)}
                  className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Delete workout
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
// export default JobPage
// Here we are exporting Jobpage ad default but also exporting the function jobLoader which allows us to also import jobLoader into other components.
export { WorkoutPage as default, workoutLoader };