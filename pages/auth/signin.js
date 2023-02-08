import React from "react";
import Layout from "../../components/layout/Layout";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

function SignIn({ providers }) {
  //   console.log(providers);
  return (
    <Layout title="Signin">
      {Object.values(providers).map((provider) => (
        <div
          key={provider.name}
          className="flex flex-col items-center justify-center gap-8"
        >
          <Image
            src={`/google.webp`}
            alt={provider.name}
            height={200}
            width={200}
            priority
          />
          <p>this is website created for learning</p>
          <button onClick={() => signIn( provider.id, { callbackUrl: "/" } )}
          className='bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors capitalize  tracking-wider'>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </Layout>
  );
}

export default SignIn;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
