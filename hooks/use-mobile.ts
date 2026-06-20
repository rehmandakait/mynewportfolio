import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    let mounted = true
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = (e: MediaQueryListEvent) => {
      if (mounted) {
        setIsMobile(e.matches)
      }
    }
    
    // Initial check
    if (mounted) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMobile(mql.matches)
    }
    
    mql.addEventListener("change", onChange)
    return () => {
      mounted = false
      mql.removeEventListener("change", onChange)
    }
  }, [])

  return !!isMobile
}
