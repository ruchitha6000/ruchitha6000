import Alert from './Alert';
import useAlert from '../hooks/useAlert';

const AlertPopup = () => {
  const { text, type } = useAlert();

  if (text && type) {
    return (
      <Alert
        severity={type}>
        {text}
      </Alert>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;
