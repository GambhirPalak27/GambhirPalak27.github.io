
import React from "react";
import vpn from '../assets/Covidtracker.png'
import ecom from '../assets/glamkart_homepage.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Snap Shot' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={vpn} alt="" />
            </a>}
            {title=='GlamKart' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={ecom} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'GlamKart',
        description:'GlamKart is a full-stack e-commerce website with a scalable Golang backend, React frontend, Stripe-powered payments, email/SMS order notifications, PostgreSQL database, and containerized microservices deployed via Docker & Kubernetes',
        image: {ecom},
        git:'https://github.com/GambhirPalak27/GlamKart',
        technologies:['Golang' ,'ReactJS' , 'Postgres']
    },
    {
        title:'Covid-19 Tracker cum Online Consultation System',
        description:'Covid-19 Tracker cum Online Consultation System is a fully responsive web app which displays the current covid-19 cases with the help of charts and graphs in three categories namely Confirmed, Recovered and Deceased Cases. The user can select the country and the date range in which he/she wants to see the cases. The web app also features an Online Consultation System to schedule meetings between doctors and patients',
        image: {vpn},
        git:"https://github.com/GambhirPalak27/Covid-19-Tracker",
        technologies:[ 'React JS', 'tailwind CSS']
    }
]

export default Projects