# processContent Function Reference

A React utility function that converts enhanced markdown-like text into rendered JSX with support for math, styling, links, and academic blocks.

## Basic Usage

```javascript
import { processContent } from './utils/contentProcessor';

// Basic text
processContent("Hello world")

// With custom styles
processContent(content, { markdownLink: 'custom-link-class' })
```

## Text Formatting

### Headings
```
# Main Heading
## Sub Heading  
### Section Heading
```

### Bold Text
```
**bold text**
```

### Line Breaks & Tabs
```
Line 1\nLine 2          // \n creates new line
Text\tTabbed            // \t creates tab indentation
	Physical tab        // Actual tab character for indentation
```

### Lists
```
- First item
- Second item
	- Nested item (use tabs)
```

## Math Rendering

### Inline Math
```
This is inline math: $x^2 + y^2 = z^2$
```

### Block Math
```
$$\frac{n!}{r!(n-r)!}$$
```

## Links

### External Links
```
[Link text](https://example.com)
```

### Same Tab Links
```
[Link text](!https://example.com)
```

### Internal Navigation
```
[Go to section](!/path/to/section)
```

## Styled Content

### Inline Code
```
Use @[variable name]@ for code snippets
```

### Styled Spans
```
@span[backgroundColor:#e3f2fd,padding:4px 8px,borderRadius:4px]:Styled content@
@span[color:#1976d2,fontSize:14px]:Blue text@
@span[backgroundColor:#fff3cd,border:1px solid #ffeaa7]:[Link inside span](!/link)@
```

**Supported CSS Properties:**
- `backgroundColor`
- `color`
- `fontSize`
- `padding`
- `margin`
- `borderRadius`
- `border`
- Any valid CSS property in camelCase

## Tables

```
@table:[
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
]@
```

## Tab Links

```
#tab:tabName#
```

## Academic Blocks

```
@academic[blockType:Content goes here]@
@academic[blockType,width:300px:Content with custom width]@
```

## HTML & SVG

Raw HTML and SVG are preserved and rendered:
```html
<div class="custom">Custom HTML</div>
<svg>...</svg>
```

## Complex Examples

### Styled Link Button
```
@span[backgroundColor:#007bff,color:white,padding:8px 16px,borderRadius:6px,textDecoration:none]:[Download PDF](!/files/document.pdf)@
```

### Math with Explanation
```
The quadratic formula is $$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$ where:
- **a**, **b**, **c** are coefficients
- The discriminant is $b^2-4ac$
```

### Combined Content
```
## Formula Explanation

The combination formula @span[backgroundColor:#f0f8ff,padding:2px 4px]:$C(n,r) = \frac{n!}{r!(n-r)!}$@ calculates selections where **order doesn't matter**.

@table:[
| n | r | Result |
|---|---|--------|
| 5 | 2 | 10     |
| 6 | 3 | 20     |
]@

[Learn more about combinations](!/combinatorics/combinations)
```

## Advanced Features

### Custom Styles Object
```javascript
const customStyles = { markdownLink: 'my-custom-link-class' };
processContent(content, customStyles);
```

### Placeholders System
The function uses internal placeholders for complex content:
- `__ACADEMIC_PLACEHOLDER_N__`
- `__SVG_PLACEHOLDER_N__`
- `__HTML_PLACEHOLDER_N__`

### Tab Indentation
```
Regular text
	Indented text (2em margin)
		Double indented (4em margin)
```

### Line Processing
- Empty lines create `<br>` elements
- List items can span multiple lines
- Headings override other formatting

## Processing Order

1. Academic blocks → placeholders
2. SVG elements → placeholders  
3. HTML elements → placeholders
4. Tab links → HTML placeholders
5. Line-by-line processing with part splitting
6. Placeholder replacement during rendering

## Notes

- Styled spans support nested content (links, math, bold text)
- Tab indentation creates visual hierarchy
- CSS properties use camelCase (backgroundColor, not background-color)
- Links with `!` open in same tab, without `!` open in new tab
- Academic blocks require separate `renderAcademicBlockHTML` function
- Function returns JSX elements wrapped in `<ul>` if lists detected, otherwise `<>` fragment