import React from 'react';

function Row({ label, children, className }) {
  return (
    <div className={className || 'flex items-center'}>
      <div className={`col-5 fs-16 bold`}>{label}</div>
      <div className={'col-7'}>{children}</div>
    </div>
  );
}

export default Row;
