import React, {Component} from "react";
import CardSelector from "./CardSelector";
import {getCardType, isCardValid} from "../utils/creditCardUtils";
import ClipLoader from "react-spinners/ClipLoader";
import {connect} from "react-redux";
import {setCardNumber, setExpirationDate, setSecurityCode, setCardholderName, setError, submitPaymentDetails} from "../actions/paymentActions";
import {isEmpty, onlyNumbers} from "../utils/formValidation";

class PaymentForm extends Component {
    handleOnChangeCardNumber = e => {
        this.props.setCardNumber(e.target.value);
    };

    handleOnChangeExpirationDate = e => {
        this.props.setExpirationDate(e.target.value);
    };

    handleOnChangeSecurityCode = e => {
        this.props.setSecurityCode(e.target.value);
    };

    handleOnChangeCardholderName = e => {
        this.props.setCardholderName(e.target.value);
    };

    handlePayButtonClick = () => {
        let errors = this.validateFields();

        if (errors.length === 0) {
            this.props.submitPaymentDetails();
        } else {
            this.props.setError(errors[0]);
        }
    };

    validateFields = () => {
        let errors = [];

        if (isEmpty(this.props.cardNumber)) {
            errors.push('Card number is required');
        } else if (!isCardValid(this.props.cardNumber.replace(' ', ''))) {
            errors.push('Invalid card number');
        }

        if (isEmpty(this.props.expirationDate)) {
            errors.push('Expiration date is required');
        } else if (!(/\d{2}\/\d{2}/.test(this.props.expirationDate))) {
            errors.push('Invalid expiration date');
        } else {
            let monthAndYear = (this.props.expirationDate + '').split('/').map(value => parseInt(value));
            let month = monthAndYear[0];
            let year = monthAndYear[1];
            if (month < 1 || month > 12) {
                errors.push('Invalid month');
            }
            if (year < 20 || year > 99) {
                errors.push('Invalid year');
            }
        }

        if (isEmpty(this.props.securityCode)) {
            errors.push('Security code is required');
        } else if (!onlyNumbers(this.props.securityCode)) {
            errors.push('Security code should only contain numbers');
        }

        if (isEmpty(this.props.cardholderName)) {
            errors.push('Card holder name is required');
        }

        return errors;
    };

    render() {
        return this.props.processing ? (
            <div className="loading-screen">
                <div className="message">
                    Payment processing ...
                </div>
                <div className="loader-wrapper">
                    <ClipLoader />
                </div>
            </div>
        ) : (
            <div className="payment-form">
                <div className="payment-form-header">
                    <div className="title">Payment Gateway</div>
                </div>
                <div className="payment-form-contents">
                    <div className="card-selector-wrapper">
                        <CardSelector
                            selectedCard={getCardType(this.props.cardNumber.replace(' ', ''))}
                        />
                    </div>
                    <div className="payment-detail card-number">
                        <div className="label">* Card Number</div>
                        <div className="input-wrapper">
                            <input type="text"
                                   placeholder="Enter Card Number"
                                   value={this.props.cardNumber}
                                   onChange={this.handleOnChangeCardNumber}
                            />
                        </div>
                    </div>
                    <div className="expiry-security-code-wrapper">
                        <div className="payment-detail expiry">
                            <div className="label">* Expiration Date</div>
                            <div className="input-wrapper">
                                <input type="text"
                                       placeholder="MM / YY"
                                       maxLength="5"
                                       value={this.props.expirationDate}
                                       onChange={this.handleOnChangeExpirationDate}
                                />
                            </div>
                        </div>
                        <div className="payment-detail security-code">
                            <div className="label">* Security Code</div>
                            <div className="input-wrapper">
                                <input type="text"
                                       placeholder="XXX"
                                       maxLength="3"
                                       value={this.props.securityCode}
                                       onChange={this.handleOnChangeSecurityCode}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="payment-detail name">
                        <div className="label">* Card Holder Name</div>
                        <div className="input-wrapper">
                            <input type="text"
                                   value={this.props.cardholderName}
                                   onChange={this.handleOnChangeCardholderName}
                            />
                        </div>
                    </div>
                </div>
                <div className="payment-form-footer">
                    <div className={`payment-error-display ${!this.props.error && "hide-element"}`}>
                        <div className="error-icon-wrapper">
                            <img src="/error-icon.png" alt=""/>
                        </div>
                        <div className="error-message">{this.props.error}</div>
                    </div>
                    <button className="pay-button" type="button" onClick={this.handlePayButtonClick}>PAY</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cardNumber: state.cardNumber,
        expirationDate: state.expirationDate,
        securityCode: state.securityCode,
        cardholderName: state.cardholderName,
        error: state.error,
        processing: state.processing,
    };
};

export default connect(mapStateToProps, {
    setCardNumber,
    setError,
    submitPaymentDetails,
    setExpirationDate,
    setCardholderName,
    setSecurityCode,
})(PaymentForm);
