# CSS Notes

### Selectors&Comments
``html
        1.selector:
                *Universal Selector
                *Class Selector
                *Id Selector
                *Element selector
                *Group Selector

 ### Selector:
       1.Universal Selector:

               The universal selector (*) selects all HTML elements on the page.

        ex:
          * {
             text-align: center;
            color: blue;
            }

        2.Class Selector:
                  
                  The class selector selects HTML elements with a specific class attribute.To select elements with a specific class, write a period (.) character, followed by the class name
                  
        ex:
          .{
             text-align: center;
            color: blue;
            }

        3.Id Selector:
                 The id of an element is unique within a page, so the id selector is used to select one unique element. To select an element with a specific id, write a hash (#) character, followed by the id of the element.
             
         ex:
             #{
             text-align: center;
            color: blue;
            }

        4.element Selector:
                 The element selector selects HTML elements based on the element name.

         ex:
            p{
             text-align: center;
            color: blue;
            }

         5.Group Selector:
                   The grouping selector selects all the HTML elements with the same style definitions. Look at the following CSS code the h1, h2, and p elements have the same style definitions
                  
           ex:
               p,h1,a{
             text-align: center;
            color: blue;
            }
```


### Comments:


```html 


                
                Comments are ignored by browsers. A CSS comment is placed inside the style element, and starts with /* and ends with */

        ex:
           /* This is a single-line comment */
                p {
                    color: red;
                  }

            /* This is multi
               comment */

               p {
                       color: red;
                  }

### Colors:
   
                 Color: Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.
      Background-color: In CSS, a color can be specified by using a predefined color name. ex: tomoto,orange,violet,lightgrey,etc...,
            Text-color: used to coloring their text or paragraph.
          Border-color: set the color of borders.

        Color values:
                1.Normal color:
                        used for normal color values in the text format. ex: blue,green,yellow
      
                2.RGB Color:
                          RGB stands for Red,Green,Blue
                        ex:
                            <h1 style="background-color:rgb(255, 99, 71);">CSS COLORS</h1>

                3.Hexa Decimal color:
                          A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color.
                       ex:
                          body {
                                   background-color: #fc9; 
                                }

                4.HSL color:
                         HSL stands for hue, saturation, and lightness.
                         
                        ex:
                            body{
                               background-color:hsl(0, 0%, 47%);
                            }

                5.Alpha(opacity):
                        alpha is used to for hsl and rgb values.

```

### Backgrounds

```html
      The CSS background properties are used to add background effects for elements.

      1.background-color
      2.background-image
      3.background-repeat
      4.background-attachment
      5.background-position
      6.background 


                1.Background-color:
                         The background-color property specifies the background color of an element.

                    ex:
                      body {
                          background-color: lightblue;
                          background-color:#ffff;
                          background-color:rgb()
                           }

                2.Background-image:
                           The background-image property specifies an image to use as the background of an element.
                       ex:
                             body {
                                  background-image: url("paper.gif");
                                   }

                3.Background-repeat:
                                    background-image property repeats an image both horizontally and vertically.
                          repeat-x & repeat-y:

                                     If the image above is repeated only horizontally (background-repeat: repeat-x;)
                                     If the image above is repeated only vertically (background-repeat: repeat-y;)

                         no-repeat:
                                 the background image is placed in the same place as the text. We want to change the position of the image, so that it does not disturb the text too much.
                           ex:
                                  body {
                                       background-image: url("img_tree.png");
                                       background-repeat: no-repeat;
                                        }

                4.Background-Position:
                              The background-position property is used to specify the position of the background image.

                    ex:
                                body {
                                      background-image: url("img_tree.png");
                                      background-repeat: no-repeat;
                                      background-position: right top;
                                       background-position: left top;
                                        background-position: right bottom;
                                        background-position: right bottom;
                                     }

                5.Background-Attachment:
                                The background-attachment property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page).
                      
                      ex:
                          body{
                            background-attachment: fixed;
                            background-attachment: scroll;
                             }   

                6.Background (shorthand):
                               shorten the code, it is also possible to specify all the background properties in one single property. This is called a shorthand property.
                                
                           ex:
                                     body {    
                                            background: #ffffff url("img_tree.png") no-repeat right top;
                                           }
