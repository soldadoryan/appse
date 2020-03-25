import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(0);
  return () => setValue(value => ++value);
}