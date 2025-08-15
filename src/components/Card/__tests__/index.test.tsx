import { render, fireEvent, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import '@testing-library/jest-dom'
import Card from '../index'
import type { Activity } from '../../../types'
import { type Props } from '../../Modal'

// src/Card/index.test.tsx

// Mock Modal component
vi.mock('../../Modal', () => ({
  __esModule: true,
  Modal: ({ isOpen, title, children }: Props) =>
    isOpen ? (
      <div data-testid="modal">
        <h1>{title}</h1>
        {children}
      </div>
    ) : null,
}))

// Mock useModal hook
const openModal = vi.fn()
const closeModal = vi.fn()
let isOpen = false
vi.mock('../../Modal/useModal', () => ({
  __esModule: true,
  default: () => ({
    isOpen,
    openModal: () => {
      isOpen = true
      openModal()
    },
    closeModal: () => {
      isOpen = false
      closeModal()
    },
  }),
}))

const mockActivity: Activity = {
  id: 'test',
  name: 'Test Activity',
  description: 'Test Description',
}

describe('Card', () => {
  beforeEach(() => {
    isOpen = false
    openModal.mockClear()
    closeModal.mockClear()
  })

  it('renders label and no activity', () => {
    render(<Card label="My Label" />)
    expect(screen.getByText('My Label')).toBeInTheDocument()
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /🔄/ })).not.toBeInTheDocument()
  })

  it('renders activity name but modal is closed by default', () => {
    render(<Card label="Label" activity={mockActivity} />)
    expect(screen.getByText('Test Activity')).toBeInTheDocument()
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
  })

  it('opens modal when card is clicked', () => {
    render(<Card label="Label" activity={mockActivity} />)
    fireEvent.click(screen.getByText('Test Activity'))
    expect(openModal).toHaveBeenCalled()
  })

  it('calls retry and does not open modal when retry button is clicked', () => {
    const retry = vi.fn()
    render(<Card label="Label" activity={mockActivity} retry={retry} />)
    const retryBtn = screen.getByRole('button', { name: 'retry' })
    fireEvent.click(retryBtn)
    expect(retry).toHaveBeenCalled()
    expect(openModal).not.toHaveBeenCalled()
  })

  it('closes modal when "Fermer" is clicked', () => {
    isOpen = true
    render(<Card label="Label" activity={mockActivity} />)
    const fermerBtn = screen.getByText('Fermer')
    fireEvent.click(fermerBtn)
    expect(closeModal).toHaveBeenCalled()
  })

  it('does not render retry button if retry is not provided', () => {
    render(<Card label="Label" activity={mockActivity} />)
    expect(
      screen.queryByRole('button', { name: 'retry' })
    ).not.toBeInTheDocument()
  })
})
