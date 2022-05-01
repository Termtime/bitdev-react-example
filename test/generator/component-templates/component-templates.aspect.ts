import { Aspect } from '@teambit/harmony';

export const ComponentTemplatesAspect = Aspect.create({
  id: 'termtime.test/generator/component-templates',
  defaultConfig: {
    'teambit.envs/envs': { env: 'teambit.react/react' },
  },
});
