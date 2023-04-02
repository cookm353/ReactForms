import React from "react"
import NewBoxForm from "./NewBoxForm"
import { render } from "@testing-library/react"

// Smoke text

it("renders w/o crashing", () => {
    render(<NewBoxForm />)
})

// Snapshot test

it("matches snapshot", () => {
    const { asFragment } = render(<NewBoxForm />)
    expect(asFragment()).toMatchSnapshot()
})

// General tests