import React from 'react'
import NavComponent from './../components/NavComponent';

const Home = () => {
    return (
        <div>
            <NavComponent />
            <div className='w-full display h-96 flex flex-col justify-center items-center p-10 gap-10'>
                <p className='text-5xl font-bold'>Welcome to Post Ronda</p>
                <div className='w-[50%]'>
                    <p className='text-lg text-justify'>
                        Once upon a time in Indonesia, the neighborhood "Pos Ronda" was the place where everyone gathered to keep watch, share stories, and snack on gorengan. Inspired by this spirit of togetherness, Post Ronda is your digital guard post—except here, instead of guarding the street, you’re guarding your API skills! Learn, experiment, and have fun with REST APIs, just like the friendly ronda crew keeping the kampung safe (but with fewer mosquitoes).
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home