import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import { Modal } from '../index'

describe('Modal Component', () => {
  it('renders children when open', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} title="Modal Title">
        <div>Modal Content</div>
      </Modal>
    )
    expect(screen.getByText('Modal Content')).toBeInTheDocument()
  })

  it('does not render children when closed', () => {
    render(
      <Modal isOpen={false} onClose={() => {}} title="Modal Title">
        <div>Hidden Content</div>
      </Modal>
    )
    expect(screen.queryByText('Hidden Content')).not.toBeInTheDocument()
  })

  it('calls onClose when backdrop is clicked', () => {
    const onClose = vi.fn()
    render(
      <Modal isOpen={true} onClose={onClose} title="Modal Title">
        <div>Modal Content</div>
      </Modal>
    )
    fireEvent.click(screen.getByTestId('modal-overlay'))
    expect(onClose).toHaveBeenCalled()
  })

  it('calls onClose when Escape key is pressed', () => {
    const onClose = vi.fn()
    render(
      <Modal isOpen={true} onClose={onClose} title="Modal Title">
        <div>Modal Content</div>
      </Modal>
    )
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' })
    expect(onClose).toHaveBeenCalled()
  })

  it('matches snapshot when open', () => {
    const { asFragment } = render(
      <Modal isOpen={true} onClose={() => {}} title={'Modal Title'}>
        <div>Snapshot Content</div>
      </Modal>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
