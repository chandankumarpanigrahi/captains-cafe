import "./globals.css";
// import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { Inter , Roboto , Poppins, Lobster_Two} from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap', 
});
const roboto = Roboto({ 
  subsets: ['latin'], 
  display: 'swap', 
});
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '900'], 
  display: 'swap', 
});
const lobsterTwo = Lobster_Two({ 
  subsets: ['latin'], 
  weight: ['400', '700'], 
  display: 'swap', 
});

export const metadata = {
  title: 'The Captain`s Cafe',
  description: 'A Complete Cafe Chain Management by The Scottish Cafe & Catering',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="d-flex">
          <div id="content" className="flex-grow-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}


