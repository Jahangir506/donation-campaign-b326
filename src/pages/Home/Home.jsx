import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  const donationCategories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
        <Categories donationCategories={donationCategories}></Categories>
    </div>
  );
};

export default Home;
