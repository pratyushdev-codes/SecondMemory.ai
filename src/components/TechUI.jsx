import React from 'react';
import { CenterLogo, ProviderLogo } from '../components/Logo';
import { Grid } from '../components/Grid';

export default function TechUI() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full rounded-3xl bg-[#111111] p-12 relative overflow-hidden">
        <Grid />

        <div className="text-center mb-20 relative">
          <p className="text-gray-400 uppercase tracking-wider text-sm mb-4">INTEGRATE</p>
          <h1 className="text-5xl font-semibold mb-4">Single copilot for all LLMs</h1>
        </div>

        <div className="relative h-[400px]">
          <CenterLogo />

          <ProviderLogo
            src="https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg"
            alt="Google AI"
            className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 animate-float-1"
          />

          <ProviderLogo
            src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/anthropic.svg"
            alt="Anthropic"
            className="absolute right-1/4 top-1/4 translate-x-1/2 -translate-y-1/2 animate-float-2"
          />

          <ProviderLogo
            src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nodered.svg"
            alt="Local AI"
            className="absolute left-1/4 bottom-1/4 -translate-x-1/2 translate-y-1/2 animate-float-3"
          />

          <ProviderLogo
            src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/meta.svg"
            alt="Meta AI"
            className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2 animate-float-4"
          />
        </div>

        <div className="text-center mt-8 relative">
          <p className="text-2xl text-gray-400">
            Choose from leading cloud and local providers or use your own key.
          </p>
        </div>
      </div>
    </div>
  );
}