import Input from "../authForm/input";
import Switch from "../authForm/Switch";


const FormikControl = (props) => {
  switch (props.control) {
    case 'input':
      return <Input {...props} />;
    case 'Switch':
      return <Switch {...props} />;
    default:
      return null;
  }
};

export default FormikControl;