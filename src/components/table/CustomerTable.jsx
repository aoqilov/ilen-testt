import avatar_1 from "assets/imgbox/svg/avatars/1.svg";
import avatar_2 from "assets/imgbox/svg/avatars/2.svg";
import avatar_3 from "assets/imgbox/svg/avatars/3.svg";
import avatar_4 from "assets/imgbox/svg/avatars/4.svg";
import avatar_5 from "assets/imgbox/svg/avatars/5.svg";
import avatar_6 from "assets/imgbox/svg/avatars/6.svg";
import avatar_7 from "assets/imgbox/svg/avatars/7.svg";
import editIcon from "assets/imgbox/svg/Edit.svg";
import trashIcon from "assets/imgbox/svg/Trash.svg";
import { toast } from "react-toastify";

const avatars = [
  avatar_1,
  avatar_2,
  avatar_3,
  avatar_4,
  avatar_5,
  avatar_6,
  avatar_7,
];

export const CustomerTable = ({
  customer,
  onDeleteCustomer,
  onEditCustomer,
}) => {
  const deletee = () => {
    toast.error("deleted post", {
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
    <>
      <div className="customer-name">
        <div className="customer-avatar">
          <img src={avatars[customer.avatarNumber - 1]} alt="customer-avatar" />
        </div>
        <div>
          {customer.firstName} {customer.lastName}
        </div>
      </div>
      <div>{customer.company}</div>
      <div>{customer.email}</div>
      <p
        className={`customer-role ${customer.role === "admin" && "admin"}`}
      ></p>
      <p className="icons">
        <span onClick={() => onEditCustomer(customer.id)}>
          <img src={editIcon} alt="edit-icon" className="icon" />
        </span>
        <span
          onClick={() => {
            onDeleteCustomer(customer.id);
            deletee();
          }}
        >
          <img src={trashIcon} alt="trash-icon" className="icon" />
        </span>
      </p>
    </>
  );
};
