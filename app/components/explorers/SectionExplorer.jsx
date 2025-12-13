

import React, { useState } from 'react';
import styles from './SectionsExplorer.module.css';

const diagramData = {
  engineering: {
    title: 'Engineering Diagrams',
    description: 'Technical drawings, schematics, blueprints',
    subcategories: {
      mechanical: { name: 'Mechanical Engineering', count: 15 },
      electrical: { name: 'Electrical Schematics', count: 23 },
      civil: { name: 'Civil Engineering', count: 18 },
      structural: { name: 'Structural Diagrams', count: 12 }
    }
  },
  business: {
    title: 'Business Diagrams',
    description: 'Process flows, organizational charts, workflows',
    subcategories: {
      flowcharts: { name: 'Process Flowcharts', count: 28 },
      organizational: { name: 'Organizational Charts', count: 14 },
      workflows: { name: 'Workflow Diagrams', count: 19 },
      hierarchy: { name: 'Hierarchy Structures', count: 11 }
    }
  },
  scientific: {
    title: 'Scientific Diagrams',
    description: 'Research data, molecular structures, analysis',
    subcategories: {
      molecular: { name: 'Molecular Structures', count: 34 },
      biological: { name: 'Biological Systems', count: 22 },
      chemical: { name: 'Chemical Processes', count: 17 },
      physics: { name: 'Physics Diagrams', count: 25 }
    }
  }
};

