import {
    SET_CARD_NUMBER,
    SET_CARDHOLDER_NAME,
    SET_ERROR,
    SET_EXPIRATION_DATE,
    SET_SECURITY_CODE,
    SUBMIT_PAYMENT_DETAILS,
} from "../actionTypes";

const initialState = {
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    cardholderName: '',
    error: '',
    processing: false,
};

const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARD_NUMBER:
            return {
                ...state,
                cardNumber: action.cardNumber,
            };
        case SET_EXPIRATION_DATE:
            return {
                ...state,
                expirationDate: action.expirationDate,
            };
        case SET_SECURITY_CODE:
            return {
                ...state,
                securityCode: action.securityCode,
            };
        case SET_CARDHOLDER_NAME:
            return {
                ...state,
                cardholderName: action.cardholderName,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
            };
        case SUBMIT_PAYMENT_DETAILS:
            return {
                ...state,
                processing: true,
                error: '',
                cardNumber: '',
                expirationDate: '',
                securityCode: '',
                cardholderName: '',
            };
        default:
            return state;
    }
};

export default paymentReducer;
