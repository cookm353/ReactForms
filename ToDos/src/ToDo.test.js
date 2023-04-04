import React from "react"
import ToDo from "./ToDo"
import { render } from "@testing-library/react"

// Smoke test

it("renders w/o crashing", () => {
    render(<ToDo />)
})

// Snapshot test

it("matches snapshot", () => {
    const { asFragment } = render(<ToDo />)
    expect(asFragment()).toMatchSnapshot()
})