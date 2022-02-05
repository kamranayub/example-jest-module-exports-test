import * as moduleExports from '..'

describe("module exports", () => {
  it("should not change unless reviewed by owners and custodians", () => {
    expect(moduleExports).toMatchInlineSnapshot(`
Object {
  "collectFirewood": [Function],
  "cutWood": [Function],
  "getCampingSite": [Function],
  "useFishingContext": [Function],
  "useFishingHook": [Function],
}
`);
  })
})