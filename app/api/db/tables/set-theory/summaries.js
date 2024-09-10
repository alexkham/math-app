import styles from '../../../../components/page-components/content-components/ContentBlocks.module.css'

const summaries=[

    {
      "title":"Set Notation Summary",
      "category":"Terminology and Basic Concepts",
      "table":`
      <div class="${styles.tableContainer}" id='set-notation-summary'>
         <h2 class="${styles.tableTitle}">Set Notation Summary</h2>
         <table class="${styles.summaryTable}">
           <thead>
             <tr>
               <th class="${styles.conceptColumn}">Concept</th>
               <th class="${styles.notationColumn}">Symbol/Notation</th>
               <th class="${styles.explanationColumn}">Explanation</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td>Enumerative Set Notation</td>
               <td>{1, 2, 3}, {a, b, c}</td>
               <td>Lists all elements of a set within curly braces.</td>
             </tr>
             <tr>
               <td>Enumerative Set with Ellipsis</td>
               <td>{1, 2, 3, ...}, {a, b, c, d, ...}</td>
               <td>Lists some elements and uses '...' to indicate continuation, useful for large or infinite sets.</td>
             </tr>
             <tr>
               <td>Descriptive Set Notation</td>
               <td>{x | x is a positive even number}</td>
               <td>Defines a set by specifying a condition that elements must satisfy.</td>
             </tr>
             <tr>
               <td>Empty Set</td>
               <td>∅, {}</td>
               <td>Represents a set with no elements.</td>
             </tr>
             <tr>
               <td>Belongs to</td>
               <td>∈</td>
               <td>'x ∈ A' means 'x' is an element of set 'A'.</td>
             </tr>
             <tr>
               <td>Does not belong to</td>
               <td>∉</td>
               <td>'y ∉ B' means 'y' is not an element of set 'B'.</td>
             </tr>
             <tr>
               <td>Subset</td>
               <td>⊆</td>
               <td>'A ⊆ B' means 'A' is a subset of 'B', meaning all elements of 'A' are in 'B'.</td>
             </tr>
             <tr>
               <td>Proper Subset</td>
               <td>⊂</td>
               <td>'A ⊂ B' means 'A' is a proper subset of 'B', meaning 'A' is a subset of 'B' but not equal to 'B'.</td>
             </tr>
             <tr>
               <td>Superset</td>
               <td>⊇</td>
               <td>'B ⊇ A' means 'B' is a superset of 'A', meaning all elements of 'A' are in 'B'.</td>
             </tr>
             <tr>
               <td>Proper Superset</td>
               <td>⊃</td>
               <td>'B ⊃ A' means 'B' is a proper superset of 'A', meaning 'B' contains all elements of 'A' but is not equal to 'A'.</td>
             </tr>
           </tbody>
         </table>
       </div>      
      `,
      
      "link":"www.webdevdata.net"
    },

    {

        "title":"Cardinality and Types of Sets",
        "category":"Terminology and Basic Concepts",

      "table":`
      <div class="${styles.tableContainer}" id='cardinality-summary'>
      <h2 class="${styles.tableTitle}">Cardinality and Types of Sets Summary</h2>
      <table class="${styles.summaryTable}">
        <thead>
          <tr>
            <th className={styles.conceptColumn}>Concept</th>
            <th className={styles.notationColumn}>Notation</th>
            <th className={styles.explanationColumn}>Explanation</th>
            <th className={styles.examplesColumn}>Examples</th>
          </tr>
        </thead>
        <tbody>
            <tr>
            <td>Cardinality</td>
            <td>|A|, card(A)</td>
            <td>The size or number of elements in a set</td>
            <td>|A| = 3 for A = {1, 2, 3}, |B| = 4 for B = {1, 'apple', 3.14, True}</td>
          </tr>
          <tr>
            <td>Finite Sets</td>
            <td>Regular Set Notation (enumerative or descriptive)</td>
            <td>Sets with a countable number of elements</td>
            <td>{Monday, ..., Sunday}, {A, ..., Z}</td>
          </tr>
          <tr>
            <td>Infinite Sets</td>
            <td>Regular Set Notation (enumerative or descriptive)</td>
            <td>Sets with an uncountable number of elements</td>
            <td>{x | x is a positive even number}, {1, 2, 3, ...}</td>
          </tr>
          <tr>
            <td>Empty Set</td>
            <td>∅ or {}</td>
            <td>A set containing no elements</td>
            <td>∅, {}</td>
          </tr>
          <tr>
            <td>Universal Set</td>
            <td>U or ξ</td>
            <td>Set containing all objects within a specific context</td>
            <td>U = {Monday, ..., Sunday} for days of the week, U = {A, ..., Z} for English alphabet</td>
          </tr>
        </tbody>
      </table>
      </div>      
      `,
    

    },

    {


        "title":"Relationships between sets",
        "category":"Terminology and Basic Concepts",
      "table":`
      <div class="${styles.tableContainer}" id="relationships-between-sets-summary">
      <h2 class="${styles.tableTitle}">Relationships Between Sets Summary</h2>
      <table class="${styles.summaryTable}">
        <thead>
          <tr>
            <th className={styles.conceptColumn}>Concept</th>
            <th className={styles.notationColumn}>Notation</th>
            <th className={styles.explanationColumn}>Explanation</th>
            <th className={styles.examplesColumn}>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Equality of Sets</td>
            <td>=</td>
            <td>Two sets are equal if they contain exactly the same elements.</td>
            <td>A = {1, 2, 3}, B = {3, 1, 2}; A = B</td>
          </tr>
          <tr>
            <td>Inequality of Sets</td>
            <td>≠</td>
            <td>Two sets are unequal if at least one element is different between the sets.</td>
            <td>A = {1, 2, 3}, C = {4, 5, 6}; A ≠ C</td>
          </tr>
          <tr>
            <td>Basic Subsets</td>
            <td>⊆</td>
            <td>A subset is a set where every element of the subset is also an element of another set.</td>
            <td>A = {1, 2}, B = {1, 2, 3, 4}; A ⊆ B</td>
          </tr>
          <tr>
            <td>Proper Subsets</td>
            <td>⊂</td>
            <td>A proper subset of a set is not equal to the original set, containing fewer elements.</td>
            <td>A = {1, 2}, B = {1, 2, 3, 4}; A ⊂ B</td>
          </tr>
          <tr>
            <td>Basic Supersets</td>
            <td>⊇</td>
            <td>A superset includes every element of another set.</td>
            <td>A = {1, 2, 3, 4}, B = {1, 2}; A ⊇ B</td>
          </tr>
          <tr>
            <td>Proper Supersets</td>
            <td>⊃</td>
            <td>A proper superset contains all elements of the subset plus additional elements.</td>
            <td>A = {1, 2, 3, 4}, B = {1, 2}; A ⊃ B</td>
          </tr>
          <tr>
            <td>Disjoint Sets</td>
            <td>N/A</td>
            <td>Two sets are disjoint if they have no elements in common.</td>
            <td>A = {1, 2, 3}, C = {4, 5, 6}; A and C are disjoint</td>
          </tr>
          <tr>
            <td>Complement</td>
            <td>A<sup>c</sup></td>
            <td>The set of all elements not in the given set, relative to a universal set.</td>
            <td>U = {1, 2, 3, 4, 5}, A = {1, 2, 3}; A<sup>c</sup> = {4, 5}</td>
          </tr>
        </tbody>
      </table>
    </div>          
      `

    }
,

    {

         "title":"Summary of Operations on Sets",
        "description":"",
        "category":"Terminology and Basic Concepts",

        "table":`        
        <div class="${styles.tableContainer}" id="operations-on-sets-summary">
        <h2 class="${styles.tableTitle}">Operations on Sets Summary</h2>
        <table class="${styles.summaryTable}">
          <thead>
            <tr>
              <th className="${styles.conceptColumn}">Concept</th>
              <th className="${styles.notationColumn}">Notation</th>
              <th className="${styles.explanationColumn}">Explanation</th>
              <th className="${styles.examplesColumn}">Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Intersection</td>
              <td>A ∩ B</td>
              <td>The set of elements that are common to both sets A and B.</td>
              <td>If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A ∩ B = {3, 4}.</td>
            </tr>
            <tr>
              <td>Union</td>
              <td>A ∪ B</td>
              <td>The set of all elements that are in either set A or set B, or in both.</td>
              <td>If A = {1, 2, 3} and B = {4, 5, 3}, then A ∪ B = {1, 2, 3, 4, 5}.</td>
            </tr>
            <tr>
              <td>Difference</td>
              <td>A - B</td>
              <td>The set of elements that are in set A but not in set B.</td>
              <td>If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A - B = {1, 2}.</td>
            </tr>
            <tr>
              <td>Symmetric Difference</td>
              <td>A Δ B</td>
              <td>The set of elements that are in either of the sets A or B, but not in both.</td>
              <td>If A = {1, 2, 3} and B = {3, 4, 5}, then A Δ B = {1, 2, 4, 5}.</td>
            </tr>
          </tbody>
        </table>
      </div>            
        
        `


    },

  
    {

      
      "title":"Summary of Set Operations Laws",
      "description":"",
      "category":"Set Operations",

    "table":`
    <div class="${styles.tableContainer}" id='set-laws-summary'>
    <h2 class="${styles.tableTitle}">Summary of Foundational Laws in Set Theory</h2>
    <table class="${styles.summaryTable}">
      <thead>
        <tr>
          <th class="${styles.conceptColumn}">Law</th>
          <th class="${styles.notationColumn}">Formulation</th>
          <th class="${styles.explanationColumn}">Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">Commutative Law</td>
          <td>A ∪ B = B ∪ A</td>
          <td>Order of sets does not change the result for unions.</td>
        </tr>
        <tr>
          <td>A ∩ B = B ∩ A</td>
          <td>Order of sets does not change the result for intersections.</td>
        </tr>
        <tr>
          <td rowspan="2">Associative Law</td>
          <td>(A ∪ B) ∪ C = A ∪ (B ∪ C)</td>
          <td>Grouping of sets does not change the result for unions.</td>
        </tr>
        <tr>
          <td>(A ∩ B) ∩ C = A ∩ (B ∩ C)</td>
          <td>Grouping of sets does not change the result for intersections.</td>
        </tr>
        <tr>
          <td rowspan="2">Distributive Law</td>
          <td>A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</td>
          <td>Union distributes over intersection.</td>
        </tr>
        <tr>
          <td>A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</td>
          <td>Intersection distributes over union.</td>
        </tr>
        <tr>
          <td rowspan="2">Identity Law</td>
          <td>A ∪ ∅ = A</td>
          <td>Union with the empty set leaves the set unchanged.</td>
        </tr>
        <tr>
          <td>A ∩ U = A</td>
          <td>Intersection with the universal set leaves the set unchanged.</td>
        </tr>
        <tr>
          <td rowspan="2">Idempotent Law</td>
          <td>A ∪ A = A</td>
          <td>A union of a set with itself is the set itself.</td>
        </tr>
        <tr>
          <td>A ∩ A = A</td>
          <td>An intersection of a set with itself is the set itself.</td>
        </tr>
        <tr>
          <td rowspan="2">Complement Law</td>
          <td>A ∪ A<sup>c</sup> = U</td>
          <td>Union of a set and its complement is the universal set.</td>
        </tr>
        <tr>
          <td>A ∩ A<sup>c</sup> = ∅</td>
          <td>Intersection of a set and its complement is the empty set.</td>
        </tr>
        <tr>
          <td rowspan="2">De Morgan's Laws</td>
          <td>(A ∪ B)<sup>c</sup> = A<sup>c</sup> ∩ B<sup>c</sup></td>
          <td>The complement of a union of two sets is the intersection of their complements.</td>
        </tr>
        <tr>
          <td>(A ∩ B)<sup>c</sup> = A<sup>c</sup> ∪ B<sup>c</sup></td>
          <td>The complement of an intersection of two sets is the union of their complements.</td>
        </tr>
        <tr>
          <td>Involution Law</td>
          <td>(A<sup>c</sup>)<sup>c</sup> = A</td>
          <td>Complement of the complement of a set is the set itself.</td>
        </tr>
      </tbody>
    </table>
  </div>
    `

    }
   






]

export default summaries;