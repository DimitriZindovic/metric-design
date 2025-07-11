# metric-design

[![npm version](https://badge.fury.io/js/%40noahs%2Fmetric-design.svg)](https://www.npmjs.com/package/@dimitrizindovic/metric-design?activeTab=readme)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Modern React UI component library with TypeScript support, featuring progress indicators, charts, and essential UI elements for data visualization and user interfaces.

## Installation

```bash
npm install @dimitrizindovic/metric-design
```

## Usage

### Basic Import

```typescript
import {
  Button,
  Title,
  ProgressLinear,
  ProgressCircular,
  BarChart,
} from '@dimitrizindovic/metric-design';
```

### Button Component

Simple, customizable button with default styling.

```typescript
import { Button } from '@dimitrizindovic/metric-design'

// Basic usage
<Button onClick={() => console.log('Clicked!')}>
  Click me
</Button>

// With custom styles
<Button
  style={{ backgroundColor: '#28a745' }}
  onClick={handleSubmit}
>
  Submit
</Button>
```

### Title Component

Flexible heading component supporting all HTML heading levels (h1-h6).

```typescript
import { Title } from '@dimitrizindovic/metric-design'

// Default h1
<Title>Main Title</Title>

// Specific heading level
<Title level={2}>Subtitle</Title>
<Title level={3}>Section Title</Title>

// With custom attributes
<Title level={1} className="hero-title">
  Welcome to Our App
</Title>
```

### Progress Components

#### ProgressLinear

Horizontal progress bar with customization options.

```typescript
import { ProgressLinear } from '@dimitrizindovic/metric-design'

// Basic progress bar
<ProgressLinear progress={75} />

// Customized with percentage display
<ProgressLinear
  progress={60}
  height={25}
  progressColor="#28a745"
  backgroundColor="#f8f9fa"
  showPercentage={true}
/>

// Animated indeterminate progress
<ProgressLinear
  progress={0}
  animated={true}
  animationSpeed={2}
/>
```

#### ProgressCircular

Circular progress indicator with SVG rendering.

```typescript
import { ProgressCircular } from '@dimitrizindovic/metric-design'

// Basic circular progress
<ProgressCircular progress={85} />

// Customized appearance
<ProgressCircular
  progress={70}
  size={150}
  strokeWidth={12}
  circleTwoStroke="#dc3545"
  showPercentage={true}
/>

// Without animation
<ProgressCircular
  progress={45}
  disableAnimation={true}
/>
```

### BarChart Component

Advanced bar chart with horizontal/vertical orientation and threshold support.

```typescript
import { BarChart } from '@dimitrizindovic/metric-design'

const data = [
  { label: 'Q1', value: 120, color: '#3b82f6' },
  { label: 'Q2', value: 150, color: '#10b981' },
  { label: 'Q3', value: 180, color: '#f59e0b' },
  { label: 'Q4', value: 200, color: '#ef4444' }
];

// Vertical bar chart
<BarChart
  data={data}
  width={600}
  height={400}
/>

// Horizontal bar chart with thresholds
const thresholds = [
  { value: 160, label: 'Target', color: '#dc3545' }
];

<BarChart
  data={data}
  width={600}
  height={400}
  isHorizontal={true}
  thresholds={thresholds}
  maxValue={250}
/>
```

## API Reference

### Button

A styled button component with full HTML button attributes support.

**Props:**

- Extends all standard HTML button attributes
- `children` (ReactNode): Button content
- `style` (CSSProperties): Custom styles (merged with default styles)

### Title

Flexible heading component for different hierarchy levels.

**Props:**

- `children` (ReactNode): Title content
- `level` (1 | 2 | 3 | 4 | 5 | 6): Heading level (default: 1)
- Extends all standard HTML heading attributes

### ProgressLinear

Horizontal progress bar component.

**Props:**

- `progress` (number): Progress value (0-100)
- `size` (number | string): Width of the progress bar (default: '100%')
- `height` (number): Height in pixels (default: 20)
- `backgroundColor` (string): Background color (default: '#e0e0e0')
- `progressColor` (string): Progress fill color (default: '#3b82f6')
- `animated` (boolean): Enable indeterminate animation (default: false)
- `animationSpeed` (number): Animation duration in seconds (default: 1.5)
- `showPercentage` (boolean): Display percentage text (default: false)

### ProgressCircular

Circular progress indicator using SVG.

**Props:**

- `progress` (number): Progress value (0-100)
- `size` (number): Diameter in pixels (default: 120)
- `strokeWidth` (number): Circle stroke width (default: 10)
- `circleOneStroke` (string): Background circle color (default: '#e0e0e0')
- `circleTwoStroke` (string): Progress circle color (default: '#3b82f6')
- `showPercentage` (boolean): Display percentage text (default: true)
- `percentageFontSize` (number): Font size for percentage text
- `disableAnimation` (boolean): Disable progress animation (default: false)
- Extends all standard SVG element attributes

### BarChart

Advanced bar chart component with customization options.

**Props:**

- `data` (BarChartData[]): Array of chart data
  - `label` (string): Bar label
  - `value` (number): Bar value
  - `color` (string): Bar color (optional)
- `width` (number): Chart width in pixels (default: 600)
- `height` (number): Chart height in pixels (default: 300)
- `barWidth` (number): Width of individual bars (default: 40)
- `maxValue` (number): Maximum value for scaling (auto-calculated if not provided)
- `isHorizontal` (boolean): Horizontal orientation (default: false)
- `thresholds` (Threshold[]): Array of threshold lines (optional)
  - `value` (number): Threshold value
  - `label` (string): Threshold label (optional)
  - `color` (string): Line color (default: 'red')
  - `strokeWidth` (number): Line width (default: 2)

**Features:**

- SVG export functionality
- Automatic scaling and grid lines
- Threshold indicators
- Responsive design
- Both vertical and horizontal orientations

## Features

- **🎨 Modern UI Components**: Clean, accessible components with TypeScript support
- **📊 Data Visualization**: Interactive bar charts with export functionality
- **⏳ Progress Indicators**: Both linear and circular progress components
- **🎯 Customizable**: Extensive styling and configuration options
- **📱 Responsive**: Components adapt to different screen sizes
- **🧪 Well Tested**: Comprehensive visual regression testing with Playwright
- **♿ Accessible**: ARIA compliant components for better accessibility
- **🚀 Performance**: Lightweight components with minimal dependencies

## Components Overview

### UI Elements

- **Button**: Styled button with hover effects and customization
- **Title**: Semantic heading component (h1-h6) with consistent styling

### Progress Indicators

- **ProgressLinear**: Horizontal progress bars with animation support
- **ProgressCircular**: SVG-based circular progress with smooth animations

### Data Visualization

- **BarChart**: Feature-rich bar charts with thresholds, export, and dual orientation

### Navigation

- **Navigation**: React Router integration for multi-page applications

## Development

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- Modern browser for testing

### Install Dependencies

```bash
npm install
```

### Available Scripts

```bash
# Run the development server
npm start

# Run tests
npm test

# Run visual regression tests (Playwright)
npm run test:visual

# Build for production
npm run build

# Linter
npm run lint

# Format code
npm run format

# TypeScript type checking
npm run typecheck
```

### Project Structure

```
metric-design/
├── src/
│   ├── components/          # React components
│   │   ├── Button.tsx
│   │   ├── Navigation.tsx
│   │   ├── Title/
│   │   │   └── Title.tsx
│   │   ├── ProgressLinear/
│   │   │   └── ProgressLinear.tsx
│   │   ├── ProgressCircular/
│   │   │   ├── ProgressCircular.tsx
│   │   │   └── ProgressCircularTest.tsx
│   │   └── BarChart/
│   │       └── BarChart.tsx
│   ├── pages/               # Demo pages
│   │   ├── HomePage.tsx
│   │   └── ProgressCircularTestPage.tsx
│   ├── App.tsx             # Main application
│   ├── index.tsx           # Entry point
│   └── index.css           # Global styles
├── tests/                  # Playwright visual tests
│   ├── Button/
│   ├── BarChart/
│   ├── ProgressCircular/
│   └── Title/
├── public/                 # Static assets
├── package.json
├── tsconfig.json           # TypeScript config
└── README.md
```

## Contributing

Contributions are welcome!

1. Fork the project
2. Create a branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push (`git push origin feature/my-feature`)
5. Open a Pull Request

### Contribution Guidelines

- All tests must pass (including visual regression tests)
- Follow the code style (`npm run lint` and `npm run format`)
- Add tests for any new components or features
- Update documentation and examples
- Ensure components are accessible and responsive
- Test across different browsers and devices

## Testing

This project uses Playwright for visual regression testing to ensure components render consistently across different environments.

```bash
# Run all tests
npm test

# Run visual tests specifically
npm run test:visual

# Update visual test baselines
npm run test:visual -- --update-snapshots
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments

- Thanks to all contributors
- Inspired by modern React component libraries and design systems
- Built with React, TypeScript, and Playwright for reliable testing

---

Created with ❤️ by [Dimitri Z., Noah S. and Antoine SCH](https://github.com/noahs)
