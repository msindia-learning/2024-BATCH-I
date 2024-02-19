# HTML Notes

### Headings
h1 - Large Header

```html
<h1>This is Heading 1</h1>
```


### Paragraph
p - Plain Text

```html
<p>This is Paragraph</p>
```

### Comments
```html
 <!--Hide content-->
```

### Quotations
```html
<!--Blockquote quotations-->
<blockquote>WWF has worked to help people and nature</blockquote>
          author said "" some important speech sa highlite panne katurathuku blockquotes use pannurom. 

   <!--quotations-->       
        <q> hi hello</q>
                 quotations marked to be specfic words.

    <!--Abbervations-->
            <abbr title="Htper Text Markup Lanuages">Html</abbr>   
                 ipo html irrukuna athuoda full meaning express panne kata abbr use pannurom.
            
    <!--Address-->        
                <address>contact information for the author/owner of a document or an article</address> 
                         address mattum specific panne italic font ta change pannum. athum line break must important.

     <!--cite-->
                 <cite>title of a creative work </cite>   
                                  rendercautomatically in italic . (blockquote la irrukura important words sa italic style kamekerathuku use agum.)  
                 
      <!--BDO-->
                 <bdo>(reverse their letter) bi-directional override</bdo>  
                             letters la apdiya reverse panne katum.
```

### images
```html
<img src="#" alt="photo">
                <!--image in different folder--> image kunu thaniya oru folder create panne image athula save pannum => floder name/imgname.extension.
                <!--image in other website or server--> src la other website link pota atha image display la show agum.
                <!--Animated images--> animation images show panne kata use agum.gif
                <!--image As a Link-->image touch panna athu vera oru page or website...etc eathachum pora mathre set pannegalam.
                <!--Image Floating-->images right side or left sides la images show panne katurathuku use pannegalam.

```

### links
    ```html
               <!--Html Links-->                                 a tag use panne oru page la iruthu inoru page ku move agalam.
               <!--Target Attribute _blanks-->                    a target=-blank oru tab la iruthu inoru tab la poi namaloda content ta pakalam.
               <!--Images as link& Email address& button-->        a tag use panne image or email touch panna content display panna use agum.
               <!--Button as a Link-->                             a tag use panne button touch panna web page open panna use pannalam.
               <!--Html Marks--> used to jumped.                   specific  id use panne jump pannurathuku use pannegalam.
               absolute URL: A full web address in the href attribute.            no chanced in url 
                Relative url: A link to a page within the same website.            chanhes to url and go to our suggestion pages.
```

### lists
       ```html
               <!--Order-->
                      <ol> 
                         <li> </li>
                         <li> </li>
                       </ol>  

                <!--unOrder-->
                      <ul> 
                         <li> </li>
                         <li> </li>
                       </ul>
                       
                <!--Description-->
                      <dl> 
                         <dt> </dt>
                               <dd> </dd>
                         <dt> </dt>
                               <dd>  </dd>
                    </dl>
                         ```


 ### page title
```html
    Def:- Every web page should have a page title to describe the meaning of the page. intha vachu tha user idetify panne paga namma correct tana pages kulla tha vanthurukom nu.
```


### tables
 ```html
    <table>
    <thead>
        <tr>
            <th> </th>
             <th> </th>
        </tr>
    </thead>

    <tbody>
        <tr>
             <td> </td>     
              <td> </td>
         </tr>
    </tbody>
         </table>  
         
         th- Table headers
         td- table datas
         tr- Table rows
         table- full table

```
###Block & Inline elements:
```
          Block elements: oru website oda full width observe pannekum.always start in newline.browser automactially some space kututhurum. <p> <div> some examples.

          Inline elements: doesn't strat in new line. take neccessary place only. <span> <img> some examples.
```

### Div & Block
````html
         DIV: 
             dived into seprated content.
             The <div> element is by default a block element, meaning that it takes all available width, and comes with line breaks before and after. 

         BLOCK:A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.    
````

### id & Class
````html
             ID:The HTML id attribute is used to specify a unique id for an HTML element. You cannot have more than one element with the same id in an HTML document.

             CLASS:The HTML id attribute is used to specify a unique id for an HTML element. You cannot have more than one element with the same id in an HTML document.
````
#### iframs
````html
       Iframs: An HTML iframe is used to display a web page within a web page.  <iframe> </iframe>
       ````


### files
````
    Absoulte: no changs in url
    Relative: some changes to reach their destination path.
            A relative file path points to a file relative to the current page
````

#### Head&Layouts
````
    Heads: 
              The <head> element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag.

    meta data:
               describe about webpage info.but doen't display anything.

    viewport:
               website view their user points of our webpages.   he viewport is the user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.
    Script:
               script include in header section. Used to client side javascript ku use agum.
    layouts:
          head
          div
          section
          article
          footer

````