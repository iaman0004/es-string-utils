import { capitalize } from "../utils";

describe('Camelize', () => {
  it('should camelize given string', () => {
    expect(capitalize('this can bE capitalize')).toEqual('This Can Be Capitalize');
    expect(capitalize('This,can,also,be,capiTalize', ',')).toEqual('This,Can,Also,Be,Capitalize');
  })
});
