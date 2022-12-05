// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

// Endpoints
  BASE_URL:   'http://10.1.20.84:1102/ServicioLoginHome/auth/',
  ChangePasswordURL:   'http://10.1.20.84:1102/ServicioLoginHome/email-password/',
  CALIDAD_URL: 'http://10.1.20.84:1102/calidad/'
  // CALIDAD_URL: 'http://localhost:4600/'

  // BASE_URL:   'http://localhost:9092/auth/',
  // ChangePasswordURL:   'http://localhost:9092/email-password/',
};





/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
