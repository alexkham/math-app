
import React from 'react'
import TableOfContents from '@/app/components/page-components/table-of-contents/TableOfContents';
import MyNavbar from '@/app/components/nav-bar/MyNavbar';
import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import '../pages.css'
import ContentBlocks from '@/app/components/page-components/content-components/ContentBlocks';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import diagrams from '../../app/api/db/svg/set-theory/svg'
//import diagramsReact from '../../app/api/db/svg/set-theory/svgReact'
import styles from '../../app/components/page-components/content-components/ContentBlocks.module.css';
import ChartVenn from '@/app/components/diagrams/VennDiagram';
import StableChartVenn from '@/app/components/diagrams/StableChartVenn';
import SetTheoryVennDiagram from '@/app/components/diagrams/SetTheoryDiagram';
import SetTheoryVennDiagram2 from '@/app/components/diagrams/SetTheoryDiagram2';

export default function SetTheoryPage() {

    const tocItems = [

       {
          "title": "Definition",
        
          "subItems":[


            { "title":""}

          ],
         

          "content":`
          In mathematics, \t\t\t\t\ta set is defined as an \t\t\t**unordered collection of unique items**.
          This short yet concise definition contains everything needed to understand the essence of the object we call a 'mathematical set'.
          Let's analyze it more in depth:
          \n- **Unordered:** Two or more sets containing the same items are identical.
          \n- **Collection:** Stands for zero or more items (up to an infinite number).\n- **Unique:** Each member of the set is distinct, and no two or more identical items are present.\n
          What kinds of items or entities could be members of a mathematical set?
          \nWhatever it is, it doesn't matter.Mathematics is all about abstraction. In the abstract world, things can be of any type, so the famous 'apples and oranges' problem doesn't apply here. These entities can live together being a parts of the same set.\n
          
          "${diagrams[0].svg}"
          \t\t\t\t\t        **Diagram 1. Mathematical Sets may Contain Absolutely Any Type of Objects or Entities.**


         `,
          "svg":`
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="50" r="20" stroke="black" stroke-width="0.5" fill="red" fill-opacity="0.5"/>
          <circle cx="70" cy="50" r="20" stroke="black" stroke-width="0.5" fill="blue" fill-opacity="0.5"/>
          </svg>  

          `,
             

        },
       
        {
          "title": "Notation Used in Set Theory",

         
          
          "subItems": [
            { "title": "Enumerative Set Notation", "content": "Listing all elements of a set within curly braces, e.g., $A = \\{1, 2, 3\\}$." },
            { "title": "Descriptive Set Notation", "content": "Defining a set by a property that its members must satisfy, e.g., $B = \\{x \\mid x > 0\\}$." },
            // { "title": "Visualization of Sets", "content": "Using Venn diagrams or other visual tools to represent sets and their relationships." }
          ],

          "content":`
            **Notations For Mathematical Sets**
            It is a widespread convention to denote mathematical sets by capital English letters (for instance A,B,C ).
            Although there are no strict rules here, following the convention helps maintain standards and communication in the academic world.
            \n- **Enumerative Set Notation**
            This method is pretty straightforward and ,actually, involves listing the elements of a set within curly braces.
            There is several ways to describe mathematical sets using enumerative notation.
            **Listing all elements of a set within curly braces:**
            $𝐴$ ={1,2,3}
            $B$ ={a,b,c,d}(Not only numbers are allowed)
            $C$ ={1,a,30,'cfgd',π}(Reminds you that set can have items of different types )
            $D$ ={23,a,😊,π,A,🔺,'hello',ψ}(Mathematical set can include practically anything)
            $E$ ={ }(Empty set)
             **Listing elements we can list and then using ellipsis (...) which stands for the omitted items:**
             $𝐴$ ={1,2,3...}
             $B$ ={a,b,c,d...}
             $C$ ={1,a,b,4,7,...}
             We will discuss later in which cases it may be useful but just for the moment let's just be content with those examples.
          \n- **Descriptive Set Notation:**
           It defines a set by specifying a property that its elements must satisfy and is particularly useful when enumerative notation would not work because the sets are too large or it is difficult to list the elements directly.
           For example, **the set of all positive even numbers can be expressed as:**
           $A$={x∣x is a positive even number}, where \( \mid \) means "such that." This notation is useful for representing large or infinite sets without listing all elements explicitly.
           You can think of descriptive set notation as comprising four main parts or building blocks:
           **1.Variable (Element of the Set)**
            *May be denoted by symbols (x, y ,z)
            *Or simply by words ({number | number is a positive even number},{prime number | prime number > 10})
           **2.Vertical Bar (|)**
           Represent the phrase "such that" widely used in mathematics (or ,in another words, "where", "for which").
           Always comes between the variable and the following condition.
           **3.Condition/s (Property/s or Rule/s)**
           Defines which elements belong to the set.Must be present and have to be clear, precise and can not include logical contradictions.
           Similar to variables , may be expressed with mathematical symbols (x > 0 or 0 ≤ y ≤ 3) or with words (x is divisible by 2 , for example).
           **4.Curly Braces ({})**
           Enclose the entire set notation, indicating that the expression inside defines a set.
           Turns all we described above into formal mathematical expression.\n
          **More Basic Notations used in Set Theory**
           \n- **Empty Set (∅ or {}):**
            Represents a mathemathical set which contains no elements.
            \n- **Belongs to (∈):**
            x∈A means that x is an element of set 𝐴.
            \n- **Does not belong to (∉): **
            y∉B means that 𝑦  is not an element of set 𝐵.\n

          **Some Notations used for Concepts We did not discuss yet**
           \n- **Subset (⊆) **
           \n- **Proper Subset (⊂) **
           \n- **Superset (⊇) **
           \n- **Proper Superset (⊃) **
           
           We will discuss those and other concepts later on this page .
          
          `,
          "after": `
          <div class="${styles.tableContainer}" id='table'>
            <h2 class="${styles.tableTitle}">Section Summary</h2>
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
        `
          

          },
          {
            "title": "Cardinality and Types of Sets",
            "subItems": [
              { "title": "Cardinality", "content": "Cardinality refers to the number of elements in a set, important for comparing the size of sets." },
              { "title": "Finite Sets", "content": "A set is finite if it contains a specific number of elements that can be counted." },
              { "title": "Infinite Sets", "content": "A set is infinite if it has an uncountable number of elements, meaning it continues indefinitely." },
              { "title": "Empty Set (Null Set)", "content": "The set that contains no elements, denoted by $\\emptyset$ or $\\{\\}$." },
              // { "title": "Power Sets", "content": "The power set of a set is the set of all possible subsets, including the empty set and the set itself." },
              { "title": "Universal Set", "content": "The set that contains all the objects or elements under consideration in a particular discussion." }
            ],
            "content": `
            **Cardinality** of a mathematical set is simply its size, just the number of elements in the set.
            Cardinality is often denoted by the symbol |𝐴∣ or card (𝐴), where 𝐴 is the set.
           Sometimes symbols like #𝐴,n(𝐴), or ∥𝐴∥ may be used as well.
            If 𝐴 = {1, 2, 3}, then the cardinality of A is |𝐴| = 3 because there are three elements in the set.
            If B = {1, 'apple', 3.14, True}, then the cardinality of B is |B| = 4 because there are four elements in this set.
           
           Based on cardinality, mathematical sets in set theory are classified into groups:
           \n- **Finite sets**
            Sets having well-defined numbers of elements that may be expressed by natural numbers (positive integers).
            Examples:
            𝐴 = {1, 2, 3, 4, 5}
            B = {1, 'apple', 3.14, True}
           The set may contain millions of objects, but as long as it can be counted theoretically, this set is finite.
           \n- **Infinite sets**
           Sets that include an uncountable number of elements.
            Examples:
            A={x∣x is a positive even number}.Impossible to count all positive even numbers
            B={1,2,3...}. 
            \n- **Empty set**
            A special case of a finite mathematical set having no elements.
            Notations used for empty set :
            $E$ ={ } or $E$ =∅
           \n- **Universal set**
           A mathematical set that contains all the objects or elements under consideration  
           within a specific context or domain of discourse. 
           The universal set may be **finite**, like in those examples:
           Days of the Week. If the universal set represents the days of the week, then U = {Monday, Tuesday, Wednesday,..., Sunday}. 
           This set is finite, having 7 elements.
           
           Examples of infinite universal sets:
           Natural Numbers. If the universal set represents all natural numbers, then U = {1, 2, 3,...}. This set is infinite.
           Real Numbers. If the universal set represents all real numbers, U = R. This set is infinite, containing an uncountable number of elements.
            **The universal set is typically denoted by U or ξ.**\n
            Interestingly, despite being conceptually opposite, the universal set and the empty set share fundamental commonalities in set theory. 
            Both are extremes in the hierarchy of sets, with the universal set containing everything and the empty set containing nothing. 
            Yet they are complementary and serve as identity elements in key set operations.
           We will discuss this relation in more detail in later sections.
            Understanding the concept of the universal set, along with the empty set, has immense importance for mastering other ideas in 
           set theory, such as operations on sets, relations, and more. 
              

            `,
            "after":`
            <div class="${styles.tableContainer}" id='set-theory-summary'>
            <h2 class="${styles.tableTitle}">Section Summary</h2>
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
          
            `
          },
             
          {
            "title": "Relationships Between Sets",
            "subItems": [
              {
                "title": "Equality and Inequality of Sets",
                "subItems": [
                  {
                    "title": "Equality of Sets",
                    "content": "Two sets are equal if they contain exactly the same elements."
                  },
                  {
                    "title": "Inequality of Sets",
                    "content": "Two sets are unequal if at least one element is different between the sets."
                  }
                ]
              },
              {
                "title": "Subsets",
                "subItems": [
                  {
                    "title": "Basic Subsets",
                    "content": "A subset is a set where every element of the subset is also an element of another set."
                  },
                  {
                    "title": "Proper Subsets",
                    "content": "A proper subset is not equal to the original set, containing fewer elements."
                  }
                ]
              },
              {
                "title": "Supersets",
                "subItems": [
                  {
                    "title": "Basic Supersets",
                    "content": "A superset includes every element of another set."
                  },
                  {
                    "title": "Proper Supersets",
                    "content": "A proper superset contains all elements of the subset plus additional elements."
                  }
                ]
              },
              {
                "title": "Disjoint Sets",
                "content": "Two sets are disjoint if they have no elements in common."
              },
              {
                "title": "Complement",
                "content": "The set of all elements not in the given set, relative to a universal set."
              }
            ],
            "content": ` 
            **Basic Set Membership**
          \n- **Belongs to ( ∈ )**
            Object belongs to a set if it is an element of the set.
            Notation: x ∈ A means that x is an element of set A.
            Example: If A = {1, 2, 3}, then 1 ∈ A but 4 ∉ A.
          \n- **Does not belong to ( ∉ )**
            Notation: y ∉ B means that y is not an element of set B.
            Example: If B = {5, 6, 7}, then 4 ∉ B.
           "${diagrams[1].svg}"
          **Diagram 2. Set Menbership.**
  

        **Equality and Inequality of Sets**
        \n- **Equality ( = )**: Two sets are equal if they contain exactly the same elements.
        Example: A = {1, 2, 3} and B = {3, 1, 2}; A = B.
        \n- **Inequality ( ≠ )**: Two sets are unequal if there is at least one element that is different between the sets.
        Example: A = {1, 2, 3} and C = {4, 5, 6}; A ≠ C.\n
        \n**Subsets**
          \n- **Basic Subsets**:
          A set is a subset of another set if every element of this set is also an element of the including set.
          Example:
            A = {1, 2} is a subset of B = {1, 2, 3, 4}.
          \n- **Proper Subsets**:
          A proper subset of a set is a subset that is not equal to the original set, containing fewer elements.
       Example:
       A = {1, 2} is a proper subset of B.\n
        **Supersets**
          \n- **Basic Supersets**:
          A superset includes every element of another set.
          Example:
          A = {1, 2, 3, 4} is a superset of B = {1, 2} and C={1, 2, 3, 4}.
          \n- **Proper Supersets**:
          A proper superset contains all elements of the subset plus additional elements.
          Example: 
          A is a proper superset of B but not a proper superset of C.

        **Disjoint Sets**
        Two sets are disjoint if they have no common elements.
        Example:
        A = {1, 2, 3} and C = {4, 5, 6} are disjoint.

        **Complement**
        The complement of set A with respect to a universal set U includes all elements that are in U but not in A.
        Example:
        U = {1, 2, 3, 4, 5}; A = {1, 2, 3}; A^c = {4, 5}.

        This comprehensive section starts by establishing the fundamental notions of set membership, which is crucial for understanding all subsequent relationships and operations between sets. 
        This foundation is then expanded upon with various types of set relations, all illustrated with clear examples to enhance understanding.          

            `,
            "after":`
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
                  <td>A^c</td>
                  <td>The set of all elements not in the given set, relative to a universal set.</td>
                  <td>U = {1, 2, 3, 4, 5}, A = {1, 2, 3}; A^c = {4, 5}</td>
                </tr>
              </tbody>
            </table>
          </div>          


            `
          }
          
          ,
          {
            "title": "Operations on Sets",
            "subItems": [
             
              { "title": "Intersection", "content": "The set of all elements that are common to both sets." },
              { "title": "Union", "content": "The set of all elements that are in either set." },
              { "title": "Difference", "content": "The set of elements in one set that are not in another." },
              { "title": "Symmetric Difference",  },
             
            
            ],
            "content":`
           \n- **Intersection ( ∩ )**
            The intersection of two sets A and B, denoted as A ∩ B, is the set of elements that are common to both A and B.
            Example:
            If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A ∩ B = {3, 4}.
            "${diagrams[7].svg}"
              **Diagram 3. Intersection of two mathematical sets.**
            
                \n- **Union ( ∪ )**
                The union of two sets A and B, denoted as A ∪ B, is the set of elements that are in A, in B, or in both.
                Example:
                If A = {1, 2, 3} and B = {4, 5, 3}, then A ∪ B = {1, 2, 3, 4, 5}.
              "${diagrams[8].svg}"
            **Diagram 4. Union of two mathematical sets**
            
                \n- **Difference ( - )**
                The difference between two sets A and B, denoted as A - B, is the set of elements that are in A but not in B.
                Example:
                If A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, then A - B = {1, 2}.
               "${diagrams[9].svg}"
                  **Diagram 5 Difference of two mathematical sets**
                  
                  \n- **Symmetric Difference ( Δ )**
                  The symmetric difference between two sets A and B, denoted as A Δ B, is the set of elements
                  that are in either of the sets A or B but not in their intersection.
                  Example:
                  If A = {1, 2, 3} and B = {3, 4, 5}, then A Δ B = {1, 2, 4, 5}.
                "${diagrams[10].svg}"
              **Diagram 6. Symmetric difference between two mathematical sets **         
        
            This section demonstrates the fundamental operations on sets with graphical examples 
            to aid in understanding the concepts of intersection, union, difference, and symmetric difference between sets. 
           
            <svg width="780" height="240" xmlns="http://www.w3.org/2000/svg">
    <!-- Universal Set (Background Rectangle) -->
    <rect x="10" y="10" width="480" height="220" stroke="black" stroke-width="0.5" fill="none"/>
    <text x="800" y="30" font-family="Arial" font-size="19" fill="black">U</text>

    <!-- Circle A -->
    <circle cx="160" cy="120" r="80" stroke="black" stroke-width="0.5" fill="none"/>
    <text x="120" y="80" font-family="Arial" font-size="19" fill="black">A</text>

    <!-- Complement of A -->
    <defs>
        <mask id="mask-A">
            <!-- Everything in white (full opacity) will show through the mask -->
            <rect x="0" y="0" width="520" height="240" fill="white"/>
            <!-- Everything in black (no opacity) will be hidden -->
            <circle cx="160" cy="120" r="80" fill="black"/>
        </mask>
    </defs>
    <!-- Applying the mask to a rectangle that covers the universal set -->
    <rect x="10" y="10" width="480" height="220" fill="blue" mask="url(#mask-A)"/>
   

    <!-- Legend -->
    <rect x="540" y="50" width="20" height="20" fill="blue"/>
    <text x="570" y="65" font-family="Arial" font-size="19" fill="black">A</text>
    <text x="540" y="90" font-family="Arial" font-size="19" fill="black">Complement of A</text>
</svg>


            `,
            "after":`

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
          
        // {
        //   "title": "More on the Topic of Set Theory",
        // //   "content":" ",
        //   "subItems": [
        //     { "title": "Infinite Sets and Cardinality", "content": "Delve deeper into understanding and comparing the sizes of infinite sets." },
        //     { "title": "Axiomatic Set Theory", "content": "Study the foundational axioms that govern set theory." },
        //     { "title": "Ordinal and Cardinal Numbers", "content": "Extend your knowledge to the structure and comparison of infinite sets using ordinal and cardinal numbers." }
        //   ]
        // },
        
      ];
      

  return (
    <>
    <MyNavbar></MyNavbar>
    <br></br>
    <br></br>
    <br></br>
    <Breadcrumb></Breadcrumb>

    <h1 className='title' style={{marginTop:'-20px',marginBottom:'10px'}}>Set Theory:Basic Terminology amd Overview</h1>
    <TableOfContents tocItems={tocItems} showNumbers={false} ></TableOfContents>
    <ContentBlocks tocItems={tocItems}></ContentBlocks>
    <br></br>
    <br></br>
    <br></br>
    
    <br></br>
   


    <br></br>
    <br></br>
   
    <br></br>
    <br></br>
    
    {/* <button ><a href='#button'>Forward</a></button> */}
    <br></br>
    <br></br>
       
    
    
    
    {/* <div>{ dangerouslySetInnerHTML={ __html: diagrams[0].svg}}</div> */}

    {/* <div dangerouslySetInnerHTML={{ __html: diagrams[9].svg }} /> */}
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    {/* <div>{diagramsReact[0].svg()}</div> */}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <svg width="890" height="260" viewBox="0 0 390 260">
    <circle cx="330" cy="130" r="91" fill='rgba(255, 206, 86, 0.5)' />
    <circle cx="440" cy="130" r="91" fill='rgba(201, 203, 207, 0.5)'  />
    <text x="278" y="130" fill="black" fontSize="16">A</text>
    <text x="462" y="130" fill="black" fontSize="16">B</text>
    <text x="365" y="130" fill="black" fontSize="16">A ∩ B</text>
  </svg>
    <br></br>
    <br></br>
    <br></br>
   
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   
    <br></br>
    <br></br>
   
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <SetTheoryVennDiagram></SetTheoryVennDiagram>
    <br></br>
    <br></br>
    <SetTheoryVennDiagram2></SetTheoryVennDiagram2>
    <br></br>
   
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  
    <br></br>
    <br></br>
    
    <br></br>
    <br></br>
    <br></br>
   
    <br></br>
    <br></br>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    {/* <button id='button' onClick={(e)=>window.history.back(e)}>Back</button> */}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
 

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    <ScrollUpButton></ScrollUpButton>
    
    </>
  )
}
