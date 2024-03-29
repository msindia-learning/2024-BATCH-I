# CSS ADVANCED

## CSS Rounded Corners
```css
border-radius: top-left top-right bottom-right bottom-left;
```
## CSS border-image Property

```css
border-image: url(border.png) 30% round;
```
`border-image:border-image-source border-image-slice border-image-width border-image-outset border-image-repeat`

## CSS Multiple Backgrounds
```css
background: image-url1 position repeat,image-url2 position repeat,etc;
```
`background`	A shorthand property for setting all the background properties in one declaration

`background-clip`	Specifies the painting area of the background

`background-image`	Specifies one or more background images for an element

`background-origin`	Specifies where the background image(s) is/are positioned

`background-size`	Specifies the size of the background image(s)

## COLORS:
``` css
#p1 {background-color: hsla(120, 100%, 50%, 0.3);} 
```
### CSS Color Keywords

`transparent`
`currentcolor`
`inherit`

## CSS Gradients

Linear Gradients (goes down/up/left/right/diagonally):

`
#grad {
  background-image: linear-gradient(red, yellow);
}`

Radial Gradients (defined by their center)

`
#grad {
  background-image: radial-gradient(circle, red, yellow, green);
}
`

Conic Gradients (rotated around a center point)

`
background-image: conic-gradient([from angle] [at position,] color [degree], color [degree], ...);
`

`repeating-conic-gradient()`	Repeats a conic gradient

`repeating-linear-gradient()`	Repeats a linear gradient

`repeating-radial-gradient()`	Repeats a radial gradient

## CSS Shadow Effects
```css 
h1 {
  text-shadow: 0 0 3px #FF0000; /*horizon vertical blur color*/
}

div {
  box-shadow: 10px 10px 5px lightblue;
}

```

## CSS Text Effect Properties

`text-justify`	Specifies how justified text should be aligned and spaced

`text-overflow`	Specifies how overflowed content that is not displayed should be signaled to the user

`word-break`	Specifies line breaking rules for non-CJK scripts

`word-wrap`	Allows long words to be able to be broken and wrap onto the next line

`writing-mode`	Specifies whether lines of text are laid out horizontally or vertically

`matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())`

## CSS Tooltip
```css
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  
  /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */
  opacity: 0;
  transition: opacity 1s;
}
```

## Object Fit
```
object-fit	Specifies how an <img> or <video> should be resized to fit its container
object-position	Specifies how an <img> or <video> should be positioned
```

## CSS Variables
```
var()	Inserts the value of a CSS variable
```

## CSS Box Sizing
```
box-sizing	the width and height of an element are calculated: should they include padding and borders, or not
```

## CSS Media Queries
```
@media not|only mediatype and (media feature) and (media feature) {
  CSS-Code;
}
```
## CSS FlexBox
### justify-content property - aligns items horizontally 

`flex-start`: Items align to the left side of the container.

`flex-end`: Items align to the right side of the container.

`center`: Items align at the center of the container.

`space-between`: Items display with equal spacing between them.

`space-around`: Items display with equal spacing around them.

### align-items property - aligns items vertically

`flex-start`: Items align to the top of the container.

`flex-end`: Items align to the bottom of the container.

`center`: Items align at the vertical center of the container.

`baseline`: Items display at the baseline of the container.

`stretch`: Items are stretched to fit the container.

### flex-direction -  defines the direction items are placed in the container

`row`: Items are placed the same as the text direction.

`row-reverse`: Items are placed opposite to the text direction.

`column`: Items are placed top to bottom.

`column-reverse`: Items are placed bottom to top.

`order` :  to reorder the items in the container

Another property you can apply to individual items is `align-self`

### flex-wrap

`nowrap`: Every item is fit to a single line.

`wrap`: Items wrap around to additional lines.

`wrap-reverse`: Items wrap around to additional lines in reverse.

`flex-flow: flex-direction flex-wrap` - shorthand property accepts the value of the two properties separated by a space.

## align-contents

Aligns a flex container's lines within the flex container when there is extra space on the cross-axis.

`flex-start`: Lines are packed at the top of the container.

`flex-end`: Lines are packed at the bottom of the container.

`center`: Lines are packed at the vertical center of the container.

`space-between`: Lines display with equal spacing between them.

`space-around`: Lines display with equal spacing around them.

`stretch`: Lines are stretched to fit the container.

```css
/* This is just how I think about the rule above in my head */

.child {
  flex: [flex-grow] [flex-shrink] [flex-basis];
}

/* or... */

.child {
  flex: [max] [min] [ideal size];
}
```
