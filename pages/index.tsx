import { GradientBackgroundCon } from '@/components/Quotegenerator/QuoteGeneratorElements'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="generate random quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
        jjl
      </GradientBackgroundCon>
    </>
  )
}
