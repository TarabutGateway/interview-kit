import {hello} from './app'

describe("app", ()=>{
    it("should greet the world", ()=>{
        expect(hello()).toEqual("Hello World");
    })
})