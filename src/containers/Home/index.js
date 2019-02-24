import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import * as actions from '../../store/actions';
import DonationCard from '../../components/DonationCard';

import {
  Message,
  Container,
  InputLabel,
  Radio,
  Title,
  Subtitle,
  GlobalStyle,
}
  from './style';

class Home extends Component {
  state = {
    charities: [],
    selectedAmount: 10,
    showPayment:'',
  };

  async componentDidMount() {
    const self = this;
    const { updateDonation } = self.props;

    await fetch('http://localhost:3001/charities')
      .then(function(resp) { return resp.json(); })
      .then(function(data) {
        self.setState({ charities: data }) });

    const data = await fetch('http://localhost:3001/payments')
      .then(function(resp) { return resp.json() })
      .then(function(data) {
        return data;
      });
    updateDonation(data);
  }

  transitPayment = (id) => {
    this.setState({showPayment: id});
  };

  closePayment = () => {
    this.setState({showPayment:''});
  };

  render() {
    const self = this;
    const cards = this.state.charities.map(function(item, i) {
      const payments = [10, 20, 50, 100, 500].map((amount, j) => (
        <InputLabel key={j}>
          <Radio
            type="radio"
            name="payment"
            onClick={function() {
              self.setState({ selectedAmount: amount })
            }} /> {amount}
        </InputLabel>
      ));

      return (
        <DonationCard key={i}
          keyOf={i}
          image={'/images/'+ item.image}
          id={item.id}
          name={item.name}
          transitPayment={self.transitPayment}
          showPayment={self.state.showPayment}
          payments={payments}
          handlePayment={self.props.handlePayment}
          closePayment={self.closePayment}
          selectedAmount={self.state.selectedAmount}
          currency={item.currency}
        />
      );
    });

    const { donate, message } = this.props;

    return (
      <div>
        <Title>Tamboon React</Title>
        <Subtitle>All donations: { donate }</Subtitle>
        <Message show={message ? 'inline-block' : 'none'}>
          {message}
        </Message>
        <Container>
          { cards }
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    donate: state.donations,
    message: state.message,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDonation:(data) => dispatch(actions.updateTotalDonate(data)),
    handlePayment: ( id, selectedAmount, currency) => dispatch(actions.handlePay( id, selectedAmount, currency)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
