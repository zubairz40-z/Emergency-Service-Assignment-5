Answers of Following Questions are:

Answer 1: 
 a) getElementByID("id") selects by id and returns also single element and only one element has that specific ID.

b) getElementsByClassName() selects by class and returns collections it updates auto if dom changes.

c) querySelector selects the first elements of matching any CSS selector such as id,class,tag or span and returns single element.

d)querSelectorAll selects all elements of that css selector and returns a node list.


Answer 2:
We create a new element using syntax document.createElement() and insert it in dom using appendChild. And we can add content to the element using innerText,classList,Id.

Answer 3:
Event Bubbling is when we click an element the event starts from there and moves to its parents,grandparent and all the way to the top.It occurs auto and will keep going.


Answer 4: 
Event Delegation is used instead of adding event listeners to every child we put one listen on the parent and then using event.target we can check which child triggered the event.
It is useful for performance and dynamic elements added later.


Answer 5:
preventDefault() stops the default action of browser like form submit whereareas stopPropagation() stops events from bubbling up to parents elements such as if we click on child the parent wont open.
