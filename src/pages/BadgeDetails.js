import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

const BadgeDetails = (props) => {
    const badge = props.badge;

    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTittle={badge.jobTittle}
                        />

                    </div>

                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link>
                            </div>
                            <div onClick={props.onOpenModal} className="btn btn-danger">Delete</div>
                            <DeleteBadgeModal 
                                isOpen={props.modalIsOpen}
                                onClose={props.onCloseModal} 
                                onDeleteBadge={props.onDeleteBadge}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BadgeDetails;


/* COMPONENTE PRESENTACIONAL - SOLO SE ENCARGA DE PRESENTAR */