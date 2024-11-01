// // // // // import React from 'react';

// // // // // const FlexibleLayout = ({
// // // // //   sidebarPosition = 'right',
// // // // //   svgSliderProps = {},
// // // // //   formulaWidgetProps = {},
// // // // //   topRightDivStyle = {},
// // // // //   bottomDivStyle = {},
// // // // //   children,
// // // // //   ...rest
// // // // // }) => {
// // // // //   const sidebarMargin = sidebarPosition === 'right' ? { marginRight: '45px' } : { marginLeft: '45px' };

// // // // //   return (
// // // // //     <div className='divy' style={{ marginLeft: '10px', ...sidebarMargin, ...rest.style }}>
// // // // //       <div {...svgSliderProps}>
// // // // //         {React.Children.map(children, child => {
// // // // //           if (child.type.name === 'SVGSlider') {
// // // // //             return React.cloneElement(child, { ...svgSliderProps });
// // // // //           }
// // // // //           return null;
// // // // //         })}
// // // // //       </div>
// // // // //       <div className="content-wrapper" style={{ width: '70%', height: '100%', backgroundColor: 'lightgray' }}>
// // // // //         <div className="top-row" style={{ display: 'flex', flexDirection: 'row' }}>
// // // // //           <div style={{ width: '50%' }}>
// // // // //             {React.Children.map(children, child => {
// // // // //               if (child.type.name === 'VerticalScrollingFormulaWidget') {
// // // // //                 return React.cloneElement(child, { ...formulaWidgetProps });
// // // // //               }
// // // // //               return null;
// // // // //             })}
// // // // //           </div>
// // // // //           <div
// // // // //             style={{
// // // // //               backgroundColor: '#3faddf',
// // // // //               width: '50%',
// // // // //               color: 'white',
// // // // //               textAlign: 'center',
// // // // //               padding: '50px',
// // // // //               margin: '1px',
// // // // //               borderRadius: '3px',
// // // // //               ...topRightDivStyle
// // // // //             }}
// // // // //           >
// // // // //             Some Div
// // // // //           </div>
// // // // //         </div>
// // // // //         <div
// // // // //           style={{
// // // // //             backgroundColor: '#5e35b1',
// // // // //             width: '100%',
// // // // //             color: 'white',
// // // // //             height: '140px',
// // // // //             borderRadius: '5px',
// // // // //             margin: '2px',
// // // // //             ...bottomDivStyle
// // // // //           }}
// // // // //         >
// // // // //           Some Div
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default FlexibleLayout;
// // // // import React from 'react';

// // // // const FlexibleLayout = ({
// // // //   sidebarPosition = 'right',
// // // //   svgSliderProps = {},
// // // //   formulaWidgetProps = {},
// // // //   topRightDivStyle = {},
// // // //   bottomDivStyle = {},
// // // //   children,
// // // //   ...rest
// // // // }) => {
// // // //   const sidebarMargin = sidebarPosition === 'right' ? { marginRight: '45px' } : { marginLeft: '45px' };

// // // //   return (
// // // //     <div className='divy' style={{ marginLeft: '10px', ...sidebarMargin, ...rest.style }}>
// // // //       <div {...svgSliderProps}>
// // // //         {React.Children.map(children, child => {
// // // //           if (child.type.name === 'SVGSlider') {
// // // //             return React.cloneElement(child, { ...svgSliderProps });
// // // //           }
// // // //           return null;
// // // //         })}
// // // //       </div>
// // // //       <div className="content-wrapper" style={{ width: '70%', height: '100%', backgroundColor: 'lightgray' }}>
// // // //         <div className="top-row" style={{ display: 'flex', flexDirection: 'row' }}>
// // // //           {React.Children.map(children, child => {
// // // //             if (child.type.name === 'VerticalScrollingFormulaWidget') {
// // // //               return React.cloneElement(child, { ...formulaWidgetProps });
// // // //             }
// // // //             return null;
// // // //           })}
// // // //           <div
// // // //             style={{
// // // //               backgroundColor: '#3faddf',
// // // //               width: '50%',
// // // //               color: 'white',
// // // //               textAlign: 'center',
// // // //               padding: '50px',
// // // //               margin: '1px',
// // // //               borderRadius: '3px',
// // // //               ...topRightDivStyle
// // // //             }}
// // // //           >
// // // //             Some Div
// // // //           </div>
// // // //         </div>
// // // //         <div
// // // //           style={{
// // // //             backgroundColor: '#5e35b1',
// // // //             width: '100%',
// // // //             color: 'white',
// // // //             height: '140px',
// // // //             borderRadius: '5px',
// // // //             margin: '2px',
// // // //             ...bottomDivStyle
// // // //           }}
// // // //         >
// // // //           Some Div
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FlexibleLayout;
// // // import React from 'react';

