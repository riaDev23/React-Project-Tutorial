import React from "react";

const Customer = ({ customer }) => {
  return (
    <div>
      <CustomerProfile image={customer.image} name={customer.name} id={customer.id} />
      <CustomerInfo birthday={customer.birthday} gender={customer.gender} job={customer.job} />
    </div>
  );
};

const CustomerProfile = ({ image, name, id }) => {
  return (
    <div>
      <img src={image} alt="profile" />
      <h2>
        {name}({id})
      </h2>
    </div>
  );
};

const CustomerInfo = ({ birthday, gender, job }) => {
  return (
    <div>
      <p>{birthday}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </div>
  );
};

export default Customer;
