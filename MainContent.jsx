import React from 'react';

const MainContent = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-5">
            <section id="bio" className="mb-10 text-center">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQHsFeCDUNqusA/profile-displayphoto-shrink_800_800/B56ZTmoYaxHQAc-/0/1739036133457?e=1746662400&v=beta&t=zPJL6fN8xliVw5IX23QHzlwZaFr_EZK6N_vlvLofB7Y"
                    alt="Farhan Adiwidya Pradana"
                    className="rounded-full w-40 h-40 mx-auto mb-4"
                />
                <p className="text-lg">
                    Driven by curiosity about technology’s impact on the future, I am dedicated to continuous learning and skill development. Open to collaborations and opportunities that push the boundaries of innovation.
                </p>
            </section>
            <section id="projects">
                <h2 className="text-3xl font-bold mb-4">Personal Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white text-black p-5 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Clam Age Prediction Using Machine Learning</h3>
                        <div className="my-4 text-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Clams_on_Sandy_Hook_beaches_-_panoramio.jpg/640px-Clams_on_Sandy_Hook_beaches_-_panoramio.jpg"
                                alt="Clam Age Prediction"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                        <p>
                            Conducted Exploratory Data Analysis (EDA) to identify patterns in clam characteristics and their correlation with age. Developed a regression-based model to predict clam age based on physical attributes such as weight, diameter, and shell thickness.
                        </p>
                        <a href="https://github.com/Farscent/Oemoem2024-DSAI-Challenge/blob/main/Farhan%20Adiwidya%20Pradana_dsaioemoem.ipynb" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                            View Project
                        </a>
                    </div>
                    <div className="bg-white text-black p-5 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Calorie Prediction with XGB-Regressor</h3>
                        <div className="my-4 text-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bkhJ_KqgXGpdHwV6CC-SduGodHVXeKruAQ&s"
                                alt="Calorie Prediction"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                        <p>
                            Developed a model to predict calorie intake using XGB-Regressor based on various features.
                        </p>
                        <a href="https://github.com/Farscent/Calorie-prediction-with-XGBRegressor/blob/main/group-2-olc-final-project-bersih-v2.ipynb" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                            View Project
                        </a>
                    </div>
                    <div className="bg-white text-black p-5 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Salary Prediction</h3>
                        <div className="my-4 text-center">
                            <img
                                src="https://martech.org/wp-content/uploads/2022/10/salary.jpg"
                                alt="Salary Prediction"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                        <p>
                            Created a model to predict salaries based on various factors using machine learning techniques.
                        </p>
                        <a href="https://github.com/Farscent/Omah-Ti-Open-Recruitment-DSAI-Assignment/blob/main/Penugasan-DSAI-Farhan%20Adiwidya%20Pradana.zip" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                            View Project
                        </a>
                        <a href="https://colab.research.google.com/drive/14lAjmXJDGpevfLp3zmPg1S3PudemEdx-?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline ml-4">
                            View on Colab
                        </a>
                    </div>
                    <div className="bg-white text-black p-5 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Basic Library Management System</h3>
                        <div className="my-4 text-center">
                            <img
                                src="https://4.imimg.com/data4/DB/QV/MY-29214035/library-management-system.jpg"
                                alt="Library Management System"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                        <p>
                            Developed a basic library management system to manage book inventories and user transactions.
                        </p>
                        <a href="https://github.com/Farscent/Library-Management-System" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">
                            View Project
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainContent;