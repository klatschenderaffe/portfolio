import Title from '../components/Title/Title';
import React from 'react';
import Impressum from '../components/Impressum/Impressum.jsx';
import BackButton from '../components/BackButton/BackButton.jsx';

function ImpressumPage() {
  return (
    <div>
      <BackButton />
      <Title title="Impressum" subtitle="Nicht gewerblich genutzt" />
      <Impressum />
    </div>
  );
}

export default ImpressumPage;
