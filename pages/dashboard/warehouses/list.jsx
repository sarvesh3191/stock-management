import React from 'react';

const WarehouseList = () => {
  const warehouses = [
    { id: 1, name: 'Warehouse A', location: 'New York', capacity: 1000 },
    { id: 2, name: 'Warehouse B', location: 'Los Angeles', capacity: 800 },
    { id: 3, name: 'Warehouse C', location: 'Chicago', capacity: 1200 },
  ];

  return (
    <div>
      <h1>Warehouse List</h1>
      <table border="1" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Capacity</th>
          </tr>
        </thead>
        <tbody>
          {warehouses.map((warehouse) => (
            <tr key={warehouse.id}>
              <td>{warehouse.id}</td>
              <td>{warehouse.name}</td>
              <td>{warehouse.location}</td>
              <td>{warehouse.capacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WarehouseList;