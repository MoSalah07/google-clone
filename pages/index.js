import Head from 'next/head'
import Image from 'next/image'
import GoogleForm from '../components/google-form/GoogleForm'
import Layout from '../components/layout/Layout'


export default function Home() {
  return (
    <Layout>
      <GoogleForm />
    </Layout>
  )
}
