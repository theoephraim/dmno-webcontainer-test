import { DmnoBaseTypes, defineDmnoWorkspace } from 'dmno';

export default defineDmnoWorkspace({
  name: 'root',

  schema: {
    PUBLIC_FOO: {
      value: 'public-foo-val',
    },
    SECRET_FOO: {
      sensitive: true,
      value: 'secret-foo-val',
    },
  },
});
