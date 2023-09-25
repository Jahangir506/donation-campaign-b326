import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  const donationCategories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div>
        <Categories donationCategories={donationCategories}></Categories>
      </div>
    </div>
  );
};

export default Home;
