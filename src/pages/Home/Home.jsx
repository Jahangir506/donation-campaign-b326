import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";

const Home = () => {
  const donationCategories = useLoaderData();
  const [search, setSearch] = useState('');
  const [filterSearch, setFilterSearch] = useState(donationCategories)

  const handleSearch = e => {
    e.preventDefault();
    const input = e.target.textSearch.value;
    e.target.textSearch.value = '';
    setSearch(input)
  }
  useEffect(()=> {
    const searchFilter = donationCategories.filter(item => item.category_name.toLowerCase().includes(search.toLowerCase()))
    setFilterSearch(searchFilter)
  },[donationCategories, search])

  return (
    <div>
      <Banner handleSearch={handleSearch}></Banner>
        <Categories donationCategories={filterSearch}></Categories>
    </div>
  );
};

export default Home;
