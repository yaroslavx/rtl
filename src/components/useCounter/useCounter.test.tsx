import { act, renderHook } from "@testing-library/react"
import { useCounter } from "./useCounter"

describe('useCounter', () => {
    test('should render the initialCount', () => {
        const { result } = renderHook(useCounter)
        expect(result.current.count).toBe(0)
    })

    test('should accept and render the same initialCount', () => {
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialCount: 1
            }
        })
        expect(result.current.count).toBe(1)
    })

    test('should increment the initialCount', () => {
        const { result } = renderHook(useCounter)
        act(() => {
            result.current.increment()

        })
        expect(result.current.count).toBe(1)
    })

    test('should decrement the initialCount', () => {
        const { result } = renderHook(useCounter)
        act(() => {
            result.current.decrement()

        })
        expect(result.current.count).toBe(-1)
    })
}) 