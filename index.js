const express = require("express");
const app = express();

app.get("/api", async function (request, response) {
  try {
    const maktappurl = "https://maktapp.credit/v3/AddTransaction";

    const dataToPost = {
      token: "E4B73FEE-F492-4607-A38D-852B0EBC91C9",
      FcmToken: "",
      currencyCode: "AED",
      orderId: Math.pow(Math.random() * 100, 4) + Math.random(),
      amount: "150",
      customerEmail: "testPament@testPayment.com",
      customerName: "gust",
      customerPhone: "+9639449871",
      customerCountry: "QATAR",
      lang: "en",
      note: "Demo of Payment",
      chunk: "",
    };

    const requestMo = require("request");
    requestMo.post(
      maktappurl,
      {
        json: dataToPost,
        headers: {
          "Content-Type": "application/json",
          api_key: "E4B73FEE-F492-4607-A38D-852B0EBC91C9",
        },
      },
      function (error, presponse, body) {
        if (!error && presponse.statusCode == 200) {
          response.status(200).json({
            status: "Ok",
            message: "Success",
            data: body,
          });
        } else {
          response.status(403).json({
            status: "Failed",
            message: "Failed",
            data: null,
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
});

const port = 8000;
app.listen(port, () => console.log(`App is listening on port ${port}`));
