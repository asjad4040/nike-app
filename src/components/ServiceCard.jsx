import React from 'react'
import { services } from '../data'
import { SiCashapp } from "react-icons/si";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

const ServiceCard = () => {
    return (
        <section className="container flex justify-center flex-wrap gap-9">
            {services.map((service) => (

                <div className="sm:min-w-[350px] sm:w-[350px] w-full flex flex-1 flex-col rounded-[20px] shadow-2xl px-10 py-16 items-center">
                    <div className="flex justify-center items-center bg-red-500 rounded-full h-11 w-11">
                        {service.icon == "help" ? <FaHandsHelping /> : null}
                        {service.icon == "shipping" ? <MdOutlineLocalShipping /> : null}
                        {service.icon == "payment" ? <SiCashapp /> : null}
                    </div>
                    <h3 className="mt-5 text-3xl leading-normal font-bold">{service.label}</h3>
                    <p className="mt-3 break-words font-mono text-lg leading-normal text-slate-500">{service.subtext}</p>
                </div>

            ))}
        </section>
    )
}

export default ServiceCard
