// // components/MatrixComparisonTable.jsx
// import React from 'react';
// import { Check, X } from 'lucide-react';
// import { categories, matrixTypes } from './matrixComparisonData.js';
// import './MatrixComparisonTable.css';

// const PropertyValue = ({ value }) => {
//   if (value.type === 'boolean') {
//     return value.value ? (
//       <Check className="check-icon" size={20} />
//     ) : (
//       <X className="x-icon" size={20} />
//     );
//   }
//   return <span>{value.text}</span>;
// };

// const MatrixComparisonTable = () => {
//   return (
//     <div className="matrix-table-container">
//       <table className="matrix-table">
//         <thead>
//           <tr>
//             <th></th>
//             {matrixTypes.map(type => (
//               <th key={type.id}>{type.name}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {categories.map(category => (
//             <React.Fragment key={category.id}>
//               <tr className="category-header">
//                 <td 
//                   colSpan={matrixTypes.length + 1} 
//                   className={category.color}
//                 >
//                   {category.name}
//                 </td>
//               </tr>
//               {category.properties.map(property => (
//                 <tr 
//                   key={property.id} 
//                   className={`${category.color}-row`}
//                 >
//                   <td>{property.name}</td>
//                   {matrixTypes.map(type => (
//                     <td key={`${type.id}-${property.id}`}>
//                       <PropertyValue value={property.values[type.id]} />
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MatrixComparisonTable;


import React from 'react';
import PropTypes from 'prop-types';
import { Check, X } from 'lucide-react';
// import { categories, matrixTypes } from './matrixComparisonData.js';
import './MatrixComparisonTable.css';



const ValueType = PropTypes.shape({
  type: PropTypes.oneOf(['boolean', 'text']).isRequired,
  value: PropTypes.bool,
  text: PropTypes.string
});

const PropertyType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.objectOf(ValueType).isRequired
});

const CategoryType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  properties: PropTypes.arrayOf(PropertyType).isRequired
});

// Components
const PropertyValue = ({ value }) => {
  if (!value) return null;

  if (value.type === 'boolean') {
    return value.value ? (
      <Check className="check-icon icon-small" aria-label="Yes" />
    ) : (
      <X className="x-icon icon-small" aria-label="No" />
    );
  }
  return <span className="property-text">{value.text}</span>;
};

PropertyValue.propTypes = {
  value: ValueType.isRequired
};

const MatrixComparisonTable = ({categories,matrixTypes}) => {
  if (!categories?.length || !matrixTypes?.length) {
    return (
      <div className="matrix-table-container">
        <p>No data available</p>
      </div>
    );
  }

  const getAbbreviatedName = (name) => {
    const abbreviations = {
      'Upper Triangular': 'Upper Triangular',
      'Lower Triangular': 'Lower Triangular',
      'Skew-Symmetric': 'Skew-Symmetric'
    };
    return abbreviations[name] || name;
  };

  return (
    <div className="matrix-table-container" role="region" aria-label="Matrix types comparison">
      <table className="matrix-table">
        <thead>
          <tr>
            <th scope="col"></th>
            {matrixTypes.map(type => (
              <th key={type.id} scope="col">
                {getAbbreviatedName(type.name)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <React.Fragment key={category.id}>
              <tr className="category-header">
                <td 
                  colSpan={matrixTypes.length + 1} 
                  className={category.color}
                >
                  {category.name}
                </td>
              </tr>
              {category.properties.map(property => (
                <tr 
                  key={property.id} 
                  className={`${category.color}-row`}
                >
                  <td>{property.name}</td>
                  {matrixTypes.map(type => (
                    <td key={`${type.id}-${property.id}`}>
                      <PropertyValue value={property.values[type.id]} />
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

MatrixComparisonTable.propTypes = {
  categories: PropTypes.arrayOf(CategoryType),
  matrixTypes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }))
};

export default MatrixComparisonTable;