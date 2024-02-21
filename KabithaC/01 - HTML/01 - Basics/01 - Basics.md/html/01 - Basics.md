#HTML

##BASIC
 <!Doctype html> - it specifies the document type and version of html.
 <html> - root element of the html document.
 <head> - used to store the information about the document.
 <meta charset="UTF-8"> - specifies the character encoding and represent text into various characters from different language and symbols.
 <body> - contains the content of the html.

##HEADINGS
```html
 <h1></h1> used to create a heading(1-6)
```
##PARAGRAPH
```html
 <p> </p>  - to declare a paragraph.
 <hr> </hr> - used to separate content.
 <br>  - used to break the line and next line start from new.
 <pre> - element dispalyed in a both spaces and line breaks. eg : poem
```
##QUOTATIONS
```html
 <blockquote>=> used to define the section.  (indent)
 <q> => used to define a short quotations.
 <abbr> => use to define the abbreviation.
 <address> => used to specified a address
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
 <img src="url" alt="alternatetext"> -  used to embed an image in a web page.
  src - specify the path to img
  alt - specifiy alternate text for img.
 ```

###IMAGEMAPPING
```html
 <map>
 <img src="url" alt="" usemap="#">
 <map name=" ">
 <area shape="" coords="" alt="" href="">
 </map>  
```     to define clickable regions on an image ,using a area tag.

##LINKS
```html
 <a href=""> =>to define a link.
 <a href="" target=""> => to define a target.
          <!--_blank => it will displays in new page.-->
          <!--_top => it will displays in top of the window.-->
          <!--_parent => it will displays in parent frame.-->
          <!--_self => it will displays in same window.-->
 <!--Absolute URL-->
      - in a full web address
<!--Relative URL-->
      -  It's based on the current location and provides a path from there to the desired destination.
 ```

 ###LISTS
 ```html
    ordered list:
    <ul>
         <li></li>
      </ul>   -marked with bullets.
    Ordered list:
      </ol>
         <li></li>
      </ol>  - marked with numbers.
    description list:
      <dl>  - define the description list
        <dt></dt> - define the term (name)
            <dd></dd> - define the each term 
      </dl>
 ```

 ###TITLE
 ```html
      <title>Title Name</title>  - describe the meaning of the page.
 ```

 ###TABLE
 ```html
    <table>
        <tr>             <!--Table row-->
          <th></th>      <!--Table header-->    
        </tr>
        <tr>
           <td></td>      <!--Table data-->
        </tr>
    </table> - used store the data in a row and column format.
   
 ```
 
#BLOCK
    
``` Block elements starts on a new line and browser automatically add some space before and after margin.
Types:
<address> -  defines the contact information in italics.
<article> -  to represent the independent, self  contained content.
<aside> -side content about the main page
<blockquote>- data section from another resource
<canvas> - draw graphics and 2D shapes using javascript 
<pre> - for preformatted text, used in poems
<section> - to define section in the document
<table> to define table with child tags such as <tr>,<td>,<thead>,<th>
```

#INLINE
``` used to apply formatting or add functionality to specific parts of text without affecting the overall layout of the document.
<a> for hyperlinks,
<abbr> FOR ABBREVIATION
<bdo> for birectional property of text from left to right(ltr) and right to left(rtl)
<br> for break
<button> represent button with clickable action
<input> get input from the user
<label> used to label the name for the form elements
<span> inline element to specify the text with style attributes
<strong> for important text
<sub> for subscript text
<sup> for superscript text
```


#DIV
```html
<div> -  container or box ,  group together and organize content on a webpage
```

#ID & CLASSES

id - attribute specifies unique id for the HTML.
class - attribute is used to categorize elements into groups.


#IFRAME
```html
<iframe> - used to display the web page within the webpage with attributes like width, height and other attribute styles 
```

#FILEPATH
```html
to describe the location of the file; 
```
#HEAD
```html
<head> - contains <title> for displaying webpage title; contains <style>,<script>;<meta> for additional information
```

#LAYOUT
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