// // // const FlexibleLayout = ({
// // //   sidebarPosition = 'right',
// // //   svgSliderProps = {},
// // //   formulaWidgetProps = {},
// // //   topRightDivStyle = {},
// // //   bottomDivStyle = {},
// // //   children,
// // //   ...rest
// // // }) => {
// // //   const sidebarMargin = sidebarPosition === 'right' ? { marginRight: '45px' } : { marginLeft: '45px' };
// // //   return (
// // //     <div className='divy' style={{ marginLeft: '10px', ...sidebarMargin, ...rest.style }}>
// // //       <div {...svgSliderProps} style={{ height: 'calc(100% - 100px)' }}>
// // //         {React.Children.map(children, child => {
// // //           if (child.type.name === 'SVGSlider') {
// // //             return React.cloneElement(child, { ...svgSliderProps });
// // //           }
// // //           return null;
// // //         })}
// // //       </div>
// // //       <div className="content-wrapper" style={{ width: '70%', height: '100px', backgroundColor: 'lightgray' }}>
// // //         <div className="top-row" style={{ display: 'flex', flexDirection: 'row' }}>
// // //           {React.Children.map(children, child => {
// // //             if (child.type.name === 'VerticalScrollingFormulaWidget') {
// // //               return React.cloneElement(child, { ...formulaWidgetProps });
// // //             }
// // //             return null;
// // //           })}
// // //           <div
// // //             style={{
// // //               backgroundColor: '#3faddf',
// // //               width: '50%',
// // //               color: 'white',
// // //               textAlign: 'center',
// // //               padding: '50px',
// // //               margin: '1px',
// // //               borderRadius: '3px',
// // //               ...topRightDivStyle
// // //             }}
// // //           >
// // //             Some Div
// // //           </div>
// // //         </div>
// // //         <div
// // //           style={{
// // //             backgroundColor: '#5e35b1',
// // //             width: '100%',
// // //             color: 'white',
// // //             height: '140px',
// // //             borderRadius: '5px',
// // //             margin: '2px',
// // //             ...bottomDivStyle
// // //           }}
// // //         >
// // //           Some Div
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FlexibleLayout;
// // // import React from 'react';

// // // const FlexibleLayout = ({
// // //   sidebarPosition = 'right',
// // //   svgSliderProps = {},
// // //   formulaWidgetProps = {},
// // //   topRightDivStyle = {},
// // //   bottomDivStyle = {},
// // //   children,
// // //   ...rest
// // // }) => {
// // //   const sidebarMargin = sidebarPosition === 'right' ? { marginRight: '45px' } : { marginLeft: '45px' };

// // //   return (
// // //     <div className='divy' style={{ marginLeft: '10px', ...sidebarMargin, ...rest.style }}>
// // //       <div {...svgSliderProps} style={{ height: 'calc(100% - 100px)',width:'45%' }}>
// // //         {React.Children.map(children, child => {
// // //           if (child.type.name === 'SVGSlider') {
// // //             return React.cloneElement(child, { ...svgSliderProps });
// // //           }
// // //           return null;
// // //         })}
// // //       </div>
// // //       <div className="content-wrapper" style={{ width: '70%', height: '100%', backgroundColor: 'lightgray' }}>
// // //         <div className="top-row" style={{ display: 'flex', flexDirection: 'row' }}>
// // //           {React.Children.map(children, child => {
// // //             if (child.type.name === 'VerticalScrollingFormulaWidget') {
// // //               return React.cloneElement(child, { ...formulaWidgetProps });
// // //             }
// // //             return null;
// // //           })}
// // //           <div
// // //             style={{
// // //               backgroundColor: '#3faddf',
// // //               width: '50%',
// // //               color: 'white',
// // //               textAlign: 'center',
// // //               padding: '50px',
// // //               margin: '1px',
// // //               borderRadius: '3px',
// // //               ...topRightDivStyle
// // //             }}
// // //           >
// // //             Some Div
// // //           </div>
// // //         </div>
// // //         <div
// // //           style={{
// // //             backgroundColor: '#5e35b1',
// // //             width: '100%',
// // //             color: 'white',
// // //             height: '140px',
// // //             borderRadius: '5px',
// // //             margin: '2px',
// // //             ...bottomDivStyle
// // //           }}
// // //         >
// // //           Some Div
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FlexibleLayout;
// // import React from 'react';
// // import { ArrowRight } from 'lucide-react';

