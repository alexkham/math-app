const angleExplanations = {
  angleTypes: {
    acute: {
      title: "Acute Angle",
      content: "An acute angle measures between 0° and 90°. These angles are smaller than a right angle and appear 'sharp' or 'pointed'. Common examples include the angles in an equilateral triangle (60°) or the corner of a typical house roof."
    },
    right: {
      title: "Right Angle", 
      content: "A right angle measures exactly 90°. This forms a perfect 'L' shape and is fundamental in geometry. Right angles are found in squares, rectangles, and are essential for perpendicular lines. The symbol ∟ often marks right angles in diagrams."
    },
    obtuse: {
      title: "Obtuse Angle",
      content: "An obtuse angle measures between 90° and 180°. These angles are larger than a right angle but smaller than a straight line. They appear 'wide' or 'open'. You can find obtuse angles in some triangles and many everyday objects."
    },
    straight: {
      title: "Straight Angle",
      content: "A straight angle measures exactly 180°. This forms a straight line, where the two rays point in completely opposite directions. It's essentially half a full rotation and divides a plane into two equal parts."
    },
    reflex: {
      title: "Reflex Angle", 
      content: "A reflex angle measures between 180° and 360°. These angles are larger than a straight angle and 'bend back' more than halfway around. To visualize a reflex angle, imagine rotating more than halfway but less than a complete turn."
    }
  },

  quadrants: {
    1: {
      title: "First Quadrant (I)",
      content: "In Quadrant I, both x and y coordinates are positive. All trigonometric functions (sin, cos, tan) are positive here. This quadrant contains angles from 0° to 90° and represents the 'northeast' section of the coordinate plane."
    },
    2: {
      title: "Second Quadrant (II)", 
      content: "In Quadrant II, x is negative and y is positive. Here, sine is positive while cosine and tangent are negative. This quadrant contains angles from 90° to 180° and represents the 'northwest' section."
    },
    3: {
      title: "Third Quadrant (III)",
      content: "In Quadrant III, both x and y coordinates are negative. Here, tangent is positive while sine and cosine are negative. This quadrant contains angles from 180° to 270° and represents the 'southwest' section."
    },
    4: {
      title: "Fourth Quadrant (IV)",
      content: "In Quadrant IV, x is positive and y is negative. Here, cosine is positive while sine and tangent are negative. This quadrant contains angles from 270° to 360° and represents the 'southeast' section."
    }
  },

  specialAngles: {
    0: {
      title: "0° - Zero Angle",
      content: "At 0°, we're pointing along the positive x-axis. sin(0°) = 0, cos(0°) = 1, tan(0°) = 0. This represents no rotation from the initial position."
    },
    30: {
      title: "30° - Special Angle",
      content: "30° is part of the 30-60-90 triangle family. sin(30°) = 1/2, cos(30°) = √3/2, tan(30°) = √3/3. This angle appears frequently in geometric constructions and has exact trigonometric values."
    },
    45: {
      title: "45° - Special Angle", 
      content: "45° creates a perfect diagonal, bisecting a right angle. sin(45°) = cos(45°) = √2/2, tan(45°) = 1. This angle is fundamental in isosceles right triangles and creates equal x and y components."
    },
    60: {
      title: "60° - Special Angle",
      content: "60° completes the 30-60-90 triangle. sin(60°) = √3/2, cos(60°) = 1/2, tan(60°) = √3. This angle is one-third of 180° and appears in equilateral triangles where each angle measures 60°."
    },
    90: {
      title: "90° - Right Angle",
      content: "90° points straight up along the positive y-axis. sin(90°) = 1, cos(90°) = 0, tan(90°) = ∞ (undefined). This represents a quarter turn and is perpendicular to the x-axis."
    },
    120: {
      title: "120° - Supplementary to 60°",
      content: "120° is in the second quadrant. sin(120°) = √3/2, cos(120°) = -1/2, tan(120°) = -√3. Notice how sine keeps the same value as 60° but cosine and tangent become negative."
    },
    135: {
      title: "135° - Supplementary to 45°", 
      content: "135° creates a diagonal in the second quadrant. sin(135°) = √2/2, cos(135°) = -√2/2, tan(135°) = -1. This angle maintains the same sine value as 45° but with negative cosine."
    },
    150: {
      title: "150° - Supplementary to 30°",
      content: "150° is in the second quadrant. sin(150°) = 1/2, cos(150°) = -√3/2, tan(150°) = -√3/3. The sine value matches 30° while cosine and tangent are negative."
    },
    180: {
      title: "180° - Straight Angle",
      content: "180° points along the negative x-axis. sin(180°) = 0, cos(180°) = -1, tan(180°) = 0. This represents a half turn, pointing in the exactly opposite direction from 0°."
    },
    210: {
      title: "210° - Third Quadrant",
      content: "210° is 30° past the negative x-axis. sin(210°) = -1/2, cos(210°) = -√3/2, tan(210°) = √3/3. Both sine and cosine are negative, but tangent is positive in quadrant III."
    },
    225: {
      title: "225° - Third Quadrant",
      content: "225° creates a diagonal in the third quadrant. sin(225°) = -√2/2, cos(225°) = -√2/2, tan(225°) = 1. Both components are negative but equal in magnitude."
    },
    240: {
      title: "240° - Third Quadrant", 
      content: "240° is 60° past the negative x-axis. sin(240°) = -√3/2, cos(240°) = -1/2, tan(240°) = √3. This maintains the 30-60-90 triangle relationships with appropriate signs."
    },
    270: {
      title: "270° - Three Quarter Turn",
      content: "270° points straight down along the negative y-axis. sin(270°) = -1, cos(270°) = 0, tan(270°) = ∞ (undefined). This represents three-quarters of a full rotation."
    },
    300: {
      title: "300° - Fourth Quadrant",
      content: "300° is in the fourth quadrant. sin(300°) = -√3/2, cos(300°) = 1/2, tan(300°) = -√3. Cosine is positive while sine and tangent are negative."
    },
    315: {
      title: "315° - Fourth Quadrant",
      content: "315° creates a diagonal in the fourth quadrant. sin(315°) = -√2/2, cos(315°) = √2/2, tan(315°) = -1. This is 45° before completing a full rotation."
    },
    330: {
      title: "330° - Fourth Quadrant", 
      content: "330° is 30° before completing a full turn. sin(330°) = -1/2, cos(330°) = √3/2, tan(330°) = -√3/3. Cosine is positive while sine and tangent are negative."
    },
    360: {
      title: "360° - Full Rotation",
      content: "360° completes a full rotation back to 0°. sin(360°) = 0, cos(360°) = 1, tan(360°) = 0. This angle is coterminal with 0° and represents one complete turn around the circle."
    }
  },

  concepts: {
    complementary: {
      title: "Complementary Angles",
      content: "Two angles are complementary if they add up to 90°. When you see the complementary angle displayed, it shows how much more you need to reach a right angle. For example, 30° and 60° are complementary because 30° + 60° = 90°."
    },
    supplementary: {
      title: "Supplementary Angles", 
      content: "Two angles are supplementary if they add up to 180°. The supplementary angle shown represents how much more you need to form a straight line. For example, 120° and 60° are supplementary because 120° + 60° = 180°."
    },
    reference: {
      title: "Reference Angle",
      content: "A reference angle is the acute angle between the terminal ray and the x-axis. It's always between 0° and 90° and helps determine the sign and magnitude of trigonometric functions. Reference angles make calculations easier by relating any angle to a familiar acute angle."
    },
    coterminal: {
      title: "Coterminal Angles",
      content: "Coterminal angles differ by full rotations (360°). They have the same terminal ray position and identical trigonometric values. Adding or subtracting 360° creates coterminal angles. For example, 45°, 405°, and -315° are all coterminal."
    },
    trigonometric: {
      title: "Trigonometric Functions",
      content: "The six trigonometric functions relate angles to ratios in right triangles and positions on the unit circle. Sine (sin) represents the y-coordinate, cosine (cos) the x-coordinate, and tangent (tan) the ratio y/x. The reciprocal functions are cosecant (csc), secant (sec), and cotangent (cot)."
    }
  },

  general: {
    title: "Angle Measurement",
    content: "Angles can be measured in degrees (°) or radians. A full circle is 360° or 2π radians. Angles are formed by two rays sharing a common endpoint called the vertex. The amount of rotation from the initial ray to the terminal ray determines the angle's measure."
  }
};

export default angleExplanations;