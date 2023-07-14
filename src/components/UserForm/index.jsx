import { Lockinput, Radioinput, Simpleinput } from "components/fields";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import validationSchema from "service/schema";
import { v4 as uuidv4 } from "uuid";

export const UserForm = ({ customers, setCustomers, editUser, notify }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    company: "",
    role: "user",
    email: "",
    password: "",
  });

  function getRandomNumber() {
    return Math.floor(Math.random() * 7) + 1;
  }

  const onSubmit = (values, actions) => {
    if (selectedUser) {
      const updatedCustomers = customers.map((customer) =>
        customer.id === selectedUser.id
          ? { ...values, id: selectedUser.id }
          : customer
      );
      setCustomers(updatedCustomers);
      notify("update");
    } else {
      const newUser = {
        ...values,
        id: uuidv4(),
        avatarNumber: getRandomNumber(),
      };
      setCustomers([...customers, newUser]);
      notify("add");
    }

    actions.resetForm();
    setSelectedUser(null);
  };

  const retrieveDataFromLocalStorage = () => {
    const storebase = localStorage.getItem("myObject");
    if (storebase) {
      const parsedData = JSON.parse(storebase);
      setCustomers(parsedData);
    } else {
      setCustomers([
        {
          id: "1212465412",
          firstName: "Abdulaziz",
          lastName: "oqilov",
          company: "Google",
          email: "abdulazizoqilov@gmail.com",
          role: "admin",
          avatarNumber: 7,
        },
      ]);
    }
  };

  useEffect(() => {
    retrieveDataFromLocalStorage();
  }, []);

  useEffect(() => {
    const userToEdit = customers.find((customer) => customer.id === editUser);
    setSelectedUser(userToEdit);
  }, [editUser]);

  useEffect(() => {
    if (selectedUser) {
      setInitialValues(selectedUser);
    } else {
      setInitialValues({
        firstName: "",
        lastName: "",
        company: "",
        role: "user",
        email: "",
        password: "",
      });
    }
  }, [selectedUser]);

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="form-twice">
              <Simpleinput name={"firstName"} label={"First Name"} />
              <Simpleinput name={"lastName"} label={"Last Name"} />
            </div>
            <div className="form-other">
              <Simpleinput name={"company"} label={"Company"} />
              <Radioinput name="role" label={"Status"} />
              <Simpleinput name={"email"} label={"Email"} />
              <Lockinput name={"password"} label={"Password"} />
              <button className="btn" type="submit" disabled={isSubmitting}>
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
