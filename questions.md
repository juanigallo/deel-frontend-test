### 1. What is the difference between Component and PureComponent? give an example where it might break my app.

PureComponents will do shallow comparison (compares initial to final value) when state is updated or new props are received. If boths values are the same, the PureComponents will NOT trigger a re-render. If PureComponents are used correctly, they might save you a lot of resources but if they are used in the wrong way, they may have undesirable results. For example:

```
class Parent extends React.PureComponent {
  render() {
    return (
      <Child arr={[1,2,3,4]}/>
    )
  }
}


class Child extends React.PureComponent {
  state = {
    arr: this.props.arr
  }

  removeElem(key) {
    const newArr = this.state.arr;
    newArr.splice(key, 1)

    this.setState({
      arr: newArr
    })
  }

  render() {
    const {arr} = this.state;
    return (
      <ul>
        {arr.map((elem, key) => {
          return (
            <li onClick={() => this.removeElem(key)}>{elem}</li>
          )
        })}
      </ul>
    )
  }
}


ReactDOM.render(<Parent />, document.getElementById('app'))
```

Yeah, I know, that code was pretty ugly and it also doesn't work. The problem with it is that `Child` is a Pure component that has an array in his state and tries to mutate it in the `removeElem` function. As it was mention before, Pure Components make a shallow comparison so if you try to mutate an object or an array, the re-render won't be triggered

### 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

I think that is because when you change a value in the provider, all the consumers are re-rendered even if they have a shouldComponentUpdate method.

### 3. Describe 3 ways to pass information from a component to its PARENT.

1. Using callbacks. Parent components send via props a function (without being executed) to the Child component which will execute the function to send the data back to his parent.

```
function Parent() {
  function handleCallback(val) {
    console.log(val)
  }

  return (
    <Child handleCallback={handleCallback} />
  )
}

function Child({handleCallback}) {
  return (
    <button onClick={() => handleCallback('Child to parent')}>Click me</button>
  )
}
```

2. Using a centralized state. For example if you use `redux`, you can send your data from any component to the centralized state and then consume it in any other component of your application without having the limitations of React's dataflow.

3. Using API Context. This one is pretty similar of using callbacks but it might save you some chaining if you need to send the information multiple layers upwards.

### 4. Give 2 ways to prevent components from re-rendering.

In class components you can use `shouldComponentUpdate` to prevent unnecesary re-renders. In functional components we don't have that, so you can use React memo.

### 5. What is a fragment and why do we need it? Give an example where it might break my app.

Fragment is a container that we write inside JSX (<>, <React.Fragment> or <Fragment>) but it is not transpiled to the real DOM. The most common case in where we need this is when you have two child nodes in a Component. For example:

Wrong code:

```
function Parent() {
  return (
    <Child />
    <Child />
  )
}
```

Fixed code:

```
function Parent() {
  return (
    <>
      <Child />
      <Child />
    </>
  )
}
```

### 6. Give 3 examples of the HOC pattern.

I don't know if the idea in here is to mention code examples of how to use the HOC pattern, libraries that uses this pattern or just benefits about it.

_Common uses_
Theming, auth and containers

_Libraries that use (or used) this pattern_
Redux and react router are the ones that I remember

### 7. what's the difference in handling exceptions in promises, callbacks and async...await.

In promises you should handle exceptions with `.catch` while in async/await or callbacks the common way to do it is using `try/catch`

```
promise.then((val) =>
  resolve(val)
).catch(err) => {
  reject(err)
}
```

```
async function asyncFn() {
  try {
    await fetch()
  } catch (err) {
    console.log(err)
  }
}
```

### 8. How many arguments does setState take and why is it async.

2 arguments. First one is the object to update, the second one is a callback function

```
this.setState({a: 1}, () => {
  console.log('This will be executed AFTER the state is updated')
})
```

The reason of doing this is performance (for example gaining the capability to make batch updates)

### 9. List the steps needed to migrate a Class to Function Component.

1. Change class inicialization to function `class A extends React.Component {` -> `function A() {`
2. Remove render method
3. Replace state object with useState hook
4. Change lifecycle methods to hooks (useEffect)
5. Remove bindings and `this` from all the functions calls
6. Remove arrow functions in jsx when they are not neccesary

### 10. List a few ways styles can be used with components.

1. Clasic css but with className
2. CSS preprocessor like SASS, Less or Stylus
3. CSS modules to avoid conflict between same classNames in differents components
4. CSS-in-JS, styled-components, styled-jsx

### 11. How to render an HTML string coming from the server.

The easy but dangerous way is using `dangerouslySetInnerHTML`. Dependending on what you need to do it might be a good idea not using this method and try a more restrictive html parser.
