import React from "react"
import ToDoList from "./ToDoList"
import { render } from "@testing-library/react"

// Smoke test

it("renders w/o crashing", () => {
    render(<ToDoList />)
})

// Snapshot test

it("matches snapshot", () => {
    const { asFragment } = render(<ToDoList />)
    expect(asFragment()).toMatchSnapshot()
})