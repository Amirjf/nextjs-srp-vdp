import React, { FunctionComponent, ReactNode } from 'react';
import Select, { StylesConfig } from 'react-select';

const selectStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    minWidth: 240,
    margin: 8,
    display: 'none',
  }),
  menu: () => ({
    boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)',
    minWidth: 240,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'var(--mainColor)' : 'white',
    color: state.isSelected ? 'white' : 'black',
    ':hover': {
      background: 'var(--mainColor)',
      color: '#fff',
    },
  }),
};

const CustomDropdown = ({
  options,
  value,
  onChange,
  element,
  isOpen,
  onClose,
}: any) => {
  return (
    <Dropdown isOpen={isOpen} onClose={onClose} target={element}>
      <Select
        autoFocus
        backspaceRemovesValue={false}
        components={{ DropdownIndicator, IndicatorSeparator: null }}
        controlShouldRenderValue={false}
        hideSelectedOptions={false}
        isClearable={false}
        menuIsOpen
        onChange={onChange}
        options={options}
        styles={selectStyles}
        tabSelectsValue={false}
        value={value}
      />
    </Dropdown>
  );
};

export default CustomDropdown;

const Menu = (props: JSX.IntrinsicElements['div']) => {
  const shadow = 'hsla(218, 50%, 10%, 0.1)';
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
        marginTop: 8,
        position: 'absolute',
        zIndex: 9999,
        right: 0,
      }}
      {...props}
    />
  );
};

const Dropdown: FunctionComponent<DropdownProps> = ({
  children,
  isOpen,
  target,
  onClose,
}) => (
  <div style={{ position: 'relative' }}>
    {target}
    {isOpen ? <Menu>{children}</Menu> : null}
    {isOpen ? <Blanket onClick={onClose} /> : null}
  </div>
);

interface DropdownProps {
  children?: React.ReactNode;
  isOpen: boolean;
  target: ReactNode;
  onClose: () => void;
}
const Blanket = (props: JSX.IntrinsicElements['div']) => (
  <div
    style={{
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1,
    }}
    {...props}
  />
);
const Svg = (p: JSX.IntrinsicElements['svg']) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    focusable="false"
    role="presentation"
    {...p}
  />
);
const DropdownIndicator = () => (
  <div style={{ color: 'blue', height: 24, width: 32 }}>
    <Svg>
      <path
        d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </Svg>
  </div>
);
