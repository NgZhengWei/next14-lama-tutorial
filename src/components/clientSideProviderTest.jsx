"use client";
// used to prove that server side components stay server side even when wrapped in client side components
const ClientSideProviderTest = ({ children }) => {
    return <div>{children}</div>;
};

export default ClientSideProviderTest;
