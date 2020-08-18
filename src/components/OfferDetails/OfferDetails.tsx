import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Offer } from '../../dto';
import { State } from '../../store';

import './OfferDetails.css';

export const OfferDetails: React.SFC = () => {
  const { id } = useParams<{ id: string }>();

  // In real life app we couldn't assume that this resource is available in the store
  // TODO: add check and retrieve it from /offers/{offer_id} if not fetched yet
  const [offer] = useSelector<State, Array<Offer>>(
    state => state.offersReducer.offers.filter(offer => offer.id === Number(id))
  );

  return (
    <div className="OfferDetailsContainer">
      <Link to="/">Back</Link>
      <p>
        <strong>Title:</strong> {offer.title}
      </p>
      <p>
        <strong>Description:</strong> {offer.description}
      </p>
      <p>
        <strong>Price:</strong> {offer.price}
      </p>
    </div>
  );
};
