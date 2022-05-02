import { MainRuntime } from '@teambit/cli';
import {
  GeneratorMain,
  GeneratorAspect,
  ComponentContext,
} from '@teambit/generator';
import { ComponentTemplatesAspect } from './component-templates.aspect';

export class ComponentTemplatesMain {
  static slots = [];
  static dependencies = [GeneratorAspect];
  static runtime = MainRuntime;
  static async provider([generator]: [GeneratorMain]) {
    /**
     * Array of templates. Add as many templates as you want
     * Separate the templates to multiple files if you prefer
     * Modify, add or remove files as needed
     * See the docs file of this component for more info
     */

    generator.registerComponentTemplate([
      {
        name: 'react-custom',
        description: `
        Custom React component gennerator. 
        Using:
          - styled-components
        `,
        config: {
          'teambit.envs/envs': { env: 'teambit.react/react' },
        },
        generateFiles: (context: ComponentContext) => {
          return [
            // index file
            {
              relativePath: 'index.ts',
              isMain: true,
              content: `export { ${context.namePascalCase} } from './components/${context.name}';
export type { ${context.namePascalCase}Props } from './components/${context.name}';
`,
            },

            // component file
            {
              relativePath: `./components/${context.name}.tsx`,
              content: `import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export type ${context.namePascalCase}Props = {
  // add props here
};

const Styled${context.namePascalCase} = styled.div<${context.namePascalCase}Props>\`
  display: flex;
\`;

export function ${context.namePascalCase}(props: ${context.namePascalCase}Props) {
  return (
    <ThemeProvider theme={{}}>
      <Styled${context.namePascalCase} {...props}>
      </Styled${context.namePascalCase}>
    </ThemeProvider>
  );
}`,
            },

            // docs file
            {
              relativePath: `${context.name}.docs.mdx`,
              content: `---
description: 'A React Component for ...'
labels: ['ui']
---

import { ${context.namePascalCase} } from './components/${context.name}';
`,
            },

            // composition file
            {
              relativePath: `${context.name}.composition.tsx`,
              content: `import React from 'react';
import { ${context.namePascalCase} } from './components/${context.name}';

export const Basic${context.namePascalCase}  = () => (
  <${context.namePascalCase} data-testid="Basic${context.namePascalCase}"/>
);
`,
            },

            // test file
            {
              relativePath: `./__tests__/${context.name}.spec.tsx`,
              content: `import React from 'react';
import { render } from '@testing-library/react';
import { Basic${context.namePascalCase} } from '../${context.name}.composition';

it('should render', () => {
  const { getByTestId } = render(<Basic${context.namePascalCase} />);
  const rendered = getByTestId('Basic${context.namePascalCase}');
  expect(rendered).toBeTruthy();
});
`,
            },
            // add more files here such as css/sass
          ];
        },
      },
    ]);

    return new ComponentTemplatesMain();
  }
}

ComponentTemplatesAspect.addRuntime(ComponentTemplatesMain);
