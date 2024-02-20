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
   /* type your comment*/
   
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