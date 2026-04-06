import React, { useEffect, useState } from 'react';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';

// Initialize the Builder API Key 
builder.init(import.meta.env.VITE_BUILDER_API_KEY || 'd709f700ae24472aa83ae27fe042831a');

export default function BuilderPage() {
  const isPreviewing = useIsPreviewing();
  const [content, setContent] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchContent() {
      const page = await builder
        .get('page', {
          userAttributes: {
            urlPath: window.location.pathname || '/'
          }
        })
        .toPromise();

      if (page) {
        setContent(page);
      } else {
        setNotFound(true);
      }
    }
    fetchContent();
  }, [window.location.pathname]);

  if (notFound && !isPreviewing) {
    return (
      <div className="flex bg-background min-h-screen items-center justify-center flex-col space-y-4">
        <h1 className="text-4xl text-on-surface font-headline font-bold">404 - Page Not Found</h1>
        <p className="text-slate-500">This page has not been built in Builder.io yet.</p>
        <a href="/dashboard" className="px-6 py-3 bg-primary text-white rounded-xl shadow-lg">Go back to Dashboard</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-background">
      <BuilderComponent model="page" content={content} />
    </div>
  );
}
