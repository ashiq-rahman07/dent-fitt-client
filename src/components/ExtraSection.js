import React from 'react';

const ExtraSection = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">How to help children brush their teeth properly
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Children aged up to 3 years. Start brushing your baby's teeth as soon as the first milk toot
                        <br className="hidden md:inline lg:hidden" /> breaks through usually at around 6 months, but it can be earlier 
                    </p>
                    
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.ibb.co/FgRZBnj/child-dental.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default ExtraSection;