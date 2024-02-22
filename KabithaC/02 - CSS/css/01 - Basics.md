#CSS

## Basics
'''css
- cascading stylesheet.
- used to design the webpage.
- used to control the layout and functionality.
'''
## CSS SYNTAX
''' css
<style>
     <link href="style.css"  rel="stylesheet"> - link to next page

   h1{
        color:green; font-size:10px;
   }
  h1 - selector points to html elements like <p> , h1, container.
  { } - declaration area.
  color and font-size - denotes the property with colon.
  green and 10px are denoted by value with semicolon.
'''
## CSS SELECTOR
''' css
  Simple Selectors ( select elements based on name , id , class)
  * Elements selector -Targets HTML elements by their tag name.
  * ID selector - id is a unique attribute start with #symbol.
     * syntax : <p id="task"> CSS platform </p>
                <style>
                #task{
                        }
                </style>
 * Class selector - used to specify the class attribute start with dot symbol.
       *syntax: <p class ="container" > HTML Platform <p>

 * Universal selector - select all html elemnts on the page.
 * Grouping selector - same styles to multiple selectors at once listing them together separated by commas.
 * <div> - only focus on design not meaning.
 * <section> -only focus on the semantic meaning.
'''
## ADD CSS
'''css
* External CSS  - change the look of an entire website by changing just one file.It is a separate css file.             
     <head>  <link rel="stylesheet" type="text/css" href="styles.css"></head>
            
* Internal CSS  - with in the html document itself using <style> tag within the <head> section.
         <head>
           <style>
              body {            
                     }
           </style>
        </head>
       </body>

* Inline CSS    - within individual HTML elements using the style attribute.
     <p style="font-family: Arial, sans-serif; color: #333;">This is a paragraph.</p>
'''
## COMMENTS
 '''css
     * Single-line comments - /* ----- */
 '''
## COLORS
 '''css
      predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.
 <p style="background-color:violet;> INDIA </p>  - background color
 <p style="border:2px solid green;> Forest </p>  - border color
 <h3 style="color:Tomato;">Hello World</h3>      - text color
 HSL - hue(degree of the color wheel) , saturation (intensity of the color 0% gray) , lightness(0% black)
 HSLA - alpha (make transparent colors)

 ## BACKGROUNDS
 ''' css
  background-color : used to background color of an element.
  background-image:  set the background image for a page.
  background-image: repeat; - an image both vertically and vertically.
       background-repeat: repeat-x; - repeat only horizontal.
       background-position: ;  starting position of the  bg image.
'''
## BORDERS 
''' css
  - border to display.
  - <p style="border:3px dashed"> </p>
  - dotted - Defines a dotted border
  -  solid - Defines a solid border
  - double - Defines a double border
  - groove - Defines a 3D grooved border. 
  - ridge - Defines a 3D ridged border. 
  - inset - Defines a 3D inset border. 
  - outset - Defines a 3D outset border. 
  - none - Defines no border
  - hidden - define the hidden border.
   Border-width   -specifies the width of the four borders.
   Border-Individual  specify a different border for each side.
 '''
 ## MARGIN
 '''css 
    Margin - used to create space around elements, outside the borders.
      *margin-top = 25px;
      *margin-right =50px;
      *margin-bottom =75px;
      *margin-left = 100px;
   margin-left: inherit from the parent.
   auto- used to horizontally center the element within its container.(specify the width and remain space split equally.)
   '''
   ## PADDING
   ''' css
     Used to create space around an elements content, inside the borders. 
   '''
   ## CSS HEIGTH, WIDTH and MAX_WIDTH
   '''css
   Height and width - Inside the padding, border, and margin of the element.
      * auto  - This is default.
      * length - used to px,cm .
      * %      - denote in percent value.
      * initial - initial set the height and width . That value is denoted as default.
      * inherit - inherits from the parent value.
   '''
   ## BOX MODEL
   '''css
   Box model is used to design and layout.
      * content - it contain text and images appear.
      * padding - space between the content of an element and its border.
      * border -  to specify the width, style, and color of the border.
      * margin - Margin is the space outside an element.
   '''