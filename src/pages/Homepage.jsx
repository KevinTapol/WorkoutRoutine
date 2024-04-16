import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import Workouts from '../components/Workouts';
import ViewAllWorkouts from '../components/ViewAllWorkouts';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      {/* The prop isHome is a boolean check to see if you are on the Workouts home page then display all the listings. If false then display the reassigned variable that is sliced to 3 listings. */}
      <Workouts isHome={true} />
      <ViewAllWorkouts />
    </>
  );
};
export default HomePage;