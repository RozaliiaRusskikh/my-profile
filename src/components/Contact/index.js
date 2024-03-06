import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [statusMessage, setStatusMessage] = useState('');
  const [isErorr, setIsError] = useState(false);
  const refForm = useRef();
  const myPosition = [37.62517, -122.41431];
  const successfulMessage = 'Your message was successfully sent!';
  const errorMessage = 'Failed to send the message, please try again.';

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lunxfnb',
        'template_mrfzbrp4',
        refForm.current,
        'VJYzamB_WYcgzqaMW'
      )
      .then(
        () => {
          setIsError(false);
          setStatusMessage(successfulMessage);
          refForm.current.reset();
        },
        () => {
          setStatusMessage(errorMessage);
          setIsError(true);
        }
      );

    setTimeout(() => {
      setStatusMessage('');
    }, 3500);
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={[letterClass]}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            ></AnimatedLetters>
          </h1>
          <p>
            I am interested in web development opportunities and will be happy
            to receive a message from you. Please don't hesitate to contact me
            using the form below:
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  ></input>
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  ></input>
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  ></input>
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    type="text"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                  ></input>
                </li>
              </ul>
            </form>
            <p className={isErorr ? 'error' : 'success'}>{statusMessage}</p>
          </div>
        </div>
        <div className="info-map">
          Roza Russkikh,
          <br />
          United States,
          <br />
          San Bruno, California
          <br />
          <span>rrrusskikh@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={myPosition} zoom={14}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={myPosition}>
              <Popup>
                I live here. Come over for a cup of coffee &nbsp;
                <FontAwesomeIcon icon={faCoffee} color="#d2042d" />
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Contact;
