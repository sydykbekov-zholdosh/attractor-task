import React from 'react';
import { store } from 'react-notifications-component';
import { IconButton } from '@material-ui/core';
import CopyIcon from '@material-ui/icons/FileCopy';

const duration = 10000;
const setMessage = (type, message) => {
  return store.addNotification({
    message: (
      <div>
        {message.length > 500 && (
          <IconButton
            onClick={() => {
              document
                .querySelectorAll('[class^=\'MuiDialog-container\']')
                .forEach(elem => elem.removeAttribute('tabindex'));
              const el = document.createElement('textarea');
              el.value = message;
              el.setAttribute('readonly', '');
              el.style.position = 'absolute';
              el.style.left = '-9999px';
              document.body.appendChild(el);
              el.select();
              document.execCommand('copy');
              document.body.removeChild(el);
            }}
            className="copy-message"
            size="small"
            children={<CopyIcon style={{ fontSize: 16 }} />}
            style={{ color: 'white' }}
          />
        )}
        <div className="message-body">{message}</div>
      </div>
    ),
    type: type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'bounceInRight'],
    animationOut: ['animated', 'zoomOut'],
    dismiss: {
      click: message.length <= 500,
      duration: duration,
      pauseOnHover: true,
      showIcon: true
    },
    slidingEnter: { duration: 100 },
    slidingExit: { duration: 300 }
  });
};

const Notice = {
  info: message => setMessage('info', message),
  success: message => setMessage('success', message),
  error: message => setMessage('danger', message),
  warning: message => setMessage('warning', message)
};

export default Notice;
