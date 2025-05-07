import React from 'react';

const MainContent = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-5">
            <section className="mb-10">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg">
                    I am a passionate developer with a love for creating dynamic and responsive web applications. 
                    My journey in tech has been fueled by curiosity and a desire to solve real-world problems.
                </p>
            </section>
            <section>
                <h2 className="text-3xl font-bold mb-4">Personal Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white text-black p-5 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Project One</h3>
                        <p>A brief description of Project One goes here.</p>
                        <a href="#" className="text-purple-500 hover:underline">View Project</a>
                    </div>
                    <div className="bg-white text-black p-5 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">Project Two</h3>
                        <p>A brief description of Project Two goes here.</p>
                        <a href="#" className="text-purple-500 hover:underline">View Project</a>
                    </div>
                    {/* Add more projects as needed */}
                </div>
            </section>
        </div>
    );
};

export default MainContent;