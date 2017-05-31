# README

- Take a look at the finished version at [https://coolinmc6.github.io/cm-blog/](https://coolinmc6.github.io/cm-blog/).

## Notes
- I can add a Header component by doing: `<Route path="/" component={Header}/>`.  If it has a slash (which
every path will, it will show up).
- The Redux setup process has many steps; I need to look into it again and just memorize each step.  I need to be
able to set it up (and essentially derive it) without my notes
- Next steps are to set-up ReduxForm and be able to add new posts
- Look into NavLink and see how I could use its 'isActive' property
- This is how I can link: `<button onClick={() => this.props.history.push('/posts/new')}>New Post</button>`

- After creating the fields, I need to connect the form to Redux (using connect), get the handleSubmit
function, write the action creator, and write the reducer.

## Setting up ReduxForm
- First, the ReduxForm must be inside a `<form>` element
- The main part of ReduxForm is the `<Field>` component.  It doesn't really do anything special (it doesn't show 
anything by default) BUT there appear to be two main parts: the "name" of the input and the "component"
  - the "name" is the just the name of the box, checkmark, radio button or whatever input you are receiving.  If
  you call it "title", the values object will have a property called "title" and it will contain the contents
  of that input
  - the "component" property is what the screen renders.  I'm sure I could put `{<input type="text"/>}` or something
  like that but it appears to be designed for  you to write a separate function.  In this case, I created a renderField
  method.
- The `renderField` method that you will have to write must take 'field' as an argument, with field being the object
that holds all the ReduxForm extras.  When you console.log it out, there are two main properties: input and meta. I don't
know exactly what they do but the input property holds the associated event handlers related to an input like onBlur, 
onChange, onDragStart, etc.  It also holds the value of whatever I type in there.
  - There is also a "meta" object which has a bunch of properties, most of which I don't know really know but a few that
  I recognize like "touched" and "pristine".
  - In this `renderField` function, just like a normal component I am returning some JSX to show my component.  So I need
  a parent `<div>` or whatever wrapper I'm using and then I can add the elements that I want. I access my "label" property
  (and any other properties that I want to access through the `<Field />` component) by doing `{field.label}`.  I included
  `{...field.input}` on the input though I don't know exactly why...I'll have to play around with that.
- I then put `component={renderField}` in my `<Field />` component so that something will render on the screen
- I now need to create an `onSubmit()` function that receives the values from my form and passes them to the action creator.
This does not involve many steps at all but it's the writing of the function that can be confusing in the first place and 
then connecting it to ReduxForm's `handleSubmit` function.
- In my render method, I grab the handleSubmit from ReduxForm.  Remember, it is available in this.props; here is how I can
access it in both ES5 and ES6:

```js
// ES6
const { handleSubmit } = this.props

// ES5
const handleSubmit = this.props.handleSubmit
```

- I then add that to my form: `<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>`
  - now, when I submit, my values will go to my onSubmit function.
- Finally, I need to connect my component to Redux using `connect`.  I am essentially wrapping the `(PostsNew)` in the
connect function.  THis is what it looks like at the end:

```js
export default reduxForm({
  form: 'NewPosts'
})(connect(null, { createPost } )(PostsNew));
```

## Building the PostsShow component
- I need to get the id
- Using that id, pick the right post and then display its Title, Tag, and Content.
  - to get all that, I need access to state

- Rendering the proper post is giving me some trouble.  I need to actually think about this...
http://redux.js.org/docs/advanced/UsageWithReactRouter.html
- I solved the problem another way...probably not the best way to do it but it works.

**Next Steps:**
- Add delete button to PostsShow XX
- style the Add Post form better XX
- About Page linking to my other projects XX
- Deploy to GitHub XX
- Main image for front page XX
- Styling for each of the pages XX
- fix-routing for GH Pages app XX
- Validation => no blank forms



