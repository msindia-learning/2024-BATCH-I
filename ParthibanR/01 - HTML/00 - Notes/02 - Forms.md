### Forms

```html
     Form Element:
         form is used to collect user input.  input is most sent to a server for processing.
         
         ex:
            <form>
                  .......
            </form>

     Input Elements:
            get their input(details) from user. they are many types of input using them.
                   1.text- Displays a single-line text input field.

                   2.radio- selecting forone and only choice.

                   3.checkbox- selecting multiple choice.

                   4.submit- or submitting the form.

                   5.button- clickable buttons.

                   6.label- useful for screen-reader users.
```
### Forms Attribute

```html
        The different attributes for the HTML form element.
             
               1.Action Elements:
                          In this attributes used to (when the form is submitted).
                    ex:
                      <form action="web.html">

               2.Target Attribute:
                          In this attributes used to (the form submitted to another tab)  

                        types:
                            _blank:     The response is displayed in a new window or tab
                            _self:  	The response is displayed in the current window
                            _parent:	    The response is displayed in the parent frame
                            _top:	    The response is displayed in the full body of the window
                            framename:   The response is displayed in a named iframe

                3.Method Attribute:
                            In this attribute used to(HTTP method to be used when submitting the form data.)

                            there are three types of method attribute availables:

                                      1.Get:
                                            the form data to the URL, in name/value pairs.he length of a URL is limited (2048 characters).

                                      2.Post:
                                             HTTP request (the submitted form data is not shown in the URL). they data are stored to payloads.
                                      
                                      3.dialog:
                                              page can't be refresh but their data should be submitted.

                 4.Auto Complete:
                            form should have autocomplete on or off. autocomplete is on, the browser automatically complete values based on values that the user has entered before.

                 5.Novalidate:
                           the form-data (input) should not be validated when submitted.the novalidate attribute is boolean attribute.
```

### Form Elements

```html
           input-            get their details from user sides.
           label-             useful for screen-reader users.
           select-            used for dropdown menu.
           textarea-           used for multi-line input field.
           button-            used for clickable button.
          fieldset-           used for group related data in a form.
          legend-             used for caption for the fieldset element.
         datalist-            used for  element specifies a list of pre-defined options.
        output-               used for epresents the result of a calculation.
        option-               under their select elements.both used in open&close tags.

```

### Html input types
```html
       The different input types you can use in HTML.

           1.Text
                 defines a single-line text input field.

           2.Password
                  defines a password field.

           3.Submit
                  defines a button for submitting form data to a form-handler.

          4.Reset
                 defines a reset button that will reset all form values to their default values.

          5.Radio
                define a radio button.choose only one values.

          6.checkbox
                define a checkbox.choose multiple values.

          7.Button
                define as a button.

          8.Date&time
                define date&time.

         9.fILE
              Denfine a file-select field and a browse button for files to be upload.

        10.Hidden
                to used to hide their infromations.

```
###         Html input attributes
```html
      
      1.value Attribute
               The input value attribute specifies an initial value for an input field.

      2.readonly
               attribute specifies that an input field is read-only.

      3.disabled
                The input disabled attribute specifies that an input field should be disabled.

     4.size
           the input size attribute specifies the visible width, in characters, of an input field.The default value for size is 20.

     5.maxlength
             The input maxlength attribute specifies the maximum number of characters allowed in an input field.

     6.multiple
            The input multiple attribute specifies that the user is allowed to enter more than one value in an input field.The multiple attribute works with the following input types: email, and file
      
      7.pattern 
            he input pattern attribute specifies a regular expression that the input field's value is checked against, when the form is submitted.

      8.placeholder 
             the short hint is displayed in the input field before the user enters a value.

      9.required
              the input required attribute specifies that an input field must be filled out before submitting the form.

     10.step
             The input step attribute specifies the legal number intervals for an input field.

    11.autofocus 
             The input autofocus attribute specifies that an input field should automatically get focus when the page loads.

    12.height and width  
             The input height and width attributes specify the height and width of an elements.
```

### InputForm Attribute
```html
         1.form
              The value of this attribute must be equal to the id attribute of the <form> element it belongs to.

         2.formaction Attribute
              The input formaction attribute specifies the URL of the file that will process the input when the form is submitted..

         3.formenctype Attribute
              The input formenctype attribute specifies how the form-data should be encoded when submitted (only for forms with method="post").

        4.formtarget Attribute
              The input formtarget attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form.
         
         5.formnovalidate Attribute
              The input formnovalidate attribute specifies that an <input> element should not be validated when submitted.
````
          
          
               

      
             
            
             
                 
                  
