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
