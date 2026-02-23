### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

# getElementById :
- It is used to select an element by it's id. that id need to be specific and unique. By this method we can pick a specific element by its id.

# getElementsByClassName:
- This is used to select all the elements by their class names which needs to be specific and it is not like getElementById because it selects a group of elements by their class name.

# querySelector / querySelectorAll:
- querySelector is used to search a page and it returns the first element which is matched with the css selector.
- querySelectorAll is same like querySelector but the only difference is querySelectorAll returns all matching elements.


### 2. How do you create and insert a new element into the DOM?
- 1. first i will create an html element with my desired tags such as i want to create a paragraph <p> tag, i will use 
"const newParagraph = document.createElement('p');"
- 2. then if i want to customize the content, i will write
newParagraph.textContent = "this is a paragraph tag"; 
- 3. then i will insert it in DOM like 
const container = document.querySelector('#container');
container.appendChild(newParagraph);  


## 3. What is Event Bubbling? And how does it work?
- when i use event on an element, it will first run my specific element then it will run on it's parent, then grand parents then the great grand parents then the other upper ancestors that is how it works like a tree.


## 4. What is Event Delegation in JavaScript? Why is it useful?
- it is a method where we add an event listener into the parent element of many child elements instead of adding over every child elements. 
- it is useful because it saves memory because here we don't need to add event listener to every child element. we can add to there parent element. it is also useful because it makes the code more clean and faster and more effective.


### 5. What is the difference between preventDefault() and stopPropagation() methods?

- html element has a default behavior , if we use preventDefault it will stop the default action of that html element
- generally evry events move upsides like its parent elements...if we use stopPropagation, it will stop the event and it will not go to it's parent. 