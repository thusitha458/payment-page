import {
    SET_CARD_NUMBER,
    SET_CARDHOLDER_NAME,
    SET_EXPIRATION_DATE,
    SET_SECURITY_CODE,
    SET_ERROR,
    SUBMIT_PAYMENT_DETAILS,
} from "../actionTypes";

export const setCardNumber = cardNumber => {
    return {
        type: SET_CARD_NUMBER,
        cardNumber: cardNumber,
    };
};

export const setExpirationDate = expirationDate => {
    return {
        type: SET_EXPIRATION_DATE,
        expirationDate: expirationDate,
    };
};

export const setSecurityCode = securityCode => {
    return {
        type: SET_SECURITY_CODE,
        securityCode: securityCode,
    };
};

export const setCardholderName = cardholderName => {
    return {
        type: SET_CARDHOLDER_NAME,
        cardholderName: cardholderName,
    };
};

export const setError = error => {
    return {
        type: SET_ERROR,
        error: error,
    };
};

export const submitPaymentDetails = () => {
    return {
        type: SUBMIT_PAYMENT_DETAILS,
    };
};
