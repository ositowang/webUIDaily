import React, { Component } from 'react';
import CardInput from '../../components/CardInput';
import CardBtn from '../../components/Button';
import CardTextarea from '../../components/CardTextarea';
import SocialLinks from '../../components/SocialLinks';
import './style.scss';

export default class CardBack extends Component {
  render() {
    return (
      <div className="card-back">
        <div className="fluid-column">
          <h1>Let's get in touch!</h1>
          <form className="card-form">
            <div className="row">
              <div className="col-xs-6">
                <CardInput
                  name="contactFirstName"
                  id="contactFirstName"
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div className="col-xs-6">
                <CardInput
                  name="contactLastName"
                  id="contactLastName"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-6">
                <CardInput
                  name="contactEmail"
                  id="contactEmail"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="col-xs-6">
                <CardInput
                  name="contactSubject"
                  id="contactSubject"
                  type="text"
                  placeholder="Subject"
                />
              </div>
            </div>

            <CardTextarea
              name="contactMessage"
              id="contactMessage"
              placeholder="Your message"
            />

            <CardBtn
              className="btn btn-primary"
              type="submit"
              value="Send message"
            />
          </form>
          <SocialLinks />
        </div>
      </div>
    );
  }
}
