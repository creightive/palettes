import { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // create a generator
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
      {
        type: "input",
        name: "type",
        message: "What type of component is this?",
      },
    ],
    actions: [
      // Add component file
      {
        type: "add",
        path: "{{type}}/{{kebabCase name}}/{{kebabCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      // Add test file for the component
      {
        type: "add",
        path: "{{type}}/{{kebabCase name}}/{{kebabCase name}}.test.ts",
        templateFile: "templates/component.test.hbs",
      },
      // Add to exports in package.json
      {
        type: "modify",
        path: "package.json",
        pattern: /"exports": \{/,
        template: `"exports": {\n    "./{{kebabCase name}}": "./{{type}}/{{kebabCase name}}/{{kebabCase name}}.tsx",`,
      },
    ],
  });
}
