import React from "react";
import { useParams, Link } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams(); // Get property ID from URL

  // Simulate property data for demonstration
  const properties = {
    1: {
      name: "Sunny Villa",
      address: "123 Sunshine Street, Pleasantville",
      owner: "John Doe",
      rentalPrice: "$1200/month",
      description: "A beautiful 3-bedroom villa with a garden and stunning views.",
    },
    2: {
      name: "Ocean Breeze Apartment",
      address: "456 Seaside Ave, Beach City",
      owner: "Jane Smith",
      rentalPrice: "$800/month",
      description: "A cozy 2-bedroom apartment near the beach with sea views.",
    },
    3: {
      name: "Mountain Retreat",
      address: "789 Alpine Way, Hilltown",
      owner: "Mike Johnson",
      rentalPrice: "$1000/month",
      description: "A peaceful cabin in the mountains with fresh air and nature.",
    },
  };

  const property = properties[id];

  if (!property) {
    return <h1>Property not found</h1>;
  }

  return (
    <div className="card">
      <h1>{property.name}</h1>
      <p>
        <strong>Address:</strong> {property.address}
      </p>
      <p>
        <strong>Owner:</strong> {property.owner}
      </p>
      <p>
        <strong>Rental Price:</strong> {property.rentalPrice}
      </p>
      <p>
        <strong>Description:</strong> {property.description}
      </p>
      <Link to="/" className="back-link">
        Back to Listings
      </Link>
    </div>
  );
};

export default PropertyDetails;
