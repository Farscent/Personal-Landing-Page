import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="mb-2">Contact: farhanadiwidya@gmail.com</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://www.linkedin.com/in/farhan-adiwidya-pradana-44181b320/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Farscent" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/farhnnad1/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.kaggle.com/farhanadiwidyap" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        <i className="fab fa-kaggle"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;