```

### Border

```html
            1.Border:
                  The CSS border properties allow you to specify the style width and color of an elements border.
            2.properities:
                   dotted - Defines a dotted border
                   dashed - Defines a dashed border
                   solid - Defines a solid border
                   double - Defines a double border
                   inset - Defines a 3D inset border. top la drak down la light
                   outset - Defines a 3D outset border. top la light bottom la drak
                   none - Defines no border
                   hidden - Defines a hidden border

         3.Border-Width:
                  The border-width property specifies the width of the four borders. The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick
            ex:
                  p{
                       border-style: solid;
                       border-width: 5px;
                       }
            
        4.Border-color:
                   The border-color property is used to set the color of the four borders.

            ex:
            p{
              border-style: solid;
              border-color: red;
              }
         5.border-side:
                    In CSS, there are also properties for specifying each of the borders (top, right, bottom, and left)

            ex:
            p {
             border-top-style: dotted;
            border-right-style: solid;
            border-bottom-style: dotted;
            border-left-style: solid;
              }

        6.Shorthand properties:
                  
               To shorten the code, it is also possible to specify all the individual border properties in one property.

            ex:
                   p {
                       border: 5px solid red;
                     }
```
### Html Margin

```html
                   1.Margin: There are properties for setting the margin for each side of an element top, right, bottom, and left.

                   2.Margin - Individual Sides:
                                      margin-top
                                      margin-right
                                      margin-bottom
                                      margin-left

                  3.Margin - Shorthand Property:
                                      To shorten the code, it is also possible to specify all the individual border properties in one property.

                                ex:   
                                   p {
                                      margin: 25px 50px 75px 100px;
                                  }
                 4.inherit Value:
                         parent ta irruthu vaules vage inherit panne atha styles use pannurathuku use aguthu.

                    ex:
                          p.ex1 {
                                    margin-left: inherit;
                                 }

                 5.margin collapse:
                              Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.

                      ex:
                         h1 {
                              margin: 20px  40px  50px 90px;
                              }                                             
``` 
### Padding

```html
         1.Padding: The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

                   2.padding - Individual Sides:
                                      padding-top
                                      padding-right
                                      padding-bottom
                                      padding-left

                  3.padding - Shorthand Property:
                                      To shorten the code, it is also possible to specify all the individual padding properties in one property.

                                ex:   
                                   p {
                                      padding: 25px 50px 75px 100px;
                                  }
                 4.inherit Value:
                         parent ta irruthu vaules vage inherit panne atha styles use pannurathuku use aguthu.

                    ex:
                          p.ex1 {
                                    padding: inherit;
                                 }

                 5.margin collapse:
                              Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.

                      ex:
                         h1 {
                              padding: 20px  40px  50px 90px;
                              }                                   
   
```

### height&width

```html
                   Def: The CSS height and width properties are used to set the height and width of an element.

                   ex:
                      div {
                            height: 200px;
                            width: 50%;
                            background-color: powderblue;
                            max-width:200px;
                            max-height:200px;
                           }
```
                      
 ### box model

 ```html
       box model- used when talking design and layout.

                  Content - The content of the box, where text and images appear
                  Padding - Clears an area around the content. The padding is transparent
                  Border - A border that goes around the padding and content
                  Margin - Clears an area outside the border. The margin is transparent

            ex:
                       div {
                              width: 300px;
                              border: 15px solid green;
                              padding: 50px;
                              margin: 20px;
                            }

 ```
                         
### Outline

```html
         1.Def: 
             An outline is a line drawn outside the element's border.

         2.propities:
               1.outline-style
               2.outline-color
               3.outline-width
               4.outline-offset
               5.outline

        3.outline style:
                   dotted - Defines a dotted border
                   dashed - Defines a dashed border
                   solid - Defines a solid border
                   double - Defines a double border
                   inset - Defines a 3D inset border. top la drak down la light
                   outset - Defines a 3D outset border. top la light bottom la drak
                   none - Defines no border
                   hidden - Defines a hidden border
         
         4.outline-width:
                 The outline-width property specifies the width of the outline. ``thin,medium,thick``

                 ex:
                    p{
                           border: 1px solid black;
                           outline-style: solid;
                           outline-color: red;
                           outline-width: thin;
                        }
                     
        5.outline-color:
                    The outline-color property is used to set the color of the four borders.

            ex:
            p{
              outline-style: solid;
              outline-color: red;(rgb,hsa,color names)
              }

         6.Shorthand properties:
                  
               To shorten the code, it is also possible to specify all the individual border properties in one property.

            ex:
                   p {
                       outline: 5px solid red;
                     }
         7.outline offset:
                   The outline-offset property adds space between an outline and the edge/border of an element. The space between an element and its outline is transparent.

                ex;
                      p {
                          margin: 30px;
                         border: 1px solid black;
                         outline: 1px solid red;
                         outline-offset: 15px;
                         }