// // const Card = ({ title, content, icon: Icon, link, style }) => (
// //   <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full" style={style}>
// //     <div className="flex items-center mb-4">
// //       {Icon && <Icon className="mr-2 h-6 w-6 text-blue-500" />}
// //       <h2 className="text-xl font-semibold">{title}</h2>
// //     </div>
// //     <p className="text-gray-600 flex-grow">{content}</p>
// //     {link && (
// //       <a
// //         href={link}
// //         className="mt-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
// //       >
// //         Learn More
// //         <ArrowRight className="ml-2 h-4 w-4" />
// //       </a>
// //     )}
// //   </div>
// // );

// // const FlexibleLayout = ({
// //   sidebarPosition = 'right',
// //   svgSliderProps = {},
// //   formulaWidgetProps = {},
// //   topRightCardProps = {},
// //   topRightDivStyle = {},
// //   bottomCardProps = {},
// //   bottomDivStyle = {},
// //   children,
// //   ...rest
// // }) => {
// //   const sidebarMargin = sidebarPosition === 'right' ? { marginRight: '45px' } : { marginLeft: '45px' };

// //   return (
// //     <div className='divy' style={{ marginLeft: '10px', ...sidebarMargin, ...rest.style }}>
// //       <div {...svgSliderProps} style={{ height: 'calc(100% - 100px)', width:'45%' }}>
// //         {React.Children.map(children, child => {
// //           if (child.type.name === 'SVGSlider') {
// //             return React.cloneElement(child, { ...svgSliderProps });
// //           }
// //           return null;
// //         })}
// //       </div>
// //       <div className="content-wrapper" style={{ width: '70%', height: '100%', backgroundColor: 'lightgray' }}>
// //         <div className="top-row" style={{ display: 'flex', flexDirection: 'row' }}>
// //           {React.Children.map(children, child => {
// //             if (child.type.name === 'VerticalScrollingFormulaWidget') {
// //               return React.cloneElement(child, { ...formulaWidgetProps });
// //             }
// //             return null;
// //           })}
// //           <div
// //             style={{
// //               width: '50%',
// //               margin: '1px',
// //               ...topRightDivStyle
// //             }}
// //           >
// //             {topRightCardProps.title ? (
// //               <Card {...topRightCardProps} style={topRightDivStyle} />
// //             ) : (
// //               <div
// //                 style={{
// //                   backgroundColor: '#3faddf',
// //                   width: '100%',
// //                   color: 'white',
// //                   textAlign: 'center',
// //                   padding: '50px',
// //                   borderRadius: '3px',
// //                   ...topRightDivStyle
// //                 }}
// //               >
// //                 Some Div
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //         <div
// //           style={{
// //             backgroundColor: '#5e35b1',
// //             width: '100%',
// //             color: 'white',
// //             height: '140px',
// //             borderRadius: '5px',
// //             margin: '2px',
// //             ...bottomDivStyle
// //           }}
// //         >
// //           Some Div
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FlexibleLayout;
// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const Card = ({ title, content, icon: Icon, link, style }) => (
//   <div
//     style={{
//       backgroundColor: '#3faddf',
//       width: '100%',
//       color: 'white',
//       textAlign: 'center',
//       padding: '20px',
//       borderRadius: '3px',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between',
//       height: '100%',
//       ...style
//     }}
//   >
//     <div>
//       {Icon && <Icon className="mb-2 h-6 w-6" />}
//       <h2 className="text-xl font-semibold mb-2">{title}</h2>
//       <p>{content}</p>
//     </div>
//     {link && (
//       <a
//         href={link}
//         className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-100 transition-colors"
//       >
//         Learn More
//         <ArrowRight className="ml-2 h-4 w-4" />
//       </a>
//     )}
//   </div>
// );

// const FlexibleLayout = ({
//   sidebarPosition = 'right',
//   svgSliderProps = {},
//   formulaWidgetProps = {},
//   topRightCardProps = {},
//   topRightDivStyle = {},
//   bottomCardProps = {},
//   bottomDivStyle = {},
//   children,
//   ...rest
// }) => {
//   const sidebarMargin = sidebarPosition === 'right' ? { marginRight: '45px' } : { marginLeft: '45px' };

