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