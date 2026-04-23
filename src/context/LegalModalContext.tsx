import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type PolicyType = 'privacy' | 'cookies' | 'terms'

type LegalModalContextValue = {
  active: PolicyType | null
  open: (type: PolicyType) => void
  close: () => void
}

const LegalModalContext = createContext<LegalModalContextValue | null>(null)

export function LegalModalProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<PolicyType | null>(null)

  const open = useCallback((type: PolicyType) => setActive(type), [])
  const close = useCallback(() => setActive(null), [])

  const value = useMemo(
    () => ({ active, open, close }),
    [active, open, close],
  )

  return (
    <LegalModalContext.Provider value={value}>
      {children}
    </LegalModalContext.Provider>
  )
}

export function useLegalModal() {
  const ctx = useContext(LegalModalContext)
  if (!ctx) {
    throw new Error('useLegalModal must be used within LegalModalProvider')
  }
  return ctx
}
