// pages/venn-diagram.js
import VennDiagram from "@/app/components/venn-diagrams/VennDiagram";

export async function getServerSideProps(context) {
  // Perform your server-side logic here, such as fetching data
//   const data = [
//     { sets: ['A'], size: 10 },
//     { sets: ['B'], size: 10 },
//     { sets: ['C'], size: 10 },
//     { sets: ['A', 'B','C'], size: 6 },
//   ];
const data = [
    { sets: ['A'], size: 10 },
    { sets: ['B'], size: 10 },
    { sets: ['C'], size: 10 },
    { sets: ['A', 'B'], size: 3 }, // Size of A & B intersection
    { sets: ['A', 'C'], size: 3 }, // Size of A & C intersection
    { sets: ['B', 'C'], size: 3 }, // Size of B & C intersection
    { sets: ['A', 'B', 'C'], size: 1 }, // Adjusted size of A, B & C intersection
  ];
  
  // Pass the data to the page component via props
  return { props: { data } };
}

export default function VennDiagramPage({ data }) {
  return <VennDiagram data={data} />;
}
