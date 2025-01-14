import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const CategorySection = () => {
  const [categories, setCategories] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:2151/api/category');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryName) => {
    navigate(`/products/${categoryName}`);
  };

  return (
    <section className="category-section">
      <div className="category">
        <div className="items">
          {categories.map(category => (
            <div key={category._id} className="category-items" onClick={() => handleCategoryClick(category.name)}>
              <img src={`${category.name}.png`} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
        <img className="rabbit" src="paws2.png" alt="Rabbit" />
      </div>
    </section>
  );
};

export default CategorySection;
