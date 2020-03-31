import React from "react"
import { render } from "@testing-library/react"

import IndexPage from "."

jest.mock("../components/layout", () => ({ children }) => <div>{children}</div>)
jest.mock("../components/image", () => () => 'Image')
jest.mock("../components/seo", () => () => 'Seo')

describe("<IndexPage />", () => {
  it("renders an H1 with the expected text", () => {
    const { getByText } = render(<IndexPage />)

    expect(getByText('Hi people')).toBeInTheDocument()
  })
})
