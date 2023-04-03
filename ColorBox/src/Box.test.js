import React from "react"
import Box from "./Box"
import { render } from "@testing-library/react"

// Smoke Test

it("renders w/o crashing", () => {
    render(<Box />)
})

// Snapshot test

it("matches snapshot", () => {
    const { asFragment } = render(<Box />)
    expect(asFragment()).toMatchSnapshot()
})