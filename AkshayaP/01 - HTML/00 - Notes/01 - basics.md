#HTML

##HEADINGS
```html
 <h1></h1>-used to create a heading(1-6)
 <h1 style="font-size: "> - used to style a heading.

```
##PARAGRAPH
```html
 <p></p>-to declare a paragraph.
 <br>=>used to break the line.The next line starts with the fresh one.
 <pre>=>it will accept the spaces.
```
##QUOTATIONS
```html
 <blockquote>=> used to quote a section from another block.
 <q> => use to quote a specified words or sentence within a paragraph.
 <abbr> => use to define the abbreviation.
 <address> => used to specified a address.
 <cite> => define the creative work and usually renders in italic.(eg:books,poem,movie and etc...)
 <em> => emphasized.
 <i> => italic.
 <bdo> => Bi-directional override.(used to reverse the text)
```

##COMMENTS
```html
 <!--this is comment--> => use to add the comments.
```

##IMAGES
```html
 <img src="url" alt="alternatetext"> => used display the images & alternate text for the images if not supported.
 <img src="url" alt="alternatetext" style="styling-attributes"> 
              <!--image in same folder-->
              <!--image in other website or server-->
 ```

###IMAGEMAPPING
```html
 <map>
 <img src="url" alt="alternatetext" usemap="#workmap">
 <map name="workmap">
 <area shape="" coords="" alt="" href="">
 </map>
```

###LINKS
```html
 <a href=""> =>to define a link.
 <a href="" target=""> => to define a target.
          <!--_blank => it will displays in new page.-->
          <!--_top => it will displays in top of the window.-->
          <!--_parent => it will displays in parent frame.-->
          <!--_self => it will displays in same window.-->
 <!--Absolute URL-->
    <a href="website-link"> =>address to locate a resource on the internet.
<!--Relative URL-->
    <a href=""> => URL specifies the location of a resource relative to the current document.(/images/one.jpg)
<!--link to an EMAIL address-->
    <a href="mailto:someone@gmail.com">
<!--link titles-->
    <a href="website-link" title>
<!--Bookmark-->
    <a href="#c4"> =>jump to that location with in a same page.
 ```

 ###LISTS
 ```html
  <!--Unordered list-->   /*marked with bullets*/
      <ul>
         <li></li>
         <li></li>
         <li></li>
      </ul>
  <!--Ordered list-->    /* marked with numbers (type attributes-* type a->list numbered with lowercase letters,type A-list numbered with uppercase letters,type 1=list numbered with nmbers,
  type I=>list numbered with uppercase roman letters,type i=>list numbered with lowercase roman numbers)*/
      <ol>
         <li></li>
         <li></li>
         <li></li>
      </ol>

  <!--description list-->
      <dl>
        <dt></dt>
            <dd></dd>
        <dt></dt>
            <dd></dd>
        <dt></dt>
            <dd></dd>
      </dl>
  <!--list styles-->
      <ul style="list-style-type:values;">
          <!--values(disc,circle,square,none)-->
             
  <!--Nested lists-->
       <ul>
         <li></li>
         <li></li>
         <li></li>
           <ul>
            <li></li>
            <li></li>
            <li></li>
           </ul>
      </ul>

 ```

 ###TITLE
 ```html
      <title>Title Name</title>
 ```

 ###TABLE
 ```html
    <table>
        <tr>             <!--Table row-->
          <th></th>      <!--Table header-->
          <th></th>
          <th></th>
        </tr>
        <tr>
           <td></td>      <!--Table data-->
           <td></td>
           <td></td>
        </tr>
    </table>
    <!--sizing tables-->
       <table style="style-attribute">
    <!--colspan(header for multiple columns)-->
        <th colspan="size"></th>
    <!--rowspan(header for multiple rows)-->
        <th rowspan="size"></th>
    <!-- Table caption(some description of the table)-->
        <caption></caption>
 ```
 ###BLOCK & INLINE ELEMENTS
 ```
  Block elements=> <p><div>
 <div>=>division or section of the html document.
 <p>=> defined the paragraph .
  Inline elements=> <span>=>used to mark up a text inside a line
 ```
 


#CANVAS
```html
<canvas> => used to draw the graphics using the java script(its only a container for graphics).
 
```
###HTML id & class
```
class used by multiple html elements & id used as a specifier.
```
###IFRAME
```
<iframe>=>used to embed a another html document with in a html document.
```
###LAYOUTS
```
<header>=> defines the header of the page.
<aside>=> sidebar.
<nav>=> defines the navigation links.(typically leads to another website into a single page).
<footer>=> defines the contact information.
<section>=> defines a section in a document.
<article>=> defines an independent & self contained part.
```
###FILEPATHS
```
absolute file paths=>file from website(using links).
relative file path=>file relative from current page.
```