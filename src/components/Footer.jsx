import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="mb-2">Contact me: your.email@example.com</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;