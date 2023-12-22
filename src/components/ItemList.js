// src/components/ItemList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadItems } from '../app/actions';
import '../css/component.css';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items && state.items.items);
  const loading = useSelector((state) => state.items && state.items.loading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(loadItems([]));
        const response = await fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements');
        const data = await response.json();

        dispatch(loadItems(data));
      } catch (error) {
        console.error('Error al cargar los elementos:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h2>Lista de Nombre</h2>
      {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <ul className="item-list">
          {Array.isArray(items) && items.length > 0 ? (
            items.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
              </li>
            ))
          ) : (
            <p>No hay elementos disponibles.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
