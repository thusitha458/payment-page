import React from "react";
import {CARD_TYPES} from "../config/Constants";

const CardSelector = props => {
    return (
        <div className="card-selector">
            <div className={`card-wrapper ${props.selectedCard === CARD_TYPES.VISA ? "selected" : undefined}`}>
                <img src="/card-visa.png" alt=""/>
            </div>
            <div className={`card-wrapper ${props.selectedCard === CARD_TYPES.MASTERCARD ? "selected" : undefined}`}>
                <img src="/card-mastercard.png" alt=""/>
            </div>
            <div className={`card-wrapper ${props.selectedCard === CARD_TYPES.AMEX ? "selected" : undefined}`}>
                <img src="/card-amex.png" alt=""/>
            </div>
            <div className={`card-wrapper ${props.selectedCard === CARD_TYPES.DINERSCLUB ? "selected" : undefined}`}>
                <img src="/card-dinersclub.png" alt=""/>
            </div>
            <div className={`card-wrapper ${props.selectedCard === CARD_TYPES.DISCOVER ? "selected" : undefined}`}>
                <img src="/card-discover.png" alt=""/>
            </div>
            <div className={`card-wrapper ${props.selectedCard === CARD_TYPES.JCB ? "selected" : undefined}`}>
                <img src="/card-jcb.png" alt=""/>
            </div>
        </div>
    );
};

export default CardSelector;
