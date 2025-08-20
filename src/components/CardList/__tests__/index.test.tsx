import { render, fireEvent, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import CardList from '../index'

describe('CardList', () => {
  it('renders the correct number of Card components based on categories', () => {
    const categories = ['Food', 'Games', 'Movies']
    render(<CardList categories={categories} />)
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument()
    })
  })

  it('passes the correct activity to each Card', () => {
    const categories = ['Food', 'Games']
    const activities = [
      { id: '1', name: 'Eat Pizza', description: 'Delicious pizza' },
      { id: '2', name: 'Play Chess', description: 'Classic game' },
    ]
    render(<CardList categories={categories} selectedActivities={activities} />)
    expect(screen.getByText('Eat Pizza')).toBeInTheDocument()
    expect(screen.getByText('Play Chess')).toBeInTheDocument()
  })

  it('calls retry with correct index when retry button is clicked', () => {
    const categories = ['Food', 'Games']
    const activities = [
      { id: '1', name: 'Eat Pizza', description: 'Delicious pizza' },
      { id: '2', name: 'Play Chess', description: 'Classic game' },
    ]
    const retry = vi.fn()
    render(
      <CardList
        categories={categories}
        selectedActivities={activities}
        retry={retry}
      />
    )
    const retryButtons = screen.getAllByRole('button', { name: 'retry' })
    retryButtons.forEach((btn, idx) => {
      fireEvent.click(btn)
      expect(retry).toHaveBeenCalledWith(idx)
    })
  })

  it('renders no Card if categories is empty', () => {
    render(<CardList categories={[]} />)
    expect(screen.queryByText(/./)).not.toBeInTheDocument()
  })
})
