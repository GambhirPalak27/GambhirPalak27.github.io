import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'> Hi, I’m a backend developer 👨‍💻 passionate about building robust, scalable systems that power real-time gaming experiences. Since joining my current organization in September 2022, I’ve been developing and deploying backend logic for real-money gaming platforms like Magic Rummy and MagicLand. My journey so far includes successfully launching games such as TeenPatti, Skill TeenPatti, and Callbreak 🃏, and leading integrations with partners like Zupee, Playerzpot, and Tiger Games—initiatives that have contributed meaningfully to our business growth 📈.

              I thrive in fast-paced Agile environments, where problem-solving, collaboration, and adaptability are key. Whether it's resolving critical bugs 🐞, architecting new game features, or mentoring interns, I approach every challenge with a solution-driven mindset.

              Outside of work, I’m a nature-loving shutterbug 📸 with a passion for photography. Exploring new places 🗺️, trying local foods 🍜, and immersing myself in different cultures are a few of the things that bring me joy. Music and dance also play a big part in how I recharge and stay inspired.</p>

            <ButtonLink
              url='https://drive.google.com/file/d/1YkpBwB_XRltDQnjn16QCyiXeGZvq20xZ/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;