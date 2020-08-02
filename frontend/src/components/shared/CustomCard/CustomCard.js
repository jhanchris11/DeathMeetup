import React from "react";
import { Card } from 'antd';

import './CustomCardStyle.scss';

const CustomCard = ({ headerCard, stylesCustom, children }) => {
  return (
    <Card title={headerCard} style={stylesCustom}>
      {children}
    </Card>
  );
};

export default CustomCard;
