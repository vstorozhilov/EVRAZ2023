import React, { useEffect } from 'react';

const formatNumber = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
}).format;

export default function TooltipTemplate(info) {

  
  let logs = info.point.data;
  let features = Object.keys(logs).slice(1,);
  let values = Object.values(logs).slice(1,);
  
  let feature = features[values.indexOf(info.value)];


  return (
    <div className="state-tooltip">
      <div className="population">
        <span className="caption">Момент времени</span>: {info.argument}
      </div>
      <div className="population">
        <span className="caption">Показатель</span>: {feature}
      </div>
      <div>
        <span className="caption">Значение</span>: <span className="area-km">{info.value}</span>
      </div>
    </div>
  );
}