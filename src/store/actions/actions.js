import * as actionTypes from './actionTypes';
import fetch from 'isomorphic-fetch';
import {summaryDonations} from '../../helpers';

export const updateTotalDonate = (data) => {
  return {
    type: actionTypes.UPDATE_TOTAL_DONATE,
    amount: summaryDonations(data.map((item) => (item.amount))),
  }
};

export const fetchDonationsSuccess = (amount) => {
  return {
    type: actionTypes.FETCH_DONATION_SUCCESS,
    amount,
  };
};

export const fetchDonationsFail = () => {
  return {
    type: actionTypes.FETCH_DONATION_FAIL,
  };
};

export const updateMessage = (message) => {
  return {
    type: actionTypes.UPDATE_MESSAGE,
    message,
  };
};

export const handlePay = (id, amount, currency) => {
  debugger;
  return dispatch => {
    const url = 'http://localhost:3001/payments'
    const headers = {
      'Content-Type': 'application/json',
    };
    fetch(url, {
      method: 'POST',
      headers,
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    }).then(resp => { return resp.json(); })
      .then( res => {
        dispatch(fetchDonationsSuccess(amount));
        dispatch(updateMessage(`Thank you for the donation of $ ${amount}`));
        setTimeout(function() {
          dispatch(updateMessage());
        }, 2000);
      } )
      .catch( err => {
        dispatch(fetchDonationsFail(err));
      } );
  };
};
