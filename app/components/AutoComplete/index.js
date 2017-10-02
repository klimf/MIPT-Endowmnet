import React from 'react';
import Autocomplete from 'react-autocomplete';
import styled from 'styled-components';
import { SimpleInput } from '../Input';
import { palette, unit } from '../../utils/constants';

const autocompleteMenu = {
  borderRadius: '3px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
  background: 'rgba(255, 255, 255, 1)',
  padding: '12px 7px',
  fontSize: '90%',
  top: '100%',
  width: '100%',
  position: 'absolute',
  overflow: 'auto',
  zIndex: '20',
};

const AutoCompleteItem = styled.div`
    padding: ${unit}px ${unit * 2}px;
    display: block;
    background: ${palette.white};
    font-size: 20px;
`;

const AutoCompleteInput = (props) => {
  const { name, label } = props;
  return (
    <Autocomplete
      getItemValue={props.getItemValue}
      items={props.items}
      wrapperStyle={{
        position: 'relative',
        display: 'inline-block',
      }}
      menuStyle={autocompleteMenu}
      renderItem={(item, isHighlighted) =>
        <AutoCompleteItem style={{ background: isHighlighted ? palette.dark : palette.white }} >
          {item.label}
        </AutoCompleteItem>
    }
      value={props.value}
      onChange={props.onChange}
      onSelect={props.onSelect}
      renderInput={(propss) => <SimpleInput {...propss} placeholder={props.placeholder} name={name} label={label} />}
    />
  );
};

AutoCompleteInput.propTypes = {
  value: React.PropTypes.any,
  onChange: React.PropTypes.any.isRequired,
  onSelect: React.PropTypes.any.isRequired,
  items: React.PropTypes.any,
  getItemValue: React.PropTypes.any.isRequired,
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.any,
};