```

### CSS text& Fonts

```html
         
          1.Text color & Background Color:
                   The color property is used to set the color of the text.

                   1. color name -  "red"
                   2.HEX value - "#ff0000"
                   3. RGB value -  "rgb(255,0,0)"
           
         2. Text Allignment:
                     * text-align:   The text-align property is used to set the horizontal alignment of a text. (center,left,right)

                     *text-align-last:  The text-align-last property specifies how to align the last line of a text.

                     *Text Direction:  The direction and unicode-bidi properties can be used to change the text direction of an element.
                                                direction:rtl;
                                                unicode-bidi: bidi-override;
                     *Vertical Alignment: The vertical-align property sets the vertical alignment of an element.

        3. Text Decoration:
                      >text-decoration-line
                      >text-decoration-color
                      >text-decoration-style
                      >text-decoration-thickness
                      >text-decoration

                *text-decoration-line:  The text-decoration-line property is used to add a decoration line to text.

                *text-decoration-color:  the text-decoration-color property is used to set the color of the decoration line.

                *text-decoration-style: the text-decoration-style property is used to set the style of the decoration line.

                *text-decoration-thickness : The text-decoration-thickness property is used to set the thickness of the decoration line.

        4.Text transformation:
                         The text-transform property is used to specify uppercase and lowercase letters in a text.
                                         *uppercase: change to be all letter are uppercase.
                                         *lowercase: change to be all letter are lowercase.
                                         *Capitalize: first letter only change to be in uppercase.

        5.Text spacing:
                   >text-indent
                   >letter-spacing
                   >line-height
                   >word-spacing
                   >white-space

            *text-indent:  The text-indent property is used to specify the indentation of the first line of a text.

            *letter-spacing: The letter-spacing property is used to specify the space between the characters in a text.

            *line-height:  The line-height property is used to specify the space between lines.

            *Word Spacing:  The word-spacing property is used to specify the space between the words in a text.
                  
            *White Space:   The white-space property specifies how white-space inside an element is handled.    
            
        6.Text-shadows:
                  
                  The text-shadow property adds shadow to text. In its simplest use, you only specify the horizontal shadow (2px) and the vertical shadow (2px).

                  [text-shadow:2px 2px;]
```


### Font family    
```html
                   1.font family:  In CSS, we use the font-family property to specify the font of a text.

                   2.Web Safe Fonts for HTML and CSS:
                                         Arial (sans-serif)
                                         Verdana (sans-serif)
                                         Tahoma (sans-serif)
                                         Trebuchet MS (sans-serif) 
                                         
                  3.font-style:  The font-style property is mostly used to specify italic text.

                     This property has three values:

                                        1.normal - The text is shown normally
                                        2.italic - The text is shown in italics
                                        3.oblique - The text is "leaning"

                4.Font Weight:  The font-weight property specifies the weight of a font.
                5.Font Variant: The font-variant property specifies whether or not a text should be displayed in a small-caps font.
                6.Font size(px,em,%):     the text size with pixels gives you full control over the text size.
                                            1px=16em.
                7.Google Fonts: If you do not want to use any of the standard fonts in HTML, you can use Google Fonts.
                              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
                8. CSS Font Property: To shorten the code, it is also possible to specify all the individual font properties in one property.

                               The font property is a shorthand property for:

                                                  font-style
                                                  font-variant
                                                  font-weight
                                                  font-size/line-height
                                                  font-family

```

### Html icons

```html
            icons:Icons can easily be added to your HTML page, by using an icon library.
                        1.fontAwsome icons:
                                  use the Font Awesome icons, go to fontawesome.com, sign in, and get a code to add in the <head> section of your HTML page:

                                  <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
                        2.bootstrap icons:
                                   To use the Bootstrap glyphicons, add the following line inside the <head> section of your HTML page:

                                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
                                   
                        3.google icons:
                                   To use the Google icons, add the following line inside the <head> section of your HTML page:

                                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
           
```

### Css links

```html
               links:  
                         a:link - a normal, unvisited link
                                     a:link {
                                            color: red;
                                            }
                                
                         a:visited - a link the user has visited
                                       a:visited {
                                            color: red;
                                            }
                                
                         a:hover - a link when the user mouses over it
                                       a:hover {
                                            color: red;
                                            }
                                
                         a:active - a link the moment it is clicked
                                         a:active {
                                            color: red;
                                            }
                                

```
                  
### List style

```html
                1.list-style-type: This property specifies the type of list item marker...like, square,cricle,upper-roman,lower roman,etc..,
                                 ex:
                                     ol{
                                         list-style-type: circle;
                                        }

               2.list-style-image: This property specifies an image as the list item marker.(jpg,jpeg,webp,gif,etc..,)
                               ex:
                                       ol{
                                            list-style-image:url('img name.extension');
                                            }

               3.list-style-position: list-item markers bullet points.
                               ex:
                                    ul{
                                          list-style-position:inside or outside;
                                      }

               4.list-style:(shorthand)   list-style property is a shorthand property. It is used to set all the list properties in one declaration.
                              ex:
                                 ol{
                                    list-style:cricle inside url('');
                                    }

              5.styleing color:   style lists with colors, to make them look a little more interesting.
                              ex:
                                 ol{
                                     background-color:blue;
                                     padding:20px;
                                    }
                             
