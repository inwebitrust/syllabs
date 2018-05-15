Project powered with brunch.io
https://brunch.io/

app/
  assets/           // Files inside `assets` would be simply copied to `public` dir.
    index.html
  initialize.js
brunch-config.js    // Basic assumptions about the project, like paths & outputs.
node_modules
package.json        // Describes which dependencies and Brunch plugins your app uses.

public/             // The "output" Brunch will re-generate on every build.
  index.html        // This was simply copied from our `app/assets`
  app.js            // `app.js`, in turn, was generated from `initialize.js`.
  app.js.map        // Source mappings for simple debugging.