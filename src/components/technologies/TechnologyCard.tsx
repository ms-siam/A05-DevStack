import type { Technology } from '../../types/Technology';


const TechnologyCard = ({Technology}:{Technology:Technology}) => {
    return (
        <div>
            <div>
                <img src={Technology.icon} alt={Technology.name} />
                <span className='badge'>{Technology.badge}</span>
            </div>
            <h2>{Technology.name}</h2>
            <p>{Technology.description}</p>
            <div>
                <span className='badge'>{Technology.category}</span>
                <span className='badge'>{Technology.difficulty}</span>
                <span className='badge'>{Technology.badge}</span>
            </div>
            <button>Add to Stack</button>
        </div>
    );
};

export default TechnologyCard;