import React from 'react'

const Card = ({ recipes, selectedId, setSelectedId, onDelete }) => {
    const toggleSelect = (id) => {
        setSelectedId((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item) => item !== id)
                : [...prevSelected, id]
        )
    }

    return (
        <ul className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-5">
            {recipes.length > 0 ? (
                recipes.map((recipe) => {
                    const isSelected = selectedId?.includes(recipe.id);
                    return (
                        <li onClick={() => toggleSelect(recipe.id)} key={recipe.id} className={`relative bg-white border shadow-3xl ${isSelected ? 'border-black' : 'border-[#E2E2E2]'}  rounded-xl p-5 pb-14 lg:pt-9 lg:px-8`}>
                            <div className="relative max-h-60 h-full w-full rounded-2xl overflow-hidden">
                                {onDelete && <span onClick={() => onDelete(recipe.id)} className='absolute top-2.5 left-2 z-[1] cursor-pointer'><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="34" height="34" fill="#FFE0E0" />
                                    <path d="M7.53418 11.9773H24.9205" stroke="#E60026" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22.9885 11.9773V25.5C22.9885 26.4659 22.0226 27.4318 21.0567 27.4318H11.3976C10.4317 27.4318 9.46582 26.4659 9.46582 25.5V11.9773" stroke="#E60026" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.3638 11.9789V10.0471C12.3638 9.08117 13.3297 8.11526 14.2956 8.11526H18.1592C19.1251 8.11526 20.091 9.08117 20.091 10.0471V11.9789" stroke="#E60026" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.2959 16.8068V22.6023" stroke="#E60026" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.1592 16.8068V22.6023" stroke="#E60026" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </span>
                                }
                                <img className='w-full h-full object-cover' src={recipe.image} alt="Meal image" />
                                <span className='absolute top-2.5 right-2 z-[1] w-full max-w-[102px] bg-black rounded-sm text-center py-1 text-white text-xs'> {recipe.mealType} </span>
                            </div>
                            <h3 className="text-2xl font-bold mt-8"> {recipe.name} </h3>
                            <p className='text-[#404040] text-base mt-2.5'> {recipe.instructions} </p>
                            <div className="absolute bottom-5 flex flex-wrap items-center justify-between gap-3.5 text-sm mt-5">
                                <p> <span className="font-bold"> Cuisine:</span> {recipe.cuisine}</p>
                                <p className='flex shrink-0 gap-0.5'>
                                    <span className="font-bold"> Rating:</span> {recipe.rating}
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.401 7.17846C17.401 7.3278 17.3128 7.49072 17.1363 7.66721L13.4401 11.2718L14.3158 16.3629C14.3226 16.4104 14.326 16.4783 14.326 16.5666C14.326 16.7091 14.2903 16.8296 14.2191 16.928C14.1478 17.0265 14.0443 17.0757 13.9085 17.0757C13.7795 17.0757 13.6438 17.035 13.5012 16.9535L8.92934 14.5505L4.35747 16.9535C4.20813 17.035 4.07237 17.0757 3.95018 17.0757C3.80763 17.0757 3.70071 17.0265 3.62944 16.928C3.55816 16.8296 3.52252 16.7091 3.52252 16.5666C3.52252 16.5258 3.52931 16.458 3.54289 16.3629L4.41857 11.2718L0.7122 7.66721C0.542494 7.48393 0.457642 7.32102 0.457642 7.17846C0.457642 6.9273 0.647712 6.77117 1.02785 6.71008L6.13938 5.96677L8.4304 1.33381C8.55938 1.05549 8.72569 0.916333 8.92934 0.916333C9.13298 0.916333 9.29929 1.05549 9.42827 1.33381L11.7193 5.96677L16.8308 6.71008C17.211 6.77117 17.401 6.9273 17.401 7.17846Z" fill="#004370" />
                                    </svg>
                                </p>
                            </div>
                        </li>
                    )
                })
            ) : (
                <h1 className='text-center col-span-6 text-2xl text-primary-dark font-semibold py-16'>Looks like this week's menu is empty. <br /> Add some meals to get started!</h1>
            )}

        </ul>
    )
}

export default Card