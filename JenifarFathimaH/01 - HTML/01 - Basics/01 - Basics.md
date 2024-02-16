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
 <blockquote>=> used to quote the particular block.
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
  <!--Unordered list-->
      <ul>
         <li></li>
         <li></li>
         <li></li>
      </ul>
  <!--Ordered list-->
      </ol>
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
 
###BLOCK
```html
<address> defines the contact information in italics,
<article> - to represent the important content on the webpage
<aside> -side content about the main page
<blockquote>- data section from another resource
<canvas> - draw graphics and 2D shapes using javascript 
<dd>-data description
<dl>- data list
<dt>- data description term
<fieldset> - create box around the form                                                                                             
<figcaption> - caption for the <figure> element
<figure> - mark up the image in the page with caption using <figcaption>
<footer> - display the contact information
<form> - to create form with elements like <label>, <input>, <option>, <select> with attributes like action, id, name, for, methods, etc,. 
<h1>-<h6>heading tag in descending order
<header>- contains navigation links, icons and headings
<hr>- horizondal rule
<li>-for list
<main>  - to display unique content of the document, cant repeat more than one time;
<nav> - navigation bar inside head tag
<noscript> alternative of script tag for unsuppoerted browsers
<ol>-ordered list
<p>- for paragraph
<pre> - for preformatted text, used in poems
<section> - to define section in the document
<table> to define table with child tags such as <tr>,<td>,<thead>,<th>
<tfoot> footer of the table
<ul>- unordered list
<video> - for displaying video using relative path of the video with attributes like controls in the web page
```

###INLINE
```html
<a> for hyperlinks,
<abbr> FOR ABBREVIATION
<bdo> for birectional property of text from left to right(ltr) and right to left(rtl)
<br> for break
<button> represent button with clickable action
<cite> define the title of the creative work like author, date, etc,. 
<code> define text as computer code
<dfn> definition element with title attribute
<em> emphasized text
<i> italic text
<img> used to display image with attributes like src, style , etc,.
<input> get input from the user
<kbd> define keyboard in text
<label> used to label the name for the form elements
<map> used to point the image with coords attribute
<output> to diplay the result
<q> small quotation
<samp> to define sample output of the computer program
<script> internal space for javascript within html 
<select> for dropdown list
<small> for small text
<span> inline element to specify the text with style attributes
<strong> for important text
<sub> for subscript text
<sup> for superscript text
<textarea> text area with row and column attribute
<time> to represent specific time
<var> to represent variable in mathematical expression
```


###DIV
```html
<div> - default block element , line break before and after, group selector;
```

###ID & CLASSES

id - attribute specifies unique id for the HTML, cant use for multible blocks, case sensitive, name should be started with '#' in styling(css)
class - attribute specifies the class, can use the style for multiple blocks by specifying the name, name should be started with '.' in styling(css)


###IFRAME
```html
<iframe> - used to display the web page within the webpage with attributes like width, height and other attribute styles 
```

###FILEPATH
```html
to describe the location of the file; 
used in <img>,<audio>,<video>;
file path is specified using the attribute 'src'
```
###HEAD
```html
<head> - contains <title> for displaying webpage title; contains <style>,<script>;<meta> for additional information
```

###LAYOUT
```html
<header> - Defines a header for a document or a section
<nav> - Defines a set of navigation links
<section> - Defines a section in a document
<article> - Defines an independent, self-contained content
<aside> - Defines content aside from the content (like a sidebar)
<footer> - Defines a footer for a document or a section
<details> - Defines additional details that the user can open and close on demand
<summary> - Defines a heading for the <details> element
```