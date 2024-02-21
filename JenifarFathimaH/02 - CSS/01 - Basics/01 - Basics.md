```markdown
# CSS
Used to style web pages.

## CSS Syntax
`selector { property: value; }`
```css
p { color: green; }
```

## CSS Selectors
Selectors are used to select HTML elements for styling. They include:
- Simple selectors (select elements based on name, ID, class)
- Combinator selectors (select elements based on relationships between them)
- Pseudo-class selectors (select elements based on certain states)
- Pseudo-element selectors (select and style parts of elements)
- Attribute selectors (select elements based on attributes or attribute values)

### CSS Element Selector
```css
p {
  text-align: center;
  color: blue;
}
```

### The CSS ID Selector
```css
#idname {
  text-align: center;
  color: red;
}
```

### The CSS Class Selector
```css
.classname {
  text-align: center;
  color: green;
}
```

### The CSS Universal Selector
```css
* {
  text-align: center;
  color: blue;
}
```

### The CSS Grouping Selector
```css
h1, h2, p {
  text-align: center;
  color: red;
}
```

### CSS Class Element Selector
```css
p.classname {
    text-align: center;
    color: red;
}
```

## CSS Types

### External CSS
```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css"> <!-- External CSS -->
</head>
<body>
<!-- Body Content -->
</body>
</html>
```

### Internal CSS
```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: wheat;
}
h1 {
  color: skyblue;
  margin-left: 40px;
}
</style><!-- Internal CSS -->
</head>
<body>
<h1>Internal CSS</h1>
</body>
</html>
```

### Inline CSS
```html
<!DOCTYPE html>
<html>
<body>
<h1 style="color: blue; text-align: center;">Inline CSS</h1><!-- Inline CSS -->
</body>
</html>
```

#### Cascading Order: 
Inline > Internal and External > Browser default

## CSS Comments
```css
/* Single-line comment */
/* Multi-line comment */
```

## CSS Colors
```css
p {
    background-color: blue; /* Background color */
    color: black; /* Text color */
    border: 1px solid red; /* Border width, type, color */
}
```
Colors can be defined using:
- RGB values: `rgb(255,0,0)`
- HEX values: `#rrggbb`
- HSL values: `hsl(3,10%,87%)`
- RGBA values: `rgba(255,0,0,0.5)`
- HSLA values: `hsla(3,10%,87%,0.3)`

## CSS Backgrounds

### CSS background-color
```css
div {
  background-color: lightblue;
  opacity: 0.3;
}
```

### CSS background-image
```css
section {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed; /* Scroll */
  background-origin: content-box; /* Border-box, padding-box */
}
```
Shorthand property:
```css
section {
  background: #ffffff url("image.png") no-repeat right top;
}
```

### CSS Borders
```css
p.dotted { border-style: dotted; }
p.dashed { border-style: dashed; }
p.solid { border-style: solid; }
p.double { border-style: double; }
p.groove { border-style: groove; }
p.ridge { border-style: ridge; }
p.inset { border-style: inset; }
p.outset { border-style: outset; }
p.none { border-style: none; }
p.hidden { border-style: hidden; }
p.mix { border-style: dotted dashed solid double; /* Border-width: 2px; => top right bottom left, border-color: color-name; border-radius: 3px; */}
```

### CSS Border - Shorthand Property
```css
p {
  border: 5px solid red; /* Width, style, color */
}
```

## CSS Margin 
```css
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
/* SHORTHAND: margin: 20px 10px 20px 5px; */
```

## CSS Padding
```css
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
  /* Padding: 25px 50px 75px 100px; */
}
```

## CSS Height, Width, and Max-width
```css
div {
  min-height: 200px;
  max-width: 500px;
  background-color: powderblue;
}
```

## CSS Box Model
```css
div {
  width: 150px;
  height: 90px;
  padding: 32px;
  border: 5px solid gray;
  margin: 0;
}
```

## CSS Outline Style
Used to organize data without modifying it.
```css
p.dotted {outline-style: dotted;}
p.dashed {outline-style: dashed;}
p.solid {outline-style: solid;}
p.double {outline-style: double;}
p.groove {outline-style: groove;}
p.ridge {outline-style: ridge;}
p.inset {outline-style: inset;}
p.outset {outline-style: outset;}
p.ex1 {
  border: 1px solid black;
  outline-style: solid;
  outline-color: red;
  outline-width: thin;
  outline-offset: 15px;/*space between an element and its outline */
}
p.ex3 {outline: 5px solid yellow;}/*short hand property*/
```

## CSS Text
```css
div{
    color:purple;
    text-align: justify;/*center,left,right*/
    text-align-last: center;
}
img.a {
  vertical-align: baseline;/*text-top, text-bottom,sub,super*/
}
```

## CSS Text Decoration
```css
h1 {
  text-decoration-line: overline;/*line-tyhrough,underline*/
  text-decoration-color: red;
  text-decoration-style: solid;
  text-decoration-thickness: 5px;
  /*text-decoration: underline red double 5px; =>shorthand property*/
}
```

## CSS Text Transformation
```css
p.uppercase {
  text-transform: uppercase;/*lowercase,capitalize*/
}
```
## CSS Text Spacing
```css
p{
text-indent: 50px;
line-height: 0.8;
letter-spacing: 5px;
word-spacing: 10px;
white-space: nowrap;
}
```

## CSS Text Shadow
```css
h1 {
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;/*horizon ,vertical, blur,color*/
}
```
 
 ## CSS Fonts

 ### Font family
Serif fonts have a small stroke at the edges 
Sans-serif fonts have clean lines 
Monospace fonts - all the letters have the same fixed width. 
Cursive fonts - human handwriting.
Fantasy fonts are decorative fonts.

Web safe fonts - universally installed across all browsers and devices.
 ```css
p {
font-family: Tahoma, Verdana, sans-serif;/*fallback fonts*/
font-style: normal;/*italic,oblique*/
font-weight: bold;
font-variant: small-caps;/*whether or not a text should be displayed in a small-caps font.*/
font-size:16px;/* 1em=16px, vw-viewport width*/
}
```
Web safe fonts:
Arial (sans-serif)
Verdana (sans-serif)
Tahoma (sans-serif)
Trebuchet MS (sans-serif)
Times New Roman (serif)
Georgia (serif)
Garamond (serif)
Courier New (monospace)
Brush Script MT (cursive)

### CSS Google Fonts
```html
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple"><!--effect=effect_name-->
<style>
body {
  font-family: "Sofia", sans-serif;
}
</style>
</head>
```

## CSS Font Property
```css
p.b {
  font: oblique small-caps bold 12px/30px Georgia, serif;
  /*style,variant,weight,size,line height,family*/
}
```
## CSS Icons
```html
<script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script> <!--No download required-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><!--bootstrap icons-->
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"><!--google icons-->
```
## CSS Links
```css
a:link - a normal, unvisited link
a:visited - a link the user has visited
a:hover - a link when the user mouses over it
a:active - a link the moment it is clicked
```

## CSS lists
```css
ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}
ul {
  list-style: square inside url("sqpurple.gif");
}
ul.a {
  list-style-position: outside;
}

ul.b {
  list-style-position: inside;
}

```

## CSS Tables
```css
border	border properties
border-collapse	Specifies whether or not table borders should be collapsed
border-spacing	Specifies the distance between the borders of adjacent cells
caption-side	table caption
empty-cells	Specifies whether or not to display borders and background on empty cells in a table
table-layout	fixed,auto
```


