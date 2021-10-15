export const formatXml = (soapRes: any, params?: any): any => {
  console.log("Error Message: ", soapRes);
  soapRes = soapRes[0];
  if (!params && soapRes) params = [...Object.keys(soapRes.return)];
  const finalObj: any = {};
  params.map((item: any) => {
    if (soapRes["return"][item] && soapRes["return"][item]["$value"]) {
      finalObj[item] = soapRes["return"][item]["$value"];
    }
  });

  if (soapRes.return.error) {
    finalObj["error"] = {
      type: soapRes.return.error.type["$value"],
      code: soapRes.return.error.code["$value"],
      message: soapRes.return.error.msg["$value"],
      info: soapRes.return.error.info["$value"],
    };
  }

  if (soapRes.return.required) {
    finalObj["required"] = {
      enrolled: soapRes.return.required.enrolled["$value"],
      ACSUrl: soapRes.return.required.ACSUrl["$value"],
      TermUrl: soapRes.return.required.TermUrl["$value"],
      payload: soapRes.return.required.payload["$value"],
      MD: soapRes.return.required.MD["$value"],
      embedhtml: soapRes.return.required.embedhtml["$value"],
    };
  }

  return finalObj;
};
