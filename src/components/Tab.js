import React from "react";

const Tab = (props) => {
  const { activeTab, label, onClick } = props;

  return (
    <li
      className={`tab-list-item ${
        activeTab === label ? "tab-list-active" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </li>
  );
};

export default Tab;
