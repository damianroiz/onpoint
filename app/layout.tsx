export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div>
        <h1>Jack's Blog</h1>
        <p>Welcome to my tech blog</p>
        <br />
      </div>
    </header>
  )  

  const footer = (
    <footer>
      <div>
        <strong>Developed by me</strong>
      </div>
    </footer>
  )  
  return (
    <html lang="en">
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