//   return (
//     <div className='divy' style={{ marginLeft: '10px', ...sidebarMargin, ...rest.style }}>
//       <div {...svgSliderProps} style={{ height: 'calc(100% - 100px)', width:'45%' }}>
//         {React.Children.map(children, child => {
//           if (child.type.name === 'SVGSlider') {
//             return React.cloneElement(child, { ...svgSliderProps });
//           }
//           return null;
//         })}
//       </div>
//       <div className="content-wrapper" style={{ width: '70%', height: '100%', backgroundColor: 'lightgray' }}>
//         <div className="top-row" style={{ display: 'flex', flexDirection: 'row' }}>
//           {React.Children.map(children, child => {
//             if (child.type.name === 'VerticalScrollingFormulaWidget') {
//               return React.cloneElement(child, { ...formulaWidgetProps });
//             }
//             return null;
//           })}
//           <div
//             style={{
//               width: '50%',
//               margin: '1px',
//               ...topRightDivStyle
//             }}
//           >
//             {topRightCardProps.title ? (
//               <Card {...topRightCardProps} style={topRightDivStyle} />
//             ) : (
//               <div
//                 style={{
//                   backgroundColor: '#3faddf',
//                   width: '100%',
//                   color: 'white',
//                   textAlign: 'center',
//                   padding: '50px',
//                   borderRadius: '3px',
//                   ...topRightDivStyle
//                 }}
//               >
//                 Some Div
//               </div>
//             )}
//           </div>
//         </div>
//         <div
//           style={{
//             backgroundColor: '#5e35b1',
//             width: '100%',
//             color: 'white',
//             height: '140px',
//             borderRadius: '5px',
//             margin: '2px',
//             ...bottomDivStyle
//           }}
//         >
//           Some Div
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlexibleLayout;
// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const Card = ({ title, content, icon: Icon, link, style }) => (
//   <div
//     style={{
//       backgroundColor: '#3faddf',
//       width: '100%',
//       height: '100%',
//       color: 'white',
//       borderRadius: '8px',
//       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       display: 'flex',
//       flexDirection: 'column',
//       overflow: 'hidden',
//       ...style
//     }}
//   >
//     <div style={{ padding: '20px', flex: 1 }}>
//       <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
//         {Icon && <Icon style={{ width: '24px', height: '24px', marginRight: '12px', flexShrink: 0 }} />}
//         <h2 style={{ fontSize: '24px', fontWeight: '600', margin: 0, lineHeight: '1.2' }}>{title}</h2>
//       </div>
//       <br/>
//       <br/>
//       <br/>
//       <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '20px',marginLeft:'20px' }}>{content}</p>
//     </div>
//     {link && (
//       <a
//         href={link}
//         style={{
//           display: 'inline-flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: '8px 16px',
//           backgroundColor: 'rgba(255, 255, 255, 0.2)',
//           color: 'white',
//           textDecoration: 'none',
//           fontWeight: '500',
//           transition: 'background-color 0.3s ease',
//         }}
//         onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
//         onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
//       >
//         Learn More
//         <ArrowRight style={{ marginLeft: '8px', width: '18px', height: '18px' }} />
//       </a>
//     )}
//   </div>
// );

// const FlexibleLayout = ({
//   sidebarPosition = 'right',
//   svgSliderProps = {},
//   formulaWidgetProps = {},
//   topRightCardProps = {},
//   topRightDivStyle = {},
//   bottomCardProps = {},
//   bottomDivStyle = {},
//   children,
//   ...rest
// }) => {
//   const sidebarMargin = sidebarPosition === 'right' ? { marginRight: '45px' } : { marginLeft: '45px' };

