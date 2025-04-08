import React from 'react'

const Tabs = ({setActiveIndex, setShowModal, buttons, activeIndex,showModal }) => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 flex flex-wrap gap-4 justify-between items-center py-6 lg:py-8">
                {buttons.map((label, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`px-8 py-3 cursor-pointer ${activeIndex === index ? 'text-primary-blue underline decoration-[5px] underline-offset-[12px] font-bold' : 'text-primary-dark font-medium '
                            }`}
                    >
                        {label}
                    </button>
                ))}
                <button onClick={() => setShowModal(!showModal)} className='px-8 text-white bg-[#9B9B9B] rounded-sm cursor-pointer font-medium py-3'> Add to Week </button>
            </div>
        </div>
    )
}

export default Tabs