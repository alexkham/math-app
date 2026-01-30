
'use client';

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as venn from 'venn.js';

const VennDiagramClaude = ({
  // Data structure
  sets = [
    { sets: ['A'], size: 12, label: 'Set A' },
    { sets: ['B'], size: 12, label: 'Set B' },
    { sets: ['A', 'B'], size: 2, label: 'A ∩ B' }
  ],
  
  // Container dimensions
  width = 600,
  height = 400,
  
  // Colors
  backgroundColor = '#ffffff',
  setColors = ['#ff6b6b', '#4ecdc4', '#45b7d1'],
  setOpacity = 0.3,
  setStrokeColor = '#333333',
  setStrokeWidth = 2,
  hoverOpacity = 0.6,
  
  // Labels
  showLabels = true,
  labelFontSize = 14,
  labelFontFamily = 'Arial, sans-serif',
  labelFontWeight = 'bold',
  labelColor = '#333333',
  labelOffsetX = 0,
  labelOffsetY = 0,
  
  // Size labels (counts)
  showSizeLabels = true,
  sizeLabelFontSize = 12,
  sizeLabelFontFamily = 'Arial, sans-serif',
  sizeLabelColor = '#666666',
  sizeLabelOffsetX = 0,
  sizeLabelOffsetY = 15,
  
  // Layout options
  layoutFunction = null,
  orientation = 'horizontal',
  padding = 15,
  
  // Circle positioning (manual override) - key is set name like 'A', 'B', or 'A,B'
  circlePositions = null,
  
  // Animation
  animationDuration = 0,
  
  // Interaction
  enableHover = true,
  enableClick = false,
  onSetClick = null,
  onSetHover = null,
  
  // Tooltip
  showTooltip = false,
  tooltipBackground = '#333333',
  tooltipColor = '#ffffff',
  tooltipFontSize = 12,
  tooltipPadding = 8,
  tooltipBorderRadius = 4,
  
  // Advanced styling
  className = '',
  style = {},
  
  // Text positioning for each set (override)
  textPositions = null,
  
  // Custom set properties
  setProperties = null,
}) => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear previous diagram
    d3.select(svgRef.current).selectAll('*').remove();

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background-color', backgroundColor);

    // Create tooltip if enabled
    let tooltip;
    if (showTooltip) {
      tooltip = d3.select(containerRef.current)
        .select('.venn-tooltip');
      
      if (tooltip.empty()) {
        tooltip = d3.select(containerRef.current)
          .append('div')
          .attr('class', 'venn-tooltip')
          .style('position', 'absolute')
          .style('visibility', 'hidden')
          .style('background-color', tooltipBackground)
          .style('color', tooltipColor)
          .style('padding', `${tooltipPadding}px`)
          .style('border-radius', `${tooltipBorderRadius}px`)
          .style('font-size', `${tooltipFontSize}px`)
          .style('pointer-events', 'none')
          .style('z-index', '1000')
          .style('white-space', 'nowrap');
      }
    }

    // If manual positions provided, use custom layout
    if (circlePositions) {
      // Create groups for each set
      const setGroups = svg.selectAll('g.venn-circle')
        .data(sets)
        .enter()
        .append('g')
        .attr('class', 'venn-circle')
        .attr('data-venn-sets', d => d.sets.join('_'));

      // Draw circles with manual positions
      setGroups.each(function(d, i) {
        const group = d3.select(this);
        const setKey = d.sets.join(',');
        const position = circlePositions[setKey];
        
        if (position) {
          // Draw the circle
          group.append('circle')
            .attr('cx', position.x)
            .attr('cy', position.y)
            .attr('r', position.radius)
            .style('fill-opacity', () => {
              if (setProperties && setProperties[d.sets[0]]) {
                return setProperties[d.sets[0]].opacity || setOpacity;
              }
              return setOpacity;
            })
            .style('fill', () => {
              if (setProperties && setProperties[d.sets[0]]) {
                return setProperties[d.sets[0]].color || setColors[i % setColors.length];
              }
              return setColors[i % setColors.length];
            })
            .style('stroke', setStrokeColor)
            .style('stroke-width', setStrokeWidth);

          // Add main label
          if (showLabels) {
            const textX = textPositions && textPositions[setKey] 
              ? textPositions[setKey].x 
              : position.x;
            const textY = textPositions && textPositions[setKey]
              ? textPositions[setKey].y
              : position.y;

            group.append('text')
              .attr('x', textX + labelOffsetX)
              .attr('y', textY + labelOffsetY)
              .style('font-size', `${labelFontSize}px`)
              .style('font-family', labelFontFamily)
              .style('font-weight', labelFontWeight)
              .style('fill', labelColor)
              .style('text-anchor', 'middle')
              .text(d.label || d.sets.join(' ∩ '));
          }

          // Add size label
          if (showSizeLabels) {
            group.append('text')
              .attr('class', 'size-label')
              .attr('x', position.x + sizeLabelOffsetX)
              .attr('y', position.y + sizeLabelOffsetY)
              .style('font-size', `${sizeLabelFontSize}px`)
              .style('font-family', sizeLabelFontFamily)
              .style('fill', sizeLabelColor)
              .style('text-anchor', 'middle')
              .text(d.size);
          }
        }
      });

      // Add hover effects
      if (enableHover) {
        setGroups
          .on('mouseover', function(event, d) {
            d3.select(this).select('circle')
              .transition()
              .duration(200)
              .style('fill-opacity', hoverOpacity);
            
            if (onSetHover) {
              onSetHover(d, true);
            }

            if (showTooltip && tooltip) {
              tooltip
                .style('visibility', 'visible')
                .html(`${d.label || d.sets.join(' ∩ ')}: ${d.size}`);
            }
          })
          .on('mousemove', function(event) {
            if (showTooltip && tooltip) {
              const rect = containerRef.current.getBoundingClientRect();
              tooltip
                .style('top', `${event.clientY - rect.top - 40}px`)
                .style('left', `${event.clientX - rect.left + 10}px`);
            }
          })
          .on('mouseout', function(event, d) {
            d3.select(this).select('circle')
              .transition()
              .duration(200)
              .style('fill-opacity', () => {
                if (setProperties && setProperties[d.sets[0]]) {
                  return setProperties[d.sets[0]].opacity || setOpacity;
                }
                return setOpacity;
              });
            
            if (onSetHover) {
              onSetHover(d, false);
            }

            if (showTooltip && tooltip) {
              tooltip.style('visibility', 'hidden');
            }
          });
      }

      // Add click handlers
      if (enableClick && onSetClick) {
        setGroups
          .style('cursor', 'pointer')
          .on('click', function(event, d) {
            onSetClick(d);
          });
      }

      // Animation
      if (animationDuration > 0) {
        setGroups.selectAll('circle')
          .style('fill-opacity', 0)
          .transition()
          .duration(animationDuration)
          .style('fill-opacity', (d, i) => {
            if (setProperties && setProperties[d.sets[0]]) {
              return setProperties[d.sets[0]].opacity || setOpacity;
            }
            return setOpacity;
          });
      }

    } else {
      // Use venn.js automatic layout
      const chart = venn.VennDiagram()
        .width(width)
        .height(height)
        .padding(padding);

      if (layoutFunction) {
        chart.layoutFunction(layoutFunction);
      } else if (orientation === 'vertical') {
        chart.orientationOrder((a, b) => a.sets.length - b.sets.length);
      }

      const div = svg.datum(sets).call(chart);

      // Style the circles
      div.selectAll('.venn-circle path')
        .style('fill-opacity', (d, i) => {
          if (setProperties && setProperties[d.sets[0]]) {
            return setProperties[d.sets[0]].opacity || setOpacity;
          }
          return setOpacity;
        })
        .style('fill', (d, i) => {
          if (setProperties && setProperties[d.sets[0]]) {
            return setProperties[d.sets[0]].color || setColors[i % setColors.length];
          }
          return setColors[i % setColors.length];
        })
        .style('stroke', setStrokeColor)
        .style('stroke-width', setStrokeWidth);

      // Add hover effects
      if (enableHover) {
        div.selectAll('.venn-circle')
          .on('mouseover', function(event, d) {
            d3.select(this).select('path')
              .transition()
              .duration(200)
              .style('fill-opacity', hoverOpacity);
            
            if (onSetHover) {
              onSetHover(d, true);
            }

            if (showTooltip && tooltip) {
              const setData = sets.find(s => JSON.stringify(s.sets) === JSON.stringify(d.sets));
              tooltip
                .style('visibility', 'visible')
                .html(`${setData.label || d.sets.join(' ∩ ')}: ${setData.size}`);
            }
          })
          .on('mousemove', function(event) {
            if (showTooltip && tooltip) {
              const rect = containerRef.current.getBoundingClientRect();
              tooltip
                .style('top', `${event.clientY - rect.top - 40}px`)
                .style('left', `${event.clientX - rect.left + 10}px`);
            }
          })
          .on('mouseout', function(event, d) {
            d3.select(this).select('path')
              .transition()
              .duration(200)
              .style('fill-opacity', (d, i) => {
                if (setProperties && setProperties[d.sets[0]]) {
                  return setProperties[d.sets[0]].opacity || setOpacity;
                }
                return setOpacity;
              });
            
            if (onSetHover) {
              onSetHover(d, false);
            }

            if (showTooltip && tooltip) {
              tooltip.style('visibility', 'hidden');
            }
          });
      }

      // Add click handlers
      if (enableClick && onSetClick) {
        div.selectAll('.venn-circle')
          .style('cursor', 'pointer')
          .on('click', function(event, d) {
            onSetClick(d);
          });
      }

      // Labels
      if (showLabels) {
        div.selectAll('.venn-circle text')
          .style('font-size', `${labelFontSize}px`)
          .style('font-family', labelFontFamily)
          .style('font-weight', labelFontWeight)
          .style('fill', labelColor)
          .text((d) => {
            const setData = sets.find(s => JSON.stringify(s.sets) === JSON.stringify(d.sets));
            return setData.label || d.sets.join(' ∩ ');
          });

        if (textPositions) {
          div.selectAll('.venn-circle text')
            .attr('x', (d) => {
              const key = d.sets.join(',');
              return textPositions[key] ? textPositions[key].x + labelOffsetX : labelOffsetX;
            })
            .attr('y', (d) => {
              const key = d.sets.join(',');
              return textPositions[key] ? textPositions[key].y + labelOffsetY : labelOffsetY;
            });
        } else {
          div.selectAll('.venn-circle text')
            .attr('dx', labelOffsetX)
            .attr('dy', labelOffsetY);
        }
      } else {
        div.selectAll('.venn-circle text').remove();
      }

      // Size labels
      if (showSizeLabels) {
        div.selectAll('.venn-circle')
          .append('text')
          .attr('class', 'size-label')
          .style('font-size', `${sizeLabelFontSize}px`)
          .style('font-family', sizeLabelFontFamily)
          .style('fill', sizeLabelColor)
          .style('text-anchor', 'middle')
          .attr('dx', sizeLabelOffsetX)
          .attr('dy', sizeLabelOffsetY)
          .text((d) => {
            const setData = sets.find(s => JSON.stringify(s.sets) === JSON.stringify(d.sets));
            return setData.size;
          });
      }

      // Make intersection paths hoverable for tooltips
      if (showTooltip && enableHover) {
        div.selectAll('.venn-circle').each(function(d) {
          if (d.sets.length > 1) {
            const group = d3.select(this);
            group.select('path')
              .on('mouseover', function(event) {
                d3.select(this)
                  .transition()
                  .duration(200)
                  .style('fill-opacity', hoverOpacity);
                
                if (tooltip) {
                  const setData = sets.find(s => JSON.stringify(s.sets) === JSON.stringify(d.sets));
                  tooltip
                    .style('visibility', 'visible')
                    .html(`${setData.label || d.sets.join(' ∩ ')}: ${setData.size}`);
                }
              })
              .on('mousemove', function(event) {
                if (tooltip) {
                  const rect = containerRef.current.getBoundingClientRect();
                  tooltip
                    .style('top', `${event.clientY - rect.top - 40}px`)
                    .style('left', `${event.clientX - rect.left + 10}px`);
                }
              })
              .on('mouseout', function() {
                d3.select(this)
                  .transition()
                  .duration(200)
                  .style('fill-opacity', setOpacity);
                
                if (tooltip) {
                  tooltip.style('visibility', 'hidden');
                }
              });
          }
        });
      }

      // Animation
      if (animationDuration > 0) {
        div.selectAll('.venn-circle path')
          .style('fill-opacity', 0)
          .transition()
          .duration(animationDuration)
          .style('fill-opacity', (d, i) => {
            if (setProperties && setProperties[d.sets[0]]) {
              return setProperties[d.sets[0]].opacity || setOpacity;
            }
            return setOpacity;
          });
      }
    }

  }, [
    sets, width, height, backgroundColor, setColors, setOpacity, setStrokeColor,
    setStrokeWidth, hoverOpacity, showLabels, labelFontSize, labelFontFamily,
    labelFontWeight, labelColor, labelOffsetX, labelOffsetY, showSizeLabels,
    sizeLabelFontSize, sizeLabelFontFamily, sizeLabelColor, sizeLabelOffsetX,
    sizeLabelOffsetY, layoutFunction, orientation, padding, circlePositions,
    animationDuration, enableHover, enableClick, onSetClick, onSetHover,
    showTooltip, tooltipBackground, tooltipColor, tooltipFontSize,
    tooltipPadding, tooltipBorderRadius, textPositions, setProperties
  ]);

  return (
    <div ref={containerRef} style={{ position: 'relative', ...style }} className={className}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default VennDiagramClaude;