//   return (
//     <div className='divy' style={{ marginLeft: '10px', ...sidebarMargin, ...rest.style }}>
//       <div {...svgSliderProps} style={{ height: 'calc(100% - 100px)', width:'45%' }}>
//         {React.Children.map(children, child => {
//           if (child.type.name === 'SVGSlider') {
//             return React.cloneElement(child, { ...svgSliderProps });
//           }
//           return null;
//         })}
//       </div>
//       <div className="content-wrapper" style={{ width: '70%', height: '100%', backgroundColor: 'lightgray' }}>
//         <div className="top-row" style={{ display: 'flex', flexDirection: 'row' }}>
//           {React.Children.map(children, child => {
//             if (child.type.name === 'VerticalScrollingFormulaWidget') {
//               return React.cloneElement(child, { ...formulaWidgetProps });
//             }
//             return null;
//           })}
//           <div
//             style={{
//               width: '50%',
//               margin: '1px',
//               height: '251px',  // Adjust this value as needed
//               ...topRightDivStyle
//             }}
//           >
//             {topRightCardProps.title ? (
//               <Card {...topRightCardProps} style={topRightDivStyle} />
//             ) : (
//               <div
//                 style={{
//                   backgroundColor: '#3faddf',
//                   width: '100%',
//                   height: '100%',
//                   color: 'white',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   borderRadius: '8px',
//                   fontSize: '18px',
//                   fontWeight: '500',
//                   ...topRightDivStyle
//                 }}
//               >
//                 Some Div
//               </div>
//             )}
//           </div>
//         </div>
//         <div
//           style={{
//             backgroundColor: '#5e35b1',
//             width: '100%',
//             color: 'white',
//             height: '140px',
//             borderRadius: '5px',
//             margin: '2px',
//             ...bottomDivStyle
//           }}
//         >
//           Some Div
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlexibleLayout;
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Card = ({ title, content, icon: Icon, link, style, isBottomCard = false }) => (
  <div
    style={{
      backgroundColor: '#3faddf',
      width: '100%',
      height: '100%',
      color: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      ...style
    }}
  >
    <div style={{ padding: isBottomCard ? '10px' : '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: isBottomCard ? '8px' : '16px' }}>
        {Icon && <Icon style={{ width: isBottomCard ? '18px' : '24px', height: isBottomCard ? '18px' : '24px', marginRight: '8px', flexShrink: 0 }} />}
        <h2 style={{ fontSize: isBottomCard ? '18px' : '24px', fontWeight: '600', margin: 0, lineHeight: '1.2' }}>{title}</h2>
      </div>
      {!isBottomCard && <br/>}
      <p style={{ 
        fontSize: isBottomCard ? '14px' : '16px', 
        lineHeight: '1.3', 
        marginBottom: isBottomCard ? '8px' : '20px',
        marginLeft: isBottomCard ? '0' : '20px',
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: isBottomCard ? 2 : 3,
        WebkitBoxOrient: 'vertical'
      }}>{content}</p>
    </div>
    {link && (
      <a
        href={link}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isBottomCard ? '4px 8px' : '8px 16px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'background-color 0.3s ease',
          fontSize: isBottomCard ? '12px' : '14px'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
      >
        Learn More
        <ArrowRight style={{ marginLeft: '4px', width: isBottomCard ? '14px' : '18px', height: isBottomCard ? '14px' : '18px' }} />
      </a>
    )}
  </div>
);

const FlexibleLayout = ({
  sidebarPosition = 'right',
  svgSliderProps = {},
  formulaWidgetProps = {},
  topRightCardProps = {},
  topRightDivStyle = {},
  bottomCards = [],
  bottomDivStyle = {},
  children,
  ...rest
}) => {
  const sidebarMargin = sidebarPosition === 'right' ? { marginRight: '45px' } : { marginLeft: '45px' };

  return (
    <div className='divy' style={{ marginLeft: '10px', ...sidebarMargin, ...rest.style }}>
      <div {...svgSliderProps} style={{ height: 'calc(100% - 100px)', width:'45%' }}>
        {React.Children.map(children, child => {
          if (child.type.name === 'SVGSlider') {
            return React.cloneElement(child, { ...svgSliderProps });
          }
          return null;
        })}
      </div>
      <div className="content-wrapper" style={{ width: '70%', height: '100%', backgroundColor: 'lightgray' }}>
        <div className="top-row" style={{ display: 'flex', flexDirection: 'row' }}>
          {React.Children.map(children, child => {
            if (child.type.name === 'VerticalScrollingFormulaWidget') {
              return React.cloneElement(child, { ...formulaWidgetProps });
            }
            return null;
          })}
          <div
            style={{
              width: '50%',
              margin: '1px',
              height: '251px',
              ...topRightDivStyle
            }}
          >
            {topRightCardProps.title ? (
              <Card {...topRightCardProps} style={topRightDivStyle} />
            ) : (
              <div
                style={{
                  backgroundColor: '#3faddf',
                  width: '100%',
                  height: '100%',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: '500',
                  ...topRightDivStyle
                }}
              >
                Some Div
              </div>
            )}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '140px',
            borderRadius: '5px',
            margin: '2px',
            ...bottomDivStyle
          }}
        >
          {bottomCards.length > 0 ? (
            bottomCards.map((cardProps, index) => (
              <div key={index} style={{ flex: 1, marginRight: index < bottomCards.length - 1 ? '8px' : '0' }}>
                <Card {...cardProps} isBottomCard={true} style={{ height: '100%', backgroundColor: '#5e35b1', ...cardProps.style }} />
              </div>
            ))
          ) : (
            <div
              style={{
                backgroundColor: '#5e35b1',
                width: '100%',
                height: '100%',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '5px',
                fontSize: '18px',
                fontWeight: '500',
              }}
            >
              Some Div
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlexibleLayout;