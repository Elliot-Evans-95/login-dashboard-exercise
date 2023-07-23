import { describe, expect, test } from 'vitest'
import { ExampleComponent } from './ExampleComponent.tsx'
import { render, screen } from '@testing-library/react'

describe('Example Component', () => {
    test('Shows example component text', () => {
        render(<ExampleComponent />)

        const paragraphText = screen.getByText('Example Component')

        expect(paragraphText).toBeInTheDocument()
    })
})