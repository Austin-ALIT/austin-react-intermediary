import ChildComponent from '@/components/childcomponent/childcomponent'
import { ContextConsumer, ContextProvider } from '@/context/authcontext/authcontext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />

      {/* // In the main App component, render the ChildComponent within the Consumer component. */}
      <ContextConsumer>
          {/* // Display Messages that describe the context state. - Done in child component */}
          <ChildComponent/>
      </ContextConsumer>
    </ContextProvider>
  )
}

// Verify that the context data is correctly displayed in the application. - done
