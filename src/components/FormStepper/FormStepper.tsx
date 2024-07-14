import React, { ChangeEvent } from "react";
import samplOil from "../../assets/images/sampl-oil.png";
import FormStepperHeader from "./FormStepperHeader";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AppleIcon from "@mui/icons-material/Apple";
import visaLogo from "../../assets/images/visa-logo.png";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import "./FormStepperStyles.scss";

type FormStepperProps = {
  onStepChange: Function;
  step: number;
};

const FormStepper: React.FC<FormStepperProps> = ({ onStepChange, step }) => {
  const [data, setData] = React.useState({
    fullname: "",
    email: "",
    streetaddress: "",
    towncity: "",
    postcode: "",

    multivitamins: false,
    vitamind: false,
    collegen: false,
    omega3: false,
    billingaddressmatch: false,
    termsone: false,
    termstwo: false,
    termsthree: false,
  });

  //handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _tempObject = { ...data } as any;
    _tempObject[e.target.name] = e.target.value;
    setData(_tempObject);
  };

  //handle checkbox for muliti vitamins
  const handleMultiVitaminChange = () => {
    const _tempObject = { ...data };
    _tempObject.multivitamins = !_tempObject.multivitamins;
    setData(_tempObject);
  };

  //handle checkbox for vitamin D
  const handleVitaminDChange = () => {
    const _tempObject = { ...data };
    _tempObject.vitamind = !_tempObject.vitamind;
    setData(_tempObject);
  };

  //handle checkbox for Collegen
  const handleCollegenChange = () => {
    const _tempObject = { ...data };
    _tempObject.collegen = !_tempObject.collegen;
    setData(_tempObject);
  };

  //handle checkbox for Omega 3
  const handleOmega3Change = () => {
    const _tempObject = { ...data };
    _tempObject.omega3 = !_tempObject.omega3;
    setData(_tempObject);
  };

  //handle checkbox for Billing address matching shipping
  const handleBillingAddressChange = () => {
    const _tempObject = { ...data };
    _tempObject.billingaddressmatch = !_tempObject.billingaddressmatch;
    setData(_tempObject);
  };

  //handle checkbox for Terms one
  const handleTermsOneChange = () => {
    const _tempObject = { ...data };
    _tempObject.termsone = !_tempObject.termsone;
    setData(_tempObject);
  };

  //handle checkbox for Terms two
  const handleTermsTwoChange = () => {
    const _tempObject = { ...data };
    _tempObject.termstwo = !_tempObject.termstwo;
    setData(_tempObject);
  };

  //handle checkbox for Terms three
  const handleTermsThreeChange = () => {
    const _tempObject = { ...data };
    _tempObject.termsthree = !_tempObject.termsthree;
    setData(_tempObject);
  };

  const viewOrder = () => {
    console.log("view order");
  };

  return (
    <div className="form-stepper-container">
      <FormStepperHeader step={step} />

      <div className="form-stepper-body">
        {/* step 1 */}
        {step === 1 && (
          <div className="form-stepper">
            <div className="step-panel">
              <div>
                <h3>
                  The sample's on us, <br /> just cover the postage for only
                  £1.79
                </h3>
                <div className="step-panel-details">
                  <div>
                    <p className="step-details-small">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eos corrupti fuga suscipit adipisci nobis quaerat magnam
                      exercitationem earum labore error dicta voluptas?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-panel-one">
              <div className="step-panel-header-one">
                <h3>What vitamins do you currently buy</h3>
                <p className="step-panel-small">Required</p>
              </div>
              <div className="check-group">
                <label htmlFor="multivitamins">Multi-vitamins</label>
                <input
                  type="checkbox"
                  name="multivitamins"
                  checked={data.multivitamins}
                  onChange={handleMultiVitaminChange}
                />
              </div>

              <div className="check-group">
                <label htmlFor="vitamind">Vitamin D</label>
                <input
                  type="checkbox"
                  name="vitamind"
                  checked={data.vitamind}
                  onChange={handleVitaminDChange}
                />
              </div>

              <div className="check-group">
                <label htmlFor="vitamind">Collegen</label>
                <input
                  type="checkbox"
                  name="collegen"
                  checked={data.collegen}
                  onChange={handleCollegenChange}
                />
              </div>

              <div className="check-group">
                <label htmlFor="vitamind">Omega 3</label>
                <input
                  type="checkbox"
                  name="omega3"
                  checked={data.omega3}
                  onChange={handleOmega3Change}
                />
              </div>
            </div>
          </div>
        )}

        {/* step 2 */}
        {step === 2 && (
          <div className="step-panel">
            <p className="step-head-small">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              corrupti fuga suscipit adipisci nobis quaerat.
            </p>
            <h3>About you</h3>

            <div className="input-group">
              <input
                value={data.fullname}
                placeholder="Full Name"
                type="text"
                name="fullname"
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                value={data.email}
                placeholder="Email address*"
                type="text"
                required
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                value={data.streetaddress}
                placeholder="Street address*"
                type="text"
                required
                name="streetaddress"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                value={data.towncity}
                placeholder="Town/City*"
                type="text"
                required
                name="towncity"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                value={data.postcode}
                placeholder="Postcode*"
                type="text"
                required
                name="postcode"
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {/* step 3 */}
        {step === 3 && (
          <div className="form-stepper">
            <div className="step-panel">
              <div>
                <h3>About you</h3>
                <div className="step-panel-details">
                  <div>
                    <p className="step-details-small">{data.fullname}</p>
                    <p className="step-details-small">{data.email}</p>
                  </div>
                  <button
                    className="step-panel-small link"
                    onClick={() => onStepChange(step - 1)}
                  >
                    Edit
                  </button>
                </div>
              </div>
              <hr className="step-panel-line" />
              <div>
                <h3>Shipping</h3>
                <div className="step-panel-details">
                  <div>
                    <p className="step-details-small">{data.streetaddress}</p>
                    <p className="step-details-small">{data.towncity}</p>
                    <p className="step-details-small">{data.postcode}</p>
                  </div>
                  <button
                    className="step-panel-small link"
                    onClick={() => onStepChange(step - 1)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>

            <div className="step-panel top-space">
              <h3>Payment method</h3>
              <div className="step-panel-details">
                <div>
                  <p className="step-details-small bold">
                    Subtotal - <span className="highlight">Free</span>
                  </p>
                  <p className="step-details-small bold">Tax - </p>
                  <p className="step-details-small bold">
                    Shipping - <span className="light">£1.79</span>
                  </p>
                </div>
              </div>
              <div className="total-panel">
                <p className="step-details-small bold">
                  Total - <span className="highlight">£1.79</span>
                </p>
                <div></div>
              </div>
              <button className="apple-button">
                <AppleIcon className="apple-logo" />
                <p className="apple-pay">Pay</p>
              </button>
              <div className="step-details-small center">
                Or pay using using card
              </div>
              <div className="payment-block">
                <div className="payment-input-panel">
                  <p className="payment-text">1234123412341234</p>
                  <img src={visaLogo} alt="visa logo" className="visa-logo" />
                </div>
                <div className="payment-input-flex">
                  <div className="payment-input-panel">
                    <p className="payment-text">EXP</p>
                  </div>
                  <div className="payment-input-panel">
                    <p className="payment-text">CSV</p>
                    <CreditCardIcon className="card-icon" />
                  </div>
                </div>

                <div className="billing-flex">
                  <input
                    type="checkbox"
                    name="billingaddressmatch"
                    checked={data.billingaddressmatch}
                    onChange={handleBillingAddressChange}
                  />
                  <label
                    htmlFor="billingaddressmatch"
                    className="step-details-small center"
                  >
                    Billing address is the same as shipping*.
                  </label>
                </div>
                <p className="payment-sign-off">
                  You will not be charged until your smaple request has been
                  approved.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* step 4 */}
      {step === 4 && (
        <div className="form-stepper">
          <div className="step-panel">
            <div>
              <h3>Your order</h3>
              <div className="step-panel-details range-left">
                <img
                  src={samplOil}
                  alt="organic gem oil"
                  className="sampl-product-small"
                />
                <div className="order-text-panel">
                  <p className="step-panel-small bold">1 X GEM OIL</p>
                  <p className="step-panel-small">Organic edition</p>
                </div>
              </div>
            </div>
            <hr className="step-panel-line" />
            <div className="step-panel-details">
              <div>
                <h3>About you</h3>
                <p className="step-details-small">{data.fullname}</p>
                <p className="step-details-small">{data.email}</p>
              </div>
              <div>
                <button
                  className="step-panel-small link"
                  onClick={() => onStepChange(step - 2)}
                >
                  Edit
                </button>
              </div>
            </div>
            <hr className="step-panel-line" />
            <div className="step-panel-details">
              <div>
                <h3>Shipping</h3>
                <p className="step-details-small">{data.streetaddress}</p>
                <p className="step-details-small">{data.towncity}</p>
                <p className="step-details-small">{data.postcode}</p>
              </div>
              <div>
                <button
                  className="step-panel-small link"
                  onClick={() => onStepChange(step - 2)}
                >
                  Edit
                </button>
              </div>
            </div>
            <hr className="step-panel-line" />
            <div className="step-panel-details">
              <div>
                <h3>Payment details</h3>
                <p className="step-details-small bold">
                  £1.79 <span className="light">- Visa ending ****1234</span>
                </p>
              </div>
              <div>
                <button
                  className="step-panel-small link"
                  onClick={() => onStepChange(step - 1)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div className="step-panel top-space">
            <div>
              <div className="step-panel-details">
                <h3>Terms and Conditions</h3>
                <p className="step-panel-small">Required*</p>
              </div>
              <p className="step-details-small">
                Read the terms of use and privacy policy
              </p>
            </div>
            <div>
              <div className="check-group-terms">
                <label htmlFor="termsone">
                  Terms Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Quisquam blanditiis amet eveniet.
                </label>
                <input
                  type="checkbox"
                  name="termsone"
                  checked={data.termsone}
                  onChange={handleTermsOneChange}
                />
              </div>
            </div>
            <div>
              <div className="check-group-terms">
                <label htmlFor="termstwo">
                  Terms Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Quisquam blanditiis amet eveniet.
                </label>
                <input
                  type="checkbox"
                  name="termstwo"
                  checked={data.termstwo}
                  onChange={handleTermsTwoChange}
                />
              </div>
            </div>
            <div>
              <div className="check-group-terms">
                <label htmlFor="termsthree">
                  Terms Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Quisquam blanditiis amet eveniet.
                </label>
                <input
                  type="checkbox"
                  name="termsthree"
                  checked={data.termsthree}
                  onChange={handleTermsThreeChange}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* step 5 */}
      {step === 5 && (
        <div className="form-stepper">
          <div className="step-panel">
            <div className="step-panel-details">
              <h3>Thank you!</h3>
              <CheckCircleIcon className="tick" />
            </div>
            <p className="step-details-small bold">
              Thanks for your request. It's being reviewed.
            </p>
            <p className="step-details-small">
              Keep an eye on your inbox for further updates.
            </p>
            <hr className="step-panel-line" />
            <p className="step-details-small">
              You will not be charged until your sample request is approved.
            </p>
          </div>
          <div className="step-panel top-space">
            <div className="step-panel-details">
              <h3>Your order</h3>
              <button onClick={viewOrder} className="step-panel-small link">
                View
              </button>
            </div>
            <div className="step-panel-details range-left">
              <img
                src={samplOil}
                alt="organic gem oil"
                className="sampl-product-small"
              />
              <div className="order-text-panel">
                <p className="step-panel-small bold">1 X GEM OIL</p>
                <p className="step-panel-small">Organic edition</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="stepper-action-container">
        {step === 1 ? (
          <button
            className="stepper-action-button"
            onClick={() => onStepChange(step + 1)}
          >
            GET STARTED
          </button>
        ) : step < 4 ? (
          <button
            className="stepper-action-button"
            onClick={() => onStepChange(step + 1)}
          >
            CONTINUE
          </button>
        ) : (
          ""
        )}

        {step === 4 ? (
          <button
            className="stepper-action-button"
            onClick={() => onStepChange(step + 1)}
          >
            CONFIRM ORDER
          </button>
        ) : step === 5 ? (
          ""
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FormStepper;
