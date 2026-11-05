import React from 'react';
import type { Technology } from '../../types/Technology';

interface technologyProps {
    technologiesPromise: Promise<Technology[]>
}

const Technologies = ({technologiesPromise}:technologyProps) => {
    return (
        <div>
            
        </div>
    );
};

export default Technologies;