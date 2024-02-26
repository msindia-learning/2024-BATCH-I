### CSS BASICS


 ## TYPE SELECTOR
  ```css
    element{
       property:value;
    }

    selector 1,selector2{
        property:value;
    }

```
## SELECTORS
```
*element selector=>most basic selector it targets html tags,(ex:body{})
   p{
   text-align:center;
   color:red;}
*class selector=>select based on their class.(ex:.class{})
 .class or tag.class name{
   text-align:center;
   color:blue;
   }
*id selector=>based on their id attribute.
(ex:#header{})
  #p1{
    text-align:center;
    color:red;
    }
*attribute selector=>based on the presence and value of the attribute.(ex:input[type="text"]{})
*pseudo-classes and pseudo-elements=>target elements based on their position and elements.(ex:a:hover{}-pseudo class,a::firstline{}-pseudo-elements)
*universal selector=>*{} it selects all html elements in a page.
*group selectors=>group the wanted tags to style(ex:p,h1,h2{})
 
```
## COMMENTS
   ```css
   /*type your comment*/
   
   ```
 ## BACKGROUND COLOR
 ```
 /*used to add background properties*/
  1.background-color(color name,rgb value,hex value)
  2.background-attachment=> if we set attachment as fixed we can not scroll the page.(scroll,fixed)
  3.background-repeat=> it will repaet the background images.(repeat-x=> repeat horizontally,repeat-y=>repeat vertically,no-repeat,repeat )
  4.background-position=> where to display the background image.
   5.background shothand  

 ```
 ## BORDER
 <!-- margin,padding,border
   Margin=>space around the edges around an outside elements.(outside of the border)
   padding=>space between the element content and its border.
   border=> area around the padding of an element.-->
  ```
  1.border-style(dotted,double & etc...)(border-top or left or right or bottom-style)
  2.border-color
  3.border-width
  4.border-shorthand
  ```
  ## MARGIN
  ```
  margin(top,right,bottom,left)
  /*auto=>used to horizontally center the value within its container*/
  inherit=> inherit from its parent class.ex:p.ex1{}
  ```
  ## OUTLINE
  ```
  /*outside of the border*/
  1.outline-style
  2.outline-color
  3.outline-width
  4.outline-width
  5.outline
  6.offset=>space between the edge and border.
  ```
  ## TEXT & FONTS
  ```
  text-align=> used to set tthe horizontal alignment of the text.(left,right,center,justify)
  /*justify => every line has equal eidth,height,right,left (like magazines)*/
  text-align-last=>center,right,left
  direction & unicode direction=> used to change the direction of the text.
  direction=>rt1,bidi-override
  vertical align=> baseline-image with default alignment
                   text-top=>image with text top alignment
                   text-bottom=>image with bottom alignment
                   sub=>image with sub alignmnet
                   sup=> image with super alignment
  text-decoration-line=>overline,line through,underline,overline underline
  text-transform=>uppercase,lowercase.
  text-indent=>intend between the first line of the text.(next of the heading line it will start with some space then start.)
  letter-spacing=> used to specify the space between the lines.
  line-height=>height between the two lines.
  word-spacing=> space between the words.
  font-weight=>normal,bold
  font variant=> small caps,normal.
  font-style:normal,italic,oblique(oblique is very similar to italic but less supported)
  font-size=> 1em=16px.(for browsers),responsive font size(vw=>"viewport width"unit) & resize the browser window.
  font-effect-fire=> font effect should appear in special effect.
  fontshorthand=>font-style
                 font-variant
                 font-weight
                 font-size/line-height
                 font-family
  ```
  ## STYLING LINKS
  ```
  /*
  a:link-normal,unvisited link.
  a:visited-user has visited.
  a:hover-when user mouse over it.
  a:active:link the moment it's clicked.
  */
  /*
  text-decoration=>underline,none*/
  /*cursor property=>crosshair,resize,default,e-resize,pointer and etc.(<span style="cursor-property">) */
  ```
  ## STYLING ICONS
  ```
  /*<i>-icons,<span>->link. 
  */
  ```
  ## LISTS
  ```
  /*
  list-style-type(circle,square,upper-roman,lower-alpha,none(no styles added))
  list-style-image=>style with gif images
  list-style-position=>position of the bullets
  text align=>horizontal-align,vertical-align*/
  ```
  ## TABLES
  ```
  /*overflow=>scrolling the page*/
  
  
  ```
  ## DISPLAY
  ```
  /*used as inline and block level
  display:none or inline,block-level*/

  ```
  ## MAX-WIDTH
  ```
  /*max-width:500px;
  */
  ```
  ## POSITION
  ```
  /*
   position=> scroll page(static,relative,fixed,absolute,sticky)
  */
  ```
  ## Z-INDEX
  ```
  /*
  it defines the which element infront & behind  of others.
  (- ve value)=> behind the text.
  (+ ve value)=>infront of text.
  */
  ```
  ## FLOAT
  ```
  /*used to positioning and pointing the content
  float=>right,left,none,inherit*/
  clear=>what should happen next the float element.
  overflow=>add scrollbars when the content iss too big.
  ```
  ## display:inline-block
  ```
  /*d/f inline & block-inline=>1.inline-block enables allow to set width  height,2.does not add a line break after the element 
  automatically it will sit to next element.
  inline-block the top & bottom paddings are respected but inline they are not.
  */
  ```
  ## ICONS
  ```
  /*
  (1.inline=>high preference,tag=>second,id=>3 rd,.=>4th
  the 2.!important =>all icons should be in same color)
  */
  ```
  ## ALIGNMENT
  ```
  /*
  align the elements
  */
  ```
  ## COMBINATORS
  ```
  /*
  1.explain the relationship b/w the selectors.
  *
  descent selector(space)
  child selector(>)
  adjacent sibling selector(+)
  general sibling selector(~)
  */
  ```
  ## OPACITY
  ```
  /*
   transparency of a image
   hover=>on hover the image it will transparent
  */
  ```
  ## PSEUDO-CLASSES
  ```
  /*state a special state of an element
  selector:pseudo-class {
  property: value;}
  :lang=>define special rule for different language.
  PSEUDO_ELEMENTS=>selector::pseudo-element{property: value;}
                  =>::first-Line
                  =>::first-letter
                  =>p.class::first-letter
                  =>h1::before=>add img before the content.
                  =>h1::after=>add img after the content.
                  =>::marker=>selects the marker of the list.
                  =>::selection=>applied to(color,background,cursor(if i select or copy th text means the 
                  copied side should be hover in yellow color.))
*/
  ```
  ## UNITS
  ```
  /*
  =>width, margin, padding, font-size
  =>absolute length(cm,mm,in,px*,pt,pc)
  =>relative length=>em,vh,vw,and etc
  */
  ```
  ## SPECIFICITY
  ```
  \*
  start width=>0 add 100 for ID value,add 10 for class value add 1 for each element selector
  *\
  ```
  ## !IMPORTANT
  ```
  used to override the style.
  ```
  ## MATH
  ```
  calc(),min(),max()
  ```
  ## OBJECT-FIT & OBJECT-POSITION
  ``` used to resized the img and video should be resized within its container
  /*
  fill,contain,cover,none,scale-down
  */
  /*
  object-position=>position of the height and width.
  object-position:0%,0%;
  */
  ```
  ## VARIABLE
  ```
  /*:root{
  --blue:1e90ff;
  --white:#fffff}
  *local variable will override the global variable*/
  ```
  ## MEDIA QUERIES
  ```
  /*media=>used to override the fontsize based on the device.
  media types=>all,screen,print
  features:"orientation,max-height,max-width and etc...."
  *syntax=>@media type and(feature){
  css style}*/
  ```
  ## FLEX BOX
  ```
  justify=>flex-start(right),flex-end(end),center,space-around,space-evenly,space-between.
  align-items=>flex-start(top),flex-end(bottom),center,stretch,baseline.
  flex-direction=>row: Items are placed the same as the text direction.
                  row-reverse: Items are placed opposite to the text direction.
                  column: Items are placed top to bottom.
                  column-reverse: Items are placed bottom to top.
  order=> used to order the contents(it will from -1...default...negative=>-1(reverse),+1=>correct order).
  flex-wrap=> nowrap: Every item is fit to a single line.
       wrap: Items wrap around to additional lines.
       wrap-reverse: Items wrap around to additional lines in reverse.
  align-content=>flex-start: Lines are packed at the top of the container.
                 flex-end: Lines are packed at the bottom of the container.
                 center: Lines are packed at the vertical center of the container.
                 space-between: Lines display with equal spacing between them.
                 space-around: Lines display with equal spacing around them.
                 stretch: Lines are stretched to fit the container.
  flex-flow=> shorthand of flex flow & flex direction.
  flex-grow=> how much time the flex item will grow relative to the othe element.
  ```
  