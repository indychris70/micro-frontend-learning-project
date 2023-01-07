# micro-frontend-learning-project
Micro frontend for learning

Manning liveproject: [Building Micro Frontends with a Team-based Vertical Architecture](https://liveproject.manning.com/project/246)

This project contains two micro front ends (one created with Vue and one created with React) and a Bootstrap (the orchestrator). It demonstrates the fundamental concepts of using Micro frontends as a way to separate concerns, allowing multiple teams to work on different parts of the front end application with minimal dependencies.

## Steps to implement

### File structure

```
|___micro-frontend-project
   |___bootstrap
   |     |___ …
   |___music
   |     |___ …
   |___welcome
         |___ …
```

### Create Welcome (Vue)

- `vue create welcome` (select Vue 2 option)
- `cd welcome`
- `vue add router`
  - select `yes` for all prompts
- `yarn serve`

Make the following changes

Move the `nav` code from `App.vue` to `HomeView.vue`

```html
<nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/signin">signin</router-link>
</nav>
```