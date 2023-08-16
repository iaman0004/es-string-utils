import { camelize } from "../utils";

describe('camelize', () => {
  it('should camelize given string', () => {
    expect(camelize('this-can_beCamelized')).toEqual('thisCanBeCamelized');
    expect(camelize('Camelize__thisString')).toEqual('camelizeThisString');
  });
});
