import '@/styles/global.css'
import Navbar from '@/components/Navbar'


const RootLayout = ({children}) => {
  return (
   <html lang='en'>
    <body>
        <main>
            <Navbar/>
            {children}
        </main>
    </body>
   </html>
  )
}

export default RootLayout