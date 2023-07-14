import React, { useState, useEffect } from "react";
// component
import { CustomersDataTable } from "components/table/CustomersDataTable";
import { UserForm } from "components/UserForm";
// notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const [findName, setFindName] = useState("");
  console.log(findName);

  useEffect(() => {
    localStorage.setItem("myObject", JSON.stringify(customers));
  }, [customers]);

  const onEditCustomer = (id) => {
    setSelectedUser(id);
  };

  const onDeleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  const notify = (situation) => {
    toast.success(`succes ${situation} !}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="home">
      <ToastContainer />
      <div className="panel">
        <h2 className="panel-top__title top-title">
          {selectedUser ? "edit cutomer" : "add customer"}
        </h2>
        <UserForm
          {...{ customers, setCustomers, notify }}
          selectedUser={selectedUser}
          editUser={selectedUser}
        />
      </div>
      <div className="content">
        <div className="content-top">
          <h2 className="content-top__title  top-title">customers</h2>
        </div>
        <CustomersDataTable
          customers={customers}
          onDeleteCustomer={onDeleteCustomer}
          onEditCustomer={onEditCustomer}
        />
      </div>
    </div>
  );
};

export default index;
