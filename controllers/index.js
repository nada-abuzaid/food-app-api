import colors from 'colors';

export const testController = (req, res) => {
  try {
    res.status(200).send({
        success: true,
        message: "Welcome in Food API!"
    })
  } catch (error) {
    console.log('Error in API: '.bgRed, error);
    return res.status(500).send(`Error in API: ${error}`);
  }
};