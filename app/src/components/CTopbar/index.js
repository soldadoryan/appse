import React from 'react';

import CFormSearch from '../CFormSearch';

import { MdMenu, MdNotificationsNone, MdAttachMoney } from 'react-icons/md';

import { Topbar, Button } from './styles';

export default function CTopbar() {
  return (
    <Topbar>
      <div className="leftwrap">
      </div>
      <div className="centerwrap">
        <h1>Sistema <span>Especialista</span></h1>
      </div>
      <div className="rightwrap">
      </div>
    </Topbar>
  );
}
