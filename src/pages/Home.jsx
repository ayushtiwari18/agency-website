import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>T&amp;J Creates — Web Development Studio</title>
        <meta name="description" content="T&J Creates builds fast, conversion-focused websites for businesses and personal brands. Portfolio, business and growth websites built to get you clients." />
      </Helmet>
      <div className="container-content pt-40 pb-20">
        <p className="text-brand-gray-400 text-sm">Homepage sections — Round 2 coming next.</p>
      </div>
    </>
  )
}
