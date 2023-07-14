import { CustomerTable } from "components/table/CustomerTable";

export const CustomersDataTable = ({
  customers,
  onDeleteCustomer,
  onEditCustomer,
}) => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-name">Name</div>
        <div className="header-name">Company</div>
        <div className="header-name">Email</div>
        <p className="header-name">Admin</p>
        <p className="header-name">Actions</p>
      </div>
      {customers.map((customer) => {
        return (
          <div className="header" key={customer.id}>
            <CustomerTable
              customer={customer}
              onDeleteCustomer={onDeleteCustomer}
              onEditCustomer={onEditCustomer}
            />
          </div>
        );
      })}
    </div>
  );
};
