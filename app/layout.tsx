import { SideBar } from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import { ClientOnly } from '@/components/ClientOnly'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/hooks/useProvider'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <SupabaseProvider>
          <UserProvider>
            <ClientOnly>
              <SideBar>
                {children}
              </SideBar>
            </ClientOnly>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
