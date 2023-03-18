import Game3T from 'import/components/Game3T';
import 'import/styles/globals.css'
import type { AppProps } from 'next/app'
import 'import/styles/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Game3T>
      <Component {...pageProps} />
    </Game3T>
  );
}
