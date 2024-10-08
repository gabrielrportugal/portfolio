/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { createContext, useContext, useEffect } from 'react'

interface SidebarDrawerContextProps {
  children: React.ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export const SidebarDrawerProvider = ({
  children,
}: SidebarDrawerContextProps) => {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
