import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardComponent, CardMain, CardFooter } from './CardStyled';
import data from '../../data';


export const planetColors = {
    "Mercury": "#419EBB",
    "Venus": "#EDA249",
    "Earth": "#6f2ed6",
    "Mars": "#D14C32",
    "Jupiter": "#D83A34",
    "Saturn": "#CD5120",
    "Uranus": "#1ec2a4",
    "Neptune": "#2d68f0"
};


const Card = () => {
    const { id } = useParams();
    const planet = data.find(item => item.id === parseInt(id));
    const [view, setView] = useState('overview');

    const handleViewChange = (view) => {
        setView(view);
    }

    if (!planet) {
        return <div>Planet not found</div>;
    }
    return (
        <CardComponent>
             <div className='mobile'>
                <button style={{ borderBottomColor: view === 'overview' ? planetColors[planet.name] : '#070724' }} onClick={() => handleViewChange('overview')}>Overview</button>
                <button style={{ borderBottomColor: view === 'structure' ? planetColors[planet.name] : '#070724' }} onClick={() => handleViewChange('structure')}>Internal structure</button>
                <button style={{ borderBottomColor: view === 'geology' ? planetColors[planet.name] : '#070724' }}  onClick={() => handleViewChange('geology')}>Surface geology</button>
            </div>  
            <CardMain>
                <div className='card-image'>
                    <img src={view === 'overview' ? planet.images.planet : view === 'structure' ? planet.images.internal : planet.images.geology} alt={planet.name} />
                </div>
                <div className='card-holder'>
                    <div className='card-text'>
                        <h1>{planet.name}</h1>
                        <p>{view === 'overview' ? planet.overview.content : view === 'structure' ? planet.structure.content : planet.geology.content}</p>
                        <span>Source: <a href={view === 'overview' ? planet.overview.source : view === 'structure' ? planet.structure.source : planet.geology.source} target='_blank' rel='noopener noreferrer'>Wikipedia</a></span>
                    </div>
                    <div className='card-btn'>
                        <button style={{ backgroundColor: view === 'overview' ? planetColors[planet.name] : '#070724' }} onClick={() => handleViewChange('overview')}><span>01</span>Overview</button>
                        <button style={{ backgroundColor: view === 'structure' ? planetColors[planet.name] : '#070724' }} onClick={() => handleViewChange('structure')}><span>02</span>Internal structure</button>
                        <button style={{ backgroundColor: view === 'geology' ? planetColors[planet.name] : '#070724' }}  onClick={() => handleViewChange('geology')}><span>03</span>Surface geology</button>
                    </div>  
                </div>
            </CardMain>
            <CardFooter>
                <div className='footer'>
                    <p>Rotation time</p>
                    <span>{planet.rotation}</span>
                </div>
                <div className='footer'>
                    <p>Revolution time</p>
                    <span>{planet.revolution}</span>
                </div>
                <div className='footer'>
                    <p>Radius</p>
                    <span>{planet.radius}</span>
                </div>
                <div className='footer'>
                    <p>Average temp.</p>
                    <span>{planet.temperature}</span>
                </div>
            </CardFooter>
        </CardComponent>
    );
};

export default Card;
