import { capitalize } from "../utils";

describe('Camelize', () => {
  it('should camelize given string', () => {
    expect(capitalize('this can bE capitalize')).toBe('This Can Be Capitalize');
  })
});
