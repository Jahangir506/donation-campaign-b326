import PropTypes from 'prop-types';
import CategoriesCard from './CategoriesCard';

const Categories = ({donationCategories}) => {
    return (
        <div className="py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 md:gap-0 md:gap-y-16 lg:gap-8 gap-y-12">
            {
                donationCategories?.map(category => <CategoriesCard key={category.id} category={category}></CategoriesCard>)
            }
        </div>
    </div>
    );
};

Categories.propTypes = {
    donationCategories: PropTypes.array.isRequired
}

export default Categories;