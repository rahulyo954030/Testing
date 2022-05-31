const { describe, test, expect } = require("@jest/globals")
const validate = require("../index")

describe("Validate Password", function () {
    test("All condition satisfied", function () {
        expect(validate("aaaaaa1A")).toBe(true);
    })

    test("less than 8 characters", function () {
        expect(validate("1")).toBe(false);
    })
})