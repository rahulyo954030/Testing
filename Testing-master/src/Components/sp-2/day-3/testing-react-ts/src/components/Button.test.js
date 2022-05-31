import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer"

import { Button } from "./Button";

describe("Button Tests", function () {
    it("should have button in DOM", function () {
        render(<Button>Click me</Button>); //virtully
        let button = screen.getByText("Click me");
        expect(button).toBeInTheDocument();

        // screen.debug() this use to debug code
    })

    it("should render based on testid", function (){
        render(<Button>Click me</Button>);

        let button= screen.getByTestId("cButton");
        expect(button).toBeInTheDocument();
    });

    it("should render empty button", function () {
        render(<Button></Button>);
        
        let button = screen.getByTestId("cButton");
        expect(button).toBeEmptyDOMElement();
    })
    // xtest and xit will sttop that test case / skip

    //   it.only will only that test case 

    it("should change theme" , function (){
            render(<App></App>)

            let h3= screen.getByText("Theme is light")
            expect(h3).toHaveTextContent("light")


            let themeButton = screen.getByText("change theme")
            fireEvent.click(themeButton)

            expect(h3).toHaveTextContent("dark")
        })

        it("should call given function", function (){
            const mockfn = jest.fn();
            // jest known when called it how many time called it
            render(<Button onClick={mockfn}>Click me</Button>)
                // function call is or not
            const btn = screen.getByText("Click me");
            // const btn1 = screen.getByTestId("cButton");
            fireEvent.click(btn)
            fireEvent.click(btn);

            expect(mockfn).toBeCalledTimes(2)
        })

        // snapshot
        it.only("should match snpshopt", function (){
            const tree = renderer
            .create(
                <Button colorScheme={"green"} variant="ghost">
                    Add Counter
                </Button>
            )
            .toTree();
            
            expect(tree).toMatchSnapshot();
        })

        it("should show correct red classes", function (){
            render(<Button colorScheme={"red"}>Click me</Button>);

            const buttn = screen.getByTestId("cButton");
            expect(buttn).toHaveClass("red")
        })

        it("should show correct green classes", function (){
            render(<Button colorScheme={"green"}>Click me</Button>);

            const buttn = screen.getByTestId("cButton");
            expect(buttn).toHaveClass("green")
        })
    
})

// beforeAll(() =>{
//     // connect to a db
// })
// beforeEach(() =>{
//     // visit("deployed link")
// })
// afterAll(() =>{
//     // disconnect from db
// })
// afterEach(() =>{
//     // 
// })

