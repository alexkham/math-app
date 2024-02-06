'use server'
// Use "use server" to mark this as a server component in Next.js
export async function fetchVennDiagramData() {
    // Example server-side logic
    const sets = [
      { sets: ['A'], size: 12 },
      { sets: ['B'], size: 12 },
      { sets: ['A', 'B'], size: 6 },
    ];
  
    // Simulate server-side processing or data fetching
    // Return the processed data
    return sets;
  }
  