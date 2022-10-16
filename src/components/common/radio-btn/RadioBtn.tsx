import {
  RadioBtnContainer,
  RadioButtonLabel,
  RadioInput,
} from './styles/radioBtn.styles';

type Props = {
  id: string;
  value: string | number;
  name: string;
  label?: string;
  onChange?: any;
  required?: boolean;
  register?: any;
  rules?: any;
  size: 'sm' | 'md' | 'lg';
};

const RadioBtn = (props: Props) => {
  const { label, register, rules, size } = props;
  return (
    <RadioBtnContainer>
      <RadioInput
        type="radio"
        {...register(props.name, { ...rules })}
        {...props}
      />
      <RadioButtonLabel size={size} htmlFor={props.id}>
        {label}
      </RadioButtonLabel>
    </RadioBtnContainer>
  );
};

RadioBtn.defaultProps = {
  size: 'md',
};

export default RadioBtn;
