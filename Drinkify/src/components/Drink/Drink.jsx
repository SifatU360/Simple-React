import React, { useState } from 'react';
import './Drink.css';

const Drink = ({ drink, handleAddToCart }) => {
    const [loaded, setLoaded] = useState(false);
    const [errored, setErrored] = useState(false);

    const handleLoad = () => setLoaded(true);
    const handleError = () => {
        setErrored(true);
        setLoaded(false);
    };

    return (
        <article className="drink-card" aria-label={`Drink: ${drink.name}`}>
            <div className="drink-card__media">
                {!loaded && !errored && <div className="media__skeleton" aria-hidden="true" />}

                {errored ? (
                    <div className="media__placeholder" role="img" aria-label={`No image for ${drink.name}`}>
                        <svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <rect width="64" height="48" rx="6" fill="#eef2f7" />
                            <path d="M8 34L24 18L40 34H8Z" fill="#e2e8f0" />
                            <circle cx="50" cy="16" r="6" fill="#e2e8f0" />
                        </svg>
                    </div>
                ) : (
                    <img
                        className={`drink-card__img ${loaded ? 'is-loaded' : ''}`}
                        src={drink.image}
                        alt={drink.name}
                        loading="lazy"
                        decoding="async"
                        onLoad={handleLoad}
                        onError={handleError}
                    />
                )}
            </div>

            <div className="drink-card__body">
                <h3 className="drink-card__title">{drink.name}</h3>

                <div className="drink-card__meta">
                    <span className="badge">{drink.category}</span>
                    <span className="muted">{drink.type}</span>
                </div>

                <p className="drink-card__price">${parseFloat(drink.price).toFixed(2)}</p>

                <div className="drink-card__actions">
                    <button className="btn btn--primary" type="button" onClick={() => handleAddToCart(drink)}>Add to cart</button>
                    <button className="btn btn--ghost" type="button" aria-label={`More info about ${drink.name}`}>Details</button>
                </div>
            </div>
        </article>
    );
};

export default Drink;