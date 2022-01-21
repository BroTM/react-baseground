import React from "react";

//1. create context
const UserContext = React.createContext("Codevolution");

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

export default UserContext;