```

### Tables

```html
                  1.Table Borders: 
                            table, th, td {
                                           border: 1px solid;
                                          } 
                 2.Full-Width Table:
                                The table above might seem small in some cases. If you need a table that should span the entire screen full-width, add width: 100% to the table element.
                                          table{
                                                width:100%
                                          }
                 3.Collapse Table Borders:
                                The border-collapse property sets whether the table borders should be collapsed into a single border.
                                        table{
                                                 border-collapse: collapse;
                                            }
                  4.Table Width and Height: 
                                   The width and height of a table are defined by the width and height properties.
                  5. Table Padding:
                                   To control the space between the border and the content in a table, use the padding property on td and th elements.
                  6.Hoverable Table:
                                Use the :hover selector on table to highlight table rows on mouse over.
                  7.Striped Tables:
                                 use the nth-child() selector and add a background-color to all even or odd table rows.
                                  tr:nth-child(even) {background-color: #f2f2f2;}

```

### Diplsy & Max-width

```html
            display:
                 The display property is the most important CSS property for controlling layout.

            display properties:
                        The display property is used to specify how an element is shown on a web page.
                            
                            Block-level Elements:
                                       <div>
                                       <h1> - <h6>
                                       <p>
                                       <form>
                                       <header>
                                       <footer>
                                       <section>

                            Inline elements:
                                     <span>
                                      <a>
                                      <img>

                    properties values:
                                1.display:none
                                           Is commonly used with JavaScript to hide and show elements without deleting and recreating them. Take a look at our last example on this page if you want to know how this can be achieved.
                     
                                2.display:inline
                                            Changing an inline element to a block element, or vice versa, can be useful for making the page look a specific way, and still follow the web standards.

                                3.display:block
                                            Is not allowed to have other block elements inside it.

                                4.visibility:hidden
                                             also hides an element. However, the element will still take up the same space as before. The element will be hidden, but still affect the layout                                          

max-width:
            mentioned in the previous chapter; a block-level element always takes up the full width available.
                             max-width: set to maximum width in our webpages.
                             margin:auto: equal side same spaces content  into center position.

```

### position:

```html
          1.static
          2.relative
          3.fixed
          4.absoulte
          5.stricky


          1.static:
                HTML elements are positioned static by default.Static positioned elements are not affected by the top, bottom, left, and right properties.
          
          2.relative:
                An element with position: relative; is positioned relative to its normal position.

          3.fixed:
                Is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
         
         4.absoulte:
                An element absolute is positioned relative to the nearest positioned ancestor instead of positioned relative to the viewport, like fixed.

        5.stricky:
               A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport  then it sticks in place
```

### Z-index:
```html
        z-index:
              The z-index property specifies the stack order of an element which element should be placed in front of, or behind, the others.
               
               z-index:-1
                            the image has a z-index of -1, it will be placed behind the text.

               z-index:1
                           the image has a z-index of 1 it will be placed frond of their text.
```

### overflow

```html
          overflow:
                  The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.
                                           
                                           visible - Default. The overflow is not clipped. The content renders outside the element's box
                                           hidden -  The overflow is clipped, and the rest of the content will be invisible
                                           scroll -  The overflow is clipped, and a scrollbar is added to see the rest of the content
                                           auto -    Similar to scroll, but it adds scrollbars only when necessary
                            
```

### Float
```html
                             left -       The element floats to the left of its container.
                             right -      The element floats to the right of its container.
                             none -       The element does not float (will be displayed just where it occurs in the text). This is default.
                             inherit -    The element inherits the float value of its parent.
```

### css inline block

```html
     Display:
            
            1.Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.
                        display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.
            
            
            2.Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.
                         

```

### css alignment:

```html
          css alignment:
                1.text alignment:
                         text-align: center or left or right

                         img align : center- (display:block) right or left.

```

### Css combinator

```html
               combinator:
                      A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

               Descendant Selector(spaces):
                              The descendant selector matches all elements that are descendants of a specified element.

               Child Selector (>):
                              The child selector selects all elements that are the children of a specified element.

            Adjacent Sibling Selector (+)
                              The adjacent sibling selector is used to select an element that is directly after another specific element.

            General Sibling Selector (~)
                              The general sibling selector selects all elements that are next siblings of a specified element.

```
                          





                          

           
           


            