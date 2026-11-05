import React, { use } from 'react';
import type { Technology } from '../../types/Technology';
import TechnologyCard from './TechnologyCard';

interface technologyProps {
    technologiesPromise: Promise<Technology[]>
}

const Technologies = ({technologiesPromise}:technologyProps) => {
    const technologies = use(technologiesPromise)
    return (
        <div className='grid grid-cols-3 container mx-auto gap-5'>
            {
                technologies.map((Technology)=><TechnologyCard key={Technology.id} Technology={Technology}></TechnologyCard>)
            }
        </div>
    );
};

export default Technologies;