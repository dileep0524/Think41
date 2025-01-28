import React, { useState } from "react";

const AddTenantForm = () => {
  const [tenant, setTenant] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!tenant.name.trim()) newErrors.name = "Name is required.";
    if (!tenant.email.trim()) newErrors.email = "Email is required.";
    if (!tenant.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!tenant.address.trim()) newErrors.address = "Address is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTenant((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Tenant Added:", tenant);
      setTenant({ name: "", email: "", phone: "", address: "" });
      setErrors({});
    }
  };

  return (
    <div className="card">
      <h1>Add New Tenant</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={tenant.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={tenant.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={tenant.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div>
          <label>Address:</label>
          <textarea
            name="address"
            value={tenant.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <button type="submit">Add Tenant</button>
      </form>
    </div>
  );
};

export default AddTenantForm;
