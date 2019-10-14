import React from 'react';
import './Spinner.scss';

export default function Spinner() {
  return (
    <div className="spinner-border spinner-border_blue" role="status">
      <span className="sr-only">Загрузка...</span>
    </div>
  );
}