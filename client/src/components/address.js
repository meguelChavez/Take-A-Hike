import React from 'react';

const Address = (props) => {
    const physicalAddr = props.address.find(address => address.type === 'Physical');
    return (
        <div id="" className="vcard">
            <div className="adr">
                <div className="street-address">{physicalAddr.line1}</div>
                <span className="locality">{physicalAddr.city}</span>
                ,
                <span className="region">{physicalAddr.stateCode}</span>
                ,
                <span className="postal-code">{physicalAddr.postalCode}</span>
            </div>
            <div className="tel">{`Phone: ${props.contacts.phoneNumbers[0].phoneNumber}`}</div>
            <div className="email">
                <span>email:
                    <a className="email" href="mailto:lacl_visitor_information@nps.gov"> lacl_visitor_information@nps.gov</a>
                </span>
            </div>
        </div>
    )
}

export default Address;