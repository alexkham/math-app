import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb'
import MatrixComparisonTable from '@/app/components/matrices/matrix-comparison/MatrixComparisonTable'
import OperaSidebar from '@/app/components/nav-bar/OperaSidebar'
import GenericNavbar from '@/app/components/nav-bar2/GenericNavbar'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton'
import React from 'react'
import '../../../pages.css'
import GenericTable from '@/app/components/generic-table/GenericTable'
// import { categories, matrixTypes } from '../../../../app/components/matrices/matrix-comparison/matrixComparisonData';

export default function MatrixPropertiesPage() {

  const matrixPropertiesTableData = {
  tableTitle: "Common Matrix Properties",
  rows: [
    {
      property: "Invertibility",
      description: "A matrix is invertible if there exists a two-sided inverse $A^{-1}$."
    },
    {
      property: "Determinant",
      description: "A scalar value summarizing a matrix's scaling and orientation properties."
    },
    {
      property: "Rank",
      description: "Dimension of the column (or row) space of the matrix."
    },
    {
      property: "Trace",
      description: "The sum of diagonal entries of a matrix."
    },
    {
      property: "Eigenvalues",
      description: "Scalars $\\lambda$ such that $Av = \\lambda v$ for some vector $v$."
    },
    {
      property: "Singular Values",
      description: "Square roots of eigenvalues of $A^*A$, used in SVD."
    },
    {
      property: "Norm",
      description: "A measure of the matrix’s “size” or operator strength."
    },
    {
      property: "Condition Number",
      description: "Describes sensitivity of output to input changes; related to stability."
    },
    {
      property: "Spectral Radius",
      description: "The largest absolute value among eigenvalues."
    },
    {
      property: "Nullity",
      description: "Dimension of the null space (kernel) of the matrix."
    },
    {
      property: "Orthogonality",
      description: "A matrix has orthogonal rows or columns when their inner product is zero."
    },
    {
      property: "Linearity",
      description: "All matrices represent linear maps between vector spaces."
    },
    {
      property: "Symmetry / Hermitian",
      description: "A matrix equals its transpose (or conjugate transpose in complex case)."
    },
    {
      property: "Positive Definiteness",
      description: "For all nonzero vectors $x$, $x^T A x > 0$."
    },
    {
      property: "Idempotent",
      description: "A matrix is idempotent if $A^2 = A$."
    },
    {
      property: "Nilpotent",
      description: "A matrix is nilpotent if $A^k = 0$ for some integer $k > 0$."
    },
    {
      property: "Diagonalizability",
      description: "A matrix is similar to a diagonal matrix $A = PDP^{-1}$."
    },
    {
      property: "Jordan Form",
      description: "A canonical form describing generalized eigenstructure."
    }
  ]
};

  return (
    <>
    <GenericNavbar/>
    <br/>
    <br/>
    <br/>
    <br/>
     <OperaSidebar 
                      side='right'
                     //  topOffset='55px' 
                      sidebarWidth='45px'
                      panelWidth='300px'
                      iconColor='white'
                      panelBackgroundColor='#f2f2f2'
                    /> 
    <Breadcrumb/>
    <h1 className='title' style={{marginTop:'10px',marginBottom:'10px'}}>Matrix Properties</h1>
    {/* <MatrixComparisonTable categories={categories} matrixTypes={matrixTypes}/> */}
    <br/>
    <br/>
     <div style={{width:'60%',margin:'auto'}}>
        <GenericTable tableData={matrixPropertiesTableData}
        cellFontSize={'16px'}
        headerFontSize={'18px'}/>
        </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <ScrollUpButton/>

    </>
  )
}

