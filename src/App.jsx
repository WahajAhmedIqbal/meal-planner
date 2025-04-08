import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Card from './components/Card';
import Modal from './components/Modal';
import Tabs from './components/Tabs';

const data = {
  title: 'Optimized Your Meal',
  desc: 'Select Meal to Add in Week. You will be able to edit. modify and change the Meal Weeks. '
}

const buttons = ['All Meals', 'Week 1', 'Week 2', 'Week 3', 'Week 4'];
const filteredButtons = buttons.filter(button => button.toLowerCase() != 'All Meals'.toLowerCase())

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [weeksData, setWeeksData] = useState({
    week1: [],
    week2: [],
    week3: [],
    week4: [],
  });

  const handleSelectWeek = (weekIndex) => {
    const weekKey = `week${weekIndex}`;
  
    const selectedMeals = recipes.filter((meal) =>
      selectedId.includes(meal.id)
    );
  
    const existingIds = new Set(weeksData[weekKey].map(meal => meal.id));
  
    const newMeals = selectedMeals.filter(meal => !existingIds.has(meal.id));
  
    setWeeksData((prev) => ({
      ...prev,
      [weekKey]: [...prev[weekKey], ...newMeals]
    }));
  
    setSelectedId([]);
  };
  

  const handleDeleteFromWeek = (mealId) => {
    const weekKey = `week${activeIndex}`;
    setWeeksData((preData) => ({
      ...preData,
      [weekKey]: preData[weekKey].filter(meal => meal.id !== mealId)
    }))
  }


  const fetchMeals = async () => {
    try {
      const res = await fetch('https://dummyjson.com/recipes');
      if (!res.ok) throw new Error('Feild to fetch recipes')

      const data = await res.json();
      setRecipes(data.recipes || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className='font-poppins'>
      <Hero title={data.title} desc={data.desc} />
      <div className="content-container min-h-full bg-[url(./gradient-bg.png)] pb-10">
        <div className="container mx-auto px-4">
          <h2 className='py-9 text-2xl font-semibold'>Week Orders</h2>
        </div>

        <Tabs setShowModal={setShowModal} buttons={buttons} setActiveIndex={setActiveIndex} activeIndex={activeIndex} showModal={showModal}/>

        {/* modal */}
        {showModal && <Modal filteredButtons={filteredButtons} handleSelectWeek={handleSelectWeek} setShowModal={setShowModal} showModal={showModal} /> }
        {/* cards */}
        {activeIndex === 0 && (
          <Card
            recipes={recipes}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        )}
        {activeIndex > 0 && (
          <Card
            recipes={weeksData[`week${activeIndex}`]}
            onDelete={handleDeleteFromWeek}
          />
        )}
      </div>
    </div>
  )
}

export default App