import React from 'react';
import algorithmsList from '../../app/api/db/linear_algebra/algorithmsList.json'
import pandasOperations from '../../app/components/tree-structure/pandas_operations_new.json'
import TreeStructure from '@/app/components/tree-structure/TreeItem';
import cLibrary from '../../app/components/tree-structure/c_standard_library.json'
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import VariationsVisualizer from '@/app/components/combinatorics/VariationsVisualizer';
import VariationsVisualizer3x3 from '@/app/components/combinatorics/VariationsVisualizer3x3';
import CombinatoricsVisualization from '@/app/components/combinatorics/CombinatoricsVisualisation4Balls';
import ArrowSplitBreakdown from '@/app/components/breakdowns/2-way-split/ArrowBreakdown';
import TableSplitBreakdown from '@/app/components/breakdowns/2-way-split/TableSplit';
import TruthTable from '@/app/components/logic-calculator/truth-tables/TruthTable';


export default function Test5Page() {
  return (
    <>
    <h1>Test 5 page </h1>
    {/* <TreeStructure data={algorithmsList}
    expandTopLevel={true}/> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <ArrowSplitBreakdown/>
    <br/>
    <br/>
    <br/>
    {/* <VariationsVisualizer/> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <TableSplitBreakdown/>
    <br/>
    <br/>
    <br/>
    {/* <VariationsVisualizer3x3/> */}
    <br/>
    <br/>
    <br/>
    {/* <TreeStructure data={cLibrary}
    expandTopLevel={true}/> */}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   {/* <CombinatoricsVisualization/> */}
    <br/>
    <br/>
    <br/>
    <TruthTable/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <CombinatoricsVisualization itemCount={3}/> */}
    <br/>
    <br/>
    <br/>
    <br/>
    {/* <CombinatoricsVisualization itemCount={2}/> */}
    <br/>
    <br/>
    <br/>
    <h1>End</h1>
    <br/>
    <br/>
    <br/>
    {/* <CombinatoricsVisualization itemCount={5}/> */}
    <br/>
    <br/>
    <ScrollUpButton></ScrollUpButton>
    
    </>
  )
}
