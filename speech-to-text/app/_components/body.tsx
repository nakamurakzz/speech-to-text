'use client'

import React, { useState } from 'react';

type Props = {
  Text: string;
};

const Home = (props: Props) => {
  const [translatedText, setTranslatedText] = useState(props.Text);


  return (
    <div>
      <h1>リアルタイム翻訳</h1>
      <p>{translatedText}</p>
    </div>
  );
};

export default Home;