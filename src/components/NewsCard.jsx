import React, { useEffect, useState } from "react";

function NewsCard() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const [darkMode, setDarkMode] = useState(false);

    const fetchNewsData = (category) => {
        let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=50e5e13e9462448eb1d0cb0a4be7820d';

        if (category) {
            url += `&category=${category}`;
        }

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setNewsData(data.articles))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        fetchNewsData(selectedCategory);
    }, [selectedCategory]);

    const displayNews = newsData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
            <div className={`py-8 text-center ${darkMode ? 'bg-slate-900' : 'bg-slate-700'}`}>
                <h1 className="text-3xl font-bold text-white">News Shorts</h1>
            </div>
            <div className={`flex justify-center py-4 ${darkMode ? 'bg-slate-900' : 'bg-slate-500'}`}>
                <button
                    className={`category-btn ${selectedCategory === null ? 'active' : ''} ${darkMode ? 'text-white' : 'text-white'} ${darkMode ? 'bg-transparent border border-white' : 'bg-transparent border border-white'} px-4 py-2 rounded-xl mr-2 hover:bg-blue-600 hover:border-blue-500`}
                    onClick={() => setSelectedCategory(null)}
                >
                    All
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'entertainment' ? 'active' : ''} ${darkMode ? 'text-white' : 'text-white'} ${darkMode ? 'bg-transparent border border-white' : 'bg-transparent border border-white'} px-4 py-2 rounded-xl mr-2 hover:bg-blue-600 hover:border-blue-500`}
                    onClick={() => setSelectedCategory('entertainment')}
                >
                    Entertainment
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'sports' ? 'active' : ''} ${darkMode ? 'text-white' : 'text-white'} ${darkMode ? 'bg-transparent border border-white' : 'bg-transparent border border-white'} px-4 py-2 rounded-xl mr-2 hover:bg-blue-600 hover:border-blue-500`}
                    onClick={() => setSelectedCategory('sports')}
                >
                    Sports
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'technology' ? 'active' : ''} ${darkMode ? 'text-white' : 'text-white'} ${darkMode ? 'bg-transparent border border-white' : 'bg-transparent border border-white'} px-4 py-2 rounded-xl mr-2 hover:bg-blue-600 hover:border-blue-500`}
                    onClick={() => setSelectedCategory('technology')}
                >
                    Technology
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'health' ? 'active' : ''} ${darkMode ? 'text-white' : 'text-white'} ${darkMode ? 'bg-transparent border border-white' : 'bg-transparent border border-white'} px-4 py-2 rounded-xl hover:bg-blue-600 hover:border-blue-500`}
                    onClick={() => setSelectedCategory('health')}
                >
                    Health
                </button>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayNews && displayNews.length > 0 &&
                    displayNews.map((data, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className={`p-4 ${darkMode ? 'text-gray-500' : 'text-black'}`}>
                                <h4 className="font-bold text-xl mb-2">{data.title}</h4>
                                <p className="text-gray-600">{data.author}</p>
                                <div className="mt-4 ">
                                    <a href={data.url} className="text-blue-500 hover:underline">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center py-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-full mx-2"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-full mx-2"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage * itemsPerPage >= newsData.length}
                >
                    Next
                </button>
            </div>
            <div className="flex justify-end py-4 pr-4">
                <label className="switch">
                    <input
                        type="checkbox"
                        onChange={() => setDarkMode(!darkMode)}
                    />
                    <span className={`slider ${darkMode ? 'bg-blue-500' : 'bg-gray-300'}`}></span>
                </label>
                <span className="ml-2">{darkMode ? 'Dark' : 'Light'} Mode</span>
            </div>
        </div>
    )
}

export default NewsCard;
