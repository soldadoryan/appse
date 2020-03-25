import React from 'react';

import { WrapCustomSelect, LabelCustomSelect, CustomSelect } from './styles';

export default function CInput({ label, val, change, required, items, islabel }) {
  return (
    <WrapCustomSelect>
      <LabelCustomSelect>{label}</LabelCustomSelect>
      <CustomSelect required={required} value={val} onChange={e => change(e.target.value)}>
        <option>----------------</option>
        <option disabled></option>
        {items.map(op => (
          <option value={islabel === true ? op.label : op.id}>{op.label}</option>
        ))}
      </CustomSelect>
    </WrapCustomSelect>
  );
}
