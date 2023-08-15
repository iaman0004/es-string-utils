import { deleteChars } from "../utils"

describe('deleteChars', () => {
  it('Delete the subtrings/set of characters from a string', () => {
    expect(deleteChars('Let\'s delete space from this string', [' '])).toEqual('Let\'sdeletespacefromthisstring');
    expect(deleteChars('Multiple deletes at a time', ['at', ' ', 'Mul'])).toEqual('tipledeletesatime');
    expect(deleteChars('Nothing can be deleted', ['been'])).toEqual('Nothing can be deleted');
  })
})
