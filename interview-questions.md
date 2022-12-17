# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a combination of JavaScript and HTML used in React in the output of a component. It is used to be able to have access to both HTML and JavaScript in order to achieve the desired output. An example of JSX would be:
```javascript
    return (
        <>
            <h1 style={{text-align: "center"}}>Hello</h1>
        </>
    )
```
which is a header saying "Hello" that is aligned to the center of the webpage. One syntax difference would be that JSX requires tags, such as header, to be wrapped in fragments (as seen on lines 14 and 16).

Researched answer: JSX is a JavaScript syntax extension. It allows developers to write HTML within the world of JavaScript. One syntax difference is that JSX eliminates the need for methods such as createElement() in order to place HTML elements into the DOM.

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn stands for 'yet another resource negotiator'. When running the command yarn, the files 'package.json' and 'yarn.lock' are added to the current React application.

Researched answer: Yarn is a package manager that allows the access to and sharing of code from/to other developers worldwide. The code is shared in what is known as a 'package', which contains all the shared code. Package.json is also added to the current React application when running the $ yarn command.

3. What is a React component?

Your answer: A React component is a container for a desired output that can be called upon and executed at the developer's will, much like a function. An example of a React component would be:
in the src folder, create a folder called components. Within the components folder, create a .js file with the filename in PascalCase. In that file, you can create a component to do whatever you would like, such as create a button, which would look something like this:
    const ComponentExample = () => {
        return (
            <>
                <button>Click Me!</button>
            </>
        )
    }
When this component is then called on the parent component, using a component call, the created button will be rendered onto the React application.

Researched answer: React components are building blocks to a React application. Components can be thought of as independent and reusable pieces of code that are stored in a folder until called upon to be executed using a component call.

4. What is the difference between state values and props in React?

Your answer: State is the status of something and can be set to a default status using useState() and can also be set to a different desired status using setNameOfState. An example would be using a hook: const [nameOfState, setNameOfState] = useState([]), which sets the default status of the state to an empty array. This can later be changed by using setNameOfState = [1, 2, 3, 4] to set the status to an array with the numbers 1-4 inside. Props stands for properties and is used to pass data from parent to child in React. In order to set props, the developer can set a 'variable' within the component call and assign it to their desired code. For example: <ComponentCall exampleprop={myCode}>

Researched answer: The main difference between state values and props is that state is set within the component itself and props are external and get passed to child components from the parent. Props have a read-only property while state can be changed using setState.

5. What is the DOM?

Your answer: The DOM is the visual representation of the code that is written. In other words, it is the UI that can be seen as a result of the execution of the code.

Researched answer: DOM stands for document object model. It is a representation of the HTML elements of a webpage. The DOM is what is actually seen when loading up a webpage or application, and the visuals that are seen are results of the HTML and JSX that are written in the code.

6. STRETCH: Which is the difference between a div and a span?

Your answer: I'm not sure what a span is, but a div is a tag that can be used in HTML or JSX in order to make a section, or division, in a webpage or application. I will do research and provide a researched answer below.

Researched answer: Both a div and a span are HTML elements that are used in order to group up different parts of a webpage/app. The difference between the two is that a div is used for 'block-level' organization and styling and a span is used for 'in-line' purposes. For example, you can use a div tag to have all the elements within contained in a visible box, and manage the box itself with all the elements within. You can use a span tag to mark a part of a text or document.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: AKA 'OOP', is a type of programming that organizes design based around objects rather than functions and logic.

2. Ruby: An interpreted, general-purpose language that was designed with a focus on simplicity. Ruby uses OOP.

3. Implicit return: When values or an output is returned without actually using the keyword 'return'

4. Ruby blocks: Anonymous functions that can be passed into methods.

5. Ruby hashes: A collection of unique key-value pairs, similar to an array. However, the indexing is done through arbitrary keys of objects.
