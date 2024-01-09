import React from 'react';


export async function getServerSideProps(context) {
  const { thing, page } = context.params;

  // Decode URI components and provide default values if necessary
  const value1 = thing ? decodeURI(thing) : null;
  const value2 = page ? decodeURI(page) : null;

  return { props: { value1, value2 } };
}


export default function Page({ value1, value2 }) {
  return (
    <>
      <div>Dynamic Page</div>
      <div>Value 1: {value1}</div>
      <div>Value 2: {value2}</div>
    </>
  );
}
