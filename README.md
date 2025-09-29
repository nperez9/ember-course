# Ember.js Monorepo

This is a monorepo containing multiple Ember.js applications.

## Apps

### my-todo-app
A todo application built with Ember.js.

**Development:**
```bash
cd my-todo-app
npm install
npm start
```

**Testing:**
```bash
cd my-todo-app
npm test
```

### other-ember-proyect
Another Ember.js project (currently in development).

## Monorepo Structure

```
ember-js/
├── my-todo-app/           # Todo application
│   ├── app/
│   ├── config/
│   ├── tests/
│   └── package.json
├── other-ember-proyect/   # Another Ember app
└── README.md             # This file
```

## Adding New Apps

To add a new Ember.js app to this monorepo:

1. Create a new directory for your app
2. Generate the Ember app inside that directory:
   ```bash
   npx ember-cli new your-app-name --directory=your-app-name
   ```
3. Remove the generated `.git` folder from the new app
4. Add and commit the new app to the monorepo

## Working with Individual Apps

Each app is self-contained and can be developed independently:

- Navigate to the specific app directory
- Install dependencies: `npm install`
- Start development server: `npm start`
- Run tests: `npm test`
- Build for production: `npm run build`
