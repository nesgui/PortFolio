import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import personalConfig from '../personal.config';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [sendError, setSendError] = useState<string>('');
  const [sendSuccess, setSendSuccess] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const EMAILJS_SERVICE_ID = (process.env.REACT_APP_EMAILJS_SERVICE_ID as string | undefined) || 'service_txz1ghg';
  const EMAILJS_TEMPLATE_ID = (process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string | undefined) || 'template_7q4yzk7';
  const EMAILJS_PUBLIC_KEY = (process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string | undefined) || 'sIH63BznFpQ1u7Urv';

  const getMissingEmailJsKeys = () => {
    const missing: string[] = [];
    if (!EMAILJS_SERVICE_ID) missing.push('REACT_APP_EMAILJS_SERVICE_ID');
    if (!EMAILJS_TEMPLATE_ID) missing.push('REACT_APP_EMAILJS_TEMPLATE_ID');
    if (!EMAILJS_PUBLIC_KEY) missing.push('REACT_APP_EMAILJS_PUBLIC_KEY');
    return missing;
  }

  const sendEmail = async (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');
    setSendError('');
    setSendSuccess('');

    if (name !== '' && email !== '' && message !== '') {
      const missing = getMissingEmailJsKeys();
      if (missing.length > 0) {
        setSendError(`Configuration EmailJS manquante: ${missing.join(', ')}`);
        if (process.env.NODE_ENV === 'development') {
          // Aide au debug en local uniquement
          // eslint-disable-next-line no-console
          console.warn('EmailJS env keys:', {
            REACT_APP_EMAILJS_SERVICE_ID: EMAILJS_SERVICE_ID,
            REACT_APP_EMAILJS_TEMPLATE_ID: EMAILJS_TEMPLATE_ID,
            REACT_APP_EMAILJS_PUBLIC_KEY: EMAILJS_PUBLIC_KEY,
          });
        }
        return;
      }

      const templateParams = {
        name,
        email,
        message,
        title: personalConfig.siteTitle || 'Contact Form',
      };

      try {
        setIsSending(true);
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
        setSendSuccess("Message envoyé avec succès.");
        setName('');
        setEmail('');
        setMessage('');
      } catch (err) {
        setSendError("Échec de l’envoi. Veuillez réessayer.");
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{personalConfig.contactCopy.heading}</h1>
          <p>{personalConfig.contactCopy.subtext}</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label={personalConfig.contactCopy.nameLabel}
                placeholder={personalConfig.contactCopy.namePlaceholder}
                fullWidth
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Veuillez saisir votre nom" : ""}
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label={personalConfig.contactCopy.emailLabel}
                placeholder={personalConfig.contactCopy.emailPlaceholder}
                fullWidth
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Veuillez saisir votre email ou téléphone" : ""}
                variant="outlined"
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label={personalConfig.contactCopy.messageLabel}
              placeholder={personalConfig.contactCopy.messagePlaceholder}
              multiline
              rows={10}
              className="body-form"
              fullWidth
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Veuillez saisir votre message" : ""}
              variant="outlined"
            />
               <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail} disabled={isSending}>
                 {personalConfig.contactCopy.submitLabel}
               </Button>
               {sendSuccess && <p>{sendSuccess}</p>}
               {sendError && <p>{sendError}</p>}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;