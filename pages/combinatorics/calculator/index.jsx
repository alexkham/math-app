import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import CombinatoricsCalculator from '@/app/components/calculators/combinatorics/CombinatoricsCalculator'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import '../../pages.css'


 export async function getStaticProps(){
      const explanationsMapping = {
  PermutationFull: {
    formula: '$P(n) = n!$',
    description: 'Calculate the number of ways to arrange $n$ distinct objects in a sequence.',
    example: 'How many ways can you arrange 5 people in a line? $5! = 120$ ways',
    reasoning: `For the first position, you have $n$ choices. For the second position, you have $(n-1)$ choices, and so on. This gives us $n \\times (n-1) \\times (n-2) \\times \\cdots \\times 1 = n!$
    
    Read more about [full permutations](!/combinatorics/permutations#full) .
    `,
  },
  
  PermutationWithIdentical: {
    formula: '$\\frac{n!}{n_1! \\times n_2! \\times \\cdots \\times n_k!}$',
    description: 'Calculate arrangements of $n$ objects where some objects are identical. $n_1, n_2, \\ldots, n_k$ are the counts of each type of identical object.',
    example: 'Arrange letters in "BOOK":\\n• Total: 4 letters\\n• B appears 1 time\\n• O appears 2 times\\n• K appears 1 time\\n• Result: $\\frac{4!}{1! \\times 2! \\times 1!} = \\frac{24}{2} = 12$ arrangements',
    reasoning: `We start with $n!$ total arrangements, then divide by the factorial of each repetition count to account for identical objects that don\'t create new arrangements when swapped.
    
    Read more about [permutations with identical items](!/combinatorics/permutations#identical).
    `,
  },

  PermutationWithoutRepetition: {
    formula: `$P(n,r) = \\frac{n!}{(n-r)!}$`,
    description: 'Calculate the number of ways to pick $r$ different items from $n$ items where order matters. Each selection creates a different arrangement.',
    example: 'Selecting and arranging podium finishers (1st, 2nd, 3rd) from 5 runners: $P(5,3) = \\frac{5!}{(5-3)!} = \\frac{120}{2} = 60$ arrangements',
    reasoning: `We start with $n!$ total arrangements, then divide by $(n-r)!$ to account for the remaining items we don\'t select. This gives us only the arrangements of the $r$ selected items in their specific positions.
    
    Read more about [partial permutations](!/combinatorics/permutations#without).
    `,
  },

  PermutationWithRepetition: {
    formula: '$P(n,r) = n^r$',
    description: 'Calculate the number of ways to arrange $r$ positions using $n$ items where each item can be used multiple times.',
    example: 'Creating a 4-digit PIN using digits 0-9: $10^4 = 10,000$ possible PINs (each digit can be any of the 10 options)',
    reasoning: `For each of the $r$ positions, you have $n$ choices (since repetition is allowed). This gives us $n \\times n \\times \\cdots \\times n$ .
    ($r$ times) = $n^r$.      
    
    Read more about permutations [with repetitions](!/combinatorics/permutations#with).`,
  },

  CircularPermutation: {
 formula: '$P_{circular}(n) = (n-1)!$',
 description: 'Calculate the number of ways to arrange $n$ distinct objects in a circle. In circular arrangements, rotations are considered identical.',
 example: 'How many ways can 6 people sit around a circular table? $(6-1)! = 5! = 120$ ways',
 reasoning: `In a circle, we fix one object to eliminate rotational symmetry. This leaves $(n-1)$ objects to arrange in $(n-1)!$ ways. All rotations of a linear arrangement represent the same circular arrangement.
 
 Read more about [circular permutations](!/combinatorics/permutations#circular)
 `,
},
Combination: {
 formula: '$C(n,r) = \\frac{n!}{r! \\times (n-r)!}$',
 description: 'Calculate the number of ways to pick $r$ different items from $n$ items where order doesn\'t matter. Each selection is a unique combination.',
 example: 'Selecting a 3-person committee from 5 people: $C(5,3) = \\frac{5!}{3! \\times 2!} = \\frac{120}{6 \\times 2} = 10$ combinations',
 reasoning: 'We start with $n!$ arrangements, divide by $r!$ to remove order within selected items, and divide by $(n-r)!$ to remove arrangements of unselected items. This leaves only unique selections.'
},

PartitionIntoGroups: {
 formula: '$\\binom{n}{n_1,n_2,\\ldots,n_r} = \\frac{n!}{n_1! \\times n_2! \\times \\cdots \\times n_r!}$',
 description: 'Calculate the number of ways to distribute $n$ distinct items into $r$ labeled groups of specified sizes. The sum of group sizes must equal $n$.',
 example: 'Dividing 10 students into 3 labeled groups (classroom: 3, playground: 4, gym: 3): $\\binom{10}{3,4,3} = \\frac{10!}{3! \\times 4! \\times 3!} = 4,200$ ways',
 reasoning: 'We start with $n!$ arrangements, then divide by each group size factorial to account for arrangements within each group being identical. This leaves only the distinct ways to form the specified groups.'
},
WeakComposition: {
  formula: '$C(n+r-1, r-1) = \\frac{(n+r-1)!}{(r-1)! \\times n!}$',
  description: 'Calculate the number of ways to distribute $n$ identical items into $r$ cells where empty cells are allowed. This is equivalent to finding non-negative integer solutions.',
  example: 'Distributing 5 identical candies among 3 children (some can get none): $C(5+3-1, 3-1) = C(7,2) = 21$ compositions',
  reasoning: 'We use the stars and bars method: arrange $n$ identical items and $r-1$ dividers. This gives $C(n+r-1, r-1)$ ways to choose positions for dividers among $n+r-1$ total positions.'
},
StrongComposition: {
  formula: '$C(n-1, r-1) = \\frac{(n-1)!}{(r-1)! \\times (n-r)!}$',
  description: 'Calculate the number of ways to distribute $n$ identical items into $r$ cells where no cells can be empty. Each cell must receive at least one item.',
  example: 'Distributing 5 identical tasks among 3 team members (everyone gets at least one): $C(5-1, 3-1) = C(4,2) = 6$ compositions',
  reasoning: 'We first give one item to each cell, leaving $n-r$ items to distribute freely. Then we use stars and bars with $n-r$ items and $r-1$ dividers, giving $C(n-1, r-1)$ arrangements.'
},
DistributionIntoCells: {
  formula: '$r^n$',
  description: 'Calculate the number of ways to distribute $n$ different items into $r$ numbered cells. Each item can go into any cell.',
  example: 'Assigning 3 different tasks to 2 specific days of the week: $2^3 = 8$ distributions',
  reasoning: 'Each of the $n$ items has $r$ choices of cells to go into. Since items are different and cells are numbered, each item independently chooses from $r$ options, giving $r \\times r \\times ... \\times r = r^n$ total distributions.'
}
}


   return {
      props:{
         explanationsMapping,
        
       }
    }
   }

export default function CombinatoricsCalculatorPage({explanationsMapping}) {

     const searchParams = useSearchParams()
      const scenario = searchParams.get('scenario')
      const initialScenario = scenario ? parseInt(scenario) : 1


  return (
   <>
   <GenericNavbar/>
   <br/>
   <br/>
   <br/>
   <br/>
    <OperaSidebar 
         side='right'
         // topOffset='65px' 
         sidebarWidth='45px'
         panelWidth='300px'
         
         iconColor='white'
         panelBackgroundColor='#f2f2f2'/> 
   <Breadcrumb/>
   <h1 className='title' style={{marginTop:'-20px', marginBottom:'-20px'}}>Combinatorics Calculator</h1>
   <CombinatoricsCalculator 
   explanations={explanationsMapping}
   initialScenario={initialScenario}/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <ScrollUpButton/>
   
   
   
   </>
  )
}
