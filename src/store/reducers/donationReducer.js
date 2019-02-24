import * as actionTypes from '../actions/actionTypes';

const initialState = {
  donations: 0,
  message: '',
  loading: false,
};

const donationStart = ( state, action ) => {
  const data = {
    error: null,
    loading: true,
  };
  return { ...state,...data};
};

const donationSuccess = (state, action) => {
  const data = {
    loading: false,
    donations: (parseInt(state.donations) + parseInt(action.amount)).toFixed(2),
  };
  return {...state, ...data};

};

const donationFail = ( state, action ) => {
  return { ...state,...{ error: true, loading: false } };
};

const updateMessage = ( state, action ) => {
  return { ...state,...{ message: action.message, loading: false } };
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.UPDATE_TOTAL_DONATE: return donationSuccess(state, action);
    case actionTypes.FETCH_DONATION_START: return donationStart(state, action);
    case actionTypes.FETCH_DONATION_SUCCESS: return donationSuccess(state, action);
    case actionTypes.FETCH_DONATION_FAIL: return donationFail(state, action);
    case actionTypes.UPDATE_MESSAGE: return updateMessage(state, action);

    default:
      return state;
  }
};

export default reducer;
