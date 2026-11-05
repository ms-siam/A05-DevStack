import React, { use } from 'react';
import type { Technology } from '../../types/Technology';
import TechnologyCard from './TechnologyCard';

interface technologyProps {
    technologiesPromise: Promise<Technology[]>
}

const Technologies = ({technologiesPromise}:technologyProps) => {
    const technologies = use(technologiesPromise)
    return (
        <section className='grid grid-cols-4 container mx-auto gap-6'>
            <div className='col-span-3 grid grid-cols-3  gap-9'>
            {
                technologies.map((Technology)=><TechnologyCard key={Technology.id} Technology={Technology}></TechnologyCard>)
            }
        </div>
            <aside className='col-span-1'>
                sidebar
            </aside>
        </section>
    );
};

export default Technologies;