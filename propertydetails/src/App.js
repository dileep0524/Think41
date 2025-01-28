import React, { useState } from 'react';
import './App.css';

// Mock Data
const mockProperties = [
  { id: 1, name: "Sunny Villa", address: "123 Sunshine Street", rentalPrice: "$1200/month" },
  { id: 2, name: "Ocean Breeze Apartment", address: "456 Seaside Ave", rentalPrice: "$800/month" },
  { id: 3, name: "Mountain Retreat", address: "789 Alpine Way", rentalPrice: "$1000/month" },
];

const mockTenants = [
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

// Dashboard
const Dashboard = ({ goToSection }) => (
  <div className="section">
    <h2>Dashboard</h2>
    <button onClick={() => goToSection('properties')}>Manage Properties</button>
    <button onClick={() => goToSection('tenants')}>Manage Tenants</button>
    <button onClick={() => goToSection('agreements')}>View Agreements</button>
  </div>
);

// Properties List
const PropertiesList = ({ goToSection }) => (
  <div className="section">
    <h2>Properties List</h2>
    {mockProperties.map((property) => (
      <div key={property.id}>
        <p>{property.name} - {property.address} - {property.rentalPrice}</p>
      </div>
    ))}
    <button onClick={() => goToSection('addProperty')}>Add Property</button>
    <button onClick={() => goToSection('dashboard')}>Back to Dashboard</button>
  </div>
);

// Tenants List
const TenantsList = ({ goToSection }) => (
  <div className="section">
    <h2>Tenants List</h2>
    {mockTenants.map((tenant) => (
      <div key={tenant.id}>
        <p>{tenant.name} - {tenant.email}</p>
      </div>
    ))}
    <button onClick={() => goToSection('addTenant')}>Add Tenant</button>
    <button onClick={() => goToSection('dashboard')}>Back to Dashboard</button>
  </div>
);

// Rental Agreements
const RentalAgreements = ({ goToSection }) => (
  <div className="section">
    <h2>Rental Agreements</h2>
    <p>No agreements yet.</p>
    <button onClick={() => goToSection('dashboard')}>Back to Dashboard</button>
  </div>
);

// Add/Edit Property Form
const AddEditPropertyForm = ({ goToSection }) => {
  const [property, setProperty] = useState({ name: "", address: "", rentalPrice: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate adding a new property
    console.log("Property Added:", property);
    goToSection('properties');
  };

  return (
    <div className="section">
      <h2>Add/Edit Property</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Property Name"
          value={property.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={property.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="rentalPrice"
          placeholder="Rental Price"
          value={property.rentalPrice}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => goToSection('properties')}>Back to Properties</button>
    </div>
  );
};

// Add/Edit Tenant Form
const AddEditTenantForm = ({ goToSection }) => {
  const [tenant, setTenant] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTenant((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate adding a new tenant
    console.log("Tenant Added:", tenant);
    goToSection('tenants');
  };

  return (
    <div className="section">
      <h2>Add/Edit Tenant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tenant Name"
          value={tenant.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Tenant Email"
          value={tenant.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => goToSection('tenants')}>Back to Tenants</button>
    </div>
  );
};

// App Component
const App = () => {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const goToSection = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="App">
      {currentSection === 'dashboard' && <Dashboard goToSection={goToSection} />}
      {currentSection === 'properties' && <PropertiesList goToSection={goToSection} />}
      {currentSection === 'tenants' && <TenantsList goToSection={goToSection} />}
      {currentSection === 'agreements' && <RentalAgreements goToSection={goToSection} />}
      {currentSection === 'addProperty' && <AddEditPropertyForm goToSection={goToSection} />}
      {currentSection === 'addTenant' && <AddEditTenantForm goToSection={goToSection} />}
    </div>
  );
};

export default App;
