import * as functions from "firebase-functions";
import * as soap from "soap";

import { MIGLITE_URL, sid, rcode } from "./utils/constants";
import { formatXml } from "./utils/format";
import { PaymentArgs } from "./types/payment";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const processPayment = functions.https.onRequest(
  async (req, res): Promise<void> => {
    const { udetails, paydetails, txparams, cart } = req.body as PaymentArgs;

    const process = new Promise<Response>(async (resolve, reject) => {
      try {
        const client = await soap.createClientAsync(MIGLITE_URL);

        const processedPayment = await client.processPaymentAsync({
          sid,
          rcode,
          udetails,
          paydetails,
          cart,
          txparams,
        });

        resolve(formatXml(processedPayment));
      } catch (err) {
        console.log("Process Payment Error: ", err);
        reject(err);
      }
    });

    res.status(200).json(await process);
  }
);
