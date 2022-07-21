const app = require('./app')

describe("app", () => {
    it("should greet the world", () => {
        expect(app.hello()).toEqual("Hello World");
    })
})