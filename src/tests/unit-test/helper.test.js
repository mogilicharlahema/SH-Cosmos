import {isValidEmailTextPattern, isValidPasswordPattern} from "../../components/helper"

describe("isValid Email", () => {
    test("Valid Email", async () => {
        expect(isValidEmailTextPattern("abhishek@surveyheart.com")).toEqual(true)
    })

    test("Without @", async () => {
        expect(isValidEmailTextPattern("abhishek*surveyheart.com")).toEqual(false)
    })

    test("Without com", async () => {
        expect(isValidEmailTextPattern("abhishek@surveyheart.")).toEqual(false)
    })

    test("Test with more than one special char", async () => {
        expect(isValidEmailTextPattern("abhishek@&$%surveyheart@!.com")).toEqual(false)
    })
})