export default function SectionsExplorer() {
  const [step, setStep] = useState('category-selection');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleSubcategorySelect = (categoryId, subcategoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategoryId);
    setStep('diagram-view');
  };

  const handleReset = () => {
    setStep('category-selection');
    setExpandedCategory(null);
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  };

  const getCategoryData = () => {
    return Object.entries(diagramData).map(([id, data]) => ({
      id,
      ...data,
      subcategories: Object.entries(data.subcategories).map(([subId, subData]) => ({
        id: subId,
        ...subData
      }))
    }));
  };

  const getCurrentCategoryName = () => {
    if (!selectedCategory) return '';
    return diagramData[selectedCategory]?.title || '';
  };

  const getCurrentSubcategoryName = () => {
    if (!selectedCategory || !selectedSubcategory) return '';
    return diagramData[selectedCategory]?.subcategories[selectedSubcategory]?.name || '';
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Diagram Library</h1>
          <p className={styles.subtitle}>Professional diagram collection and viewer</p>
        </div>

        {/* Category Selection View */}
        {step === 'category-selection' && (
          <div>
            <h2 className={styles.stepTitle}>Select Diagram Category</h2>
            <div className={styles.categoryGrid}>
              {getCategoryData().map((category) => {
                const isExpanded = expandedCategory === category.id;
                
                return (
                  <div
                    key={category.id}
                    className={`${styles.categoryCard} ${isExpanded ? styles.categoryCardExpanded : ''}`}
                  >
                    {/* Category Header */}
                    <div
                      className={styles.categoryHeader}
                      onClick={() => toggleCategory(category.id)}
                    >
                      <div className={styles.categoryContent}>
                        <div className={styles.categoryTitle}>
                          {category.title}
                        </div>
                        <div className={styles.categoryDescription}>
                          {category.description}
                        </div>
                      </div>
                      <div className={`${styles.expandIcon} ${isExpanded ? styles.expandIconRotated : ''}`}>
                        ▶
                      </div>
                    </div>

                    {/* Subcategories (Expanded Content) */}
                    {isExpanded && (
                      <div className={styles.subcategoriesContainer}>
                        <div className={styles.subcategoriesGrid}>
                          {category.subcategories.map((subcategory) => (
                            <button
                              key={subcategory.id}
                              className={styles.subcategoryButton}
                              onClick={() => handleSubcategorySelect(category.id, subcategory.id)}
                            >
                              <div className={styles.subcategoryContent}>
                                <div className={styles.subcategoryName}>
                                  {subcategory.name}
                                </div>
                                <div className={styles.subcategoryCount}>
                                  {subcategory.count} diagrams available
                                </div>
                              </div>
                              <div className={styles.countBadge}>
                                {subcategory.count}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Diagram View Layout */}
        {step === 'diagram-view' && (
          <div className={styles.diagramViewLayout}>
            {/* Left Side - Category Navigation */}
            <div className={styles.navigationSidebar}>
              <h3 className={styles.navigationTitle}>Categories</h3>
              <div className={styles.navigationList}>
                {getCategoryData().map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setSelectedSubcategory(null);
                    }}
                    className={`${styles.navigationCategory} ${
                      selectedCategory === category.id ? styles.navigationCategorySelected : ''
                    }`}
                  >
                    <div className={styles.navigationCategoryContent}>
                      <div className={styles.navigationCategoryTitle}>
                        {category.title}
                      </div>
                      <div className={styles.navigationCategoryDescription}>
                        {category.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={handleReset}
                className={styles.resetButton}
              >
                ← Back to Categories
              </button>
            </div>

            {/* Middle - Subcategory Navigation */}
            <div className={styles.subcategoryNavigation}>
              <h3 className={styles.navigationTitle}>
                {selectedCategory ? diagramData[selectedCategory]?.title : 'Subcategories'}
              </h3>
              {selectedCategory && (
                <div className={styles.subcategoryList}>
                  {Object.entries(diagramData[selectedCategory]?.subcategories || {}).map(([subId, subData]) => (
                    <button
                      key={subId}
                      onClick={() => setSelectedSubcategory(subId)}
                      className={`${styles.subcategoryNavButton} ${
                        selectedSubcategory === subId ? styles.subcategoryNavButtonSelected : ''
                      }`}
                    >
                      <div className={styles.subcategoryNavContent}>
                        <div className={styles.subcategoryNavName}>
                          {subData.name}
                        </div>
                        <div className={styles.subcategoryNavCount}>
                          {subData.count} diagrams
                        </div>
                      </div>
                      <div className={styles.subcategoryNavBadge}>
                        {subData.count}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Diagram Content */}
            <div className={styles.diagramContent}>
              <div className={styles.diagramHeader}>
                <h2 className={styles.diagramTitle}>
                  {selectedSubcategory ? getCurrentSubcategoryName() : 'Select a subcategory'}
                </h2>
                <div className={styles.breadcrumb}>
                  <button 
                    className={styles.breadcrumbButton}
                    onClick={handleReset}
                  >
                    Categories
                  </button>
                  <span className={styles.breadcrumbSeparator}>→</span>
                  <button 
                    className={styles.breadcrumbButton}
                    onClick={() => setSelectedSubcategory(null)}
                    disabled={!selectedCategory}
                  >
                    {getCurrentCategoryName() || 'Category'}
                  </button>
                  {selectedSubcategory && (
                    <>
                      <span className={styles.breadcrumbSeparator}>→</span>
                      <span className={styles.breadcrumbItemCurrent}>{getCurrentSubcategoryName()}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Placeholder Content */}
              <div className={styles.placeholderSection}>
                {selectedSubcategory ? (
                  <>
                    <div className={styles.placeholderIcon}>📊</div>
                    <h3 className={styles.placeholderTitle}>Diagram Viewer</h3>
                    <p className={styles.placeholderDescription}>
                      Viewing diagrams for: <strong>{getCurrentSubcategoryName()}</strong>
                      <br />
                      Category: <strong>{getCurrentCategoryName()}</strong>
                      <br />
                      This is where the actual diagram viewer and tools will be implemented.
                    </p>
                    <div className={styles.placeholderStats}>
                      <div className={styles.statItem}>
                        <div className={styles.statValue}>
                          {diagramData[selectedCategory]?.subcategories[selectedSubcategory]?.count || 0}
                        </div>
                        <div className={styles.statLabel}>Available Diagrams</div>
                      </div>
                      <div className={styles.statItem}>
                        <div className={styles.statValue}>1</div>
                        <div className={styles.statLabel}>Currently Loaded</div>
                      </div>
                    </div>
                  </>
                ) : selectedCategory ? (
                  <>
                    <div className={styles.placeholderIcon}>📂</div>
                    <h3 className={styles.placeholderTitle}>Select a Subcategory</h3>
                    <p className={styles.placeholderDescription}>
                      Choose a subcategory from <strong>{getCurrentCategoryName()}</strong> to view diagrams.
                    </p>
                  </>
                ) : (
                  <>
                    <div className={styles.placeholderIcon}>🏠</div>
                    <h3 className={styles.placeholderTitle}>Select a Category</h3>
                    <p className={styles.placeholderDescription}>
                      Choose a category from the left sidebar to get started.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}