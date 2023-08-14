
export const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! successfully!!!",
        input: event,
      },
      null,
      2
    ),
  };
}