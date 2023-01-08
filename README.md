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

In this scenario, there is one team that is responsible for the Welcome page and the Sign In page. That team uses Vue for the front end framework.

- `vue create welcome` (select Vue 2 option)
- `cd welcome`
- `vue add router`
  - select `yes` for all prompts
  - This will create an app with some default pages that don't match what we need, so make changes to match [this commit](https://github.com/indychris70/micro-frontend-learning-project/commit/83788dddb7c15c7067d68dfb13728b7e3eb875a1#diff-3a89b567a8beee00b0b0412c8680f12d3cf4e4d66c37ac933b4974377352642f).
- `yarn serve`

### Create Music (React)

In this scenario, there is another team that is responsible for the Music page. That team uses React for the front end framework.

- `npx create-react-app music`
