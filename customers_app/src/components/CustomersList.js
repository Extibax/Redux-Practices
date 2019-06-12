import React from "react";
import PropTypes from "prop-types";
import CustomersListItem from "./CustomerListItem";

const CustomersList = ({ customers, urlPath }) => {
  return (
    <div>
      <div className="customers-list">
        {customers.map(customer => (
          <CustomersListItem
            key={customer.dni}
            name={customer.name}
            dni={customer.dni}
            editAction={"Editar"}
            deleteAction={"Eliminar"}
            urlPath={urlPath}
          />
        ))}
      </div>
    </div>
  );
};

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired
};

export default CustomersList;
