const quizModel = require('../../models/Quiz');

const updateRoute = async (req, res) => {
  const { id } = req.params;  // Extract ID from request parameters
  const updateData = req.body; // Extract update data from the request body
  
  try {
    // Find by ID and update
    const updatedItem = await quizModel.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Run validation on the updated document
    });

    // If no item found with the given ID, return a 404 response
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Send the updated item in the response
    res.status(200).json(updatedItem);

  } catch (error) {
    // Log error and return a 500 response if something goes wrong
    console.error(error);
    res.status(500).send({ message: 'Error updating item', error: error.message });
  }
}

module.exports = updateRoute;
