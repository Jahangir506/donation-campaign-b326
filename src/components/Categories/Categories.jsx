import CategoriesCard from './CategoriesCard';

const Categories = ({donationCategories}) => {
    return (
        <div className="py-10">
        <h1 className="text-2xl text-center">All Categories Phones</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
            {
                donationCategories?.map(category => <CategoriesCard key={category.id} category={category}></CategoriesCard>)
            }
        </div>
    </div>
    );
};

export default Categories;