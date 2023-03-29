import React from "react"
import BoxList from "./BoxList"
import { render } from "@testing-library/react"

it("renders w/o crashing", () => {
    render(<BoxList />)
})

// Snapshot test

it("matches snapshot", () => {
    const { asFragment } = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})