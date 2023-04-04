import React from "react"
import NewToDoForm from "./NewToDoForm"
import { render } from "@testing-library/react"

// Smoke test

it("renders w/o crashing", () => {
    render(<NewToDoForm />)
})

// Snapshot test

it("matches snapshot", () => {
    const { asFragment } = render(<NewToDoForm />)
    expect(asFragment()).toMatchSnapshot()
})