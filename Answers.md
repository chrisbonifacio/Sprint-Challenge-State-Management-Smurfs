1. What problem does the context API help solve?

- Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions are objects that consist of a `type` that explains what event occurred and a `payload` which stores data or a value.
- Reducers are pure functions that take state and an action, then in a `switch statement` return a new state object depending on the `case` action
- The Redux Store holds the entire state tree of an application. The only way to change the state inside it is to dispatch an action. It is known as a single source of truth because the state is never mutated and all of the application's state is in an object tree within a single `store`.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is the state of an entire component, and Component state is only the local state of a single component that inaccessible by other components. Local component state must be explicitly passed down as a prop to sub components. A good time to use component state would be to store a user input value that might just be passed into a local function called by an Click or Submit event and that value is passed in with the action creator function.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Without `redux-thunk`, the redux store can only make synchronous updates when dispatching actions. Redux-thunk is a middleware that allows us to make asynchronous action creators that can do things like fetch data from APIs. Our `action-creators` get delayed when dispatching actions or only dispatch if a condition is met.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

- My favorite state management system is Redux because of how robust it is and the idea of having a "single source of truth" for the entire application. It is intended for large scale applications and I like how organized it feels when it comes to file structure and uses reducers to create new state objects. Writing logic to create new objects or arrays as values within the new state object is usually a good challenge for me.
