# vue-skills

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Vue Topics covered

- Text interpolation --> displaying a string in html
  - `{{name}}`
- Interpolation for attributes --> changing or setting attributes
  - `v-bind:disabled="btnState"`
  - `v-bind:title="message"`
- Expressions in interpolation
  - `{{ btnState ? 'the btn is disabled' : 'the btn is active'}}`
- Directives (v-something)
  - `v-text="", v-if="", v-on="", v-for="item in items"`
  - '''
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
    '''
- css in Vue
  - to separate de css 
  '''
    <style src="./skills.css" scoped>

    </style>
  '''
- class binding 
  - `v-bind:class="{ alert: showAlert}"` adds class if showAlert is true
- 2way binding
  - `v-model="message"`


## Commands
- `npm install -g @vue/cli` to install the cli
- `vue create vue-proj` to create the vue project
- `npm install vuex` to install vueX

## Vuex (State management and state pattern library)

```
State     --> App-level state/data 
Getters   --> Get pieces of state or computed values from state
Actions   --> Called from components to commit a mutation
Mutations --> Mutate the state(Update data)
Modules   --> Each module can have its own state, getters, actions and mutations

```


## Next steps
- Babel (how it works)
- Vue X (to have a central store) 
