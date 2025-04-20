export const env = {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUERMENT_ID: process.env.FIREBASE_MEASUERMENT_ID
  } as const;
   


// export const env = {
//     API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
//     NODE_ENV: process.env.NODE_ENV,
//     isDevelopment: process.env.NODE_ENV === 'development',
//     isProduction: process.env.NODE_ENV === 'production',
//   } as const;
   
//   // Type-safe environment variables
//   if (!env.API_BASE_URL) {
//     throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined');
//   }
   