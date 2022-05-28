import React from 'react';

const Section2 = () => {

    
    return (
        <div className="stats shadow w-full mt-10 mb-10 text-center">

            <div className="stat flex flex-col">
                <div className="stat-figure text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>

                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-title">Total Likes</div>
            </div>

            <div className="stat flex flex-col">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>

                <div className="stat-value text-secondary">2.6M</div>
                <div className="stat-title">Page Views</div>
            </div>

            <div className="stat flex flex-col">
                <div className="stat-figure text-secondary">
                    <div className="avatar online">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                </div>
                <div className="stat-value">86%</div>
                <div className="stat-title">Tasks done</div>
            </div>

        </div>
    );
};

export default Section2;


