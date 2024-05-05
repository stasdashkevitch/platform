import { fireEvent, getByTestId, screen } from "@testing-library/react"
import { SideBar } from "./SideBar"
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation"


describe("SideBar", () => {
  test('', () => {
    renderWithTranslation(<SideBar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('sidebar toggle', () => {
    renderWithTranslation(<SideBar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
