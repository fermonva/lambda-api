export const createUser = async (event) => {
    try {
        const user = await createUserService(event);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Desde handler createUser",
                input: user,
            }),
        };
    } catch (error) {
        console.log(error);
    }
}