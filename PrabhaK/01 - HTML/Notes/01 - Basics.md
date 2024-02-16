<<<< Action Attribute  >>>>

  Def- Action to performed , when the form is Submitted.


  1. Target attribute
     Def - Where to display the response that is received after submitting the form
            
      <--value-->
               - _blank => response is diplayed in a new tab
               - _self => respnse is displayed in current window
          - _parent => response is displayed in the parent frame
             - _top  => response is displayed in the full body of the window
                                                                                                                                                   uuuuuuuuuu
 2.Method Attribute  - Specifies the http method used

        -GET =>  
              1. Appends data to the URL (data is visible in URL)
              2.limited character 2048
              3. Non secure Data


        -POST =>
              1.Appends data inside the HTTP request.(not visible in URL)
              2.No size limitation
              3.used to send large amounts of data

 3.Auto Complete Attribute
        -auto complete on - Browser automatically complete the values.
        -auto complte off - user need to enter value

         
 4.No validate Attribute
       -form should not be validate when submitted
