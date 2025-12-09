import React, { use, useState, useMemo, useEffect } from 'react';
import Drink from '../Drink/Drink';
import './Drinks.css';
import { addToStoredCart, getStoreCart, removeFromCart } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';

const Drinks = ({ drinkPromise }) => {
    const rawDrinks = use(drinkPromise);
    const drinks = useMemo(() => rawDrinks ?? [], [rawDrinks]);
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All');
    const [sort, setSort] = useState('featured');

    const [cart, setCart] = useState([]);
    // useEffect
    useEffect(() => {
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles);

        const storedCart = [];

        for (const id of storedCartIds) {
            // console.log(id);
            const cartBottle = drinks.find(drink => drink.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }

        console.log('stored cart', storedCart);
        setCart(storedCart);

    }, [drinks])


    const handleAddToCart = (bottle) => {
        // console.log('bottle will be added to the cart', bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);

        // save the bottle id in the storage
        addToStoredCart(bottle.id);
    }

    const handleRemoveFromCart = id => {
        console.log('remove item from the cart', id)

        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromCart(id);
    }

    // console.log(bottles);

    const categories = useMemo(() => {
        const setC = new Set(drinks.map(d => d.category).filter(Boolean));
        return ['All', ...Array.from(setC)];
    }, [drinks]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        let list = drinks.filter(d => {
            if (!d) return false;
            const matchesQuery = q === '' || [d.name, d.category, d.type].join(' ').toLowerCase().includes(q);
            const matchesCategory = category === 'All' || d.category === category;
            return matchesQuery && matchesCategory;
        });

        if (sort === 'price-asc') list = list.sort((a, b) => (a.price || 0) - (b.price || 0));
        if (sort === 'price-desc') list = list.sort((a, b) => (b.price || 0) - (a.price || 0));
        if (sort === 'name') list = list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        return list;
    }, [drinks, query, category, sort]);

    return (
        <div className="drinks-page">
            <header className="drinks-header">
                <div className="drinks-header__title">
                    <h1>Drinkify</h1>
                    <p className="drinks-subtitle">Discover curated beverages — filter, sort and preview.</p>
                </div>

                <p>Added to cart: {cart.length}</p>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
                <div className="drinks-header__controls">
                    <label className="search">
                        <input
                            type="search"
                            placeholder="Search drinks, category or type"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            aria-label="Search drinks"
                        />
                    </label>

                    <select className="select" value={category} onChange={e => setCategory(e.target.value)} aria-label="Filter by category">
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>

                    <select className="select" value={sort} onChange={e => setSort(e.target.value)} aria-label="Sort drinks">
                        <option value="featured">Featured</option>
                        <option value="name">Name</option>
                        <option value="price-asc">Price: Low → High</option>
                        <option value="price-desc">Price: High → Low</option>
                    </select>
                </div>
            </header>

            <main className="drinks-main">
                <div className='card' role="list">
                   {filtered.length === 0 ? (
                       <div className="empty">No drinks found.</div>
                   ) : (
                        filtered.map(drink => (
                            <Drink key={drink.id} drink={drink} handleAddToCart={handleAddToCart}/>
                        ))
                   )}
                </div>
            </main>

            <footer className="drinks-footer">
                <small>© {new Date().getFullYear()} Drinkify — Curated beverages</small>
            </footer>
        </div>
    );
};

export default Drinks;