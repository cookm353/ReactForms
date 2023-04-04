import React from "react"
import App from "./App"
import { render, fireEvent } from "@testing-library/react"

// Smoke test

it("renders w/o crashing", () => {
    render(<App />)
})

// Snapshot test

it("matches snapshot", () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
})

// General tests

it("adds a new box then removes one", () => {
    const { queryByText, queryAllByText } = render(<App />)
    const submitBttn = queryByText("Submit")
    let xBttns = queryAllByText("X")
    expect(xBttns.length).toEqual(2)
    fireEvent.click(submitBttn)
    xBttns = queryAllByText("X")
    expect(xBttns.length).toEqual(3)
    fireEvent.click(xBttns[2])
    xBttns = queryAllByText("X")
    expect(xBttns.length).toEqual(2)
})