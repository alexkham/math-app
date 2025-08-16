import React from 'react';
import Link from 'next/link';

function GoHomeButton({className}) {
  return (
    <Link href="/">
     <button className={className}>Home</button>
    </Link>
  );
}

export default GoHomeButton;
