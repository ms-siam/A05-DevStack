import React, { use, useState } from 'react';
import type { Technology } from '../../types/Technology';
import TechnologyCard from './TechnologyCard';
import StackPanel from './stacks/StackPanel';
import { toast } from 'react-toastify';

interface technologyProps {
    technologiesPromise: Promise<Technology[]>
}

const Technologies = ({ technologiesPromise }: technologyProps) => {
    const technologies = use(technologiesPromise)

    const [inStack, SetInStack] = useState<Technology[]>([])

    const handleInStack = (instack: Technology) => {
        SetInStack([...inStack, instack])
        toast.success(`${instack.name} added to your stack!`)
    }

    const deleteInStack = (id:Technology['id']) => {
        const deleted = inStack.find(item=> item.id===id)
        const remainingStack = inStack.filter(
            (stacked) => stacked.id != id,
        );
        SetInStack(remainingStack)
        
        if (deleted) toast.info(`${deleted.name} deleted from your stack!`)
    }

    const removeAllFromStack=() => {
        SetInStack([])
        toast.info(`All stacks has been deleted from your stack!`)
    }

    return (
        <section className='grid grid-cols-4 container mx-auto gap-6'>
            <div className='col-span-3 grid grid-cols-3  gap-9'>
                {
                    technologies.map((technology) => <TechnologyCard key={technology.id}
                        Technology={technology}
                        isInStack={inStack.some((Technology: Technology) => Technology.id === technology.id)}
                        onAdd={handleInStack}></TechnologyCard>)
                }
            </div>
            <aside className='col-span-1 sticky z-10 top-25 self-start'>
                <StackPanel stackItems={inStack} deleteInStack = {deleteInStack} removeAllFromStack = {removeAllFromStack}></StackPanel>
            </aside>
        </section>
    );
};

export default Technologies;