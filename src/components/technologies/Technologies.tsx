import React, { use } from 'react';
import type { Technology } from '../../types/Technology';

interface technologyProps {
    technologiesPromise: Promise<Technology[]>
}

const Technologies = ({technologiesPromise}:technologyProps) => {
    const technologies = use(technologiesPromise)
    return (
        <div>
            
        </div>
    );
};

export default Technologies;