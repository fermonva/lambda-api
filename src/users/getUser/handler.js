
export const getUser = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Desde handler getUser",
          input: event,
        }
      ),
    };
  }