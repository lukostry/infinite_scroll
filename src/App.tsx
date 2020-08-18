import React from 'react';
import { Link } from 'react-router-dom';
import { atom, useRecoilState } from 'recoil';
import { useDispatch, useSelector } from 'react-redux';

import { InfiniteList } from './components';
import { Offer, OfferStatus } from './dto';
import { State } from './store';

import api from './api';
import './App.css';

const scrollState = atom<number>({
  key: 'scrollState',
  default: 0,
});

const App: React.SFC = () => {
  const dispatch = useDispatch();
    const offersList = useSelector<State, Array<Offer>>(
      state => state.offersReducer.offers
    );
  
  const [scrollPosition, setScrollPosition] = useRecoilState(scrollState);

  const [offset, incrementOffset] = React.useState(0);
  const [isOverFlowing, setIsOverflowing] = React.useState(false);

  const handleClickLink = (): void => {
    setScrollPosition(window.scrollY);
  };

  const handleLoadMore = (): void => {
    api<Array<Offer>>('offers', { limit: 20, offset, status: OfferStatus.Published })
      .then(
        data => {
          dispatch({ type: 'FETCHED_OFFERS', payload: data });
          incrementOffset(offset + 20);
        }
      );
  };

  React.useEffect(() => {
    api<Array<Offer>>('offers', { limit: 20, offset, status: OfferStatus.Published })
      .then((data) => {
        dispatch({ type: 'FETCHED_OFFERS', payload: data });
      });
    incrementOffset(offset + 20);
  }, []);

  // Scroll to saved scroll position when returning from OfferDetails view
  React.useLayoutEffect(() => {
    window.scrollTo({
      top: scrollPosition,
    });
  }, [scrollPosition]);

  return (
    <div className="App">
      <InfiniteList
        onLoadMore={handleLoadMore}
        onOverflowing={() => setIsOverflowing(true)}
      >
        <p>List of offers:</p>
        {offersList.map(offer => {
          return (
            <p className="Offer" key={offer.id}>
              <Link to={`/offer/${offer.id}`} onClick={handleClickLink}>
                {offer.title}
              </Link>
            </p>
          );
        })}
        {!isOverFlowing && <button onClick={handleLoadMore}>Load more</button>}
      </InfiniteList>
    </div>
  );
}

export default App;
