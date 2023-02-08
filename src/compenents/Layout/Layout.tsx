import Navbar from './Navbar'

interface LayoutProps {
  children: any
}

function Layout ({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
